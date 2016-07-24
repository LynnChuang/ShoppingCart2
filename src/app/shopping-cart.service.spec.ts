/* tslint:disable:no-unused-variable */

import {
  beforeEach, beforeEachProviders,
  describe, xdescribe,
  expect, it, xit,
  async, inject
} from '@angular/core/testing';
import { ShoppingCartService } from './shopping-cart.service';

describe('ShoppingCart Service', () => {
  beforeEachProviders(() => [ShoppingCartService]);

  it('should ...',
      inject([ShoppingCartService], (service: ShoppingCartService) => {
    expect(service).toBeTruthy();
  }));
});
