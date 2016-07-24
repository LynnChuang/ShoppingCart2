import { Component, OnInit } from '@angular/core';
import { ShoppingCartService } from '../shopping-cart.service/';

@Component({
  moduleId: module.id,
  selector: 'app-shopping-cart-list',
  templateUrl: 'shopping-cart-list.component.html',
  styleUrls: ['shopping-cart-list.component.css']
})
export class ShoppingCartListComponent implements OnInit {

  title: string="購物車清單";
  titleName: string="產品名稱";
  titlePrice: string="產品價格";
  titleQuantity: string="購買數量";
  titleSubtotal: string="小計";
  titleDelete: string="刪除";
  titleTax: string="稅金(5%)";
  titleTotal: string="總計金額";

  constructor(public shoppingCartService:ShoppingCartService=null) {
  }

  ngOnInit() {
    console.log(this.shoppingCartService.shoppingCarts);
  }

  calculatePrice(price,quantity){
    return price*quantity;
  }

  calculateSub(){
    var subtotal = 0;
    for(var i=0;i<this.shoppingCartService.shoppingCarts.length;i++){
      subtotal+=this.calculatePrice(this.shoppingCartService.shoppingCarts[i].price,
                                                      this.shoppingCartService.shoppingCarts[i].quantity);
    }
    return subtotal;
  }

  calculateTax(){
    return this.calculateSub()*0.05;
  }

  calculateTotal(){
    return this.calculateSub()+this.calculateTax();
  }

  delete(i){
    this.shoppingCartService.shoppingCarts.splice(i,1);
  }


  clear(){
    this.shoppingCartService.shoppingCarts=[ ];
  }

  edit(shoppingCart){
    shoppingCart.quantity2=shoppingCart.quantity;
    shoppingCart.isEdit=true;
  }

  confirmEdit(shoppingCart){
    shoppingCart.quantity=shoppingCart.quantity2;
    shoppingCart.isEdit=false;
  }

  cancelEdit(shoppingCart){
    shoppingCart.isEdit=false;
  }
}
