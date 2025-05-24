import React from 'react';

function Services() {
    const services = [
        { icon: 'bi bi-heart', title: 'Checkup', desc: 'Routine checkups for healthy teeth.' },
        { icon: 'bi bi-star', title: 'Whitening', desc: 'Brighten your smile safely.' },
        { icon: 'bi bi-brush', title: 'Cleaning', desc: 'Professional dental cleaning.' },
        { icon: 'bi bi-emoji-smile', title: 'Braces', desc: 'Orthodontic treatments for alignment.' },
        { icon: 'bi bi-plus-square', title: 'Implants', desc: 'Permanent tooth replacements.' },
        { icon: 'bi bi-heart-pulse', title: 'Emergency Care', desc: '24/7 emergency dental services.' },
    ];

    return (
        <div>
            <h1 className='text-center mb-4'>Our Services</h1>
            <div className="row">
                {services.map((service, idx) => (
                    <div key={idx} className="col-md-4 mb-3">
                        <div className="card text-center">
                            <i className={`${service.icon} display-4 text-primary mt-3`}></i>
                            <div className="card-body">
                                <h5 className="card-title">{service.title}</h5>
                                <p className="card-text">{service.desc}</p>
                            </div>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
}

export default Services;
