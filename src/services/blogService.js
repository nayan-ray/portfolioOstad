const Blog = require("../models/blogModel")
//get blog
const getBlogService = async()=>{
   try {
    const blogs = await Blog.find();
    return blogs;
   } catch (error) {
      throw error
   }
 
} 

//post blog

const postBlogService = async(req)=>{
   try {
    const postBlog = await Blog.create(req.body);
    return postBlog;
   } catch (error) {
      throw error
   }
 
} 

const updateBlogService = async(req)=>{
   try {
      const id = req.params.id;
      const updateData = await Blog.findByIdAndUpdate(id, req.body, {new: true});
      if(!updateData){
         throw new Error("Blog is not updated")
      }
    return updateData;
   } catch (error) {
      throw error
   }
 
} 

const deleteBlogService = async(req)=>{
   try {
      const id = req.params.id;
      await Blog.findByIdAndDelete(id)
      return true;
   } catch (error) {
      throw error
   }
 
} 
module.exports = {getBlogService, postBlogService, updateBlogService, deleteBlogService};