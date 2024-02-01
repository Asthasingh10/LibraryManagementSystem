const mongoose=require("mongoose");
const Schema=mongoose.Schema;

const librarySchema=new Schema({
    title:{
        type:String,
        required:true
    },
    author:{
        type:String,
    },
    category:{
        type:String,
    },
    description:{
        type:String,
    },
    image:{
     url:String,
     filename:String,
    },
    owner:{
        type:Schema.Types.ObjectId,
        ref:"User",
    }
})

const Library=mongoose.model("library",librarySchema);
module.exports=Library;