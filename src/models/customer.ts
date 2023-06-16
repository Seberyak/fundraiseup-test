import { faker } from '@faker-js/faker';
import { ObjectId } from 'mongodb';

class Address {
  line1: string;
  line2: string;
  postcode: string;
  city: string;
  state: string;
  country: string;
  constructor() {
    this.line1 = faker.location.streetAddress();
    this.line2 = faker.location.streetAddress();
    this.postcode = faker.location.zipCode();
    this.city = faker.location.city();
    this.state = faker.location.state({ abbreviated: true });
    this.country = faker.location.countryCode();
  }
}
export class Customer {
  static collection = 'customers';
  _id: ObjectId;
  firstName: string;
  lastName: string;
  email: string;
  address: Address;
  createdAt: Date;
  constructor(generate = true) {
    if (!generate) return;
    this._id = new ObjectId();
    this.firstName = faker.person.firstName();
    this.lastName = faker.person.lastName();
    this.email = faker.internet.email();
    this.address = new Address();
    this.createdAt = new Date();
  }
}
