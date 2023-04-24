import User from "../models/user-schema.js";


export const addUser = async (req,res) => {
    const user = req.body;
    const newUser = new User(user);
    
    try{
        await newUser.save();
        res.status(201).json(newUser);
    } catch(error) {
        res.status(409).json({message : error.message});
        console.log("error ara");
    }
}

export const allUsers = async (req,res) => {
    try{
         const users = await User.find({});//in empty object we can mention condtion while findind data,and empty {} means all data
        res.status(200).json(users);
    } catch(error){
        res.status(404).json({message : error.message});
    }
}

export const getUser = async (req,res) => {
    console.log(req.params.id);//params is a object
    try{
        // const user = await User.find({ _id : req.params.id});
        const user = await User.findById(req.params.id);
       res.status(200).json(user);
   } catch(error){
       res.status(404).json({message : error.message});
   }
}

export const editUser = async (req,res) => {
    let user = req.body;
    const editUser = new User(user);
    
    try{
        await User.updateOne({ _id : req.params.id },editUser); //1st object is replaced by 2nd object as it have updated body 
        res.status(201).json(editUser);
    } catch(error) {
        res.status(409).json({message : error.message});
        console.log("error ara");
    }
}


export const deleteUser = async(req,res) => {
    try{
        await User.deleteOne({_id : req.params.id});
        res.status(200).json({message:"user deleted succesfully"});//response is needed because api will be pending
    } catch(error) {
        res.status(409).json({message : error.message});
    }
}