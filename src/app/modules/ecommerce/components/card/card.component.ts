import { Component, Input, computed, effect, inject } from '@angular/core';
import { ProductService } from '../../services/product.service';
import { Product } from '../../interfaces/Product.interface';
import { CartService } from '../../services/cart.service';

@Component({
  selector: 'app-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.css']
})
export class CardComponent  {
  private productService= inject(ProductService);
  private orderService= inject(CartService);
  @Input() public products: Product[] = [];
  @Input() public  total: number = 0;
  @Input() pageIndex: number = 1; //skip first page
  @Input() pageSize: number = 10; //page for displaying
  current:number=1

  onPageIndexChange(value:number):void{
    this.pageIndex= value;
    this.pagination()
  }
  onPageSizeChange(value:number):void{
    this.pageSize= value;
    this.pagination()
  }
  pagination():void{
    const limit=this.pageSize
    const skip = (this.pageIndex - 1) * this.pageSize;
    this.productService.getProductLimit(limit, skip).subscribe(response =>{
      this.products=response.products;
      this.pageIndex= response.limit/response.skip
    })

  } 

  addCart(product: Product){
    this.orderService.orderProduct(product)
  }




}
