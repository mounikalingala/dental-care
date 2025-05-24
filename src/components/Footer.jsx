import React from 'react';
import FAQs from "../components/FAQs";

function Footer() {
    return (
        <footer className="bg-dark text-light py-3 mt-5">
            <div className="container text-center">
                &copy; {new Date().getFullYear()} DentalCare | All Rights Reserved
            </div>
            <FAQs />
        </footer>
    );
}

export default Footer;
