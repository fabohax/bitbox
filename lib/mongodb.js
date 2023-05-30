import MongoClient from "mongodb";

const client = new MongoClient("mongodb://localhost:27017/shopdb");

client.connect((err, db) => {
  if (err) {
    console.error(err);
  } else {
    console.log("Connected to MongoDB");
  }
});

export default client;
