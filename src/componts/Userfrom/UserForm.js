import { useState } from "react"
import React from 'react'
import { useNavigate } from "react-router";

const UserForm = () => {
    const [User, setUser] = useState({});
    const navigate = useNavigate()

    function adduser() {
        console.log(User)
        fetch(process.env.REACT_APP_APIURL+"signup", {
            method: "POST",
            body: JSON.stringify(User),
            headers: {
                "Content-Type": "application/json",
            }
        }).then(() => {
            navigate("/users")
        })
    }

    return (
        <div>
            <h3 className="text-center pt-3"> User Form</h3>
            <div className='container-xl'>
                <div className="mb-3">
                    <label className='form-lable'>Name</label>
                    <input placeholder='Name' className='form-control' type="text"
                        value={User.name}
                        onChange
                        ={(e) => { setUser({ ...User, name: e.target.value }) }}
                    />

                </div>
                <div className="mb-3">
                    <label className='form-lable'>User Name</label>
                    <input placeholder='User Name' className='form-control' type="text"
                        value={User.username}
                        onChange
                        ={(e) => { setUser({ ...User, username: e.target.value }) }}
                    />

                </div>
                <div className="mb-3">
                    <label className='form-lable'>Email</label>
                    <input placeholder='email' className='form-control' type="email"
                        value={User.email}
                        onChange
                        ={(e) => { setUser({ ...User, email: e.target.value }) }}
                    />

                </div>
                <div className="mb-3">
                    <label className='form-lable'>Password</label>
                    <input placeholder='Password' className='form-control'
                        type="password"
                        value={User.password}
                        onChange
                        ={(e) => { setUser({ ...User, password: e.target.value }) }}
                    />

                </div>
                <div className="mb-3 form-check">
                    <label className='form-lable' htmlFor="flexCheckIndeterminateDisabled">Is Activetion</label>
                    <input className='form-check-input' type="checkbox"
                        id="flexCheckIndeterminateDisabled"
                        onChange={(e) => {
                            console.log(e.target.checked);
                            let obj = { ...User };
                            obj.isActive = e.target.checked;
                            setUser(obj);
                        }}

                    />

                </div>
                <button className="btn btn-warning float-end mt-3"
                    onClick={adduser}>Add User</button>
            </div>
        </div>
    )
}

export default UserForm