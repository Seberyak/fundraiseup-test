import { Db, MongoClient, ObjectId } from 'mongodb';
import * as process from 'process';

interface IRecord {
  _id: ObjectId;
}

export class MongoConnection {
  private static db: Db = null;
  private static connection: MongoClient = null;
  static async get(): Promise<Db> {
    if (!this.db || !this.connection) {
      await this.connect();
      return this.get();
    }
    return this.db;
  }
  public static async connect(): Promise<void> {
    const url = process.env.DB_URI;
    const dbName = 'customers-db';
    const client = new MongoClient(url);
    this.connection = await client.connect();
    this.db = this.connection.db(dbName);
  }

  static async close() {
    await this.connection.close();
  }

  public static async save<T extends IRecord>(
    record: T,
    collection: string
  ): Promise<ObjectId> {
    await this.db.collection(collection).insertOne(record);
    return record._id;
  }

  public static async saveMany<T extends IRecord>(
    records: T[],
    collection: string
  ): Promise<ObjectId[]> {
    const res = await this.db
      .collection(collection)
      .insertMany(records)
      .then((r) => r.insertedIds);

    return Object.values(res ?? []);
  }
}
