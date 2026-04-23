export default function Footer() {
    return (
        <>
            {/* footer */}
            <footer id="footer" className="footer v__1">
                <div className="container">
                    <div className="row g-5">
                        <div className="col-lg-4 col-md-6 col-sm-6">
                            <div className="footer__widget">
                                <div className="footer__widget--logo">
                                    <a href="/"><img src="/assets/images/logo/whitelogo.svg" alt="logo" /></a>
                                </div>
                                <p className="footer__widget--description">
                                    We are passionate education dedicated to providing high-quality resources learners
                                    all backgrounds.
                                </p>
                                <div className="footer__widget--social">
                                    <ul className="social">
                                        <li className="social__link"><a href="#"><i className="fa-brands fa-facebook"></i></a></li>
                                        <li className="social__link"><a href="#"><i className="fa-brands fa-instagram"></i></a></li>
                                        <li className="social__link"><a href="#"><i className="fa-brands fa-linkedin"></i></a></li>
                                        <li className="social__link"><a href="#"><i className="fa-brands fa-youtube"></i></a></li>
                                    </ul>
                                </div>
                            </div>
                        </div>
                        <div className="col-lg-3 col-md-6 col-sm-6">
                            <div className="footer__widget">
                                <h6 className="footer__widget--title">Our Campus</h6>
                                <div className="footer__widget--menu">
                                    <ul>
                                        <li><a href="/academic">Academic</a></li>
                                        <li><a href="/athletics">Athletics</a></li>
                                        <li><a href="/campus-life">Campus life</a></li>
                                        <li><a href="/research">Research</a></li>
                                        <li><a href="/academic-area">Academic Area</a></li>
                                    </ul>
                                </div>
                            </div>
                        </div>
                        <div className="col-lg-2 col-md-6 col-sm-6">
                            <div className="footer__widget">
                                <h6 className="footer__widget--title">Our Campus</h6>
                                <div className="footer__widget--menu">
                                    <ul>
                                        <li><a href="/about">About </a></li>
                                        <li><a href="/tution-fee">Tution Fee</a></li>
                                        <li><a href="/alumni">Alumni</a></li>
                                        <li><a href="/faculty">Faculty Staff</a></li>
                                        <li><a href="/event">Event</a></li>
                                    </ul>
                                </div>
                            </div>
                        </div>
                        <div className="col-lg-3 col-md-6 col-sm-6">
                            <div className="footer__widget">
                                <h6 className="footer__widget--title">Quick Button</h6>
                                <div className="footer__widget--button">
                                    <a href="/admission" className="cta__button active">Applying</a>
                                    <a href="/scholarship" className="cta__button">scholarship</a>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </footer>
            {/* footer end */}

            {/* footer copyright */}
            <div className="copyright">
                <div className="container">
                    <div className="row">
                        <div className="col-sm-12">
                            <div className="copyright__wrapper">
                                <p>Copyright &copy; <span id="year"></span> All Rights Reserved by <a href="https://leeep.in">Kashmir Cambridge</a></p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            {/* footer copyright end */}
        </>
    );
}
