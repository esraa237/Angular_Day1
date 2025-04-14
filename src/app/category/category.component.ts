import { Component } from '@angular/core';
import { Category } from '../category';

@Component({
  selector: 'app-category',
  imports: [],
  templateUrl: './category.component.html',
  styleUrl: './category.component.css'
})
export class CategoryComponent {
  categories: Category[]= [
    {
      name: "Electronics",
      image: "/images/Electronics.avif",
      price: [299, 349, 399]
    },
    {
      name: "Clothing",
      image: "/images/Clothing.avif",
      price: [49, 69, 89]
    },
    {
      name: "Beauty & Health",
      image: "/images/beauty.avif",
      price: [25, 30, 35]
    },
    {
      name: "Footwear",
      image: "/images/Footwear.avif",
      price: [80, 95, 110]
    },
    {
      name: "Watches",
      image: "/images/Watches.avif",
      price: [150, 180, 220]
    },
    {
      name: "Bags",
      image: "/images/Bags.avif",
      price: [100, 130, 160]
    }
  ];
}
