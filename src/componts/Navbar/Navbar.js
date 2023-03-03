import React, { useEffect, useState } from 'react'
import { useNavigate } from 'react-router';
import Sidemenu from '../sidebar/Sidemenu';




export const Navbar = () => {
  const [IsloggedIn, setIsLoggedIn] = useState(false);
  const navigate =useNavigate()
  
  useEffect(()=>{
    const value = localStorage.getItem("loggeIn");
    if (value && value === "true") {
      setIsLoggedIn(true);
    }
    
  })

  function userhandel () {
    navigate('/users')
  }

  function handelLogOut (){
    
    localStorage.removeItem("loggeIn");
    navigate('/signin')
  }

  

  return (
    <nav className='navbar navbar-expand-lg bg-dark'>
    
      <div className='container'>
        <Sidemenu />
        <a className='navbar-brand text-light' href='/'> CRM APP</a>
        <a className='navbar-brand text-light ' href='/ticket'> Ticket</a>
        
      </div>
      
      {
        !IsloggedIn &&
        <span>
          <a className='btn btn-success m-2' href='/singup'>Sing Up</a>
          <a className='btn btn-primary m-2' href='/signin'>Sing In</a>
        </span>
      }
      {
        IsloggedIn &&
        <span>
          
          <button className='btn btn-primary m-2' onClick={handelLogOut} >Sing Out</button>
          <button className='btn btn-success m-2' onClick={userhandel}> Users</button>
        </span>
      }


    </nav>
  )
}
