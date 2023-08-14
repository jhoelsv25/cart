import { Component, computed, inject } from '@angular/core';
import { ProductService } from '../../services/product.service';
import { Router } from '@angular/router';

@Component({
  selector: 'categories',
  templateUrl: './categories.component.html',
  styleUrls: ['./categories.component.css']
})
export class CategoriesComponent {
  private productService = inject(ProductService);
  private router = inject(Router)
  public categories = computed(()=>this.productService.categories());


  selectedCategory?: string; // Puede ser del tipo adecuado de tus categorías
  
  categValue(event: string) {
    if(!event !== null){
      this.router.navigate(['/categories', event])

    }
  }
}
