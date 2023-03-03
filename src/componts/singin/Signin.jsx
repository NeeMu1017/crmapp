import React, {  useState } from "react"
import "./signin.css"
import { useNavigate } from "react-router-dom"


 function Signin() {
    const [Loginditels, setLoginditels] = useState({});
    const [invalidcred, setInvalidcred] = useState(false)

    const navigate = useNavigate();



    function handerlogin() {
        
        setInvalidcred(false)
        fetch(process.env.REACT_APP_APIURL +"user/signin", {
            method: "POST",
            body: JSON.stringify(Loginditels),
            headers: {
                "Content-Type": "application/json"
            },

        }).then((res) => {
            if (res.status === 400) {
                return (
                    setInvalidcred(true)
                )
            } else if (res.status === 200) {
                localStorage.setItem("loggeIn", "true")

                navigate("/")
            }
        }).catch((err) => { console.log(err) })

    }

    return (


        <div className='container'>
            <div className="left">
                <img src="https://img.freepik.com/premium-vector/crm-icons-customer-relationship-management-vector-infographics-template_116137-3703.jpg?w=2000" alt="not loading" />
            </div>
            <div className="right">
                <h3 >Please Loag In</h3>{
                    invalidcred &&
                    <div className="alert alert-danger" role='alert'>
                        Invadlid credentials
                    </div>
                }

                <hr className='mb-5' />
                <form>
                    <div className='mb-3'>
                        <label className='form-label' htmlFor='name'>
                            email Id
                        </label>
                        <input type='email' name="email" className='form-control' onChange={(e) => setLoginditels({ ...Loginditels, email: e.target.value })}></input>
                    </div>
                    <div className='mb-3'>
                        <label className='form-label' htmlFor='name'>
                            Password
                        </label>
                        <input type='Password' name="Password" className='form-control'
                            onChange={(e) => { setLoginditels({ ...Loginditels, password: e.target.value }) }}
                        ></input>
                    </div>
                    <div className="mb-3">
                        <button className='btn btn-success float-end' onClick={handerlogin} >Log In</button>
                    </div>
                    <div className="mb-3">
                        <button className="btn btn-link link"  >If don't have to logged In Please Regisiter frist</button>
                    </div>
                </form>

            </div>


        </div>

    )
}
export default Signin;