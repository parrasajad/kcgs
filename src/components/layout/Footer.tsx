import Link from "next/link";
import Image from "next/image";

export default function Footer() {
  return (
    <>
      {/* footer */}
      <footer id="footer" className="footer v__1 bg-white text-black">
        <div className="container">
          <div className="row g-5">
            <div className="col-lg-4 col-md-6 col-sm-6">
              <div className="footer__widget">
                <div className="footer__widget--logo">
                  <Link href="/">
                    <Image
                      src="/assets/images/header/kc-logo-black.svg"
                      alt="Kashmir Cambridge Logo"
                      width={250}
                      height={100}
                    />
                  </Link>
                </div>
                <p className="footer__widget--description text-black">
                  We are passionate education dedicated to providing
                  high-quality resources learners all backgrounds.
                </p>
                <div className="footer__widget--social">
                  <ul className="social">
                    <li className="social__link">
                      <a
                        href="https://www.facebook.com/people/Kashmir-Cambridge-Group-Of-Schools/61560041427806/"
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        <i className="fa-brands fa-facebook"></i>
                      </a>
                    </li>
                    <li className="social__link">
                      <a
                        href="https://www.instagram.com/kashmircambridge?igsh=djhsZjU5cnZiZzEz"
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        <i className="fa-brands fa-instagram"></i>
                      </a>
                    </li>
                    <li className="social__link">
                      <a
                        href="https://www.youtube.com/@kashmircambridgegroupofsch-y6h"
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        <i className="fa-brands fa-youtube"></i>
                      </a>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
            <div className="col-lg-3 col-md-6 col-sm-6">
              <div className="footer__widget">
                <h6 className="footer__widget--title text-black">Our Campus</h6>
                <div className="footer__widget--menu">
                  <ul>
                    <li>
                      <Link
                        href="/academics"
                        className="text-black hover:text-primary"
                      >
                        Academics
                      </Link>
                    </li>
                    <li>
                      <Link
                        href="/facilities"
                        className="text-black hover:text-primary"
                      >
                        Facilities
                      </Link>
                    </li>
                    <li>
                      <Link
                        href="/campus-life"
                        className="text-black hover:text-primary"
                      >
                        Campus life
                      </Link>
                    </li>
                    <li>
                      <Link
                        href="/updates"
                        className="text-black hover:text-primary-400"
                      >
                        Updates & Events
                      </Link>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
            <div className="col-lg-2 col-md-6 col-sm-6">
              <div className="footer__widget">
                <h6 className="footer__widget--title text-black">Explore</h6>
                <div className="footer__widget--menu">
                  <ul>
                    <li>
                      <Link
                        href="/about"
                        className="text-black hover:text-primary-400"
                      >
                        About
                      </Link>
                    </li>
                    <li>
                      <Link
                        href="/admission"
                        className="text-black hover:text-primary-400"
                      >
                        Admission
                      </Link>
                    </li>
                    <li>
                      <Link
                        href="/contact"
                        className="text-black hover:text-primary-400"
                      >
                        Contact Us
                      </Link>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
            <div className="col-lg-3 col-md-6 col-sm-6">
              <div className="footer__widget">
                <h6 className="footer__widget--title text-black">
                  Quick Button
                </h6>
                <div className="footer__widget--button">
                  <Link href="/admission" className="cta__button bg-accent">
                    Applying
                  </Link>
                  <Link
                    href="/contact"
                    className="cta__button"
                    style={{ backgroundColor: "#5C5957" }}
                  >
                    Contact Us
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </footer>
      {/* footer end */}

      {/* footer copyright */}
      <div className="copyright bg-white text-black border-t border-gray-200">
        <div className="container">
          <div className="row">
            <div className="col-sm-12">
              <div className="copyright__wrapper">
                <p className="text-black">
                  Copyright &copy; <span id="year"></span> All Rights Reserved
                  by{" "}
                  <a href="https://leeep.in" className="text-primary">
                    Kashmir Cambridge
                  </a>
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* footer copyright end */}
    </>
  );
}
