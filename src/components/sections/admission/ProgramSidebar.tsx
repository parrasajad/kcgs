export default function ProgramSidebar() {
    return (
        <>
            <div className="program-sidebar">
                {/* curriculum */}
                <div className="program-curriculum">
                    <h6 className="heading-title">B.A In African Studies</h6>
                    <div className="program-menu">
                        <ul className="list-unstyled">
                            <li><a href="#"><span><i className="fa-light fa-arrow-right"></i></span>Course
                                Curriculum</a></li>
                            <li><a href="#"><span><i className="fa-light fa-arrow-right"></i></span>Program
                                Faculty</a></li>
                            <li><a href="#"><span><i className="fa-light fa-arrow-right"></i></span>Apply
                                Admission</a></li>
                            <li><a href="#"><span><i className="fa-light fa-arrow-right"></i></span>Scholarship </a>
                            </li>
                            <li><a href="#"><span><i className="fa-light fa-arrow-right"></i></span>Joint Event</a>
                            </li>
                        </ul>
                    </div>
                </div>
                {/* contact info */}
                <div className="program-info">
                    <h5>Department Contact Info</h5>
                    <p>B.A. in Africana Studies</p>
                    <div className="contact-info">
                        <h5>Contact:</h5>
                        <a href="mailto:barry.Kashmir Cambridge@info.com">barry.Kashmir Cambridge@info.com</a>
                        <a href="callto:121">664-254-251</a>
                    </div>
                    <div className="social-info">
                        <h5>Social Info:</h5>
                        <div className="social-info-link">
                            <a href="#"><i className="fa-brands fa-facebook"></i></a>
                            <a href="#"><i className="fa-brands fa-instagram"></i></a>
                            <a href="#"><i className="fa-brands fa-linkedin"></i></a>
                            <a href="#"><i className="fa-brands fa-pinterest"></i></a>
                            <a href="#"><i className="fa-brands fa-youtube"></i></a>
                        </div>
                    </div>
                </div>

                {/* join event */}
                <div className="program-event">
                    <div className="program-event-content">
                        <p>Joint New Event About
                            African History
                        </p>
                        <h4 className="event-title">B.A. in Africana
                            Studies</h4>
                        <div className="single-event-content-meta">
                            <div className="event-time">
                                <span><i className="fa-sharp fa-thin fa-clock"></i></span>
                                <span>10:30 am</span>
                            </div>
                            <div className="event-place">
                                <span><i className="fa-sharp fa-thin fa-location-dot"></i></span>
                                <span>Yarra Park, UK</span>
                            </div>
                            <div className="event-date">
                                <span><i className="fal fa-calendar"></i></span>
                                <span>November 28, 2023</span>
                            </div>
                        </div>
                        <a href="#" className="rts-theme-btn with-arrow btn-white lh-100">Joint Now <span><i
                            className="fa-thin fa-arrow-right"></i></span></a>
                    </div>
                </div>
            </div>
        </>
    );
}
