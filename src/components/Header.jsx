import React from 'react';
import { Link } from 'react-router-dom';
import logo from "../assets/dental.png"
import "./Header.css"

//blue-#114d73 green-#23aba1

function Header() {

    return (
        <nav className="navbar navbar-expand-lg navbar-light bg-light ">
            <div className="container navbar position-relative" >
                <div className='w-100 d-flex justify-content-between px-3 container'>
                    <div className='' >
                        <img src={logo} alt='' className='logo' />
                        <Link className="navbar-brand fw-bold fs-4 " style={{ color: '#114d73' }} to="/">DentalCare</Link>

                        <button className="navbar-toggler " type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav">
                            <span className="navbar-toggler-icon md:ml-5"></span>
                        </button>
                    </div>
                    <div className="collapse navbar-collapse" id="navbarNav">
                        <ul className="navbar-nav ms-auto">
                            <li className="nav-item fw-semibold "  ><Link className="nav-link" style={{ color: '#114d73' }} to="/">Home</Link></li>
                            <li className="nav-item fw-semibold"><Link className="nav-link" style={{ color: '#114d73' }} to="/about">About Us</Link></li>
                            <li className="nav-item fw-semibold"><Link className="nav-link" style={{ color: '#114d73' }} to="/services">Services</Link></li>
                            <li className="nav-item fw-semibold "><Link className="nav-link" style={{ color: '#114d73' }} to="/contact">Contact</Link></li>
                        </ul>
                    </div>
                </div>
            </div>
        </nav>
    );
}

export default Header;
