import React, { useState } from 'react';
import { toast } from 'react-toastify';

//functions
import { registerTeacher } from '../../functions/auth';

const Register = () => {

    const [value,setValue] = useState({
        firstname:"",
        lastname:"",
        email:"",
        password:"",
        cpassword:""
    });


    const handleChange = (e) => {

        setValue({
          ...value,
          [e.target.name]: e.target.value,
        });
      };

      const handleSubmit = (e) => {
        e.preventDefault();
        console.log(value);
        if (value.password !== value.cpassword) {
            toast.error('รหัสผ่านไม่ตรงกัน')
        } else {
          //code
          registerTeacher(value)
          .then(res=>{
            console.log(res)
            toast.success(res.data)
          }).catch(err=>{
            console.log(err.response.data);
            toast.error(err.response.data)
          })
          
        }
      };

  return (
    <div className="outer-container">
        <div className="left-container">
            <img src="" alt="" />
            <img src="" alt="" />
        </div>
        <div className="user-box">
            <h2>ลงทะเบียน</h2>
            <form onSubmit={handleSubmit} >
                <div className="name">
                    <input type="text" name='firstname' placeholder='ชื่อ' onChange={handleChange} />
                    <input type="text" name='lastname' placeholder='นามสกุล'  onChange={handleChange}/>
                </div>
                <input type="text" name='email' placeholder="อีเมล" onChange={handleChange} />
                <input type="password" name='password' placeholder="รหัสผ่าน" onChange={handleChange} />
                <input type="password" name='cpassword' placeholder="ยืนยันรหัสผ่าน" onChange={handleChange} />
                <button  className='btn-register'>ลงทะเบียน</button>
            </form>
        </div>
    </div>
  )
}

export default Register