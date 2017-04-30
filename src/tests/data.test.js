import test from 'ava';

import {users, loans} from '../data/data.js';
import Loan from '../data/loan.js';

test('Verify test items', t => {
    let loantest = new Loan(1001, 24195, 'Student Laon', 44000, .08, 400.00, '4/15/17', 'monRem');

    t.deepEqual(loans[0], loantest, 'Test items are not being created correctly');

});