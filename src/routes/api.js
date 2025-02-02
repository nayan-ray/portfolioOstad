const {getBlogHandler, postBlogHandler, updateBlogHandler, deleteBlogHandler} = require('../controllers/blogController');
const { getServiceHandler, postServiceHandler, updateServiceHandler, deleteServiceHandler } = require('../controllers/serviecController');
const { getUserHandler, postUserHandler, updateUserHandler, deleteUserHandler } = require('../controllers/userController');

const Router = require('express').Router();

//blog api

Router.get("/blog", getBlogHandler)
Router.post("/blog/create", postBlogHandler)
Router.put("/blog/:id", updateBlogHandler)
Router.delete("/blog/delete/:id", deleteBlogHandler)

//service api

Router.get("/service", getServiceHandler)
Router.post("/service/create", postServiceHandler)
Router.put("/service/:id", updateServiceHandler)
Router.delete("/service/delete/:id", deleteServiceHandler)

//user api

Router.get("/user", getUserHandler)
Router.post("/user/create", postUserHandler)
Router.put("/user/:id", updateUserHandler)
Router.delete("/user/delete/:id", deleteUserHandler)
module.exports = Router;

