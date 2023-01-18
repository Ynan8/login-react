import React from 'react'
import { Link , useNavigate} from 'react-router-dom';

//Redux
import { useDispatch } from 'react-redux';


const Home = () => {

  const dispatch = useDispatch()
  const navigate = useNavigate()
  const logout = () =>{
    dispatch({
      type:'LOGOUT',
      payload:null,
    });
    navigate('/')
  }




  return (
    <button onClick={logout}>
      ออกจากระบบ
    </button>
  )
}

export default Home