const Service = require("../models/serviceModel");

//get service
const getServiceService = async()=>{
    try {
     const Services = await Service.find();
     return Services;
    } catch (error) {
       throw error
    }
  
 } 
 
 //post Service
 
 const postServiceService = async(req)=>{
    try {
     const postService = await Service.create(req.body);
     return postService;
    } catch (error) {
       throw error
    }
  
 } 
 
 const updateServiceService = async(req)=>{
    try {
       const id = req.params.id;
       const updateData = await Service.findByIdAndUpdate(id, req.body, {new: true});
       if(!updateData){
          throw new Error("Service is not updated")
       }
     return updateData;
    } catch (error) {
       throw error
    }
  
 } 
 
 const deleteServiceService = async(req)=>{
    try {
       const id = req.params.id;
       await Service.findByIdAndDelete(id)
       return true;
    } catch (error) {
       throw error
    }
  
 } 
 module.exports = {getServiceService, postServiceService, updateServiceService, deleteServiceService};