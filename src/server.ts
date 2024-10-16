import { serve } from '@hono/node-server';
import { Hono } from 'hono';
import { Client } from './client';

const app = new Hono();

type userBody = {
  username: string;
  password: string;
};

const user = {
  username: 'admin',
  password: 'admin',
};

let loggedIn = false;

app.get('/', (c) => {
  return c.json({ message: 'Hello Hono!' }, 200);
});

app.get('/data', async (c) => {
  const dbClient = new Client();
  if (!loggedIn) {
    return c.json({ message: 'Not authorized' }, 403);
  }
  await dbClient.connect();
  const responseData = await dbClient.query('query');
  console.log(responseData);
  await dbClient.disconnect();
  return c.json(
    {
      users: responseData,
    },
    200
  );
});

app.post('/login', async (c) => {
  const loginData: userBody = await c.req.json();
  if (
    loginData.username === user.username &&
    loginData.password === user.password
  ) {
    loggedIn = true;
    return c.json({ message: `Welcome back ${user.username}!` }, 201);
  }
  return c.json({ message: 'Username or password is incorrect' }, 401);
});

app.notFound((c) => c.json({ message: 'Not Found' }, 404));

const port = 3000;

console.log(`Server is running on port: ${String(port)}`);

serve({
  fetch: app.fetch,
  port,
});

export default app;
