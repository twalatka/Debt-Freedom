import { MongoClient } from 'mongodb';

const mongoUri = process.env.MONGO_URI || 'mongodb://localhost:3000/debt';

const connect = async() => await MongoClient.connect(mongoUri);

export default connect;

export const getCollection = async(collection) => {
    const db = await connect();
    return db.collection(collection);
};