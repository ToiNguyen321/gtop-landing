"use client";

import { Transition } from "@headlessui/react";
import Link from "next/link";
import { usePathname, useRouter } from "next/navigation";
import React, { useState, useEffect } from "react";
import { HiBars3, HiOutlineXMark } from "react-icons/hi2";

import { menuItems } from "@/data/menuItems";
import { siteDetails } from "@/data/siteDetails";
import Container from "./Container";

const Header: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const pathname = usePathname();
  const router = useRouter();

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  // Handle scroll detection
  useEffect(() => {
    const handleScroll = () => {
      const scrollTop = window.scrollY;
      setIsScrolled(scrollTop > 10);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Function to handle navigation with smooth scroll
  const handleNavigation = (url: string) => {
    const isHomePage = pathname === "/";

    if (isHomePage) {
      // If on homepage, just scroll to section
      const element = document.querySelector(url);
      if (element) {
        element.scrollIntoView({ behavior: "smooth" });
      }
    } else {
      // If on other pages, navigate to homepage first, then scroll
      router.push(`/${url}`);
    }

    // Close mobile menu if open
    if (isOpen) {
      setIsOpen(false);
    }
  };

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 mx-auto w-full transition-all duration-300 ${
        isScrolled ? "bg-white shadow-lg" : "bg-transparent"
      }`}
    >
      <Container className="!px-0">
        <nav
          className={`mx-auto flex justify-between items-center py-2 px-5 md:py-4 transition-all duration-300 ${
            isScrolled
              ? "bg-white"
              : "bg-white md:bg-transparent shadow-md md:shadow-none"
          }`}
        >
          {/* Logo */}
          <Link href="/" className="flex items-center gap-2">
            {/* <FaFingerprint className="text-foreground min-w-fit w-7 h-7" /> */}
            <img
              src={siteDetails.siteLogo}
              className="text-foreground min-w-fit w-8 h-8"
              alt={siteDetails.siteName}
            />
            <span className="manrope text-xl font-semibold text-foreground cursor-pointer">
              {siteDetails.siteName}
            </span>
          </Link>

          {/* Desktop Menu */}
          <ul className="hidden md:flex space-x-6">
            {menuItems.map((item) => (
              <li key={item.text} className="flex items-center">
                <button
                  onClick={() => handleNavigation(item.url)}
                  className="text-foreground hover:text-foreground-accent transition-colors bg-transparent border-none cursor-pointer"
                >
                  {item.text}
                </button>
              </li>
            ))}
            <li className="flex items-center">
              <button
                onClick={() => handleNavigation("#cta")}
                className="text-black bg-primary hover:bg-primary-accent px-8 py-3 rounded-full transition-colors border-none cursor-pointer"
              >
                Tải ứng dụng
              </button>
            </li>
          </ul>

          {/* Mobile Menu Button */}
          <div className="md:hidden flex items-center">
            <button
              onClick={toggleMenu}
              type="button"
              className="bg-primary text-black focus:outline-none rounded-full w-10 h-10 flex items-center justify-center"
              aria-controls="mobile-menu"
              aria-expanded={isOpen}
            >
              {isOpen ? (
                <HiOutlineXMark className="h-6 w-6" aria-hidden="true" />
              ) : (
                <HiBars3 className="h-6 w-6" aria-hidden="true" />
              )}
              <span className="sr-only">Toggle navigation</span>
            </button>
          </div>
        </nav>
      </Container>

      {/* Mobile Menu with Transition */}
      <Transition
        show={isOpen}
        enter="transition ease-out duration-200 transform"
        enterFrom="opacity-0 scale-95"
        enterTo="opacity-100 scale-100"
        leave="transition ease-in duration-75 transform"
        leaveFrom="opacity-100 scale-100"
        leaveTo="opacity-0 scale-95"
      >
        <div id="mobile-menu" className="md:hidden bg-white shadow-lg border-t">
          <ul className="flex flex-col space-y-4 pt-1 pb-6 px-6">
            {menuItems.map((item) => (
              <li key={item.text} className="flex items-center">
                <button
                  onClick={() => handleNavigation(item.url)}
                  className="text-foreground hover:text-primary block bg-transparent border-none cursor-pointer text-left w-full py-2"
                >
                  {item.text}
                </button>
              </li>
            ))}
            <li className="flex items-center">
              <button
                onClick={() => handleNavigation("#cta")}
                className="text-black bg-primary hover:bg-primary-accent px-5 py-2 rounded-full block w-fit border-none cursor-pointer"
              >
                Bắt đầu ngay
              </button>
            </li>
          </ul>
        </div>
      </Transition>
    </header>
  );
};

export default Header;
