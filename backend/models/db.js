const mongoose=require('mongoose');

const URI="mongodb://localhost:27017";



const connectDatabase=()=>{

    mongoose.connect(URI,{useUnifiedTopology:true,
        useNewUrlParser: true}).then((data)=>{
            console.log(`Mongodb connected with server: ${data.connection.host}`);
        }).catch((err)=>{
            console.log(err)
        })
    
    

}



module.exports = connectDatabase;