import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ProductsService {
  products = [
    {id: 1, title: 'lenovo 2000', price: 400, favorite: false, category:'electronics', quantity: 0},
    {id: 2, title: 'Galaxy 3', price: 100, favorite: false, category:'electronics', quantity: 0},
    {id: 3, title: 'iphone 12', price: 800, favorite: false, category:'electronics', quantity: 0},
    {id: 4, title: 'Sonio Tv', price: 500, favorite: false, category:'electronics', quantity: 0},
    {id: 5, title: 'Leather Couch', price: 500, favorite: false, category:'furniture', quantity: 0},
    {id: 6, title: 'Dining Room Table', price: 150, favorite: false, category:'furniture', quantity: 0},
    {id: 7, title: 'La-Z-Boy Chair', price: 200, favorite: false, category:'furniture', quantity: 0},
    {id: 8, title: 'Book Shelf', price: 100, favorite: false, category:'furniture', quantity: 0},
    {id: 9, title: 'Call of Duty', price: 20, favorite: false, category:'games', quantity: 0},
    {id: 10, title: 'Skyrim', price: 40, favorite: false, category:'games', quantity: 0},
    {id: 11, title: 'Legend of Zelda', price: 30, favorite: false, category:'games', quantity: 0},
    {id: 12, title: 'Grand Theft Auto', price: 50, favorite: false, category:'games', quantity: 0},
    {id: 13, title: 'Bicycle', price: 200, favorite: false, category:'sports', quantity: 0},
    {id: 14, title: 'Weight bench', price: 150, favorite: false, category:'sports', quantity: 0},
    {id: 15, title: 'Eliptical', price: 1200, favorite: false, category:'sports', quantity: 0},
    {id: 16, title: 'Row Machine', price: 1100, favorite: false, category:'sports', quantity: 0},
  ]
  constructor() { }
  filter(category:string){
    return this.products.filter(item=> item.category === category)
  }
  getProducts(){
    return this.products
  }

  updateFav(id:number){
    this.products.forEach(v => {
      if(v.id === id) {
          v.favorite = !v.favorite
      }
  })

  }
}
