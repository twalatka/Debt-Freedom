import { getCollection } from '../db.js';
import uuidV4 from 'uuid/v4';
import loan from './loan.js';
import payment from './payment.js';
import user from './user.js';

//create user insances
export let user1 = new user(uuidV4(), 'Teresa', 'twalatka@yahoo.com', '1');
export let user2 = new user(uuidV4(), 'Emerson', 'ewalatkacox@doggy.com', '2');

//create loan instanc
// constructor( id, user, loanNum, type, prin, rate, pmt, date, monRem)
export let loan1 = new loan(uuidV4(), 1, 1001, 'Student Loan', 44000, .08, 400.00, '4/15/17', '18');
export let loan2 = new loan(uuidV4(), 2, 1002, "Jeep", 11500, .05, 500.00, '4/01/17', '12');

//create payment instances
// constructor(id, user, loanNum, pmt#, date, totMnthlyPmt, intRate, intPaid, prinPd, remBal)
export let pmt1 = new payment(uuidV4(), 1, '1001', 101, '5/01/17', 2000.00, 1.0066, 290.40, 1709.6, 42290.40);
export let pmt2 = new payment(uuidV4(), 1, '1001', 102, '6/01/17', 2000.00, 1.0066, 279.12, 1720.99, 40569.52);
export let pmt3 = new payment(uuidV4(), 1, '1001', 103, '7/01/17', 2000.00, 1.0066, 267.76, 172.24, 38837.28);
export let pmt4 = new payment(uuidV4(), 2, '1002', 104, '5/15/17', 500.00, 1.0042, 48.30, 451.70, 11048.30);
export let pmt5 = new payment(uuidV4(), 2, '1002', 105, '6/15817', 500.00, 1.0042, 46.40, 453.60, 10594.70);
export let pmt6 = new payment(uuidV4(), 2, '1002', 106, '7/15/17', 500.00, 1.0042, 44.50, 455.50, 10139.2);

//place users, loans and pmts into arrays
export let users = [user1, user2];
export let loans = [loan1, loan2];
export let payments = [pmt1, pmt2, pmt3, pmt4, pmt5, pmt6];

//function to export user, loan and payment
export const loadData = async() => {
  const userCollection = await getCollection('users');
  const loanCollection = await getCollection('loans');
  const paymentCollection = await getCollection('payments');
  await userCollection.insertMany( [user1, user2] );  
  await loanCollection.insertMany( [loan1, loan2] );  
  await paymentCollection.insertMany( [pmt1, pmt2, pmt3, pmt4, pmt5, pmt6] );
};

//this function clears the development database prior to settiing up development data
export const deleteData = async() => {
    const userCollection = await getCollection('users');
    const loanCollection = await getCollection('loans');
    const paymentCollection = await getCollection('payments');

    await userCollection.remove({});
    await loanCollection.remove({});
    await paymentCollection.remove({});
};