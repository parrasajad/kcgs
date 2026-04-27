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
                  <img
                    src="/assets/images/campus-life/student-life.webp"
                    alt="Academic Excellence"
                    className="w-full h-[250px] object-cover"
                  />
                </div>
                <div className="single-item__meta">
                  <h5 className="item-title">
                    <a href="#">Academic Excellence</a>
                  </h5>
                  <p className="item-description">
                    Our dedicated faculty and modern curriculum ensure students
                    receive a world-class education tailored for future success.
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
                    src="/assets/images/campus-life/student-campus.webp"
                    alt="Vibrant Campus"
                    className="w-full h-[250px] object-cover"
                  />
                </div>
                <div className="single-item__meta">
                  <h5 className="item-title">
                    <a href="#">Vibrant Campus</a>
                  </h5>
                  <p className="item-description">
                    Experience a safe and inspiring environment with modern
                    facilities designed to foster creativity, collaboration, and
                    student growth.
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
                    src="/assets/images/campus-life/eco-club-summer-camp.webp"
                    alt="Cultural Engagement"
                    className="w-full h-[250px] object-cover"
                  />
                </div>
                <div className="single-item__meta">
                  <h5 className="item-title">
                    <a href="#">Eco Club & Summer Camps</a>
                  </h5>
                  <p className="item-description">
                    Engaging students in environmental conservation and outdoor
                    learning through our active Eco Club .
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
