const mongoose=require('mongoose');



const storeSchema= new mongoose.Schema({
    userName:{
        type:String,
        required:[true,"please enter user Name"]
    },

    userId:{
      type: String,
      required:[true,"please enter user id"]
    },

    timeStamp: {
      type: Date,
      default: Date.now,
    },
    
    messages:[
    {
      message: {
        type: String,
        required:[true,"please enter the message"]
      },
      
      isSend: {
        type:Boolean,
        default :true // user is sending message 
        
      },
      
      userId:{
        type: String,
      },  
      
      messageId:{
        type:String,
        required:[true,"message id required"]
      },  
      
      timeStamp: {
        type: Date,
        default: Date.now,
      },

      }
    
    ]
  })



  
  module.exports = mongoose.model("Harsh User", storeSchema);