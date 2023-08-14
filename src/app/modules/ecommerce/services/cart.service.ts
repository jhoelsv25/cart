import { Injectable, signal } from '@angular/core';
import { Product } from '../interfaces/Product.interface';


@Injectable({
  providedIn: 'root',
})
export class CartService {
  private _cart: Product[] = [];
  public cart = signal<Product[]>(this._cart);
  public cantidProduct = signal<number>(this.cart().length);
  public price = signal<number>(0);
  constructor() {
      this.loadLocalStorage();
      this.priceProduct();
      console.log(this.cart());

  }

  orderProduct(product: Product) {
    this._cart.push(product);
    this.saveLocalStorage('cart', this._cart);
    this.cart.set(this._cart)
    this.cantidProduct.set(this._cart.length);
    this.price.update((value)=>value + product.price)
  }
  private priceProduct(): void {
    const price = this._cart.map((value)=>value.price)
    const totalPrice = price.reduce((total, price)=>total + price, 0)
    return this.price.set(totalPrice);

  }

  
  private saveLocalStorage(key: string, value: any): void {
    localStorage.setItem(key, JSON.stringify(value));
  }

  private loadLocalStorage() {
    if (!localStorage.getItem('cart')) return;
    const cart = localStorage.getItem('cart');
    this._cart = JSON.parse(cart!);
    this.cart.set(this._cart)
    this.cantidProduct.set(this._cart.length);
  }
}
