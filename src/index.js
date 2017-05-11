import Express from 'express';
import Parser from 'body-parser';
import cors from 'cors';
// import LoggerMiddleware from 'express-logging';
// import Logger from 'logops';

import {loadData} from './data/data.js';
import {deleteData} from './data/data.js';
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

//load seed data when in development
if( ENV === 'development' ){
  deleteData();
  loadData();
};

//Create routes for users, loans and payments
app.use(cors());
app.use(Parser.json());
// app.use(LoggerMiddleware(Logger));
app.use('/users', user);
app.use('/loans', loan);
app.use('/payments', payment);


app.listen(port, () => console.log(`App start: http://localhost:5000`));

export default app;