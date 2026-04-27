"use client";

import { useNavbar } from "@/hooks/useNavbar";
import Image from "next/image";
import Link from "next/link";
import { Icon } from "@iconify/react";
import { usePathname } from "next/navigation";
import { useState, useEffect } from "react";

export default function Header() {
  const { toggleSidebar } = useNavbar();
  const pathname = usePathname();
  const isHomePage = pathname === "/";
  const [isSticky, setIsSticky] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const navLinks = [
    { href: "/#home", label: "Home" },
    { href: "/about", label: "About" },
    { href: "/facilities", label: "Facilities" },
    { href: "/academics", label: "Academics" },
    { href: "/updates", label: "Updates" },
    { href: "/contact", label: "Contact" },
  ];

  useEffect(() => {
    const handleScroll = () => {
      setIsSticky(window.scrollY > 100);
    };
    window.addEventListener("scroll", handleScroll);
    handleScroll(); // initialize on mount
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Close mobile menu when route changes
  useEffect(() => {
    setIsMobileMenuOpen(false);
  }, [pathname]);

  return (
    <>
      {/* header area start */}
      <header
        className={`header header__sticky v__1 ${!isHomePage ? "nav-links-dark" : ""} ${isSticky ? "bg-white shadow-md" : ""}`}
      >
        <div className="container-fluid">
          <div className="row">
            <div className="col-xl-12">
              <div className="header__wrapper flex justify-between items-center py-2 px-4 lg:px-8">
                <div className="header__logo">
                  <Link href="/" className="header__logo--link">
                    <Image
                      src={
                        !isHomePage || isSticky
                          ? "/assets/images/header/kc-logo-black.svg"
                          : "/assets/images/header/kc-logo.svg"
                      }
                      alt="Kashmir Cambridge Logo"
                      width={290}
                      height={100}
                      className="w-[200px] lg:w-[290px] h-auto"
                    />
                  </Link>
                </div>

                {/* Desktop Menu (visible on lg and above) */}
                <div className="hidden lg:block header__menu">
                  <div className="navigation">
                    <nav className="navigation__menu">
                      <ul className="flex items-center gap-8">
                        {navLinks.map((link, index) => (
                          <li
                            key={index}
                            className="navigation__menu--item group"
                          >
                            <Link
                              href={link.href}
                              className="navigation__menu--item__link group-hover:!text-primary transition-colors duration-300 font-medium"
                            >
                              {link.label}
                            </Link>
                          </li>
                        ))}
                      </ul>
                    </nav>
                  </div>
                </div>

                {/* Mobile Menu Toggle Button */}
                <div className="lg:hidden flex items-center">
                  <button
                    onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
                    className="p-2 focus:outline-none"
                    aria-label="Toggle Menu"
                  >
                    <Icon
                      icon={isMobileMenuOpen ? "lucide:x" : "lucide:menu"}
                      className={`w-8 h-8 ${!isHomePage || isSticky ? "text-black" : "text-white"}`}
                    />
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Mobile Dropdown Menu (visible on lg and below) */}
        {isMobileMenuOpen && (
          <div className="lg:hidden absolute top-full left-0 w-full bg-white shadow-xl z-50 border-t border-gray-100">
            <nav className="flex flex-col py-4 px-6">
              <ul className="flex flex-col gap-2">
                {navLinks.map((link, index) => (
                  <li
                    key={index}
                    className="border-b border-gray-50 last:border-none"
                  >
                    <Link
                      href={link.href}
                      className="block py-4 text-sm font-medium text-slate-800 hover:text-primary transition-colors"
                      onClick={() => setIsMobileMenuOpen(false)}
                    >
                      {link.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </nav>
          </div>
        )}
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
