import { MongoClient } from "mongodb";
const url =
  "mongodb+srv://mongzii228:qwer1234@cluster0.m8aww3r.mongodb.net/?retryWrites=true&w=majority";
const options = { useNewUrlParser: true };
let connectDB;

if (process.env.NODE_ENV === "development") {
  if (!global._mongo) {
    global._mongo = new MongoClient(url, options).connect();
  }
  connectDB = global._mongo;
} else {
  connectDB = new MongoClient(url, options).connect();
}
export { connectDB };

// const client = await MongoClient.connect(
//   "mongodb+srv://mongzii228:qwer1234@cluster0.m8aww3r.mongodb.net/?retryWrites=true&w=majority",
//   { useNewUrlParser: true }
// );

// export { client };
