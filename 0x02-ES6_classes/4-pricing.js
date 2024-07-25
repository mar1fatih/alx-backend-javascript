import Currency from './3-currency';

const assert = require('assert');

export default class Pricing {
  constructor(amount, currency) {
    assert(typeof (amount) === 'number', TypeError('Amount must be a number'));
    assert(currency instanceof Currency, TypeError('Currency must be of type Currency'));
    this._amount = amount;
    this._currency = currency;
  }

  get amount() {
    return this._amount;
  }

  set amount(value) {
    assert(typeof (value) === 'number', TypeError('Amount must be a number'));
    this._amount = value;
  }

  get currency() {
    return this._currency;
  }

  set currency(currency) {
    assert(currency instanceof Currency, TypeError('Currency must be of type Currency'));
    this._currency = currency;
  }

  displayFullPrice() {
    return `${this._amount} ${this._currency.name} (${this._currency.code})`;
  }

  static convertPrice(amount, conversionRate) {
    return amount * conversionRate;
  }
}
