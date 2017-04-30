import {Router} from 'Express';
import uuidv4 from 'uuid/v4';
import {getCollection} from '../db.js';
import {payments} from '../data/data.js';
import Payment from '../data/payment.js';

const router = new Router();


//set router to get ALL payments, use the getAllPayments function


router.get('/', (req,res) => {
    return getAllPayments()
    .then(payment => {
      return res.json(payment);
        }); 
    });

//set router to get ONE payment, uset the getPayment function    
router.get( '/:payment', (req,res) => {
    return getPayment( req.params.payment )
    .then(payment => {
            return res.json(payment);
        });
    });

//POST route
router.post( '/', (req,res) => {
    let payment = new Payment(
        req.body.id,
        req.body.date,
        req.body.currPrinBal,
        req.body.totMthlyPmt,
        req.body.intPd,
        req.body.PrinPd,
        req.body.remBal
    );
    storePayment(payment);
    return res.json(payment);
}); 

//PUT router
router.put( './:paymentId', (req,res) => {
    putPayment(req.params.paymentId);
    return res.send( 'payment, ${req.params.paymentId} has been posted.');
}); 

//DELETE route
router.delete( '/:paymentId', (req,res) => {
    removePayment(req.params.paymentId);
    return res.send( 'payment ${req.params.paymentId} has been deleted.');
}); 

//END PAYMENT ROUTES


//function to retrieve all Payments
const getAllPayments = async() => {
    const paymentCollection = await getCollection('payments');
    
    return await (await paymentCollection.find({ active: true}) ).toArray();
}

//funciton to retrieve One Payment
export const getPayment = async(id) => {
    id = parseInt(id);
    const paymentCollection = await getCollection('payments');
    const payment = await (await paymentCollection.find({ id })).toArray();
    return payment;
}


const storePayment = async(payment) => {
    const paymentCollection = await getCollection('payments');
    return paymentCollection.insertOne(payment);
}; 


const removePayment = async(payemntId) => {
    const paymentCollection = await getCollection('payments');
    paymentCollection.updateOne(
    { id: parseInt(paymentId) },
    { $set: {'active': false}
});
}

const deletePayment = async(paymentId) => {
    const paymentCollection = await getCollection('payment');
    paymentCollection.deleteOne(
        {id: parseInt(paymentId) 
     });
}

export default router;