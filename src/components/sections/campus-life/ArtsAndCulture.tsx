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
                  <img
                    src="/assets/images/campus-life/art-culture.webp"
                    alt="The Arts"
                    className="w-full h-[250px] object-cover"
                  />
                </div>
                <div className="single-item__meta">
                  <h5 className="item-title">
                    <a href="#">The Arts at Kashmir Cambridge</a>
                  </h5>
                  <p className="item-description">
                    Fostering creativity through diverse platforms where
                    students can express themselves through drawing and design.
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
                    src="/assets/images/campus-life/drug-abbuds-rally.webp"
                    alt="Drug Abuse Rally"
                    className="w-full h-[250px] object-cover"
                  />
                </div>
                <div className="single-item__meta">
                  <h5 className="item-title">
                    <a href="#">Social Responsibility</a>
                  </h5>
                  <p className="item-description">
                    Engaging students in important social causes, such as our
                    community awareness rallies against drug abuse, fostering
                    responsible citizenship.
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
                    src="/assets/images/campus-life/student-life-2.webp"
                    alt="Performing Arts"
                    className="w-full h-[250px] object-cover"
                  />
                </div>
                <div className="single-item__meta">
                  <h5 className="item-title">
                    <a href="#">Performing Arts</a>
                  </h5>
                  <p className="item-description">
                    Encouraging talent in music, drama, and public speaking
                    through regular performances and school competitions.
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
