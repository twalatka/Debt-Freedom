import test from 'ava';
import {loadData} from '../data/data.js';
import {deleteData} from '../data/data.js';
import {getLoan} from '../route/loans.js';
import {loan2} from '../data/data.js';

test.before('Clear and load data', t => {
    deleteData();
    loadData();
});

test('Getting loan2 from Mongo',  t => {
      t.is( loan2.uuid, 4196);
});

