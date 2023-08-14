import { Component, Input, inject } from '@angular/core';
import { ProductService } from '../../services/product.service';
import { Router } from '@angular/router';

@Component({
  selector: 'search-box',
  templateUrl: './search-box.component.html',
  styleUrls: ['./search-box.component.css']
})
export class SearchBoxComponent {
  private router= inject(Router);
  public searchValue:string =''
  @Input()  backgroundValue:string ='#009999';
  @Input() colorValue:string ='dark';
  @Input() newBorder:string ='2px solid #009999';


  searchProduct(){
    if (this.searchValue.length >= 3) {
      this.router.navigate(['/product/search/', this.searchValue]);
      this.searchValue='';
    }else{
      alert('Debe proporcionar mas letras')

    }
  }

}
