import mongoose from "mongoose";

Connection().catch(err => console.log("Error while connecting with the database",err));

async function Connection() {
    const URL = 'mongodb://127.0.0.1:27017/crud-api';
  await mongoose.connect(URL);
    console.log('db connected')
  // use `await mongoose.connect('mongodb://user:password@127.0.0.1:27017/test');` if your database has auth enabled
}

export default Connection;