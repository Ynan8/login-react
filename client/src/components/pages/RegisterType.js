import React from 'react'
import Teacher from '../../assets/Teacher.png'
import Student from '../../assets/Student.png'



// Router
import { Link } from 'react-router-dom';

const RegisterType = () => {
    return (
        <div className='x'>
            <div className="container-type">
                <div className="back-btn">
                    <span className="material-symbols-outlined">
                    </span>
                    <Link to="/"><a>ย้อนกลับ</a></Link>
                </div>
                <div className="hd-title">
                    <h2>เลือกประเภทผู้ใช้งาน</h2>
                </div>
                <div className="card-flex">
                    <Link to="/register/teacher" className='card'>
                        <img src={Teacher} alt="" />ผู้สอน
                    </Link>
                    <Link to="/register/student" className='card'>
                        <img src={Student} alt="" />นักเรียน
                    </Link>

                   
                </div>
            </div>
        </div >
    )
}

export default RegisterType