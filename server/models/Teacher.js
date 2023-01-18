const mongoose = require('mongoose');

const UserSchema = new mongoose.Schema({
    firstname:{
        type:String,
    },
    lastname:{
        type:String,
    },
    email:{
        type:String,
    },
    password:{
        type:String,
    },
    profile_img: {
        type: Array,
    },
    isTeacher:{
        type:String,
        default:"teacher"  
    },
    
},{timestamps:true}
);

module.exports = Teacher = mongoose.model('teacher',UserSchema);