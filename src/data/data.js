/**
Filename: data.js
Author: Teresa Walatka
Description: This class is used to generate sample data for testing the debt freedom application.

@TODO generate UUIDs or send as Undefined.
*/
import Loan from './Loan.js';
import Payment from './Payment.js';
import User from './User.js';
import { getCollection } from '../db.js';

let user1 = new User(24195, 'Teresa', 'twalatka@yahoo.com');
let user2 = new User(24196, 'Emerson', 'ewalatkacox@doggy.com');

// constructor(loanNum, id, type, prin, rate, pmt, date, monRem)
let loan1 = new Loan(1001, 24195, 'Student Laon', 44000, .08, 400.00, xx.xx.xxxx, xx);
let loan2 = new Loan(1002, 21496, "Jeep", 11500, .05, 500.00, xx.xx.xxxx, xx);

// constructor(id, date, totMnthlyPmt, intPaid, prinPd, remBal)
let pmt1 = new Payment(101, 1001, 24195, xx.xx.xxxx, 2000.00, (prin * (.08 / 12)), (totMnthlyPmt - intPd), (prin - prinPd));
let pmt2 = new Payment(102, 1001, 24195, xx.xx.xxxx, 2000.00, (prin * (.08 / 12)), (totMnthlyPmt - intPd), (prin - prinPd));
let pmt3 = new Payment(103, 1001, 24195, xx.xx.xxxx, 2000.00, (prin * (.08 / 12)), (totMnthlyPmt - intPd), (prin - prinPd));

let pmt4 = new Payment(104, 1002, 24196, xx.xx.xxxx, 500.00, (prin * (.05 / 12)), (totMnthlyPmt - intPd), (prin - prinPd));
let pmt5 = new Payment(105, 1002, 24196, xx.xx.xxxx, 500.00, (prin * (.05 / 12)), (totMnthlyPmt - intPd), (prin - prinPd));
let pmt6 = new Payment(105, 1002, 24196, xx.xx.xxxx, 500.00, (prin * (.05 / 12)), (totMnthlyPmt - intPd), (prin - prinPd));

export let users = [user1, user2];
export let loans = [loan1, loan2];
export let pmts = [pmt1, pmt2, pmt3, pmt4, pmt5, pmt6];

export const loadData = async() => {
    const users = await getCollection('users');

    const result = await users.insertMany([user1, user2]);
}