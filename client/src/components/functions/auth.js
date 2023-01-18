import axios from 'axios';


export const registerTeacher = async(value)=>
await axios.post(process.env.REACT_APP_API+'/register/teacher',value);

export const registerStudent = async(value)=>
await axios.post(process.env.REACT_APP_API+'/register/student',value);

export const login = async(value)=>
await axios.post(process.env.REACT_APP_API+'/login',value);

export const currentUser = async(authtoken)=>
await axios.post(process.env.REACT_APP_API+'/current-user',{},
{
    headers:{
        authtoken,
    },
});

export const currentTeacher = async(authtoken)=>
await axios.post(process.env.REACT_APP_API+'/current-teacher',{},
{
    headers:{
        authtoken,
    },
});

