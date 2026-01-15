import { Hono } from 'hono';
import { getUserFromDb } from '../adapters/user.adapter';

const userApp = new Hono();

userApp.get('/:id', async (c) => {
    const id = c.req.param('id');
    const user = await getUserFromDb(id);
    return c.json(user);
});

export default userApp;