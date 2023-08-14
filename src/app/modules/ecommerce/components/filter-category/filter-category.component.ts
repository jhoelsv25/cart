import { Component, computed, inject, signal } from '@angular/core';
import { ProductService } from '../../services/product.service';

@Component({
  selector: 'filter-category',
  templateUrl: './filter-category.component.html',
  styleUrls: ['./filter-category.component.css']
})
export class FilterCategoryComponent {
  public currentMin = signal(5)  
  public currentMax = signal(10)  
  public CountProduct = signal(50)  
  private productService = inject(ProductService) 
  public categories = computed(()=>this.productService.categories())



  FilterPrice(value :string) : any{

  }

  CurrenValue(value:string) : any{  
  }
}
function singal() {
  throw new Error('Function not implemented.');
}

