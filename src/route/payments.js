/*
* paymnents.js
* this class defines the routes for getting payment info
* Author: Teresa Walatka
* Created: 4/25/17
*/

import { Router } from 'Express';

import { getCollection } from '../db.js';
import { payments } from '../data/data.js';
import Payment from '../data/data.js';

const router = new Router();

/* getAllPayments
* used to get all payments
* @return an array of all payments
* @TODO link to user
*/

const getAllPayments = async() => {
    const paymentsCollection = await getCollection('payments');

    return await ( await paymentsCollection.find({ active: true}) ).toArray();
} //end getAllPayments

/* 
* /payments Route
* Gets all payments
*
* @TODO only return payments for one specified user 
*/
router.get( '/', (req,res) => {
    return getAllPayments().then(
        payments => {
            return res.json(payments);
        });
});

/*
 * /payments/:id Route
 * Used to get details about a specific payement by specifying the id of the payment
 * 
 * @TODO only return payent for specified user
 */

router.get('/:payment', (req,res) => {
    return getAllPayments( req.params.payment).then(
        payment => {
            console.log(payment);
            return res.json(payment);
        }
    );
});

/*
 * /payments/ Post Route
 * Used to store a new item in Mongo
 *
 * @param id The Id of the payment
 * @param summary The one line summary of the payment
 * @param description The long description or details of the payment
 * @param dueDate The due date for the item. in mm/dd/yyyy format
 * @param user the user who owns the payment
 *
 * @return The newly created instance of the payment.
 */
router.post( '/', (req,res) => {
    let payment = new Payment(
        req.body.id,
        req.body.date,
        req.body.currPrinBal,
        req.body.totMthyPmt,
        req.body.intPd,
        req.body.prinPd,
        req.body.remBal  
   ); //end new Payment
   storePayment(payment);
   return res.json(payment);
}); //end router.post ('/')

/*
 * /payments/ Post Route
 * Used to store a new item in Mongo
 *
 * @param id The Id of the payment
 * @param summary The one line summary of the payment
 * @param description The long description or details of the payment
 * @param dueDate The due date for the item. in mm/dd/yyyy format
 * @param user the user who owns the payment
 *
 * @return The newly created instance of the payment.
 */

const storePayment = async(payment) => {
    const paymentCollection = await getCollection('payment');
    paymentCollection.insertOne(payment);
} //end storeItem

/*
 * /payents/:paymentId Delete route
 * Used to delete an payment from the list.
 * Note: The payment is archived and still exists in the database.
 */
router.delete( '/:payment', (req,res) => {
    removePayment(req.params.paymentId);
    return res.send( 'payment ${req.params.payemntId} has been deleted' );
}); //end deletePayent

/*
 * removePayment
 * Used to set the active flag to false on an payment.
 * This will effectivly delete the payment for the user.
 */
const removeItem = async(itemId) => {
    const paymentCollection = await getCollection('payment');
    paymentCollection.updateOne(
        { id: parseInt(paymentId) },
        {
            $set: { 'active': false }
        }
    );
}

/*
 * deletePayment
 * Used to remove an payment from the database.
 * Don't remove data, it doesn't end well..
 */
const deletePayment = async(paymentId) => {
    const paymentCollection = await getCollection('payment');
    paymentCollection.deleteOne(
        { id: parseInt(paymentId) }
    );
}

export default router;



