import { Db, ObjectId } from 'mongodb';
import { MongoConnection } from '../helpers/mongo-connection';
import { CustomerAnonymized } from '../models/customer-anonymized';
import { Customer } from '../models/customer';
import { Queue } from './queue';

export class Anonymizer {
  private readonly timeOut = 1e3;
  private lastUpdateTime = Date.now();

  private customerIds: Set<string> = new Set();
  private db: Db;
  private queue: Queue;
  public async init() {
    this.db = await MongoConnection.get();
    this.queue = new Queue(this.db);
  }

  public run(ms: number) {
    setInterval(() => {
      this.batchResolver().then();
    }, ms);
  }

  private async batchResolver() {
    await this.collectCustomerIds();

    const isTimeToResolve = Date.now() - this.lastUpdateTime >= this.timeOut;
    const batchIsFull = this.customerIds.size === 1000;

    if (!batchIsFull && !isTimeToResolve) return;
    this.lastUpdateTime = Date.now();

    const customerIds = [...this.customerIds].map((e) => new ObjectId(e));
    this.customerIds.clear();

    if (!customerIds.length) {
      console.log('No customers to anonymize');
      return;
    }

    const customers = await this.getCustomers(customerIds);
    await this.anonymizeCustomers(customers);
  }

  private async getCustomers(customerIds: ObjectId[]): Promise<Customer[]> {
    return this.db
      .collection(Customer.collection)
      .find<Customer>({ _id: { $in: customerIds } })
      .toArray();
  }

  private async anonymizeCustomers(customers: Customer[]): Promise<void> {
    const anonymizedCustomers = customers.map((e) => new CustomerAnonymized(e));

    const { insertedCount: anonymizedCount } = await this.db
      .collection(CustomerAnonymized.collection)
      .insertMany(anonymizedCustomers);

    console.log({ customersCount: customers.length, anonymizedCount });
  }

  private async collectCustomerIds(): Promise<void> {
    const records = await this.queue.collectFromQueue<string>();

    const deleteIds: ObjectId[] = [];

    records.forEach((e) => {
      if (this.customerIds.size >= 1000) return;
      this.customerIds.add(e.message);
      deleteIds.push(e._id);
    });

    this.queue.deleteFromQueue(deleteIds);
  }
}
