const getBlogHandler = require('../controllers/blogController');

const Router = require('express').Router();

//blog api

Router.get("/blog/", getBlogHandler)





module.exports = Router;

