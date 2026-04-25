"use client";

import { useNavbar } from "@/hooks/useNavbar";

export default function MobileMenu() {
  const { isSidebarOpen, closeSidebar } = useNavbar();

  return (
    <>
      {/* offcanvase menu */}
      {/* header style two */}
      <div id="side-bar" className={`side-bar${isSidebarOpen ? " show" : ""}`}>
        <button className="close-icon-menu" onClick={closeSidebar}>
          <i className="far fa-times"></i>
        </button>
        {/* inner menu area desktop start */}
        <div className="inner-main-wrapper-desk">
          <div className="thumbnail">
            <img src="/assets/images/logo/darklogo.svg" alt="" />
          </div>
          <div className="inner-content">
            <p className="disc">
              A modern HTML template for education, offering intuitive design
              &amp; essential features for seamless learning experiences.
            </p>
            {/* offcanvase banner */}
            <div className="offcanvase__banner mt--50">
              <div className="offcanvase__banner--content">
                <img src="/assets/images/offcanvase.jpg" alt="offcanvase" />
                <a href="/admission" className="rts-theme-btn">
                  Apply Now
                </a>
              </div>
            </div>
            <div className="offcanvase__info">
              <div className="offcanvase__info--content">
                <a href="callto:+61485826710">
                  <span>
                    <i className="fa-sharp fa-light fa-phone"></i>
                  </span>
                  +(61) 485-826-710
                </a>
                <a href="#">
                  <span>
                    <i className="fa-sharp fa-light fa-location-dot"></i>
                  </span>
                  Yarra Park, Melbourne, Australia
                </a>
                <div className="offcanvase__info--content--social">
                  <p className="title">Follow Us:</p>
                  <div className="social__links">
                    <a href="https://www.facebook.com/people/Kashmir-Cambridge-Group-Of-Schools/61560041427806/" target="_blank" rel="noopener noreferrer">
                      <i className="fa-brands fa-facebook"></i>
                    </a>
                    <a href="https://www.instagram.com/kashmircambridge?igsh=djhsZjU5cnZiZzEz" target="_blank" rel="noopener noreferrer">
                      <i className="fa-brands fa-instagram"></i>
                    </a>
                    <a href="https://www.youtube.com/@kashmircambridgegroupofsch-y6h" target="_blank" rel="noopener noreferrer">
                      <i className="fa-brands fa-youtube"></i>
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        {/* mobile menu area start */}
        <div className="mobile-menu-main">
          <nav className="nav-main mainmenu-nav mt--30">
            <ul className="mainmenu metismenu" id="mobile-menu-active">
              <li>
                <a href="/" className="main">
                  Home
                </a>
              </li>
              <li className="has-droupdown">
                <a href="#" className="main">
                  Pages
                </a>
                <ul className="submenu mm-collapse">
                  <li>
                    <a className="mobile-menu-link" href="/about">
                      About Us
                    </a>
                  </li>
                  <li>
                    <a className="mobile-menu-link" href="/athletics">
                      Athletics
                    </a>
                  </li>
                  <li className="has-dropdown third-lvl">
                    <a href="javascript:void(0);">Faculty</a>
                    <ul className="submenu third-lvl base">
                      <li>
                        <a className="mobile-menu-link" href="/faculty-sub">
                          Faculty
                        </a>
                      </li>
                      <li>
                        <a
                          className="mobile-menu-link"
                          href="/faculty-sub-details"
                        >
                          Faculty Details
                        </a>
                      </li>
                      <li>
                        <a className="mobile-menu-link" href="/faculty">
                          Faculty
                        </a>
                      </li>
                      <li>
                        <a className="mobile-menu-link" href="/faculty-details">
                          Faculty Staff details
                        </a>
                      </li>
                    </ul>
                  </li>
                  <li>
                    <a className="mobile-menu-link" href="/research">
                      Research
                    </a>
                  </li>
                </ul>
              </li>
              <li className="has-droupdown">
                <a href="#" className="main">
                  Academics
                </a>
                <ul className="submenu mm-collapse">
                  <li>
                    <a className="mobile-menu-link" href="/academic">
                      Academic
                    </a>
                  </li>
                  <li>
                    <a className="mobile-menu-link" href="/admission">
                      Admission
                    </a>
                  </li>
                  <li>
                    <a className="mobile-menu-link" href="/academic-area">
                      Academic Area
                    </a>
                  </li>
                  <li>
                    <a className="mobile-menu-link" href="/campus-life">
                      Campus Life
                    </a>
                  </li>
                  <li>
                    <a className="mobile-menu-link" href="/scholarship">
                      Scholarship
                    </a>
                  </li>
                  <li>
                    <a className="mobile-menu-link" href="/tution-fee">
                      Tution Fee
                    </a>
                  </li>
                  <li>
                    <a className="mobile-menu-link" href="/alumni">
                      Alumni
                    </a>
                  </li>
                  <li>
                    <a className="mobile-menu-link" href="/program-single">
                      Program Single
                    </a>
                  </li>
                  <li>
                    <a className="mobile-menu-link" href="/department-details">
                      Department Details
                    </a>
                  </li>
                </ul>
              </li>

              <li className="has-droupdown">
                <a href="/updates" className="main">
                  Updates
                </a>
                <ul className="submenu mm-collapse">
                  <li>
                    <a className="mobile-menu-link" href="/updates#news">
                      News & Announcements
                    </a>
                  </li>
                  <li>
                    <a className="mobile-menu-link" href="/updates#events">
                      Upcoming Events
                    </a>
                  </li>
                </ul>
              </li>
              <li>
                <a href="/contact" className="main">
                  Contact Us
                </a>
              </li>
            </ul>
          </nav>

          <div className="offcanvase__info--content mt--30">
            <a href="callto:+61485826710">
              <span>
                <i className="fa-sharp fa-light fa-phone"></i>
              </span>
              +(61) 485-826-710
            </a>
            <a href="#">
              <span>
                <i className="fa-sharp fa-light fa-location-dot"></i>
              </span>
              Yarra Park, Melbourne, Australia
            </a>
            <div className="offcanvase__info--content--social">
              <p className="title">Follow Us:</p>
              <div className="social__links">
                <a href="https://www.facebook.com/people/Kashmir-Cambridge-Group-Of-Schools/61560041427806/" target="_blank" rel="noopener noreferrer">
                  <i className="fa-brands fa-facebook"></i>
                </a>
                <a href="https://www.instagram.com/kashmircambridge?igsh=djhsZjU5cnZiZzEz" target="_blank" rel="noopener noreferrer">
                  <i className="fa-brands fa-instagram"></i>
                </a>
                <a href="https://www.youtube.com/@kashmircambridgegroupofsch-y6h" target="_blank" rel="noopener noreferrer">
                  <i className="fa-brands fa-youtube"></i>
                </a>
              </div>
            </div>
          </div>
        </div>
        {/* mobile menu area end */}
      </div>
      {/* header style two End */}
    </>
  );
}
