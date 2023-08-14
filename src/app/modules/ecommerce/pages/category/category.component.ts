import { Component, OnInit, computed, inject } from '@angular/core';
import { ProductService } from '../../services/product.service';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-category',
  templateUrl: './category.component.html',
  styleUrls: ['./category.component.css']
})
export class CategoryComponent implements OnInit {
  public color: string = 'white'
  public background: string = 'black';
  public border: string = '1px solid white';
  private productService = inject(ProductService);
  private route = inject(ActivatedRoute);
  public nameCat = computed(()=>this.productService.nameCategory());
  public CountProd = computed(()=>this.productService.countProduct());


  categValue(event:Event){
    const value = (event.target as HTMLInputElement).value
  }
  ngOnInit(): void {
    const url =this.route.url
    console.log(url)
  }

  
}
