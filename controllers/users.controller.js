const User = require('../models/users.model');

module.exports.getAllUsers = async(req,res,next)=>{
    try{
        const users = await User.find().lean();
        return res.json({users});
    }
    catch(e){
        next(e);
    }
}
module.exports.getUserById = async(req,res,next)=>{
    try{
        const id = req.params.userId
        const user = await User.findById(id).lean()
        return res.json({user});
    }
    catch(e){
        next(e)
    }
}
module.exports.deleteUser = async(req,res,next)=>{
    try{
        const id = req.params.userId;
        const user = await User.findById(id)
        if(user) 
        {await User.deleteOne({ _id: id }).lean() 
        return res.json({user,message:"success"});}
        else res.send({message:"failed"})
    }
    catch(e){
        next(e)
    }
}
module.exports.updateUser = async (req,res,next)=>{
    try{
        const {id} = req.params;
        const {name,avatar,password} = req.body;
        const user = await User.findById(id);
        if(user)
        {
            await User.updateOne({_id:id},{$set:{name,avatar,password}});
            return res.json({user,userUpdated:{...user,name,avatar,password},message:"success"});
        }
        else return res.send({message:"failed"})
    }
    catch(e)
    {
        next(e)
    }
}
module.exports.createUser = async(req,res,next) =>{
    try{
    const {name,avatar,account,password} = req.body;
    const newUser = await User.create({name,avatar,account,password});
    return res.json({newUser,message:"success"})
    }
    catch(e){
        next(e);
    }
}