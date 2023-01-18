import React,{ useState,useEffect } from "react";

//Page
import Register from "./components/pages/auth/Register";
import RegisterType from "./components/pages/RegisterType";
import Login from "./components/pages/auth/Login";


//CSS
import './App.css'

//teacher pages
import HomeTeacher from "./components/pages/teacher/Home"

//student pages
import RegisterForm from "./components/pages/auth/StudentRegisterForm"
import HomeStudent from "./components/pages/student/Home"

//function
import { currentUser } from "./components/functions/auth";

// Redux
import { useDispatch } from 'react-redux';


//Rotes
import { Routes, Route } from "react-router-dom";
import UserRoute from "./components/routes/UserRoute";
import TeacherRoute from "./components/routes/TeacherRoute";

import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

function App() {

  const dispatch = useDispatch();
  const idtoken = localStorage.token
  if(idtoken){
    currentUser(idtoken)
    .then(res=>{
      //code
      console.log(res.data)
      dispatch({
        type: "LOGIN",
        payload: {
          token: idtoken,
          email: res.data.email,
          role: res.data.role,
        },
      });
    }).catch(err=>{
      //err
      console.log(err)
    })
  }



  return (
    <div className="App">
    { /* <Register />*/ }
    <ToastContainer />
    <Routes>
      <Route path="/" element={<Login/>} />
      <Route path="/register/teacher" element={<Register/>} />
      <Route path="/register" element={<RegisterType/>} />

      //Route teacher
      <Route path="/teacher/index" element = {
        <TeacherRoute>
          <HomeTeacher />
        </TeacherRoute>
      }  
      />
      
      //Route student
      <Route path="/register/student" element = {<RegisterForm />}  />
      <Route path="/student/index" element = {
        <UserRoute>
          <HomeStudent />
        </UserRoute>
      }  
      />


    </Routes>


    </div>
  );
}

export default App;
