import React, { useState } from 'react';


// Router
import { Link } from 'react-router-dom';

// Functions
import { login } from '../../functions/auth';

// Redux
import { useDispatch } from 'react-redux';
import { useNavigate } from 'react-router-dom';

const Login = () => {
    const navigate = useNavigate();
    const dispatch = useDispatch();


    const [value, setValue] = useState({
        email: "",
        password: "",

    });

    const [loading, setLoading] = useState(false);

    const roleBaseRedirect = (role) => {
        console.log(role);
        if (role === "teacher") {
          navigate("/teacher/index");
        } else {
          navigate("/student/index");
        }
      };
    

    const handleChange = (e) => {
        //  console.log(value);
        setValue({
            ...value,
            [e.target.name]: e.target.value,
        });
    };

    const handleSubmit = (e) => {
        setLoading(true);
        e.preventDefault();
        console.log(value);
        //code
        login(value)
          .then((res) => {
            setLoading(false);
            // console.log('res',res.data);
            dispatch({
              type: "LOGIN",
              payload: {
                token: res.data.token,
                email: res.data.payload.user.email,
                role: res.data.payload.user.role,
              },
            });
    
            localStorage.setItem("token", res.data.token);
            roleBaseRedirect(res.data.payload.user.role);
          })
          .catch((err) => {
            setLoading(false);
            console.log(err.response.data);
          });
      };


    

    return (
        <div className="outer-container">
            <div className="left-container">
                <img src="" alt="" />
                <img src="" alt="" />
            </div>
            <div className="user-box">
                <h2>เข้าสู่ระบบ</h2>
                <form onSubmit={handleSubmit}>
                    <input type="text" placeholder='อีเมล' name='email' onChange={handleChange} />
                    <div className="password-box">
                        <input type="password" placeholder='รหัสผ่าน' name='password' onChange={handleChange} />
                        <a href="" className='forgot-password'>ลืมรหัสผ่าน?</a>
                    </div>
                    <button className='btn-login'>เข้าสู่ระบบ</button>
                    <p className='or'>หรือ</p>
                    <Link to="/register"  className='btn-register'>ลงทะเบียน</Link>
                </form>

            </div>
        </div>
    )
};

export default Login