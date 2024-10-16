import app from '../src/server';
import {
  test,
  assert,
  expect,
  describe,
  vi,
  beforeEach,
  afterEach,
} from 'vitest';
import { users } from './mock-data';
import { Client } from '../src/client';

// Mock the client module to avoid connecting to the database
vi.mock('./client', () => {
  const Client = vi.fn();
  Client.prototype.connect = vi.fn();
  Client.prototype.query = vi.fn();
  Client.prototype.disconnect = vi.fn();
  return { Client };
});

describe.only('Testsuite for server', () => {
  let client: Client;

  beforeEach(() => {
    client = new Client();
  });

  afterEach(() => {
    vi.clearAllMocks();
  });
  test('GET / and check if response is Hello Hono', async () => {
    const response = await app.request('/');
    expect(response.status).toBe(200);
    const text = await response.json();
    expect(text.message).toBe('Hello Hono!');
  });
  test.concurrent(
    'POST /login with correct credentials and see the functionality of the vitest Built-in Test context',
    async ({ expect, task }) => {
      console.log(task.name);
      const response = await app.request('/login', {
        method: 'POST',
        body: JSON.stringify({ username: 'admin', password: 'admin' }),
        headers: new Headers({ 'Content-Type': 'application/json' }),
      });
      expect(response.status).toBe(201);
    }
  );
  test.concurrent(
    'GET /data and see the functionality of the vitest Built-in Test context',
    async ({ expect, task }) => {
      console.log(task.name);
      //@ts-ignore
      client.query.mockResolvedValueOnce(users);
      const response = await app.request('/data');
      expect(response.status).toBe(200);
      const result = await response.json();
      assert.deepEqual(result, { users: users });
    }
  );
});
describe('Get a list of users successfully', () => {
  let client: Client;

  beforeEach(() => {
    client = new Client();
  });

  afterEach(() => {
    vi.clearAllMocks();
  });

  test('GET /data and check if the results match with the mocked data', async () => {
    const userData = users;
    // @ts-ignore
    client.query.mockResolvedValueOnce(userData);
    const response = await app.request('/data');
    expect(response.status).toBe(200);
    expect(client.connect).toBeCalledTimes(1);
    expect(client.query).toBeCalledWith('query');
    expect(client.disconnect).toBeCalledTimes(1);
    const text = await response.json();
    assert.deepEqual(text, { users: userData });
  });
});
