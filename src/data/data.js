/**
Filename: data.js
Author: Teresa Walatka
Description: This class is used to generate sample data for testing the debt freedom application.

@TODO generate UUIDs or send as Undefined.
*/
import { getCollection } from '../db.js';
import loan from './loan.js';
import payment from './payment.js';
import user from './user.js';



export let user1 = new user(24195, 'Teresa', 'twalatka@yahoo.com');
export let user2 = new user(24196, 'Emerson', 'ewalatkacox@doggy.com');

// constructor(loanNum, id, type, prin, rate, pmt, date, monRem)
export let loan1 = new loan(1001, 24195, 'Student Laon', 44000, .08, 400.00, 'date', 'monRem');
export let loan2 = new loan(1002, 21496, "Jeep", 11500, .05, 500.00, 'date', 'monRem');

// constructor(pmt#, loanNum, id, date, totMnthlyPmt, intPaid, prinPd, remBal)
export let pmt1 = new payment(101, 1001, 24195, 'date', 2000.00, 1.0066, 290.40, 1709.6, 42290.40);
export let pmt2 = new payment(102, 1001, 24195, 'date', 2000.00, 1.0066, 279.12, 1720.99, 40569.52);
export let pmt3 = new payment(103, 1001, 24195, 'date', 2000.00, 1.0066, 267.76, 172.24, 38837.28);

export let pmt4 = new payment(104, 1002, 24196, 'date', 500.00, 1.0042, 48.30, 451.70, 11048.30);
export let pmt5 = new payment(105, 1002, 24196, 'date', 500.00, 1.0042, 46.40, 453.60, 10594.70);
export let pmt6 = new payment(105, 1002, 24196, 'date', 500.00, 1.0042, 44.50, 455.50, 10139.2);

export let users = [user1, user2];
export let loans = [loan1, loan2];
export let pmts = [pmt1, pmt2, pmt3, pmt4, pmt5, pmt6];

export const loadData = async() => {
    const users = await getCollection('users');
    const loans = await getCollection('loans');
    const pmts = await getCollection('pmts');

    // const result = await users.insertMany([user1, user2]);
    // const result = await loans.insertMany([loan1, loan2]);
    // const result = await pmts.insertMany([pmt1, pmt2, pmt3, pmt4, pmt5, pmt6]);

}