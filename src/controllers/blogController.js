const {getBlogService, postBlogService, updateBlogService, deleteBlogService} = require("../services/blogService");
const { successResponse } = require("./responseHandler");

const getBlogHandler = async (req, res) => {
    try {
      const blogs = await getBlogService();
      return successResponse(res, {payload : blogs})
        
    } catch (error) {
        return res.status(500).json({ message: error.message });
    }
}

const postBlogHandler = async (req, res) => {
  try {
    const blog = await postBlogService(req);
    return successResponse(res, {statusCode :200 ,payload : blog})
      
  } catch (error) {
      return res.status(500).json({ message: error.message });
  }
}

const updateBlogHandler = async (req, res) => {
  try {
    const updateBlog = await updateBlogService(req);
    return successResponse(res, {payload : updateBlog})
      
  } catch (error) {
      return res.status(500).json({ message: error.message });
  }
}


const deleteBlogHandler = async (req, res) => {
  try {
    const deleteBlog = await deleteBlogService(req);
    if(!deleteBlog){
      return successResponse(res, {payload : {mgs : "something went wrong"}})
    }
    return successResponse(res, {payload : {mgs : "data deleted"}})
      
  } catch (error) {
      return res.status(500).json({ message: error.message });
  }
}
module.exports = {getBlogHandler, postBlogHandler, updateBlogHandler, deleteBlogHandler};