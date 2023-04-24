import mongoose from "mongoose";
// import autoIncrement from 'mongoose-auto-increment';

const userSchema = new mongoose.Schema({
    name : String,
    username : String,
    email : String,
    phone : Number,
})// new keyword means we are intializing an instance yourself ,without new mongoose will intialize for yourself

// autoIncrement.initialize(mongoose.connection);
// userSchema.plugin(autoIncrement.plugin,'User');

const User = mongoose.model('User',userSchema);

export default User;