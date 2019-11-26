const express=require('express');
const app=express();
const mongoose=require('mongoose');
const cors = require('cors');
app.use(express.json());


//Using Routing File
const mainroute=require('./routes/mainroute');
app.use(cors());
app.use('/',mainroute);








//Connect MongoDB
mongoose.connect('mongodb://127.0.0.1:27017/techzilla_assignment',
                    { useNewUrlParser: true ,useCreateIndex:true, useFindAndModify:false}, 
                    () => {console.log('Connected to MongoDB')}
                );

//Listen to port
const port=process.env.PORT||3000;
app.listen(port,()=>{console.log(`Listening to port ${port}`)});

