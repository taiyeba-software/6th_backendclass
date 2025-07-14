const express = require("express");

const app = express();


app.use(express.json())

const connectToDB = require("./src/DB/db");
const { connect } = require("mongoose");

connectToDB(); //calling the function to connect to the database


app.post("/notes",(req,res)=>{

    const {title,content}= req.body; /*👉 এটা হলো object destructuring — মানে তুমি req.body অবজেক্ট থেকে title আর content নামের দুইটা key আলাদা করে ফেলছো। */
  /**
   🎁 কল্পনার প্যাকেট analogy:
   ধরো তোমার হাতে একটা প্যাকেট (📦) আছে, যার ভেতরে লেখা আছে এইসব তথ্য:
   {
  "title": "My First Note",
  "content": "Backend is fun!",
  "author": "Taiyeba",
  "views": 500
   }
  এখন তুমি বললে:
  “আমি শুধু title আর content চাই—বাকিটা আমার দরকার নেই।”

   */
    console.log(title,content);

})


app.get("/",(req,res)=>{
    res.send("Hello, World!");
})

app.listen(3000,()=>{
    console.log("Server is running on port 3000");
})