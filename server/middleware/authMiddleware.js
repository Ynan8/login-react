const jwt = require('jsonwebtoken');



exports.auth = (req,res, next) => {
    try{
        const token = req.headers["authtoken"]


        if(!token){
            return res.status(401).send('No token , authorization denied');
        }
        const decoded = jwt.verify(token,'jwtSecret')

        req.user = decoded.user
        next()

    }catch(err){
        console.log(err)
        res.status(401).send('Token Invalid!!')
    }
}

exports.TeacherCheck = async(req,res, next) => {
    try{
        const { email } = req.user
        const teacherUser = await User.findOne({ email }).exec()

        if(teacherUser.role !== 'teacher'){
            res.status(403).send(err,'คุณไม่ใช่คุณครู')
        }else{
            next()
        }
    }catch(err){
        console.log(err)
        res.status(401).send('คุณไม่ใช่คุณครู')
    }
};