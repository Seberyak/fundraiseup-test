import { ObjectId } from 'mongodb';

export class QueueRecord<T = any> {
  _id: ObjectId;
  message: T;
  constructor(message: T) {
    this._id = new ObjectId();
    this.message = message;
  }
}
