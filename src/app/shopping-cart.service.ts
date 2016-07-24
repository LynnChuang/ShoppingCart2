import { Injectable } from '@angular/core';
import { ShoppingCart } from './shopping-cart';
import { Http, Response } from '@angular/http';
import 'rxjs/add/operator/toPromise' ;

@Injectable()
export class ShoppingCartService {

  public shoppingCarts: ShoppingCart[] = [
      new ShoppingCart("BMW",2000,4,false)];

  constructor(public http: Http) {}
}
