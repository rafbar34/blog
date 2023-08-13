import {MongoClient} from 'mongodb';

export const connectDatabase = async () => {
  const url = `mongodb+srv://${process.env.EMAIL}:${process.env.PASSWORD}@cluster0.pdjzyjw.mongodb.net`;

  const client = await MongoClient.connect(url);
  return client;
};

export const insertDocument = async (
  document,
  client,
  collection,
  category
) => {
  const response = await client
    .db(category)
    .collection(collection)
    .insertOne(document);
  console.log(response);
  return response;
};

export const getFindDocument = async (
  db: any,
  collection: string,
  name: string | number,
  value: any
) => {
  const res = await db
    .collection(`${collection}`)
    .find({[name]: value})
    .toArray();

  return res;
};
export const getAllDocuments = async (
  database: string,
  client: any,
  collection: string
) => {
  const res = await client
    .db(database)
    .collection(`${collection}`)
    .find()
    .toArray();

  return res;
};
export const findItems = async (
  database: string,
  client: any,
  collection: string,
  item,
  category
) => {
  const res = await client
    .db(database)
    .collection(`${collection}`)
    .find({[`${category}`]: item})
    .toArray();

  return res;
};
