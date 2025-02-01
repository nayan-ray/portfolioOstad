const {Schema, model} =  require('mongoose');



const serviceSchema =  new Schema({
    title: {
        type: String, 
        required: [true ,  'title is required'],
        trim: true,
        maxLength: [50, 'title must be less than 50 characters'],
        minLength: [3, 'title must be more than 3 characters'],
    },
    
    description :{
        type: String,
        required: [true , 'Description is required'],
        trim: true,
    },

    image :{
        type: String,
        required: [true , 'Image is required'],
    
    }

    

},

 {timestamps : true}


);

const  Service = model('services', serviceSchema);
module.exports =  Service;