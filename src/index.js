import Express from 'express';
import Parser from 'body-parser';
import cors from 'cors';

import {loadData} from './data/data.js';
import {deleteDate} from './data/data.js';
import user from './route/users.js';
import payment from './route/payments.js';
import loan from './route/loans.js';

/*
 * index.js
 * sets up our routes and prepopulates seed data.
 * Author: Teresa Walatka
 * Created Date: 4/15/17
 * Last Updated: 4/26/17
 */

const ENV = process.env.NODE_ENV = process.env.NODE_ENV || 'development';
const app = Express();
const port = process.env.PORT || 5000;

console.log(port);


//Create routes for users and items

app.use(cors());
app.use(Parser.json());
app.use('./user', user);
app.use('./loan', loan);
app.use('./payment', payment);


app.listen(port, () => console.log(`App start: http://localhost:${port}`));

export default app;