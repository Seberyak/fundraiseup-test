import { config } from 'dotenv';
import { CustomerGenerator } from './services/customer-generator';
import { MongoConnection } from './helpers/mongo-connection';
config();

const main = async () => {
  await MongoConnection.connect();
  const generator = new CustomerGenerator();
  await generator.init();
  generator.run(200);
};

main().then();
