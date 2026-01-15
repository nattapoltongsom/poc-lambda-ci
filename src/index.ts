import { Hono } from 'hono';
import { handle } from 'hono/aws-lambda';
import userApp from './handlers/user.handler';

export const app = new Hono();

app.route('/users', userApp);

export const handler = handle(app);