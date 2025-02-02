const { getUserService, postUserService, updateUserService, deleteUserService } = require("../services/userService");
const { successResponse } = require("./responseHandler");

const getUserHandler = async (req, res) => {
    try {
      const Users = await getUserService();
      return successResponse(res, {payload : Users})
        
    } catch (error) {
        return res.status(500).json({ message: error.message });
    }
}

const postUserHandler = async (req, res) => {
  try {
    const User = await postUserService(req);
    return successResponse(res, {payload : User})
      
  } catch (error) {
      return res.status(500).json({ message: error.message });
  }
}

const updateUserHandler = async (req, res) => {
  try {
    const updateUser = await updateUserService(req);
    return successResponse(res, {payload : updateUser})
      
  } catch (error) {
      return res.status(500).json({ message: error.message });
  }
}


const deleteUserHandler = async (req, res) => {
  try {
    const deleteUser = await deleteUserService(req);
    if(!deleteUser){
      return successResponse(res, {payload : {mgs : "something went wrong"}})
    }
    return successResponse(res, {payload : {mgs : "data deleted"}})
      
  } catch (error) {
      return res.status(500).json({ message: error.message });
  }
}
module.exports = {getUserHandler, postUserHandler, updateUserHandler, deleteUserHandler};