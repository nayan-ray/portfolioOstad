const Blog = require("../models/blogModel")

const blogService = async()=>{
   try {
    const blogs = await Blog.find();
    return blogs;
   } catch (error) {
      throw error
   }
 
} 

module.exports = blogService;