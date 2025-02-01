const {Schema, model} =  require('mongoose');



const teamSchema =  new Schema({
    name: {
        type: String, 
        required: [true ,  'Name is required'],
        trim: true,
        maxLength: [50, 'Name must be less than 50 characters'],
        minLength: [3, 'Name must be more than 3 characters'],
    },
    
    status :{
        type: String,
        required: [true , 'Status is required'],
        trim: true,
    },

    image :{
        type: String,
        required: [true , 'Image is required'],
    
    }

    

},

 {timestamps : true}


);

const  Team = model('teams', teamSchema);
module.exports =  Team;