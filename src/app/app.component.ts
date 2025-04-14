import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { FooterComponent } from './footer/footer.component';
import { NavbarComponent } from './navbar/navbar.component';
import { ProductComponent } from './product/product.component';
import { CategoryComponent } from './category/category.component';


@Component({
  selector: 'app-root',
  imports: [RouterOutlet,FooterComponent,NavbarComponent,ProductComponent,CategoryComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'Day1';
}
