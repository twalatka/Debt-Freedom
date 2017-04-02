import Express from 'express';
import Parser from 'body-parser';
import { loadData } from './data/data.js';

import data from './route/route.js';

const app = Express();
const port = process.env.PORT || 5000;

app.use(Parser.json());
app.use('/', data);

app.listen(port, () => console.log(`App start: http://localhost:${port}`));

export default app;