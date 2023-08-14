import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './pages/home/home.component';
import { CategoryComponent } from './pages/category/category.component';
import { ProductDetailsComponent } from './pages/product-details/product-details.component';
import { SearchPageComponent } from './pages/search-page/search-page.component';
import { CategoryListComponent } from './pages/category-list/category-list.component';
import { CartPageComponent } from './pages/cart-page/cart-page.component';
import { ProductsPageComponent } from './pages/products-page/products-page.component';

const routes: Routes = [
  {path: '', component:HomeComponent, children:[
    {path: 'product', component:ProductsPageComponent},
    {path: 'product/:id', component:ProductDetailsComponent},
    {path: 'product/search/:searchTerm', component:SearchPageComponent},
    {path: 'cart', component:CartPageComponent}
  ]},
  {path: 'categories', component:CategoryComponent, children:[
    {path: ':name', component:CategoryListComponent}
  ]},
  
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class EcommerceRoutingModule { }
