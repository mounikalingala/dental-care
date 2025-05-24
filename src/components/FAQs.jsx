import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';

function FAQDropdown() {
    return (
        <div className="container mt-5 p-2 mb-5">
            <h2 className="mb-4">Frequently Asked Questions (FAQs)</h2>
            <div className="accordion" id="faqAccordion">

                {/* FAQ 1 */}
                <div className="">
                    <h2 className="accordion-header" id="headingOne">
                        <button
                            className="accordion-button"
                            type="button"
                            data-bs-toggle="collapse"
                            data-bs-target="#collapseOne"
                            aria-expanded="true"
                            aria-controls="collapseOne"
                        >
                            What services do you offer?
                        </button>
                    </h2>
                    <div
                        id="collapseOne"
                        className="accordion-collapse collapse show"
                        aria-labelledby="headingOne"
                        data-bs-parent="#faqAccordion"
                    >
                        <div className="accordion-body">
                            We provide a full range of dental services including general dentistry, cosmetic dentistry, teeth whitening, dental implants, crowns & bridges, root canal treatment, orthodontics (braces and aligners), and emergency dental care.
                        </div>
                    </div>
                </div>

                {/* FAQ 2 */}
                <div className="">
                    <h2 className="accordion-header" id="headingTwo">
                        <button
                            className="accordion-button collapsed"
                            type="button"
                            data-bs-toggle="collapse"
                            data-bs-target="#collapseTwo"
                            aria-expanded="false"
                            aria-controls="collapseTwo"
                        >
                            How often should I visit the dentist?
                        </button>
                    </h2>
                    <div
                        id="collapseTwo"
                        className="accordion-collapse collapse"
                        aria-labelledby="headingTwo"
                        data-bs-parent="#faqAccordion"
                    >
                        <div className="accordion-body">
                            We recommend a dental check-up and cleaning every 6 months to maintain good oral health and catch any potential issues early.
                        </div>
                    </div>
                </div>

                {/* FAQ 3 */}
                <div className="">
                    <h2 className="accordion-header" id="headingThree">
                        <button
                            className="accordion-button collapsed"
                            type="button"
                            data-bs-toggle="collapse"
                            data-bs-target="#collapseThree"
                            aria-expanded="false"
                            aria-controls="collapseThree"
                        >
                            Do you accept insurance?
                        </button>
                    </h2>
                    <div
                        id="collapseThree"
                        className="accordion-collapse collapse"
                        aria-labelledby="headingThree"
                        data-bs-parent="#faqAccordion"
                    >
                        <div className="accordion-body">
                            Yes, we accept most major dental insurance plans. Please contact our reception team to verify your coverage and benefits before your appointment.
                        </div>
                    </div>
                </div>
                {/* FAQ 4 */}
                <div className="">
                    <h2 className="accordion-header" id="headingTwo">
                        <button
                            className="accordion-button collapsed"
                            type="button"
                            data-bs-toggle="collapse"
                            data-bs-target="#collapseTwo"
                            aria-expanded="false"
                            aria-controls="collapseTwo"
                        >
                            How long does shipping take?
                        </button>
                    </h2>
                    <div
                        id="collapseTwo"
                        className="accordion-collapse collapse"
                        aria-labelledby="headingTwo"
                        data-bs-parent="#faqAccordion"
                    >
                        <div className="accordion-body">
                            Shipping typically takes 3-7 business days depending on your location.
                        </div>
                    </div>
                </div>
                {/* FAQ 5 */}
                <div className="">
                    <h2 className="accordion-header" id="headingTwo">
                        <button
                            className="accordion-button collapsed"
                            type="button"
                            data-bs-toggle="collapse"
                            data-bs-target="#collapseTwo"
                            aria-expanded="false"
                            aria-controls="collapseTwo"
                        >
                            Is teeth whitening safe?
                        </button>
                    </h2>
                    <div
                        id="collapseTwo"
                        className="accordion-collapse collapse"
                        aria-labelledby="headingTwo"
                        data-bs-parent="#faqAccordion"
                    >
                        <div className="accordion-body">
                            Yes! Professional teeth whitening performed by a dental professional is safe and effective, offering noticeable results while protecting your gums and enamel.
                        </div>
                    </div>
                </div>
                {/* FAQ 6 */}
                <div className="">
                    <h2 className="accordion-header" id="headingTwo">
                        <button
                            className="accordion-button collapsed"
                            type="button"
                            data-bs-toggle="collapse"
                            data-bs-target="#collapseTwo"
                            aria-expanded="false"
                            aria-controls="collapseTwo"
                        >
                            What should I do in case of a dental emergency?
                        </button>
                    </h2>
                    <div
                        id="collapseTwo"
                        className="accordion-collapse collapse"
                        aria-labelledby="headingTwo"
                        data-bs-parent="#faqAccordion"
                    >
                        <div className="accordion-body">
                            If you experience a dental emergency, such as a knocked-out tooth, severe toothache, or broken tooth, call our clinic immediately. We offer same-day emergency appointments whenever possible.
                        </div>
                    </div>
                </div>
                {/* FAQ 7 */}
                <div className="">
                    <h2 className="accordion-header" id="headingTwo">
                        <button
                            className="accordion-button collapsed"
                            type="button"
                            data-bs-toggle="collapse"
                            data-bs-target="#collapseTwo"
                            aria-expanded="false"
                            aria-controls="collapseTwo"
                        >
                            Do you treat children?
                        </button>
                    </h2>
                    <div
                        id="collapseTwo"
                        className="accordion-collapse collapse"
                        aria-labelledby="headingTwo"
                        data-bs-parent="#faqAccordion"
                    >
                        <div className="accordion-body">
                            Absolutely! We provide gentle and friendly dental care for patients of all ages, including children, to help them build healthy dental habits for life.
                        </div>
                    </div>
                </div>
                {/* FAQ 8 */}
                <div className="">
                    <h2 className="accordion-header" id="headingTwo">
                        <button
                            className="accordion-button collapsed"
                            type="button"
                            data-bs-toggle="collapse"
                            data-bs-target="#collapseTwo"
                            aria-expanded="false"
                            aria-controls="collapseTwo"
                        >
                            How can I book an appointment?
                        </button>
                    </h2>
                    <div
                        id="collapseTwo"
                        className="accordion-collapse collapse"
                        aria-labelledby="headingTwo"
                        data-bs-parent="#faqAccordion"
                    >
                        <div className="accordion-body">
                            You can book an appointment by calling us at [Your Clinic Phone Number], or through our easy online booking form available on our website’s Contact or Appointment page.
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default FAQDropdown;
