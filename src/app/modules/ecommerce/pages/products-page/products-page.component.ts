import { Component, effect, inject } from '@angular/core';
import { Product, ResProduct } from '../../interfaces/Product.interface';
import { ProductService } from '../../services/product.service';

@Component({
  selector: 'app-products-page',
  templateUrl: './products-page.component.html',
  styleUrls: ['./products-page.component.css']
})
export class ProductsPageComponent {
  private productService= inject(ProductService);
  public data!: ResProduct;
  public  total: number = 0;
  public products:Product[] =[];
  public limit :number = 0;
  constructor(){
    effect(()=>{
      this.data =this.productService.products();
      this.products=this.data.products
      this.total = this.data.total;
      this.limit = this.data.limit;
    })
  }

}
