const User = require("../models/userModel");

//get user
const getUserService = async()=>{
    try {
     const Users = await User.find();
     return Users;
    } catch (error) {
       throw error
    }
  
 } 
 
 //post User
 
 const postUserService = async(req)=>{
    try {
     const postUser = await User.create(req.body);
     return postUser;
    } catch (error) {
       throw error
    }
  
 } 
 
 const updateUserService = async(req)=>{
    try {
       const id = req.params.id;
       const updateData = await User.findByIdAndUpdate(id, req.body, {new: true});
       if(!updateData){
          throw new Error("User is not updated")
       }
     return updateData;
    } catch (error) {
       throw error
    }
  
 } 
 
 const deleteUserService = async(req)=>{
    try {
       const id = req.params.id;
       await User.findByIdAndDelete(id)
       return true;
    } catch (error) {
       throw error
    }
  
 } 
 module.exports = {getUserService, postUserService, updateUserService, deleteUserService};