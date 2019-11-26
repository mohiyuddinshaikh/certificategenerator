const mongoose=require('mongoose');

const certificateSchema=mongoose.Schema({

    firstname:{
        type:String,
        required:true
    },
    lastname:{
        type:String,
        required:true
    },
    tzId:{
        type:String,
        required:true
    },
    dateOfCompletion:{
        type:Date,
        required:true
    },
    course:{
        type:mongoose.Schema.Types.ObjectId,
        ref:"courseSchema",
        required:true
    },
    description:{
        type:String,
        required:true
    }

});

module.exports=mongoose.model('certificateSchema',certificateSchema);