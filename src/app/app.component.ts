import { Component } from '@angular/core';
import { ShoppingCartsComponent } from './shopping-carts/';

@Component({
  moduleId: module.id,
  selector: 'app-root',
  templateUrl: 'app.component.html',
  styleUrls: ['app.component.css'],
  directives:[ ShoppingCartsComponent ]
})
export class AppComponent {
  title = 'ShoppingCart demo';
}
