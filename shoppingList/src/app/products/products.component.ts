import { Component, OnInit } from '@angular/core';
import { CartService } from '../cart.service';
import { ProductsService } from '../products.service';

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.css']
})
export class ProductsComponent implements OnInit {

  products:any = []
  constructor(private pService:ProductsService, 
      private cService :CartService) { }

  ngOnInit(): void {
    this.products= this.pService.getProducts()
  }
  filterItems(e:any){
    this.products = this.pService.filter(e.target.value)
 }

 setFavorite(v:any){
  this.pService.updateFav(v.id)
}

addToCart(v:any){
  this.cService.add(v)
}

}
