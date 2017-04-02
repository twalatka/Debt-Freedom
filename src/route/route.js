import { MongoClient } from 'mongodb';

const mongoUri = process.env.MONGO_URI || 'mongodb://localhost:3000/debt';

const connect = async() => await MongoClient.connect(mongoUri);

export default connect;

export const getCollection = async(collectionIWant) => {
    const db = await connect();
    return db.collection(collectionIWant);
};;


export default router;
// import data from '../data/data.js';

// const router = new Router();

// router.get ('/', (req, res) => {

//   return res.json(data);

// });

// router.route('/turtles')
//       .get( (req, res) => {

//   let turtles = data.filter(chars => chars.race === 'Mutant' || chars.race === 'Turtle' );
//   return res.json(turtles);

// });