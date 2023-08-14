import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { EcommerceRoutingModule } from './ecommerce-routing.module';
import { HeaderComponent } from './layouts/header/header.component';
import { FooterComponent } from './layouts/footer/footer.component';
import { HomeComponent } from './pages/home/home.component';
import { CategoryComponent } from './pages/category/category.component';

import { ControlsComponent } from './components/controls/controls.component';
import { SearchBoxComponent } from './components/search-box/search-box.component';
import { ItemsComponent } from './layouts/items/items.component';
import { SharedModule } from 'src/app/shared/shared.module';
import { FormsModule } from '@angular/forms';
import { FilterCategoryComponent } from './components/filter-category/filter-category.component';
import { CategoriesComponent } from './layouts/categories/categories.component';
import { CardComponent } from './components/card/card.component';
import { ProductDetailsComponent } from './pages/product-details/product-details.component';
import { SearchPageComponent } from './pages/search-page/search-page.component';
import { CategoryListComponent } from './pages/category-list/category-list.component';
import { CartPageComponent } from './pages/cart-page/cart-page.component';
import { ProductsPageComponent } from './pages/products-page/products-page.component';


@NgModule({
  declarations: [
    HeaderComponent,
    FooterComponent,
    HomeComponent,
    CategoryComponent,
    SearchBoxComponent,
    ControlsComponent,
    ItemsComponent,
    FilterCategoryComponent,
    CategoriesComponent,
    CardComponent,
    ProductDetailsComponent,
    SearchPageComponent,
    CategoryListComponent,
    CartPageComponent,
    ProductsPageComponent
  ],
  imports: [
    CommonModule,
    EcommerceRoutingModule,
    SharedModule,
    FormsModule,
  ]
})
export class EcommerceModule { }
