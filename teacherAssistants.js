import mongoose from 'mongoose'

const teacherAssistantsSchema = new mongoose.Schema({
    name:{
        type:String,
        required:true
    },
    phone:{
        type:String
    },
    email:{
        type:String,
        required:true
    },
    office:{
        type:String,
        required:true
    }
} , { collection: 'TAs' });

const TeacherAssistant = mongoose.model('TeacherAssistant' , teacherAssistantsSchema );

export default TeacherAssistant;