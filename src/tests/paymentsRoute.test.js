import test from 'ava';
import {loadData} from '../data/data.js';
import {deleteData} from '../data/data.js';
import {getPayment} from '../route/payments.js';
import {pmt2} from '../data/data.js';

test.before('Clear and load data', t => {
    deleteData();
    loadData();
});

test('Getting pmt2 from Mongo', t => {
     t.is( pmt2.uuid, 4195);
});
