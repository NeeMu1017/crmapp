import React, { useState } from 'react'
import "./singup.css"
import { useNavigate } from 'react-router';
export default function Singup() {
    const [user,setUser] =  useState({});
    const navigate = useNavigate();

    function handalinRegisiter(){
        console.log(user)
        fetch(process.env.REACT_APP_APIURL +"user/signup",{
            method:"POST",
            body:JSON.stringify(user),
            headers:{
                "Content-Type" : "application/json"
            },
            
        }).then((res)=>{
            navigate("/signin")
            console.log(res)
        }).catch((err) => {console.log(err)})
    }
    return (
        

        <div className='container'>
            <div className="left">
                <img src="https://img.freepik.com/premium-vector/crm-icons-customer-relationship-management-vector-infographics-template_116137-3703.jpg?w=2000" alt="not loading" />
            </div>
            <div className="right">
                <h3 className='mb-5' >Please Regisiter to get started</h3>
                <div className='mb-3'>
                    <label className='form-label' htmlFor='name'>
                        Enter your Name
                    </label>
                    <input type='text' name="name" className='form-control' onChange={(e)=>setUser({...user,name:e.target.value})}></input>
                </div>
                <div className='mb-3'>
                    <label className='form-label' htmlFor='name'>
                        email Id
                    </label>
                    <input type='email' name="email" className='form-control'onChange={(e)=>setUser({...user, email:e.target.value})}></input>
                </div>
                <div className='mb-3'>
                    <label className='form-label' htmlFor='name'>
                        Password
                    </label>
                    <input type='Password' name="Password" className='form-control' onChange={(e)=> setUser({...user,password:e.target.value})}></input>
                </div>
                <button className='btn btn-success float-end'  onClick={handalinRegisiter}>Regisiter</button>
            </div>

        </div>

    )
}