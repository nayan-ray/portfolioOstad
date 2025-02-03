const Team = require("../models/teamModel");

//get Team
const getTeamService = async()=>{
    try {
     const Teams = await Team.find();
     return Teams;
    } catch (error) {
       throw error
    }
  
 } 
 
 //post Team
 
 const postTeamService = async(req)=>{
    try {
     const postTeam = await Team.create(req.body);
     return postTeam;
    } catch (error) {
       throw error
    }
  
 } 
 
 const updateTeamService = async(req)=>{
    try {
       const id = req.params.id;
       const updateData = await Team.findByIdAndUpdate(id, req.body, {new: true});
       if(!updateData){
          throw new Error("Team is not updated")
       }
     return updateData;
    } catch (error) {
       throw error
    }
  
 } 
 
 const deleteTeamService = async(req)=>{
    try {
       const id = req.params.id;
       await Team.findByIdAndDelete(id)
       return true;
    } catch (error) {
       throw error
    }
  
 } 
 module.exports = {getTeamService, postTeamService, updateTeamService, deleteTeamService};