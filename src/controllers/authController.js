//crate login handler
const createError = require('http-errors');
const bcrypt = require('bcryptjs');
const User = require("../models/userModel");
const { errorResponse, successResponse } = require("./responseHandler");
const createToken = require('../helper/token');
const { secretKey } = require('../config/secret');

const loginHandler = async(req, res, next)=>{
    try {
     const { email, password } = req.body;
     const user = await User.findOne({ email });
     if (!user) {
        throw createError(401, "Invalid email or password");
    }
   //compare password

   const isMatch = await bcrypt.compare(password, user.password);

   if(!isMatch){
       throw createError(401, "Invalid email or password");
   }
     
   //generate token

    const loginToken = createToken({email: user.email}, secretKey, '24h');
   
    //set token in cookie
    res.cookie("access_token", loginToken, {
        httpOnly: false,
        maxAge: 1000 * 60 * 60 * 24, // 24 hours

        // secure: true,
        // sameSite : "none"
    })
   
    return successResponse(res,{
        statusCode  : 200,
        message  : 'user login successfully',
        payload : {
             loginToken            
        }
    })

    } catch (error) {
        next(error)
    }
}

const handleLogout =  async(req, res, next)=>{
    try {
        
        //clear  cookie
        res.clearCookie("access_token");

        return successResponse(res,{
            statusCode  : 200,
            message  : 'user logout successfully',
            payload : {
                        
            }
        })
        
    } catch (error) {
        next(error)
    }
  
}

module.exports = {loginHandler, handleLogout};