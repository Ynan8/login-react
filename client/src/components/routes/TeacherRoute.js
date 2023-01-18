import React, { useEffect, useState } from 'react'
import LoadingToRedirect from './LoadingToRedirect'
import { currentTeacher } from '../functions/auth'

//Redux
import { useSelector } from 'react-redux'



const TeacherRoute = ({children}) => {

    const { user } = useSelector((state) => ({...state}))
    const [ok, setOk] = useState(false)

    useEffect(()=>{
        if(user && user.token){
            currentTeacher(user.token)
            .then(res=>{
                //res
                console.log(res)
                setOk(true)
            }).catch(err=>{
                //err
                console.log(err)
                setOk(false)
            })
        }

    },[])


  return ok
  ? children
  : <LoadingToRedirect/>
}

export default TeacherRoute