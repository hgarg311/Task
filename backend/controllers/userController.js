const req = require("express/lib/request");
const res = require("express/lib/response");
const User= require("../models/userModel");
// const ApiFeatures = require("../utils/apifeatures");
const catchAsyncErrors = require("../middleware/catchAsyncErrors");
// const { distinct } = require("../models/storeModel");


// const axios =require('axios') ;
const { response } = require("express");



// Create User 
exports.createUser= async(req,res,next)=>{
    const product= await User.create(req.body);
    res.status(201).json({
        success: true,
        product
    })
}

// sendUserMessage enters the message of a user

exports.sendUserMessage = catchAsyncErrors(async(req,res)=>{
    const {messageId,message,isSend,userId} = req.body;
    const mess = {
        messageId,
        message,
        isSend,
        userId
    }
    const Product = await User.findById(userId);
    Product.messages.push(mess);
    await Product.save({
        validatebeforeSave : false
        
    });
    
    res.status(200).json({
        success: true
    });
})

exports.getAllUser=catchAsyncErrors(async(req,res)=>{
   const Product = await User.findById(req.params._id);
   const mess = Product.messages;
   if(!Product){
    return res.status(500).json({
        success: false,
        message : "user not found"
    });

   }

   else {
    res.status(200).json({
        success : true,
        mess
    });
   }

});

exports.deleteMessage = catchAsyncErrors(async(req,res)=>{
const result = await User.updateOne({
    _id : req.params._id
},
{
    $pull: {
        messages: req.body
    }

}
);
res.status(200).json({
    success : true,
    result 
})
} )

exports.deleteAllMessage = catchAsyncErrors(async(req,res)=>{
    // const int = a;
    const result = await User.updateOne({
       _id : req.params._id 
    },
    {
        $pull: {
         messages:{
            userId : req.params._id
         }
        }

    }
    );
    res.status(200).json({
        success : true,
        result
    })
})
