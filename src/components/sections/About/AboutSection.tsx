import Image from "next/image";

export default function AboutSection() {
  return (
    <>
      {/* About */}
      <section id="about" className="about rts__padding--120-100 v__1">
        <div className="container">
          <div className="row justify-content-md-center align-items-center">
            <div className="col-lg-6 col-md-10">
              <div className="about__images">
                <div className="relative flex mb-[75px] max-xl:mb-0">
                  <div className="w-full">
                    <Image
                      src="/assets/images/about/kc-building.webp"
                      width={500}
                      height={800}
                      alt=""
                      className="max-lg:w-full max-lg:h-[550px] max-lg:object-cover max-lg:mb-[30px]"
                    />
                  </div>
                  <div className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 z-[9]">
                    <div className="rts__circle v__1">
                      <svg className="spinner" viewBox="0 0 100 100">
                        <defs>
                          <path
                            id="circle-2"
                            d="M50,50 m-37,0a37,37 0 1,1 74,0a37,37 0 1,1 -74,0"
                          ></path>
                        </defs>
                        <text>
                          <textPath xlinkHref="#circle-2">
                            Kashmir Cambridge Group of Schools * Estd. 1971 *
                            Explore Future *
                          </textPath>
                        </text>
                      </svg>
                      <div className="rts__circle--icon">
                        <i className="fa-light fa-arrow-right"></i>
                      </div>
                    </div>
                  </div>
                  <div className="absolute bottom-[-30px]  right-[50px] border-l-[20px] border-t-[20px] border-white hidden xl:block">
                    <Image
                      src="/assets/images/about/kc-building-2.webp"
                      width={300}
                      height={800}
                      alt=""
                    />
                  </div>
                </div>
              </div>
            </div>
            <div className="col-lg-6 col-md-10">
              <div className="about__content">
                <h2 className="rts__title">
                  About Kashmir Cambridge Group of Schools
                </h2>
                <p className="rts__description">
                  At Kashmir Cambridge Group of Schools, we believe in the
                  transformative power of education and the boundless potential
                  within every individual. Established in 2009, we have been
                  dedicated to fostering intellectual curiosity, academic
                  excellence, and a vibrant campus community.
                </p>
                <div className="stroke__text v__1">EST. 2009</div>
              </div>
            </div>
          </div>
        </div>
        {/* funfact */}
        <div className="container rts__pt100">
          <div className="row justify-content-center">
            <div className="col-lg-12 rts-funfact v__1">
              <div className="rts-funfact-wrapper">
                <div className="single-cta-item">
                  <h2 className="single-cta-item__title">1000+</h2>
                  <p>Students Enrolled</p>
                </div>
                <div className="single-cta-item">
                  <h2 className="single-cta-item__title">100+</h2>
                  <p>Expert Faculty &amp; Staff</p>
                </div>
                <div className="single-cta-item">
                  <h2 className="single-cta-item__title">20+</h2>
                  <p>Years of Academic Excellence</p>
                </div>
                <div className="single-cta-item">
                  <h2 className="single-cta-item__title">5k+</h2>
                  <p>Successful Alumni</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      {/* About End */}
    </>
  );
}
