const mongoose=require('mongoose');

const courseSchema=mongoose.Schema({

    coursename:{
        type:String,
        required:true
    },
    image:[
        {
            type:String,
            required:true
        }
    ]
    

});

module.exports=mongoose.model('courseSchema',courseSchema);