import {Router} from 'express';
import uuidv4 from 'uuid/v4';
import {getCollection} from '../db.js';
import {loans} from '../data/data.js';
import Loan from '../data/loan.js';

const router = new Router();

//set router to get ALL loans
router.get('/', (req,res) => {
    return getAllLoans()
    .then(loans => {
      return res.json(loans);
        })
    });

//set router to get ONE loan   
router.get( '/:loan', (req,res) => {
    return getLoan( req.params.loan )
    .then(loan => {
      return res.json(loan);
        })
    });

//POST route
router.post( '/', (req,res) => {
    let loan = new Loan(
        req.body._id,
        req.body.user,
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
router.put( './:id', (req,res) => {
    putLoan(req.params.id);
    res.send(`Item ${req.params.id} has been posted`);
}); 

//DELETE route
router.delete( '/:id', (req,res) => {
    deleteLoan(req.params.id);
    res.send(`Item ${req.params.id} has been deleted`);
});

//END LOAN ROUTES


//function to retrieve all Loans
const getAllLoans = async() => {
    const loanCollection = await getCollection('loans');
    
    return await (await loanCollection.find({ active: true}) ).toArray();
}

//funciton to retrieve One loan
const getLoan = async(_id) => {
    const loanCollection = await getCollection('loans');
    const loan = await (await loanCollection.find({_id })).toArray();
    return loan;
};

const storeLoan = async(loan) => {
    const loanCollection = await getCollection('loans');
    return loanCollection.insertOne(loan);
}; 


const removeLoan = async(loanId) => {
    const loanCollection = await getCollection('loans');
    loanCollecction.removeOne({_id: loanId});
};

const deleteLoan = async(loanId) => {
    const loanCollection = await getCollection('loans');
    loanCollecction.deleteOne({_id: loanId});
};

export default router;