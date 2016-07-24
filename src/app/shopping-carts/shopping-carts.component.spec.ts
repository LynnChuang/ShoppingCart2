/* tslint:disable:no-unused-variable */

import { By }           from '@angular/platform-browser';
import { DebugElement } from '@angular/core';

import {
  beforeEach, beforeEachProviders,
  describe, xdescribe,
  expect, it, xit,
  async, inject
} from '@angular/core/testing';

import { ShoppingCartsComponent } from './shopping-carts.component';

describe('Component: ShoppingCarts', () => {
  it('should create an instance', () => {
    let component = new ShoppingCartsComponent();
    expect(component).toBeTruthy();
  });
});
