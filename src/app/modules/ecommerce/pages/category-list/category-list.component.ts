import { AfterViewInit, Component, Input, OnDestroy, OnInit, inject } from '@angular/core';
import { ProductService } from '../../services/product.service';
import { ActivatedRoute } from '@angular/router';
import { Subscription, map, switchMap, tap } from 'rxjs';
import { Product, ResProduct } from '../../interfaces/Product.interface';

@Component({
  selector: 'app-category-list',
  templateUrl: './category-list.component.html',
  styleUrls: ['./category-list.component.css']
})
export class CategoryListComponent implements OnInit, OnDestroy, AfterViewInit   {
  private productService = inject(ProductService);
  private route = inject(ActivatedRoute);
  private subscription? : Subscription | undefined;
  public totalProduct :number=0
  public products:Product[] = []

  private countProduct:number = 0;
  private nameCat:string=''

  ngOnInit(): void {
    
  }
  ngAfterViewInit(): void {
    this.subscription = this.route.params.pipe(
      switchMap(({ name }) => {
        this.nameCat= name;
        return this.productService.getCategoriesProducts(name);
      })
    ).subscribe(response => {
      this.countProduct= response.products.length
      this.products = response.products;
      this.totalProduct= response.total;
      this.dataProduct()
    });
  }
  ngOnDestroy(): void {
   if (this.subscription) {
      this.subscription.unsubscribe();
   }
  }

  dataProduct(): void {
    this.productService.countProduct.set(this.countProduct);
    this.productService.nameCategory.set(this.nameCat);
  }
  
}
