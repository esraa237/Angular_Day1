import { Component } from '@angular/core';
import { FooterComponent } from '../footer/footer.component';
import { NavbarComponent } from '../navbar/navbar.component';
// import { ProductComponent } from '../product/product.component';
import { CategoryComponent } from '../category/category.component';
import { ProductsComponent } from '../products/products.component';


@Component({
  selector: 'app-home',
  imports: [ProductsComponent,CategoryComponent],
  templateUrl: './home.component.html',
  styleUrl: './home.component.css'
})
export class HomeComponent {

}
