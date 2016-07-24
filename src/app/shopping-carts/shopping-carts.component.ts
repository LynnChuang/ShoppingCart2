import { Component, OnInit } from '@angular/core';
import { ShoppingCartFormComponent } from '../shopping-cart-form/';
import { ShoppingCartListComponent } from '../shopping-cart-list/';
import { ShoppingCartService } from '../shopping-cart.service';

@Component({
  moduleId: module.id,
  selector: 'app-shopping-carts',
  templateUrl: 'shopping-carts.component.html',
  styleUrls: ['shopping-carts.component.css'],
  directives:[ ShoppingCartFormComponent, ShoppingCartListComponent ],
  providers:[ ShoppingCartService ]
})
export class ShoppingCartsComponent implements OnInit {

  constructor() {}

  ngOnInit() {
  }

}
