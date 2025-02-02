const express  = require('express');
const app = express();
const cors = require('cors')
const morgan = require('morgan');
const createError = require('http-errors');
const rateLimit = require("express-rate-limit");
const cookieParser = require('cookie-parser');
const bodyParser = require('body-parser');
const Router = require('./routes/api');
const { errorResponse } = require('./controllers/responseHandler');



const limiter = rateLimit({
	windowMs: 1 * 60 * 1000, // 1 minute
	limit: 20, // Limit each IP to 05requests per `window`.
	message :"to many requested from this ip"
	
});
app.use(cors())
app.use(cookieParser());
app.use(limiter);
app.use(morgan("dev"));
app.use(express.json());
app.use(express.urlencoded({extended:true}))
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended:true}))

//image url
app.use("/images", express.static("public"))



//api


app.use("/api/v1", Router)




//client error handling
app.use((req,res,next)=>{
     next(createError(404,"router not found"))
    })

//server error handling
app.use((error,req,res,next)=>{
    
    return errorResponse(res,{
        statusCode :error.status,
        message : error.message,
    })
 })

module.exports = app;  //export app