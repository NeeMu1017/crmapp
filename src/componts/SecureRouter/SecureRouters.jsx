import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router";

function SecureRouters (prop){

const [login,setLogin] =useState(false)
const navigate =useNavigate();

 useEffect(()=>{
    const isloggedinuser = localStorage.getItem("loggeIn");
    if (!isloggedinuser || isloggedinuser !== "true" ){
        navigate("/signin")
    }
    else{
        setLogin(true)
    }
 },[])
 return(
    <React.Fragment>
        {
            login && prop.children 
        }
    </React.Fragment>
 )
}

export default SecureRouters;