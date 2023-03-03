import React, { useEffect, useState } from 'react'
import { Navbar } from '../Navbar/Navbar';
import { useNavigate } from 'react-router';

function Users() {
    const [users, setUsers] = useState([]);
    const navigate = useNavigate()

    const newuser = () => {
        navigate("/userform")
    }

    useEffect(() => {
        fetch(process.env.REACT_APP_APIURL +"user")
            .then(res => res.json()).then(
                (pastresult) => {
                    setUsers(pastresult)
                }
            )
    }, [])

    const isActive =(username) => {
        fetch(process.env.REACT_APP_APIURL+"user/activate/" + username,{
            method :"PUT",

        }
        ).then(res => res.json()).then((res) => setUsers(res))
    }
    const DeActive = (username) => {
        fetch(process.env.REACT_APP_APIURL +"user/deActivate/" + username, {
            method: "PUT",

        }
        ).then(res => res.json()).then((res) => setUsers(res))
    }


    return (
        <div>

            <Navbar />
            <h1 className='text-center fw-bold m-3'>Users</h1>

            <div className='ms-5 container'>
                <button className='btn btn-info row' onClick={newuser}>Add New User</button>
            </div>
            <div className='container'>


                <table className='table '>
                    <thead>
                        <tr>
                            <th>Name</th>
                            <th>Email</th>
                            <th>Users name</th>
                            <th className='text-center'>Activetion</th>
                        </tr>
                    </thead>
                    <tbody>
                        {
                            users.map(us =>
                                <tr>
                                    <td>{us.name}</td>
                                    <td>{us.email}</td>
                                    <td>{us.username}</td>
                                    <td className='text-center'>
                                        {
                                            !us.isActive &&
                                            <button className='btn btn-warning' onClick={() => { isActive(us.username) }} >Is Active</button>
                                        }
                                        {
                                            us.isActive &&
                                            <button className='btn btn-danger ' onClick={() => { DeActive(us.username) }}>De-Active</button>
                                        }


                                    </td>
                                </tr>
                            )
                        }

                    </tbody>
                </table>
            </div>
        </div>
    )
}

export default Users