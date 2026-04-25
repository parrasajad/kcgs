export default function CampusLifeSection() {
  return (
    <>
      {/* campus life */}
      <section id="campus-life" className="rts__section rts-section-padding">
        <div className="container">
          <div className="row">
            <div className="col-lg-5 col-md-6">
              <div className="rts__section--wrapper v__2">
                <h2 className="rts__section--title">Campus Life</h2>
                <p className="rts__section--description">
                  Embark on a journey of knowledge, discovery, and growth at
                  Kashmir Cambridge Group of Schools. Our admissions process is
                  designed identify bright, motivated individuals who are eager
                  contribute to our dynamic academic community.
                </p>
                <div className="campus__vector">
                  <img
                    src="/assets/images/campus-life/campus__vector.svg"
                    alt=""
                  />
                </div>
              </div>
            </div>
            <div className="col-lg-7 col-md-6">
              <div className="campus__life">
                {/* single campus */}
                <div className="campus__life--single">
                  <div className="campus__life--single--bg">
                    <img
                      src="/assets/images/campus-life/student-life.webp"
                      alt=""
                    />
                  </div>
                  <div className="campus__life--single--flex">
                    <div className="campus__life--single--content">
                      <h4 className="campus__life--single--title">
                        <a href="/campus-life">Student Life</a>
                      </h4>
                      <p className="campus__life--single--description">
                        Building a vibrant community of creative and
                        accomplished people from around.
                      </p>
                    </div>
                    <div className="campus__life--single--button">
                      <a href="/campus-life">
                        <i className="fa-sharp fa-regular fa-arrow-right"></i>
                      </a>
                    </div>
                  </div>
                </div>
                {/* single campus end */}
                {/* single campus */}
                <div className="campus__life--single">
                  <div className="campus__life--single--bg">
                    <img
                      src="/assets/images/campus-life/art-culture.webp"
                      alt=""
                    />
                  </div>
                  <div className="campus__life--single--flex">
                    <div className="campus__life--single--content">
                      <h4 className="campus__life--single--title">
                        <a href="/campus-life">Arts &amp; Culture</a>
                      </h4>
                      <p className="campus__life--single--description">
                        Building a vibrant community of creative and
                        accomplished people from around.
                      </p>
                    </div>
                    <div className="campus__life--single--button">
                      <a href="/campus-life">
                        <i className="fa-sharp fa-regular fa-arrow-right"></i>
                      </a>
                    </div>
                  </div>
                </div>
                {/* single campus end */}
                {/* single campus */}
                <div className="campus__life--single">
                  <div className="campus__life--single--bg">
                    <img
                      src="/assets/images/campus-life/athletics.webp"
                      alt=""
                    />
                  </div>
                  <div className="campus__life--single--flex">
                    <div className="campus__life--single--content">
                      <h4 className="campus__life--single--title">
                        <a href="/campus-life">Sports</a>
                      </h4>
                      <p className="campus__life--single--description">
                        Building a vibrant community of creative and
                        accomplished people from around.
                      </p>
                    </div>
                    <div className="campus__life--single--button">
                      <a href="/campus-life">
                        <i className="fa-sharp fa-regular fa-arrow-right"></i>
                      </a>
                    </div>
                  </div>
                </div>
                {/* single campus end */}
              </div>
            </div>
          </div>
        </div>
      </section>
      {/* campus life end */}
    </>
  );
}
