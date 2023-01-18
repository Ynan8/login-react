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
    role:{
        type:String,
    },
    profile_img: {
        type: Array,
    },
    
},{timestamps:true}
);

module.exports = User = mongoose.model('users',UserSchema);