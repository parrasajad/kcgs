export default function StudentLife() {
    return (
        <div className="rts-campus-section rts-section-padding">
            <div className="container">
                <div className="row">
                    <div className="rts-section rt-center mb--45">
                        <h3 className="rts-section-title">Student Life</h3>
                    </div>
                </div>
                <div className="row g-5">
                    {/* single item */}
                    <div className="col-lg-4 col-md-6 col-sm-6">
                        <div className="single-item">
                            <div className="single-item__content">
                                <div className="single-item__image">
                                    <img src="/assets/images/campus/01.jpg" alt="item-image" />
                                </div>
                                <div className="single-item__meta">
                                    <h5 className="item-title"><a href="#">Student Affairs</a></h5>
                                    <p className="item-description">Comprising more than 25 offices & centers, Student Affairs
                                        provides a broad of this services.</p>
                                </div>
                            </div>
                        </div>
                    </div>
                    {/* single item end */}
                    {/* single item */}
                    <div className="col-lg-4 col-md-6 col-sm-6">
                        <div className="single-item">
                            <div className="single-item__content">
                                <div className="single-item__image">
                                    <img src="/assets/images/campus/02.jpg" alt="item-image" />
                                </div>
                                <div className="single-item__meta">
                                    <h5 className="item-title"><a href="#">Housing & Dining</a></h5>
                                    <p className="item-description">Nearly all undergraduates and more than 65% graduate
                                        students reside in 81 merit undergraduate</p>
                                </div>
                            </div>
                        </div>
                    </div>
                    {/* single item end */}
                    {/* single item */}
                    <div className="col-lg-4 col-md-6 col-sm-6">
                        <div className="single-item">
                            <div className="single-item__content">
                                <div className="single-item__image">
                                    <img src="/assets/images/campus/03.jpg" alt="item-image" />
                                </div>
                                <div className="single-item__meta">
                                    <h5 className="item-title"><a href="#">Engagement & Diversity</a></h5>
                                    <p className="item-description">Growing up in the Chicago suburbs, Jess found video games to
                                        be a rich portal to alternative.</p>
                                </div>
                            </div>
                        </div>
                    </div>
                    {/* single item end */}
                </div>
            </div>
        </div>
    );
}
