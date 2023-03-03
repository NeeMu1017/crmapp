import React, { useEffect, useState } from 'react'
import { useNavigate, useParams } from 'react-router-dom'
import "./CustomerFrom.css"
import { Navbar } from '../Navbar/Navbar'


export const CustomerFrom = () => {

    const [customer, setcustomer] = useState({})
    const navigate = useNavigate();
    const { customerName } = useParams();






    console.log(customerName)
    useEffect(() => {
        if (customerName) {
            fetch(process.env.REACT_APP_APIURL +"customer/" + customerName).then(res => {
                return res.json();
            }).then((res) => {

                setcustomer(res);
            }
            );
        }
    }, [])
    // function hendalingUpdate (){
    //     fetch("http://localhost:4000/api/customer",{
    //         method: customerName ? "PUT" : "POST",
    //         body : JSON.stringify(customer),
    //         headers : {
    //             "Content-Type" : "application/json"
    //         }
    //     }).then((res) =>{return res.json()})
    //     .then((res) => console.log(res),
    //     navigate("/")
    //     )
    // }



    function handaling() {

        fetch(process.env.REACT_APP_APIURL+"customer", {
            method: customerName ? "PUT" : "POST",
            body: JSON.stringify(customer),
            headers: {
                "Content-Type": "application/json"
            }
        }).then((res) => { return res.json() })
            .then((res) => console.log(res),
                navigate("/")
            )
    }


    return (
        <div>
            <Navbar />
            <div className='conte'>
                <div className='mb-3'>


                    <div className='mb-2'>
                        <label className='form-lable p-3' >Name :</label>
                        <input type='text' placeholder='Name'

                            value={customer.name}
                            className='form-control'
                            onInput={(e) => {

                                setcustomer({ ...customer, name: e.target.value })
                            }}
                        ></input>
                    </div>
                    <div className='mb-2'>
                        <label className='form-lable p-3' >Website :</label>
                        <input type='email' placeholder='Website' className='form-control'
                            value={customer.website}
                            onChange={(e) => {
                                setcustomer({ ...customer, website: e.target.value })
                            }}
                        ></input>
                    </div>
                    <div className='mb-2'>
                        <label className='form-lable p-3' >Revenues :</label>
                        <input type='number' placeholder='Revenues' className='form-control'
                            value={customer.turnover}
                            onInput={(e) => {
                                setcustomer({ ...customer, turnover: e.target.value })
                            }}
                        ></input>
                    </div>
                    <div className='mb-2'>
                        <label className='form-lable p-3' >status :</label>
                        <select className='form-select'
                            onInput={(e) => {
                                setcustomer({ ...customer, status: e.target.value })
                            }}
                        >
                            <option value="New">New</option>
                            <option value='Accespted'>Accepted</option>
                            <option value="Rejected">Rejected</option>
                        </select>
                    </div>
                    <div className='mb-2'>
                        <label className='form-lable p-3' >Nmber of Employ :</label>
                        <input type='number' placeholder='Nmber of Employ :' className='form-control'
                            value={customer.employees}
                            onInput={(e) => {
                                setcustomer({ ...customer, employees: e.target.value })
                            }}
                        ></input>
                    </div>
                    <div className='mb-2'>
                        <label className='form-lable p-3' >CEO :</label>
                        <input type='text' placeholder='CEO' className='form-control'
                            value={customer.ceo}
                            onInput={(e) => {
                                setcustomer({ ...customer, ceo: e.target.value })
                            }}
                        ></input>
                    </div>
                    <div className='mb-3'>
                        <label className='form-lable p-3' >Established year :</label>
                        <input type='number' placeholder='Established year :' className='form-control'
                            value={customer.year}
                            onInput={(e) => {
                                setcustomer({ ...customer, year: e.target.value })
                            }}

                        ></input>
                    </div>
                    <div className='mb-3'>
                        <button type='button' className='btn btn-primary float-end' onClick={handaling} >
                            {
                                customerName &&
                                <span>Update Custemer</span>
                            }
                            {
                                !customerName &&
                                <span> Create New Costomer</span>
                            }
                        </button>
                    </div>
                    {/* <button type='button' className='btn btn-primary float-end' onClick={hendalingUpdate} > Update Costomer </button> */}

                </div>

            </div>
        </div>
    )
}