import React, { useState, useEffect } from 'react'
import { useNavigate } from 'react-router-dom'
import { toast } from 'react-toastify';


const LoadingToRedirect = () => {

    const [count, setCount] = useState(1)
    const navigate = useNavigate()



    useEffect(()=>{
        const interval = setInterval(()=>{
            setCount((currentCount)=> --currentCount)
        },1000)
        //Redirect
        count === 0 &&  navigate('/')
        return () => clearInterval(interval)

    },[count])

    return (
    
           <h1>กรุณาเข้าสู่ระบบ</h1>
     
    )
}

export default LoadingToRedirect