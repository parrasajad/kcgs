export default function ArtsAndCulture() {
    return (
        <div className="rts-campus-section rts-section-padding v_2">
            <div className="container">
                <div className="row">
                    <div className="rts-section rt-center mb--45">
                        <h3 className="rts-section-title">Arts & Culture</h3>
                    </div>
                </div>
                <div className="row g-5">
                    {/* single item */}
                    <div className="col-lg-4 col-md-6 col-sm-6">
                        <div className="single-item">
                            <div className="single-item__content">
                                <div className="single-item__image">
                                    <img src="/assets/images/campus/04.jpg" alt="item-image" />
                                </div>
                                <div className="single-item__meta">
                                    <h5 className="item-title"><a href="#">The Arts at Kashmir Cambridge</a></h5>
                                    <p className="item-description">Stanford has a rich tradition of fostering creativity and
                                        the arts, A vibrant campus</p>
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
                                    <img src="/assets/images/campus/05.jpg" alt="item-image" />
                                </div>
                                <div className="single-item__meta">
                                    <h5 className="item-title"><a href="#">Museums</a></h5>
                                    <p className="item-description">The Stanford campus is home to two world-class art museums.
                                    </p>
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
                                    <img src="/assets/images/campus/06.jpg" alt="item-image" />
                                </div>
                                <div className="single-item__meta">
                                    <h5 className="item-title"><a href="#">Performing Arts</a></h5>
                                    <p className="item-description">Presents range performances and distinctive performing arts
                                        experiences.</p>
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
