
const mongoose = require("mongoose");


const connectDb = async ()=>{
   try {
    await  mongoose.connect('mongodb+srv://masharadha:ramkrisna@nayanproject.ww3uvvb.mongodb.net/portfolio')
    console.log("database connected successfully");
   
   } catch (error) {
      console.log(error.message);
      
   }


}

module.exports = connectDb;  //exporting the function to use it in other files.  //connect
