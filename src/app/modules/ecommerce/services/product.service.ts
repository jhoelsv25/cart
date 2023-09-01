import { HttpClient } from '@angular/common/http';
import { Injectable, computed, inject, signal } from '@angular/core';
import { Observable, map, of } from 'rxjs';
import { environment } from 'src/environments/environment.prod';
import { Product, ResProduct } from '../interfaces/Product.interface';

@Injectable({
  providedIn: 'root'
})
export class ProductService {
  private http = inject(HttpClient);
  private readonly baseUrl = environment.baseUrl;
  private _products = signal<ResProduct | any>({});

  public  categories= signal<string[]>([]);
  public products= computed(()=>this._products());
  public nameCategory= signal<string>('');
  public countProduct = signal<number>(0);
  


  constructor() { }

  
  public getAllProducts(): Observable<Product[]>{
    const url = `${this.baseUrl}/products?limit=10`
    return this.http.get<ResProduct>(url).pipe(
      map((response: ResProduct)=>{
        const product = response.products;
        this._products.set(response)
        return product

      })
    )
  }
  public getProductById(id:number): Observable<Product>{
    const url = `${this.baseUrl}/products/${id}`
    return this.http.get<Product>(url)
  }
  public getCategoriesProducts(categ: string): Observable<ResProduct>{
    const url = `${this.baseUrl}/products/category/${categ}`
    return this.http.get<ResProduct>(url).pipe(
      map((response) => {
          return response
      })
    )
  }

  public getFilterCategories(): Observable<string[]>{
    const url = `${this.baseUrl}/products/categories`
    return  this.http.get<string[]>(url).pipe(
      map(res=>{
        this.categories.set(res)
        return res
      })
    )
  }

  public getProductLimit(limit:number, skip:number): Observable<ResProduct>{
    const url = `${this.baseUrl}/products?limit=${limit}&skip=${skip}`
    return this.http.get<ResProduct>(url).pipe(
      map(res => {
        return res
      })
    )
  }
  public getsearchProduct(search: string): Observable<ResProduct>{
    const url = `${this.baseUrl}/products/search?q=${search}`
    return this.http.get<ResProduct>(url).pipe(
      map(res => {
        return res
      })
    )
  }
  private getcurrentPrices(){

  }
  
  private saveLocalStorage(){

  }

  private loadLocalStorage(){

  }
}
