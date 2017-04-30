import test from 'ava';

import {loadData} from '../data/data.js';
import {deleteData} from '../data/data.js';

import {getLoan} from '../route/loans.js';
import {loan2} from '../data/data.js';

test.before('Clear and load data', t => {
    deleteData();
    loadData();
});

test('Getting loan2 from Mongo', async t => {
    let response = await getLoan(2);
    let testLoan = response[0];
    console.log(response);
    t.is( testLoan.id, loan2.id, 'Loan returned does not match Mongo');
});

