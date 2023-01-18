const bcrypt = require('bcryptjs');
const User = require('../models/User');
const Teacher = require('../models/Teacher');
const Student = require('../models/Student');
const jwt = require('jsonwebtoken');

exports.registerTeacher = async (req, res) => {
    try {
        //Check teacher
        const { firstname, lastname, email, password } = req.body
        var user = await User.findOne({ email })
        if (user) {
            return res.status(400).send('User Already exists');
        }
        const salt = await bcrypt.genSalt(10)
        user = new User({
            firstname,
            lastname,
            email,
            password,
            role: "teacher",
        })

        //Encrypt
        user.password = await bcrypt.hash(password, salt);
        await user.save();

        res.send('Register Teacher Success');

    } catch (err) {
        console.log(err)
        res.status(500).send('Server Error!')
    }
};

exports.registerStudent = async (req, res) => {
    try {
        //Check student
        const { firstname, lastname, email, password } = req.body
        var user = await User.findOne({ email })
        if (user) {
            return res.status(400).send('User Already exists');
        }
        const salt = await bcrypt.genSalt(10)
        user = new User({
            firstname,
            lastname,
            email,
            password,
            role: "student",
        })

        //Encrypt
        user.password = await bcrypt.hash(password, salt);
        await user.save();

        res.send('Register Student Success');

    } catch (err) {
        console.log(err)
        res.status(500).send('Server Error!')
    }
};

exports.login = async (req, res) => {
    try {
        const { email, password } = req.body;
        var user = await User.findOneAndUpdate({ email }, { new: true });
        if (user) {
          // Check Password
          const isMatch = await bcrypt.compare(password, user.password);
    
          if (!isMatch) {
            return res.status(400).send("Password Invalid!!");
          }
          // Payload
          const payload = {
            user: {
              email: user.email,
              role: user.role,
            },
          };
          // Generate Token
          jwt.sign(payload, "jwtSecret", { expiresIn: 3600 }, (err, token) => {
            if (err) throw err;
            res.json({ token, payload });
          });
        } else {
          return res.status(400).send("User Not found!!!");
        }
      } catch (err) {
        console.log(err);
        res.status(500).send("Server Error!");
      }
    };

    exports.currentUser = async (req,res) =>{
        try{
        //console.log('controller',req.user)
            const user = await User.findOne({email:req.user.email})
            .select('-password').exec();
            res.send(user);
            
        }catch(err){
        console.log(err)
        res.status(500).send("Server Error!");

        }
    }

exports.listUser = async (req, res) => {
    try {

        res.send('list Get User')
    } catch (err) {
        console.log(err)
        res.status(500).send('Server Error!')
    }
};

exports.editUser = async (req, res) => {
    try {

        res.send('edit User')
    } catch (err) {
        console.log(err)
        res.status(500).send('Server Error!')
    }
}

exports.deleteUser = async (req, res) => {
    try {

        res.send('remove User')
    } catch (err) {
        console.log(err)
        res.status(500).send('Server Error!')
    }
}