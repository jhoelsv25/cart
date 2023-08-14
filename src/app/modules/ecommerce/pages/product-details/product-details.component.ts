import { Component, OnInit, inject } from '@angular/core';
import { ProductService } from '../../services/product.service';
import { ActivatedRoute } from '@angular/router';
import { delay, switchMap, tap } from 'rxjs';
import { Product } from '../../interfaces/Product.interface';

@Component({
  selector: 'app-product-details',
  templateUrl: './product-details.component.html',
  styleUrls: ['./product-details.component.css']
})
export class ProductDetailsComponent implements OnInit {
  private productService= inject(ProductService);
  private route = inject(ActivatedRoute);
  public products!: Product;

  ngOnInit(): void {
    this.route.params.pipe(
      switchMap(({id})=> this.productService.getProductById(id)),
    ).subscribe({
      next:(product=>{
        this.products= product
      }),
      error:(err)=>console.log(err)
    })
  }

}
