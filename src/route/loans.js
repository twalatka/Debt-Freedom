import { Router } from 'Express';

import {getCollection} from '../db.js';
import {loan} from '../data/data.js';
import Loan from '../data/loan.js';

/**
 * loan.js
 * This class defines the routes for getting loans.
 * Author: Teresa Walatka 4/26/17
 * Last Updated: 4/26/17
 */

const router = new Router();

/*
 * getAllItems
 * Used to get all loan
 *
 * @return an array of all loan.
 *
 * @TODO have it linked to a user
 */
const getAllLoans = async() => {
    const loanCollection = await getCollection('loan');
    return await (await loanCollection.find({ active: true}) ).toArray();
}//end getAllLoans

/*
 * getLoan
 * Used to get detailed information for a specific loan
 *
 * @param id - the id of the loan
 * @return an loan
 */
const getLoan = async(id) => {
    id = parseInt(id);
    const loanCollection = await getCollection('loan');
    const value = await (await loanCollection.find({ id}) ).toArray();
    return value;
}//end getLoan

/*
 * /loans Route
 * Gets all loans
 *
 * @TODO only return items for the specified user
 */
router.get('/', (req,res) => {
    return getAllLoans().then(
        loan => {
            return res.json(loan);
        }); 
    });

 /*
 * /loans/:id Route
 * Used to get details about a specific loan by specifying the id of the loan
 *
 * @TODO only return loans for the specified user
 */   

router.get( '/:loan', (req,res) => {
    return getLoan( req.params.loan ) .then(
        loan => {
            console.log(item);
            return res.json(loan);
        }
    );
});

/*
 * /loans/ Post Route
 * Used to store a new loan in Mongo
 *
 * @param id The Id of the loan
 * @param summary The one line summary of the loan
 * @param description The long description or details of the loan
 * @param dueDate The due date for the laon. in mm/dd/yyyy format
 * @param user the user who owns the loan
 *
 * @return The newly created instance of the loan.
 */
router.post( '/', (req,res) => {
    let loan = new Loan(
        req.body.id,
        req.body.type,
        req.body.rate,
        req.body.pmt,
        req.body.date,
        req.body.mthsRem
    );
    storedLoans(loan);
    return res.json(loan);
}); //end router.post

/*
 * storeItem
 * Used to store an item in the attached database
 *
 * @param item The item to be stored.
 */
const storeLoan = async(loan) => {
    const loanCollection = await getCollection('loan');
    loanCollection.insertOne(loan);
}; //end storeLoan

/*
 * /loan/:loanId Delete route
 * Used to delete a loan from the list.
 * Note: The loan is archived and still exists in the database.
 */
router.delete( '/:loanId', (req,res) => {
    removeLoan(req.params.ItemId);
    return res.send( 'item ${req.params.loanId} has been deleted.');
});//end router.delete

/*
 * removeLoan
 * Used to set the active flag to false on a loan.
 * This will effectivly delete the loan for the user.
 */
const removeLoan = async(loanId) => {
    const loanCollection = await getCollection('loan');
    loanCollection.updateOne(
    { id: parseInt(itemId) },
    { $set: {'active': false}
});
}

/*
 * deleteLoan
 * Used to remove a loan from the database.
 * Don't remove data, it doesn't end well..
 */
const deleteIemt = async(loanId) => {
    const loanCollection = await getCollection('loan');
    loanCollection.deleteOne(
        {id: parseInt(loanId) }
    );
}

export default router;







