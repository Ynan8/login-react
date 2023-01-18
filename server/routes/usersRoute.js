const express = require('express');
const router = express.Router()

//controller
const {
    login, 
    registerTeacher,
    registerStudent,
    currentUser,
    listUser,
    editUser,
    deleteUser, 
} = require('../controllers/authController')

//middleware
const { auth,TeacherCheck } = require('../middleware/authMiddleware')

//Endpoint http://localhost:3000/auth
//Method   GET
//Access   Publish
router.get('/auth', listUser);

//Endpoint http://localhost:3000/login
//Method   POST
//Access   Publish
router.post('/login', login);

//Endpoint http://localhost:3000/register/teacher
//Method   POST
//Access   Publish
router.post('/register/teacher', registerTeacher);

//Endpoint http://localhost:3000/register/student
//Method   POST
//Access   Publish
router.post('/register/student', registerStudent);

//Endpoint http://localhost:3000/current-user
//Method   POST
//Access   Private
router.post('/current-user',auth, currentUser);

//Endpoint http://localhost:3000/current-teacher
//Method   POST
//Access   Private
router.post('/current-teacher',auth, TeacherCheck, currentUser);


//Endpoint http://localhost:3000/auth
//Method   PUT
//Access   Publish
router.put('/auth', editUser);

//Endpoint http://localhost:3000/auth
//Method   PUT
//Access   Publish
router.delete('/auth', deleteUser);


module.exports = router;