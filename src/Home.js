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
            <nav class="navbar navbar-expand-lg navbar-dark bg-info">
                <div class="container">
                    <a href="#" class="navbar-brand"><img src={require('./assets/logo.png')} alt="logo" width="55rem" /></a>
                    <button class="navbar-toggler" data-bs-toggle="collapse" data-bs-target="#mine">
                        <span class="navbar-toggler-icon"></span>
                    </button>
                    <div class="collapse navbar-collapse" id="mine">
                        <li class="nav-item navbar-nav"><a
                            href="#"
                            class="nav-link active">Home</a></li>
                    </div>
                    <div class="float-end"><a
                        href="http://localhost:8000/login"
                        class="nav-link"></a>
                    </div>
                    <Link to={'/login'}><button class="btn btn-danger">Logout</button></Link>
                </div>
            </nav>
            <h1 className="text-center">Welcome to Driftmark Technologies</h1>
        </div>
    )
}

export default Home;