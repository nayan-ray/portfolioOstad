const { getTeamService, postTeamService, updateTeamService, deleteTeamService } = require("../services/teamService");
const { successResponse } = require("./responseHandler");

const getTeamHandler = async (req, res) => {
    try {
      const Teams = await getTeamService();
      return successResponse(res, {payload : Teams})
        
    } catch (error) {
        return res.status(500).json({ message: error.message });
    }
}

const postTeamHandler = async (req, res) => {
  try {
    const Team = await postTeamService(req);
    return successResponse(res, {payload : Team})
      
  } catch (error) {
      return res.status(500).json({ message: error.message });
  }
}

const updateTeamHandler = async (req, res) => {
  try {
    const updateTeam = await updateTeamService(req);
    return successResponse(res, {payload : updateTeam})
      
  } catch (error) {
      return res.status(500).json({ message: error.message });
  }
}


const deleteTeamHandler = async (req, res) => {
  try {
    const deleteTeam = await deleteTeamService(req);
    if(!deleteTeam){
      return successResponse(res, {payload : {mgs : "something went wrong"}})
    }
    return successResponse(res, {payload : {mgs : "data deleted"}})
      
  } catch (error) {
      return res.status(500).json({ message: error.message });
  }
}
module.exports = {getTeamHandler, postTeamHandler, updateTeamHandler, deleteTeamHandler};