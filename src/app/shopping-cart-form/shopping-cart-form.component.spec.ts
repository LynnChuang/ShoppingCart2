/* tslint:disable:no-unused-variable */

import { By }           from '@angular/platform-browser';
import { DebugElement } from '@angular/core';

import {
  beforeEach, beforeEachProviders,
  describe, xdescribe,
  expect, it, xit,
  async, inject
} from '@angular/core/testing';

import { ShoppingCartFormComponent } from './shopping-cart-form.component';

describe('Component: ShoppingCartForm', () => {
  it('should create an instance', () => {
    let component = new ShoppingCartFormComponent();
    expect(component).toBeTruthy();
  });
});
