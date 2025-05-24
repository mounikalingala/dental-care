import React from 'react';
import { Link } from 'react-router-dom';
import "./Home.css"
function Home() {
    return (
        <div>
            <section className="text-center mb-4 mr-2"  >
                <h1 className="display-4 fw-bold">Welcome to DentalCare</h1>
                <p className="lead">Your smile, our commitment!</p>
                <Link to="/contact" className="btn border button" >Book Appointment</Link>
            </section>

            <section className="mb-5 text-center mt-5">
                <h2 className='mb-2'>About Our Clinic</h2>
                <p className='mx-5 mt-3 '>We offer professional dental services with a personal touch. Our experienced team of dental professionals uses the latest technology and techniques to ensure that every patient receives personalized, high-quality care. From routine cleanings to advanced cosmetic procedures — your perfect smile is in expert hands.</p>
            </section>

            <section className='text-center d-flex flex-column justify-content-center align-items-center'>
                <h2 className='mb-2'>Our Services</h2>
                <div className="row">
                    <div className="col-md-4  mt-3 mb-3" style={{ "width": "500px" }}>
                        <div className="card text-center">
                            <i className="bi bi-heart-pulse-fill display-4 text-primary mt-3"></i>
                            <div className="card-body">
                                <h5 className="card-title">General Checkup</h5>
                                <p className="card-text">Routine oral exams and dental cleanings to maintain your dental health.Personalized treatment plans, Comfortable, modern clinic environment, Convenient appointment scheduling</p>
                            </div>
                        </div>
                    </div>
                    {/* Repeat for other services */}
                </div>
                <Link to="/services" className="btn button mt-3">View All Services</Link>
            </section>

        </div>
    );
}

export default Home;
