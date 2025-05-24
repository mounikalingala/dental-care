import React from 'react';
import doctor from "../assets/female-doctor.jpg"

function AboutUs() {
    return (
        <div className='text-center p-5'>
            <h1 className='text-center mb-4'>About Our Clinic</h1>
            <span className='fw-semibold'>Welcome to DentalCare, where your smile is our priority!</span>
            <p className='mx-5 mb-5'>At DentalCare, we are dedicated to providing exceptional dental care in a warm and friendly environment. Our experienced team of dental professionals uses the latest technology and techniques to ensure that every patient receives personalized, high-quality care.
                From routine check-ups and cleanings to advanced cosmetic and restorative treatments, we are committed to helping you achieve and maintain a healthy, beautiful smile.
                We believe in patient-centered care — taking the time to listen to your concerns, explain your options, and create a custom treatment plan tailored to your needs. Whether you’re visiting us for a simple cleaning or a complete smile makeover, you can trust that you’re in good hands.
                Your comfort is important to us — our modern clinic is designed to create a relaxing, stress-free dental experience for patients of all ages.</p>

            <h2 className='mb-4'>Our Practitioners</h2>
            <div className="row">
                <div className=" mb-3 d-flex justify-content-center align-items-center gap-5">
                    <div className="card text-center">
                        <img src={doctor} className="card-img-top" alt="Dr. Smith" />
                        <div className="card-body">
                            <h5 className="card-title">Dr. Jane Smith</h5>
                            <p className="card-text">Chief Dental Surgeon</p>
                        </div>
                    </div>
                    <div className="card text-center">
                        <img src={doctor} className="card-img-top" alt="Dr. Smith" />
                        <div className="card-body">
                            <h5 className="card-title">Dr. Jeo shan</h5>
                            <p className="card-text">Orthodontist & Invisalign Specialist</p>
                        </div>
                    </div>
                    <div className="card text-center">
                        <img src={doctor} className="card-img-top" alt="Dr. Smith" />
                        <div className="card-body">
                            <h5 className="card-title">Dr. Smith kour</h5>
                            <p className="card-text">Root Canal Specialist & Restorative Dentist</p>
                        </div>
                    </div>
                </div>
            </div>

            <h2 className='mt-5'>Our Mission</h2>
            <p className='mx-5 mb-5 mt-4' >At DentalCare, our mission is to provide high-quality, compassionate dental care that enhances the health, confidence, and well-being of our patients.

                We are committed to creating a positive and comfortable experience for every individual who walks through our doors. Our team strives to build lasting relationships based on trust, respect, and personalized care, ensuring that each patient receives the attention and treatment they deserve.

                We aim to stay at the forefront of dental technology and techniques, offering modern, effective solutions for all your oral health needs — from preventive care to advanced cosmetic and restorative treatments.

                Your healthy, beautiful smile is our greatest reward.</p>
        </div>
    );
}

export default AboutUs;
