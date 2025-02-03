const { loginHandler, handleLogout } = require('../controllers/authController');
const {getBlogHandler, postBlogHandler, updateBlogHandler, deleteBlogHandler} = require('../controllers/blogController');
const { getServiceHandler, postServiceHandler, updateServiceHandler, deleteServiceHandler } = require('../controllers/serviecController');
const { getTeamHandler, postTeamHandler, updateTeamHandler, deleteTeamHandler } = require('../controllers/teamController');
const { getUserHandler, postUserHandler, updateUserHandler, deleteUserHandler } = require('../controllers/userController');
const { isLoggedOut, isLoggedIn } = require('../middleware/authMiddleware');

const Router = require('express').Router();

//blog api

Router.get("/blog",  getBlogHandler)
Router.post("/blog/create", isLoggedIn, postBlogHandler)
Router.put("/blog/:id", isLoggedIn, updateBlogHandler)
Router.delete("/blog/delete/:id", isLoggedIn, deleteBlogHandler)

//service api

Router.get("/service",  getServiceHandler)
Router.post("/service/create", isLoggedIn, postServiceHandler)
Router.put("/service/:id", isLoggedIn, updateServiceHandler)
Router.delete("/service/delete/:id", isLoggedIn, deleteServiceHandler)

//user api

Router.get("/user", isLoggedIn, getUserHandler)
Router.post("/user/create", isLoggedIn, postUserHandler)
Router.put("/user/:id", isLoggedIn, updateUserHandler)
Router.delete("/user/delete/:id", isLoggedIn, deleteUserHandler)

//team api
Router.get("/team", getTeamHandler)
Router.post("/team/create", isLoggedIn, postTeamHandler)
Router.put("/team/:id", isLoggedIn, updateTeamHandler)
Router.delete("/team/delete/:id", isLoggedIn, deleteTeamHandler)

//login api
Router.post("/login",isLoggedOut, loginHandler)

//logout api

Router.get("/logout",isLoggedIn, handleLogout)


module.exports = Router;

