import { serve } from '@hono/node-server';
import { app } from './src/index';

const port = 3000;
console.log(`🚀 Local Server is running at http://localhost:${port}`);

serve({
  fetch: app.fetch,
  port
});