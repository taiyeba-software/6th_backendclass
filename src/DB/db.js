const mongoose = require("mongoose");

function connectToDB(){

    mongoose.connect("mongodb+srv://islamtaiyeba38:vtkDptaXeNsPMtlY@cluster0.eugk0tc.mongodb.net/cohort")

    .then(()=>{
        console.log("Connected to MongoDB successfully"); //when the server gets connected to the database, this messege will be logged
    })


}

module.exports = connectToDB; //exporting the function so that it can be used in other files