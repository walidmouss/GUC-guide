
import express from 'express';
import mongoose from 'mongoose'
import TeacherAssistant from './teacherAssistants.js';
const app = express()
app.use(express.json());
const PORT = 3000

app.get("/hello" , (req,res) =>{
    res.send("hello");
});

app.post("/addTA" , async (req,res) =>{
    const {name , phone , email , office} = req.body;
    const newTA = new TeacherAssistant({name , phone , email , office});
    try{
        await newTA.save()
        res.status(200).send("TA saved =D");
    }catch (error) {
        console.error("Error saving TA to DB:", error);
        res.status(500).send("error saving TA to db ");
    }
    
})

app.listen(PORT , () =>{
    console.log(`Listening to port ${PORT}`);
})

mongoose.connect("mongodb+srv://walidmoussa00:iOa416qkoPAUpCCE@cluster0.gaa1pcp.mongodb.net/guc_guide?retryWrites=true&w=majority&appName=Cluster0")
    .then(() => {
        console.log("Connected to DB successfully ^_^");
    })
    .catch((error) => {
        console.log("Error with connecting to DB T_T ", error);
    });