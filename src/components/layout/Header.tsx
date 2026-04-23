"use client";

import { useNavbar } from "@/hooks/useNavbar";
import Image from "next/image";
import Link from "next/link";
import { Icon } from "@iconify/react";

export default function Header() {
  const { toggleSidebar } = useNavbar();

  return (
    <>
      {/* header area start */}
      <header className="header header__sticky v__1">
        <div className="container-fluid">
          <div className="row">
            <div className="col-xl-12">
              <div className="header__wrapper">
                <div className="header__logo">
                  <Link href="/" className="header__logo--link">
                    <Image
                      src="/assets/images/header/kc-logo.svg"
                      alt="leeep"
                      width={290}
                      height={220}
                    />
                  </Link>
                </div>
                <div className="header__menu">
                  <div className="navigation">
                    <nav className="navigation__menu">
                      <ul>
                        <li className="navigation__menu--item">
                          <Link
                            href="/#home"
                            className="navigation__menu--item__link"
                          >
                            Home
                          </Link>
                        </li>

                        <li className="navigation__menu--item has-child has-arrow">
                          <Link
                            href="javascript:void(0);"
                            className="navigation__menu--item__link"
                          >
                            Explore
                          </Link>
                          <ul className="submenu sub__style">
                            <li>
                              <Link href="/#about">About</Link>
                            </li>
                            <li>
                              <Link href="/#campus-life">Facilities</Link>
                            </li>
                          </ul>
                        </li>
                        <li className="navigation__menu--item">
                          <Link
                            href="/#academics"
                            className="navigation__menu--item__link"
                          >
                            Academics
                          </Link>
                        </li>
                        <li className="navigation__menu--item has-child has-arrow">
                          <Link
                            href="/updates"
                            className="navigation__menu--item__link"
                          >
                            Updates
                          </Link>
                          <ul className="submenu sub__style">
                            <li>
                              <Link href="/updates#news">News</Link>
                            </li>
                            <li>
                              <Link href="/updates#events">Events</Link>
                            </li>
                          </ul>
                        </li>

                        <li className="navigation__menu--item">
                          <Link
                            href="/contact"
                            className="navigation__menu--item__link"
                          >
                            Contact
                          </Link>
                        </li>
                      </ul>
                    </nav>
                  </div>
                </div>
                <div className="header__right">
                  <div className="header__right--item">
                    <div
                      id="menu-btn"
                      className="menu__trigger cursor-pointer"
                      onClick={toggleSidebar}
                    >
                      <Icon icon="lucide:menu" className="w-8 h-8 text-white" />
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </header>

      <div className="progress-wrap fixed right-8 bottom-8 h-[46px] w-[46px] cursor-pointer rounded-full z-[10000] opacity-0 invisible translate-y-4 transition-all duration-200 bg-white flex items-center justify-center shadow-md [&.active-progress]:opacity-100 [&.active-progress]:visible [&.active-progress]:translate-y-0 hover:shadow-lg group">
        <Icon
          icon="lucide:arrow-up"
          className="absolute z-10 w-5 h-5 text-black transition-opacity group-hover:-translate-y-1 duration-300"
        />
        <svg
          className="progress-circle svg-content absolute inset-0 w-full h-full text-black -rotate-90 rounded-full bg-white"
          width="100%"
          height="100%"
          viewBox="-1 -1 102 102"
        >
          <path
            d="M50,1 a49,49 0 0,1 0,98 a49,49 0 0,1 0,-98"
            className="stroke-current fill-none stroke-[4px]"
            style={{
              transition: "stroke-dashoffset 10ms linear 0s",
              strokeDasharray: "307.919, 307.919",
              strokeDashoffset: 307.919,
            }}
          ></path>
        </svg>
      </div>
    </>
  );
}
