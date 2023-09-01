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
  public descount = signal<number>(0);
  constructor() {
    this.loadLocalStorage();
    this.priceProduct();
    this.descuent()
  }

  orderProduct(product: Product) {
    this._cart.push(product);
    this.saveLocalStorage('cart', this._cart);
    this.cart.set(this._cart);
    this.cantidProduct.set(this._cart.length);
    this.price.update((value) => value + product.price);
    this.descuent()
  }
  private descuent(){
    const desc = this._cart.map(value=>value.discountPercentage).reduce((total, desc)=> total + desc, 0)
    console.log(desc)
    return this.descount.set(desc)

  }

  private priceProduct(): void {
    const price = this._cart.map((value) => value.price);
    const totalPrice = price.reduce((total, price) => total + price, 0);
    return this.price.set(totalPrice);
  }
  public deleteOrder(id: number) {
    const idDelete = this._cart.findIndex((value) => value.id === id);
    if (idDelete !== -1) {
      this._cart.splice(idDelete, 1);
      this.saveLocalStorage('cart', this._cart);
      this.cart.set(this._cart);
      this.cantidProduct.set(this._cart.length);
      this.priceProduct();
      this.descuent()
    } else {
      alert('No se encontro  el id dentro de la lista para poder eliminar');
    }
  }

  private saveLocalStorage(key: string, value: any): void {
    localStorage.setItem(key, JSON.stringify(value));
  }

  private loadLocalStorage() {
    if (!localStorage.getItem('cart')) return;
    const cart = localStorage.getItem('cart');
    this._cart = JSON.parse(cart!);
    this.cart.set(this._cart);
    this.cantidProduct.set(this._cart.length);
  }
}
