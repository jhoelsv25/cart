import { Component } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent {
  category:any
  selectedValue=null;
  categValue(event:Event){
    const value = (event.target as HTMLInputElement).value;
  }
}
