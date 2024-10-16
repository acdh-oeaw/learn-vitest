import { setTimeout } from 'timers/promises';
import { users } from '../tests/mock-data';

export class Client {
  async connect() {
    await setTimeout(100);
    console.log('Connected to database');
  }

  async query(query: string) {
    await setTimeout(100);
    return users;
  }

  async disconnect() {
    await setTimeout(100);
    console.log('Disconnected from the database!');
  }
}
