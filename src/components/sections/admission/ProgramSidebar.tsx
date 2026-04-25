export default function ProgramSidebar() {
    return (
        <>
            <div className="program-sidebar">
                {/* curriculum */}
                <div className="program-curriculum">
                    <h6 className="heading-title">Admission Quick Links</h6>
                    <div className="program-menu">
                        <ul className="list-unstyled">
                            <li><a href="/admission"><span><i className="fa-light fa-arrow-right"></i></span>Admission Process</a></li>
                            <li><a href="/tution-fee"><span><i className="fa-light fa-arrow-right"></i></span>Fee Structure</a></li>
                            <li><a href="/academics"><span><i className="fa-light fa-arrow-right"></i></span>Academics</a></li>
                            <li><a href="/facilities"><span><i className="fa-light fa-arrow-right"></i></span>Campus Facilities</a></li>
                            <li><a href="/contact"><span><i className="fa-light fa-arrow-right"></i></span>Contact Us</a></li>
                        </ul>
                    </div>
                </div>
                {/* contact info */}
                <div className="program-info">
                    <h5>Admission Helpline</h5>
                    <p>Contact our admission desk</p>
                    <div className="contact-info">
                        <h5>Contact:</h5>
                        <a href="mailto:info@kcgs.edu.in">info@kcgs.edu.in</a>
                        <a href="callto:+911234567890">+91 123 456 7890</a>
                    </div>
                    <div className="social-info">
                        <h5>Social Info:</h5>
                        <div className="social-info-link">
                            <a href="https://www.facebook.com/people/Kashmir-Cambridge-Group-Of-Schools/61560041427806/" target="_blank" rel="noopener noreferrer"><i className="fa-brands fa-facebook"></i></a>
                            <a href="https://www.instagram.com/kashmircambridge?igsh=djhsZjU5cnZiZzEz" target="_blank" rel="noopener noreferrer"><i className="fa-brands fa-instagram"></i></a>
                            <a href="https://www.youtube.com/@kashmircambridgegroupofsch-y6h" target="_blank" rel="noopener noreferrer"><i className="fa-brands fa-youtube"></i></a>
                        </div>
                    </div>
                </div>

                {/* join event */}
                <div className="program-event">
                    <div className="program-event-content">
                        <p>Join us for our upcoming</p>
                        <h4 className="event-title">Campus Tour & Interaction Session</h4>
                        <div className="single-event-content-meta">
                            <div className="event-time">
                                <span><i className="fa-sharp fa-thin fa-clock"></i></span>
                                <span>10:00 am - 12:00 pm</span>
                            </div>
                            <div className="event-place">
                                <span><i className="fa-sharp fa-thin fa-location-dot"></i></span>
                                <span>Kashmir Cambridge Campus</span>
                            </div>
                            <div className="event-date">
                                <span><i className="fal fa-calendar"></i></span>
                                <span>Every Saturday</span>
                            </div>
                        </div>
                        <a href="/contact" className="rts-theme-btn with-arrow btn-white lh-100">Book A Tour <span><i
                            className="fa-thin fa-arrow-right"></i></span></a>
                    </div>
                </div>
            </div>
        </>
    );
}
