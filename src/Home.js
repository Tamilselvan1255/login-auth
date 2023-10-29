import React, { useEffect } from 'react';
import { Link, useNavigate } from 'react-router-dom';

const Home = () => {
    const usenavigate = useNavigate();
    useEffect(() => {
        let username = sessionStorage.getItem('username');
        if (username === null || username === '') {
            usenavigate('/login')
        }
    }, [])
    return (
        <div>
            <nav className="navbar navbar-expand-lg navbar-dark bg-info">
                <div className="container">
                    <a href="#" className="navbar-brand"><img src={require('./assets/logo.png')} alt="logo" width="55rem" /></a>
                    <button className="navbar-toggler" data-bs-toggle="collapse" data-bs-target="#mine">
                        <span className="navbar-toggler-icon"></span>
                    </button>
                    <div className="collapse navbar-collapse" id="mine">
                        <li className="nav-item navbar-nav"><a
                            href="#"
                            className="nav-link active">Home</a></li>
                    </div>
                    {/* <div className="float-end"><a
                        href="http://localhost:8000/login"
                        className="nav-link"></a>
                    </div> */}
                    <Link to={'/login'}><button className="btn btn-danger">Logout</button></Link>
                </div>
            </nav>
            <h1 className="text-center">Welcome to Driftmark Technologies</h1>
        </div>
    )
}

export default Home;