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
    
},{timestamps:true}
);

module.exports = Student = mongoose.model('student',UserSchema);