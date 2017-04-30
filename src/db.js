import { MongoClient } from 'mongodb';

// const schema = 'debt-freedom';
// const port = '27017';

const mongoUri = process.env.MONGO_URI || 'mongodb://localhost:27017';

const connect = async() => await MongoClient.connect(mongoUri);

export default connect;

export const getCollection = async(collection) => {
    const db = await connect();
    return db.collection(collection);
};