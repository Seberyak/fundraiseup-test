import * as crypto from 'crypto';
import { Db, ObjectId } from 'mongodb';
import { MongoConnection } from '../helpers/mongo-connection';
import { Customer } from '../models/customer';
import { Queue } from './queue';

export class CustomerGenerator {
  private db: Db;
  private queue: Queue;
  public async init() {
    this.db = await MongoConnection.get();
    this.queue = new Queue(this.db);
  }
  async generate(): Promise<void> {
    await MongoConnection.save(new Customer(), 'customers');
  }

  async generateMultiple(): Promise<ObjectId[]> {
    const count = crypto.randomInt(10) + 1;
    const customers = new Array(count).fill(null).map(() => new Customer());
    const objectIds = await MongoConnection.saveMany(
      customers,
      Customer.collection
    );

    console.log(`Generated: ${count}, inserted: ${objectIds?.length}`);
    return objectIds;
  }
  run(ms: number): void {
    setInterval(async () => {
      const objectIds = await this.generateMultiple();
      this.queue.addToQueue(objectIds).then();
    }, ms);
  }
}
