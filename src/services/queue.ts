import { Db, ObjectId } from 'mongodb';
import { QueueRecord } from '../models/queue-record';
import { MongoConnection } from '../helpers/mongo-connection';

export class Queue {
  constructor(private readonly db: Db, private readonly channel = 'default') {}
  public async addToQueue<T>(messages: T[]) {
    const arr = messages.map((message) => new QueueRecord(message));
    await MongoConnection.saveMany(arr, this.channel);
  }

  public async collectFromQueue<T>(batchSize = 100): Promise<QueueRecord<T>[]> {
    const collection = this.db.collection<QueueRecord>(this.channel);

    return collection
      .find({}, { sort: { createdAt: 1 }, limit: batchSize })
      .toArray();
  }

  public deleteFromQueue(ids: ObjectId[]): void {
    const collection = this.db.collection<QueueRecord>(this.channel);
    collection.deleteMany({ _id: { $in: ids } }).then();
  }
}
