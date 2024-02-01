const mongoose=require("mongoose");
const initdata=require("./data");
const Library=require("../models/library.js");

const URL="mongodb://127.0.0.1:27017/library";

main().then(()=>{
    console.log("Connected to DataBase");
}).catch((err)=>{
    console.log(err);
})

async function main(){
    await mongoose.connect(URL);
}

const initDB=async()=>{
    await Library.deleteMany({});
    initdata.data=initdata.data.map((obj)=>({...obj,owner:"65b7217c4b53afd672bb2e5d"}))
    await Library.insertMany(initdata.data);
    console.log("Data was initialized");
}

initDB();