const mongoose =require("mongoose");
mongoose.set('strictQuery', false);
const url="mongodb://127.0.0.1:27017/to-do-list";

const conectMongo =()=>{
    mongoose.connect(url,() => {
      console.log('mongo connect')
    })
  
}

module.exports =conectMongo;