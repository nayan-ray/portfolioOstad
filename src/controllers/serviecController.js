const { getServiceService, postServiceService, updateServiceService, deleteServiceService } = require("../services/serviceService");
const { successResponse } = require("./responseHandler");

const getServiceHandler = async (req, res) => {
    try {
      const Services = await getServiceService();
      return successResponse(res, {payload : Services})
        
    } catch (error) {
        return res.status(500).json({ message: error.message });
    }
}

const postServiceHandler = async (req, res) => {
  try {
    const Service = await postServiceService(req);
    return successResponse(res, {payload : Service})
      
  } catch (error) {
      return res.status(500).json({ message: error.message });
  }
}

const updateServiceHandler = async (req, res) => {
  try {
    const updateService = await updateServiceService(req);
    return successResponse(res, {payload : updateService})
      
  } catch (error) {
      return res.status(500).json({ message: error.message });
  }
}


const deleteServiceHandler = async (req, res) => {
  try {
    const deleteService = await deleteServiceService(req);
    if(!deleteService){
      return successResponse(res, {payload : {mgs : "something went wrong"}})
    }
    return successResponse(res, {payload : {mgs : "data deleted"}})
      
  } catch (error) {
      return res.status(500).json({ message: error.message });
  }
}
module.exports = {getServiceHandler, postServiceHandler, updateServiceHandler, deleteServiceHandler};