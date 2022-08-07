const express =require('express');
const { createUser,sendUserMessage,getAllUser,deleteMessage,deleteAllMessage}= require("../controllers/userController");
      
      



const router= express.Router();

router.route("/stores/all").post(createUser); // get all data by params

router.route("/message/new").put(sendUserMessage);
router.route("/getAll/user/:_id").get(getAllUser);
router.route("/delete/Message/:_id").put(deleteMessage);
router.route("/delete/All/Message/:_id").put(deleteAllMessage);



module.exports=router;