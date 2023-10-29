import React, { useEffect, useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import { toast } from 'react-toastify'

const Login = () => {
    const [username, usernameupdate] = useState("")
    const [password, passwordupdate] = useState("")

    const usenavigate = useNavigate();

    useEffect(() => {
        sessionStorage.clear();
    },[])

    const ProceedLogin = (e) => {
        e.preventDefault();
        if (validate()) {
            fetch('http://localhost:8000/user/' + username).then((res) => {
                return res.json();
            }).then((resp) => {
                if(Object.keys(resp).length===0){
                    toast.error('Please enter valid Username')
                } else {
                    if(resp.password === password){
                        toast.success('Logged in successfully')
                        sessionStorage.setItem('username', username);
                        usenavigate('/')
                    } else {
                        toast.error('Please enter valid credentials');
                    }
                }
            }).catch((err) => {
                toast.error('Login failed due to : ' + err.message)
            })
        }
    }

    const validate = () => {
        let result = true;
        if (username === null || username === '') {
            result = false;
            toast.warning("Please enter valid Username")
        }
        if (password === null || password === '') {
            result = false;
            toast.warning("Please enter valid Password")
        }
        return result;
    }
    return (
       <div className='container' style={{width: '800px', position: 'absolute', top: '50%', left: '50%', transform: 'translate(-50%, -50%'}}>
         <div className='row'>
            <div className='offset-lg-3 col-lg-6'>
                <form onSubmit={ProceedLogin} className='container'>
                    <div className='card' id='cards'>
                        <div className='card-header text-center'>
                            <h2>Login</h2>
                        </div>
                        <div className='card-body' id='box'>
                            <div className='form-group mb-3'>
                                <label className='mb-2'>Username<span className='errmsg'>*</span></label>
                                <input value={username} onChange={(e) => usernameupdate(e.target.value)} id='box' className='form-control'></input>
                            </div>
                            <div className='form-group'>
                                <label className='mb-2'>Password<span className='errmsg'>*</span></label>
                                <input type='password' value={password} onChange={(e) => passwordupdate(e.target.value)} id='box' className='form-control'></input>
                            </div>
                        </div>
                        <div className='card-footer'>
                            <button type='submit' className='btn btn-primary'>Login</button>
                            <Link className='btn btn-success' to={'/register'} style={{ marginLeft: "6px" }}>New user</Link>
                        </div>
                    </div>
                </form>
            </div>
        </div>
       </div>
    )
}

export default Login