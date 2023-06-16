import { faker } from '@faker-js/faker';
import { Customer } from './customer';
import * as crypto from 'crypto';
export class CustomerAnonymized extends Customer {
  static collection = 'customers_anonymised';
  constructor(customer: Customer) {
    super(false);
    Object.assign(this, customer);
    const randomString = () =>
      faker.string.alphanumeric({
        length: crypto.randomInt(6, 12),
      });

    this.firstName = randomString();
    this.lastName = randomString();
    this.email = `${randomString()}@${this.email.split('@')[1]}`;
    this.address.line1 = randomString();
    this.address.line2 = randomString();
    this.address.postcode = randomString();
  }
}
