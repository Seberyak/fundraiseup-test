import { config } from 'dotenv';
import { MongoConnection } from './helpers/mongo-connection';
import { Anonymizer } from './services/anonymizer';
config();

const main = async () => {
  await MongoConnection.connect();
  const anonymizer = new Anonymizer();

  await anonymizer.init();
  anonymizer.run();
};

main().then();
