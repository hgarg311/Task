const express = require("express");
const app = express();
const errorMiddleWare = require("./middleware/error")
var cors=require('cors');
const envs = require('./config.js');
app.use(express.json())



//Route Import
const user = require("./routes/userRouter")




app.use(cors())

//Middle-ware for Error
app.use(errorMiddleWare)
app.use(express.static("./Public")) 
console.log('/api/v1/'+`${envs.TOKEN}`)
app.use('/api/v1/'+`${envs.TOKEN}`,user);


module.exports = app
