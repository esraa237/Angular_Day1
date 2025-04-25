import { Component } from '@angular/core';
import { Product } from '../product';
import { ProductComponent } from '../product/product.component';

@Component({
  selector: 'app-products',
  imports: [ProductComponent],
  templateUrl: './products.component.html',
  styleUrl: './products.component.css'
})
export class ProductsComponent {
  products: Product[] = [
    {
      image: "/images/bag.avif",
      productName: "Leather Bag",
      productPrice: 150,
      onSale: [true]
    },
    {
      image: "/images/headphone.avif",
      productName: "Wireless Headphones",
      productPrice: 90,
      onSale: [false]
    },
    {
      image: "/images/perfume.avif",
      productName: "Luxury Perfume",
      productPrice: 120,
      onSale: [ false]
    },
    {
      image: "/images/serum.avif",
      productName: "Skin Serum",
      productPrice: 45,
      onSale: [true]
    },
    {
      image: "/images/shoes.avif",
      productName: "Shoes",
      productPrice: 99,
      onSale: [false]
    },
    {
      image: "/images/watch.avif",
      productName: "Smart Watch",
      productPrice: 180,
      onSale: [true]
    }
  ];
}
