import { Component, computed, inject, signal } from '@angular/core';
import { CartService } from '../../services/cart.service';
import { NzModalRef, NzModalService } from 'ng-zorro-antd/modal';
import { Product } from '../../interfaces/Product.interface';

@Component({
  selector: 'app-cart-page',
  templateUrl: './cart-page.component.html',
  styleUrls: ['./cart-page.component.css']
})
export class CartPageComponent  {
  private orderService = inject(CartService);
  private modal= inject(NzModalService)
  public  orders = computed(()=>this.orderService.cart());
  public subTotal = computed(()=>this.orderService.price());
  public desc = computed(()=>this.orderService.descount());
  total = computed(()=>this.subTotal() - (this.subTotal()*this.desc())/100)
  public confirModal?: NzModalRef
  valueInput(cant:string, price :number){

    const priceUnit = Number(cant) * (price)

    
  }
  deleteOrder(order:Product){
    this.confirModal = this.modal.confirm({
      nzTitle:'Estas seguro de eliminar el siguiente producto',
      nzContent:`Al aceptar se eliminara ${order.title} de tu lista`,
      nzOnOk:()=>{
        this.orderService.deleteOrder(order.id)
      }
    } )
    setTimeout(()=>{
      this.confirModal?.destroy()
    }, 5000)
    
    
  }
  priceChange(price: number){
    console.log(price)
  }


}
