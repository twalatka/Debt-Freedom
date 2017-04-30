import {Router} from 'express';
import uuidv4 from 'uuid/v4';
import {getCollection} from '../db.js';
import {loans} from '../data/data.js';
import Loan from '../data/loan.js';


const router = new Router();

//set router to get ALL loans, use the getAllLoans function
router.get('/', (req,res) => {
    return getAllLoans()
    .then(loan => {
        console.log(loans)
      return res.json(loans);
        }); 
    });

//set router to get ONE loan, uset the getLoan function    
router.get( '/:loan', (req,res) => {
    return getLoan( req.params.loan )
    .then(loan => {
        console.log(loan);
        return res.json(loan);
        });
    });

//POST route
router.post( '/', (req,res) => {
    let loan = new Loan(
        req.body.id,
        req.body.loanNum,
        req.body.type,
        req.body.prin,
        req.body.rate,
        req.body.pmt,
        req.body.date,
        req.body.mthsRem
    );
    storeLoan(loan);
    return res.json(loan);
}); 

//PUT router
router.put( './:loanId', (req,res) => {
    putLoan(req.params.LoanId);
    return res.send( 'loan, ${req.params.loanId} has been posted.');
}); 

//DELETE route
router.delete( '/:loanId', (req,res) => {
    removeLoan(req.params.loanId);
    return res.send( 'loan ${req.params.loanId} has been deleted.');
});

//END LOAN ROUTES


//function to retrieve all Loans
const getAllLoans = async() => {
    const loanCollection = await getCollection('loans');
    
    return await (await loanCollection.find({ active: true}) ).toArray();
}

//funciton to retrieve One loan
export const getLoan = async(id) => {
    id = parseInt(id);
    const loanCollection = await getCollection('loans');
    const loan = await (await loanCollection.find({ id })).toArray();
    return loan;
}


const storeLoan = async(loan) => {
    const loanCollection = await getCollection('loans');
    return loanCollection.insertOne(loan);
}; 


const removeLoan = async(loanId) => {
    const loanCollection = await getCollection('loans');
    loanCollection.updateOne(
    { id: parseInt(loanId) },
    { $set: {'active': false}
});
}

const deleteLoan = async(loanId) => {
    const loanCollection = await getCollection('loans');
    loanCollection.loanOne(
        {id: parseInt(loanId) 
     });
}

export default router;