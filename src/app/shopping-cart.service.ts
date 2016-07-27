import { Injectable } from '@angular/core';
import { ShoppingCart } from './shopping-cart';
import { Http, Response } from '@angular/http';
import 'rxjs/add/operator/toPromise' ;

@Injectable()
export class ShoppingCartService {

  public undoList: Array<any>=new Array<any>();
  public shoppingCarts: ShoppingCart[] = [];

  constructor(public http: Http) {
  }

  addItem(item: ShoppingCart){
    this.storeItem();
    this.shoppingCarts.push(item);
  }

  removeItem(i: number){
    this.storeItem();
    this.shoppingCarts.splice(i,1);
  }

  clearAll(){
    this.storeItem();
    this.shoppingCarts=[ ];
  }

  storeItem(){
    this.undoList.push([...this.shoppingCarts]);
    console.log("undoList: ");
    console.log(this.undoList);
  }
}
