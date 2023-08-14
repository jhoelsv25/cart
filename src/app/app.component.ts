import { Component, OnInit, inject } from '@angular/core';
import { ProductService } from './modules/ecommerce/services/product.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit{
  title = 'eccomerce-cart';
  private productService = inject(ProductService)

  ngOnInit(): void {
    this.productService.getFilterCategories().subscribe();
    this.productService.getAllProducts().subscribe();
  }
}
