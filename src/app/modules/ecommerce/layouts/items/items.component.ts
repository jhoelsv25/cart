import { Component } from '@angular/core';

@Component({
  selector: 'app-items',
  templateUrl: './items.component.html',

})
export class ItemsComponent {
  public items = [{
    title:'Zona gamer',
    url:'/'
  },
  {
    title:'Monitores',
    url:'/'
  },
  {
    title:'Teclados',
    url:'/'
  },

  {
    title:'Combos Gamer',
    url:'/'
  },
  {
    title:'Celulares',
    url:'/'
  }
];
}
