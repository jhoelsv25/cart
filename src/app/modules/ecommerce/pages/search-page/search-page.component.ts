import { Component, OnDestroy, OnInit, inject } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Subscription, switchMap } from 'rxjs';
import { Product, ResProduct } from '../../interfaces/Product.interface';
import { ProductService } from '../../services/product.service';

@Component({
  selector: 'search-page',
  templateUrl: './search-page.component.html',
  styleUrls: ['./search-page.component.css'],
})
export class SearchPageComponent implements OnInit ,OnDestroy {
  private route = inject(ActivatedRoute);
  private productService = inject(ProductService);
  private subscription? : Subscription | undefined
  public totalProduct :number=0
  public products:Product[] = []
  public nameSearch?: string;
  
  ngOnInit(): void {
    this.subscription= this.route.params
    .pipe(
      switchMap(({ searchTerm }) => {
        this.nameSearch = String(searchTerm);
        if (this.nameSearch === null) {
          alert('No se proporciono una palabra clave para buscar');
        }
        return this.productService.getsearchProduct(this.nameSearch);
      })
      )
      .subscribe((response) => {
        this.products = response.products;
        this.totalProduct=response.total;
      });
    }
    ngOnDestroy(): void {
      if(this.subscription){
        this.subscription.unsubscribe();
      }
    }
}
