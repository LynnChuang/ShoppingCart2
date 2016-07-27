import { Component, OnInit } from '@angular/core';
import { ShoppingCartService } from '../shopping-cart.service/';
import { ShoppingCart } from '../shopping-cart';

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
  undoList;

  constructor(public shoppingCartService:ShoppingCartService=null) {
  }

  ngOnInit() {
  }

  calculatePrice(price: number,quantity: number): number{
    return price*quantity;
  }

  calculateSub(): number{
    var subtotal = 0;
    for(var i=0;i<this.shoppingCartService.shoppingCarts.length;i++){
      subtotal+=this.calculatePrice(this.shoppingCartService.shoppingCarts[i].price,
                                                      this.shoppingCartService.shoppingCarts[i].quantity);
    }
    return subtotal;
  }

  calculateTax(): number{
    return Math.ceil(this.calculateSub()*0.05);
  }

  calculateTotal(): number{
    return this.calculateSub()+this.calculateTax();
  }

  delete(i: number){
    this.shoppingCartService.removeItem(i);
  }


  clear(){
    this.shoppingCartService.clearAll();
  }

  edit(shoppingCart){
    shoppingCart.quantity2=shoppingCart.quantity;
    shoppingCart.isEdit=true;
  }

  confirmEdit(shoppingCart, i: number){
    this.shoppingCartService.storeItem();
    this.shoppingCartService.shoppingCarts[i] = new ShoppingCart(this.shoppingCartService.shoppingCarts[i].name,this.shoppingCartService.shoppingCarts[i].price,shoppingCart.quantity2)
    // shoppingCart.quantity=shoppingCart.quantity2;
    shoppingCart.isEdit=false;
  }

  cancelEdit(shoppingCart){
    shoppingCart.isEdit=false;
  }

  undo(){
    if(this.shoppingCartService.undoList.length>=0){
      this.shoppingCartService.shoppingCarts=this.shoppingCartService.undoList.pop();
    }
  }
}
