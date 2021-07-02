import { Component, OnInit } from '@angular/core';
import { CartService } from '../cart.service';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.css']
})
export class CartComponent implements OnInit {
    items = []
    totalCost = 0
  constructor(private cService:CartService) { }

  ngOnInit(){
    this.cService.getItems().subscribe((data:[])=>{
        this.items = data
        let total = 0
        this.items.forEach(i=> {
            total+=i.price * i.quantity
        })
        this.totalCost = total
    })
  }

  decrementQuantity(item){
    
    item.quantity--
    this.totalCost -= item.price
    if (item.quantity==0){
      var index = this.items.indexOf(item)
      this.items.splice(index,1)
    }
  }
  
  incrementQuantity(item){
    item.quantity++
    this.totalCost += item.price
  }

  removeItem(item){
    this.totalCost -= item.price*item.quantity
    var index = this.items.indexOf(item)
    this.items.splice(index,1)
  }

}
