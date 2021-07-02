import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class CartService {
  items = new Subject()
  temp = []
  constructor() { }

  add(item){
    item.quantity +=1
    if(!this.temp.includes(item))
      this.temp.push(item)
    this.items.next(this.temp)
  }

  getItems(){
    return this.items
  }
  decrement(item){
    item.quantity--
    if (item.quantity==0){
      var index = this.temp.indexOf(item)
      this.temp.splice(index,1)
    }
    console.log(this.temp)
  }
}
