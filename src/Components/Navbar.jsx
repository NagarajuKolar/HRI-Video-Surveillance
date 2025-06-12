import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { FaMoon, FaSignInAlt, FaUser, FaUpload, FaHome, FaSun } from 'react-icons/fa';
import Hrilogo from '/public/LogoHRI.png';

import '../Css/Navbar.css';

function Navbar() {
    const [isDarkTheme, setIsDarkTheme] = useState(false);

    useEffect(() => {
        const savedTheme = localStorage.getItem('theme');
        if (savedTheme === 'dark') {
            document.body.classList.add('bg-dark', 'text-light');
            setIsDarkTheme(true);
        }
    }, []);

    const toggleTheme = () => {
        setIsDarkTheme(!isDarkTheme);
        if (!isDarkTheme) {
            document.body.classList.add('bg-dark', 'text-light');
            localStorage.setItem('theme', 'dark');
        } else {
            document.body.classList.remove('bg-dark', 'text-light');
            localStorage.setItem('theme', 'light');
        }
    };

    return (
        <nav className="navbar navbar-expand-lg fixed-top custom-navbar shadow-sm">
            <div className="container-fluid">
                <Link className="navbar-brand d-flex align-items-center" to="/">
                    <img src={Hrilogo} alt="Logo" className="navbar-logo" />
                    <span className="fw-bold fs-4">HRI Surveillance</span>
                </Link>

                <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarContent">
                    <span className="navbar-toggler-icon"></span>
                </button>

                <div className="collapse navbar-collapse justify-content-between" id="navbarContent">
                    <ul className="navbar-nav mx-auto text-center">
                        <li>
                            <Link className="nav-link mx-2 d-flex align-items-center justify-content-center gap-1" to="/">
                                <FaHome /> <span>Home</span>
                            </Link>
                        </li>
                        <li className="nav-item">
                            <Link className="nav-link mx-2 d-flex align-items-center justify-content-center gap-1" to="/uploads">
                                <FaUpload /> <span>Uploads</span>
                            </Link>
                        </li>
                        <li className="nav-item dropdown">
                            <a className="nav-link dropdown-toggle mx-2" href="#" role="button" data-bs-toggle="dropdown">
                                Features
                            </a>
                            <ul className="dropdown-menu dropdown-menu-dark">
                                <li><Link className="dropdown-item" to="/results">Results</Link></li>
                                <li><Link className="dropdown-item" to="/analytics">Analysis</Link></li>
                            </ul>
                        </li>
                        <li className="nav-item">
                            <Link className="nav-link mx-2" to="/aboutus">About Us</Link>
                        </li>
                    </ul>

                    <div className="d-flex align-items-center gap-2">
                        <button
                            className="btn btn-sm me-2 btn-outline-dark dark-theme"
                            onClick={toggleTheme}
                            title="Toggle Theme"
                        >
                            {isDarkTheme ? <FaSun /> : <FaMoon />}
                            <span className='ms-1'>{isDarkTheme ? "Light" : "Dark"}</span>
                        </button>
                        <Link to="/login" className="btn btn-sm me-2 btn-outline-dark auth-btn">
                            <FaSignInAlt className="me-1" /> Login
                        </Link>
                        <Link to="/signup" className="btn btn-sm me-2 btn-warning  auth-btn">
                            <FaUser className="me-1" /> Signup
                        </Link>
                    </div>
                </div>
            </div>
        </nav>
    );
}

export default Navbar;
