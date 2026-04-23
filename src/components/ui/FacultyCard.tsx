import React from "react";

interface FacultyCardProps {
    image: string;
    name: string;
    designation: string;
    email?: string;
    phone?: string;
    phoneDisplay?: string;
    specialty?: string;
}

export default function FacultyCard({
    image,
    name,
    designation,
    email,
    phone,
    phoneDisplay,
    specialty,
}: FacultyCardProps) {
    return (
        <div className="col-lg-6 col-md-11">
            <div className="single-staff">
                <div className="single-staff__content">
                    <div className="staf-image">
                        <img src={image} alt="staff-image" />
                    </div>
                    <div className="staf-info">
                        <h5 className="name">{name}</h5>
                        <span className="designation">{designation}</span>
                        <div className="staf-info__social">
                            <a href="#"><i className="fa-brands fa-facebook-f"></i></a>
                            <a href="#"><i className="fa-brands fa-linkedin-in"></i></a>
                            <a href="#"><i className="fa-brands fa-medium"></i></a>
                            <a href="#"><i className="fa-brands fa-youtube"></i></a>
                        </div>
                        <a href={`mailto:${email}`} className="email-contact">
                            <span><i className="fa-light fa-envelope"></i></span>{email}
                        </a>
                        <a href={`callto:${phone}`} className="phone-contact">
                            <span><i className="fa-light fa-phone"></i></span>{phoneDisplay}
                        </a>
                        <div className="staf-info__speciality">
                            <p>{specialty}</p>
                        </div>
                        <a href="/faculty-details" className="rts-theme-btn border-btn">More Details</a>
                    </div>
                </div>
            </div>
        </div>
    );
}
