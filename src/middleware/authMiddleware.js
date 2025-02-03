
const createError = require('http-errors');
const jwt = require('jsonwebtoken');
const { secretKey } = require('../config/secret');

const isLoggedIn = async(req, res,  next) => {
    try {

        //taken token from cookies

        const accessToken = req.cookies.access_token;

        //check if token is valid
        if (!accessToken) {
            throw createError(401,  'Unauthorized, you are not logged in');
        }
        //verify token

        const  decoded = jwt.verify(accessToken, secretKey);
        // check if user is active


        if(!decoded){
            throw createError(401, 'Unauthorized, please login first');
        }
       
        //set user in req object

        req.body.userEmail  = decoded.email;
        // next middleware
        next();
    } catch (error) {
        next(error)
    }
    
}

const isLoggedOut = async(req , res,  next) => {
    try {
        // taken token from cookies
        const accessToken = req.cookies.access_token;
        // check if token is valid
        if (accessToken) {
            try {
                const  decoded = jwt.verify(accessToken, secretKey);
                if(decoded){
                    throw createError(401, 'Unauthorized, you are already logged in');
                }
            } catch (error) {
                throw error;
            }
        }
    // finally next middleware
        next();
    } catch (error) {
        next(error)
    }
}


module.exports = {isLoggedOut, isLoggedIn};