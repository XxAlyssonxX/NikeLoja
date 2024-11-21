import { Injectable } from '@angular/core';
import { Iproducts } from './iproducts';

@Injectable({
  providedIn: 'root'
})
export class ProductsService {
  private products: Iproducts[] =[
    {id: 1, name: 'Tênis Nike Full Force Low Masculino', price: 49.90, image_url: './nike1.png', description: 'The insole are confortable so you can'},
    {id: 2, name: 'Tênis Nike SB Ishod Wair Premium Masculino', price: 72.90, image_url: './nike2.png', description: 'The insole are confortable so you can'},
    {id: 3, name: 'Chuteira Nike Tiempo 10 Pro Society', price: 89.90, image_url: './nike3.png', description: 'The insole are confortable so you can'}
  ];
  
  getProducts(): Iproducts[]{
    return this.products;
  }
}
