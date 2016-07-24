/* tslint:disable:no-unused-variable */

import { By }           from '@angular/platform-browser';
import { DebugElement } from '@angular/core';

import {
  beforeEach, beforeEachProviders,
  describe, xdescribe,
  expect, it, xit,
  async, inject
} from '@angular/core/testing';

import { ShoppingCartListComponent } from './shopping-cart-list.component';

describe('Component: ShoppingCartList', () => {
  it('should create an instance', () => {
    let component = new ShoppingCartListComponent();
    expect(component).toBeTruthy();
  });
});
