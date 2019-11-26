const express=require('express');
const router=express.Router();
const adminSchema=require('../database/adminSchema');
const certificateSchema=require('../database/certificateSchema');
const courseSchema=require('../database/courseSchema');

//Homepage (Dashboard) Displaying Certificates
router.get('/',async (req,res) => {
    const certificateDetails=await certificateSchema.find().populate('course');
    console.log(certificateDetails)
    res.send(certificateDetails);
});

//Creating an entry in adminSchema
router.post('/admin',async (req,res) => {
    const post = await adminSchema.create(req.body); //harsh's easy way
    res.send(post);
});

//Creating an entry in certificateSchema
router.post('/certificate',async (req,res) => {
    const post = await certificateSchema.create(req.body); //harsh's easy way
    res.send(post);
});

//Creating an entry in courseSchema
router.post('/course',async (req,res) => {
    const post = await courseSchema.create(req.body); //harsh's easy way
    res.send(post);
});


//Creating New Entry in certificateSchema using Frontend

router.post('/certificate',async (req,res) => {
    const post = await certificateSchema.create(req.body); //harsh's easy way
    res.send(post);
});

//Displaying Course List

router.get('/courselist',async (req,res) => {
    const courseList=await courseSchema.find();
    res.send(courseList);
});

//Create Course using front end

router.post('/createcourse',async (req,res) => {
    const post = await courseSchema.create(req.body); //harsh's easy way
    res.send(post);
});

//Delete a course using front end

router.delete('/deletecourse/:id',async (req,res) => {
    const user=await courseSchema.findByIdAndDelete(req.params.id);
    res.send(user);
});

//Delete a certificate using frontend

router.delete('/deletecertificate/:id',async (req,res) => {
    const user=await certificateSchema.findByIdAndDelete(req.params.id);
    res.send(user);
});

//Display data of a single user for certificate.
router.get('/displaycertificate/:tzId',async (req,res) => {
    const user=await certificateSchema.findOne({tzId:req.params.tzId}).populate("course");
    if(user.length===0){
        res.send("Sorry, No such user :(");
    }
    else{
        res.send(user);
        console.log(user);
    }
});

//Get course name based on passed course ID
router.get('/getcourse/:_id',async (req,res) => {
    const coursename=await courseSchema.findOne({_id:req.params._id});
    res.send(coursename);
});








module.exports=router;