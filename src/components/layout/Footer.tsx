import Link from "next/link";
import Image from "next/image";

export default function Footer() {
  return (
    <>
      {/* footer */}
      <footer
        id="footer"
        className="border-t-2 text-black border-grey-400 footer v__1 bg-white pt-16 pb-12 lg:pt-[100px] lg:pb-[100px]"
      >
        <div className="container mx-auto px-6 lg:px-8">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-12 gap-12 lg:gap-8">
            <div className="lg:col-span-4 flex flex-col items-start text-left">
              <div className="footer__widget w-full">
                <div className="footer__widget--logo mb-6 flex justify-start">
                  <Link href="/">
                    <Image
                      src="/assets/images/header/kc-logo-black.svg"
                      alt="Kashmir Cambridge Logo"
                      width={250}
                      height={100}
                    />
                  </Link>
                </div>
                <p className="footer__widget--description text-left text-black mb-6 max-w-[320px]">
                  We are passionate education dedicated to providing
                  high-quality resources learners all backgrounds.
                </p>
                <div className="footer__widget--social flex justify-start">
                  <ul className="social flex gap-3">
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
            <div className="lg:col-span-3 flex flex-col items-start text-left">
              <div className="footer__widget">
                <h6 className="text-black font-semibold mb-6">Our Campus</h6>
                <div className="footer__widget--menu">
                  <ul className="flex flex-col gap-3">
                    <li>
                      <Link
                        href="/academics"
                        className="text-black hover:text-primary transition-colors"
                      >
                        Academics
                      </Link>
                    </li>
                    <li>
                      <Link
                        href="/facilities"
                        className="text-black hover:text-primary-400 transition-colors"
                      >
                        Facilities
                      </Link>
                    </li>
                    <li>
                      <Link
                        href="/campus-life"
                        className="text-black hover:text-primary-400 transition-colors"
                      >
                        Campus life
                      </Link>
                    </li>
                    <li>
                      <Link
                        href="/updates"
                        className="text-black hover:text-primary-400 transition-colors"
                      >
                        Updates & Events
                      </Link>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
            <div className="lg:col-span-2 flex flex-col items-start text-left">
              <div className="footer__widget">
                <h6 className="text-black font-semibold mb-6">Explore</h6>
                <div className="footer__widget--menu">
                  <ul className="flex flex-col gap-3">
                    <li>
                      <Link
                        href="/about"
                        className="text-black hover:text-primary-400 transition-colors"
                      >
                        About
                      </Link>
                    </li>
                    <li>
                      <Link
                        href="/admission"
                        className="text-black hover:text-primary-400 transition-colors"
                      >
                        Admission
                      </Link>
                    </li>
                    <li>
                      <Link
                        href="/contact"
                        className="text-black hover:text-primary-400 transition-colors"
                      >
                        Contact Us
                      </Link>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
            <div className="lg:col-span-3 flex flex-col items-start text-left">
              <div className="footer__widget w-full">
                <h6 className="text-black font-semibold mb-6">Quick Button</h6>
                <div className="footer__widget--button flex flex-col gap-4 w-full sm:max-w-[200px]">
                  <Link
                    href="/admission"
                    className="py-3 px-8 text-center bg-primary-400 text-white rounded-full transition-all hover:bg-primary-600 capitalize block w-full"
                  >
                    Applying
                  </Link>
                  <Link
                    href="/contact"
                    className="py-3 px-8 text-center bg-secondary text-white rounded-full transition-all hover:bg-secondary/90 capitalize block w-full"
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
                  Powered by
                  <a href="https://leeep.in" className=" mr-2 text-primary">
                    &nbsp; Leeep
                  </a>
                  &copy; All Rights Reserved
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
