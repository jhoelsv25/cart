import { Component, computed, inject, signal } from '@angular/core';
import { Router } from '@angular/router';
import { CartService } from '../../services/cart.service';

@Component({
  selector: 'controls',
  templateUrl: './controls.component.html',
  styleUrls: ['./controls.component.css'],
})
export class ControlsComponent {
  private router = inject(Router);
  private orderService = inject(CartService);
  public totalPrice = computed(()=>this.orderService.price())
  public cantid = computed<number>(() => {
    if (this.orderService.cantidProduct() === 0) return 0;
    return this.orderService.cantidProduct();
  });

  cartView() {}

  irCarrito() {
    this.router.navigate(['/cart']);
  }
}
