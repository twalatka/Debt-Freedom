import Express from 'express';
import Parser from 'body-parser';
import { loadData } from './data/data.js';
import users from './route'

import data from './route/route.js';

const app = Express();
const port = process.env.PORT || 5000;

app.use(Parser.json());
app.use('/users', users);

app.listen(port, () => console.log(`App start: http://localhost:${port}`));

export default app;