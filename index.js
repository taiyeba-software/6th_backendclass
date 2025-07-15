const express = require("express");

const app = express();


app.use(express.json())

const connectToDB = require("./src/DB/db");
const NoteModel = require("./src/models/note.model"); 

connectToDB();


app.post("/notes",async (req,res)=>{

    const {title,content}= req.body; 
    console.log(title,content);

    await NoteModel.create({
    
        title,
        content
    })

    res.json({
        title,content 
    })

})

app.delete("/notes/:id", async(req,res)=>{

    const noteId =req.params.id

    await NoteModel.findByIdAndDelete({
        _id : noteId
    });

    res.json({
        messege: "Note deleted successfully",
        
    })
})

app.patch("/notes/:id", async(req,res)=>{
    const noteId = req.params.id;
    const {title} =req.body;

    await NoteModel.findByIdAndUpdate({
        _id: noteId
    },{
        title:title
    });

})


app.get("/notes", async (req, res) => {
  const notes = await NoteModel.find();
  res.json({
    message: "Notes fetched successfully",
     notes
  });
});


app.get("/",(req,res)=>{
    res.send("Hello, World!");
    data: notes
})

app.listen(3000,()=>{
    console.log("Server is running on port 3000");
})