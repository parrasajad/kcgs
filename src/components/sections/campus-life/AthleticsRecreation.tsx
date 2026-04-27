export default function AthleticsRecreation() {
  return (
    <div className="rts-campus-section rts-section-padding">
      <div className="container">
        <div className="row">
          <div className="rts-section rt-center mb--45">
            <h3 className="rts-section-title">
              Athletics, Recreation, & Wellness
            </h3>
          </div>
        </div>
        <div className="row g-5">
          {/* single item */}
          <div className="col-lg-4 col-md-6 col-sm-6">
            <div className="single-item">
              <div className="single-item__content">
                <div className="single-item__image">
                  <img
                    src="/assets/images/campus-life/athletics-img-2.webp"
                    alt="Track & Field"
                    className="w-full h-[250px] object-cover"
                  />
                </div>
                <div className="single-item__meta">
                  <h5 className="item-title">
                    <a href="#">Track & Field</a>
                  </h5>
                  <p className="item-description">
                    Promoting physical fitness and endurance through various
                    track and field events and regular athletic training.
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
                  <img
                    src="/assets/images/campus-life/sqay-toper.webp"
                    alt="Martial Arts (SQAY)"
                    className="w-full h-[250px] object-cover"
                  />
                </div>
                <div className="single-item__meta">
                  <h5 className="item-title">
                    <a href="#">Martial Arts (SQAY)</a>
                  </h5>
                  <p className="item-description">
                    Training students in SQAY, the traditional martial art of
                    Kashmir, fostering discipline, strength, and cultural pride.
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
                  <img
                    src="/assets/images/campus-life/camping.webp"
                    alt="Outdoor Adventures"
                    className="w-full h-[250px] object-cover"
                  />
                </div>
                <div className="single-item__meta">
                  <h5 className="item-title">
                    <a href="#">Outdoor Adventures</a>
                  </h5>
                  <p className="item-description">
                    Organizing annual camping trips and outdoor activities that
                    build teamwork, leadership, and a love for nature.
                  </p>
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
