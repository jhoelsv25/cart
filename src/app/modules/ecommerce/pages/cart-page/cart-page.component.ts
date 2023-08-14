import { Component, computed, inject, signal } from '@angular/core';
import { CartService } from '../../services/cart.service';

@Component({
  selector: 'app-cart-page',
  templateUrl: './cart-page.component.html',
  styleUrls: ['./cart-page.component.css']
})
export class CartPageComponent {
  private orderService = inject(CartService);
  public  orders = computed(()=>this.orderService.cart());
  public subTotal = computed(()=>this.orderService.price());
  valueInput(cant:string, price :number){

    const priceUnit = Number(cant) * (price)

    
  }
}
