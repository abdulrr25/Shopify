"use client"

import React, { useState } from "react";
import Link from "next/link";
import { FaBars } from "react-icons/fa"; // Importing an icon for the menu

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <nav className="navbar relative">
      <div className="container mx-auto flex justify-between items-center py-4">
        <button
          className="lg:hidden text-lg focus:outline-none text-left z-50"
          onClick={toggleMenu}
        >
          <FaBars />
        </button>

        <ul
          className={`${
            isOpen ? "block" : "hidden"
          } lg:flex w-full lg:w-fit gap-4 lg:gap-20 mx-auto font-medium text-black lg:py-0 py-4 absolute lg:relative top-full lg:top-auto left-0 lg:left-auto bg-white lg:bg-transparent w-full lg:w-auto p-4 lg:p-0 shadow-lg lg:shadow-none z-40`}
        >
          <li className="py-2 lg:py-0">
            <Link className="navbar__link relative block" href="#">
              HOME
            </Link>
          </li>
          <li className="py-2 lg:py-0">
            <Link className="navbar__link relative block" href="#">
              CATEGORIES
            </Link>
          </li>
          <li className="py-2 lg:py-0">
            <Link className="navbar__link relative block" href="#">
              MENS
            </Link>
          </li>
          <li className="py-2 lg:py-0">
            <Link className="navbar__link relative block" href="#">
              WOMEN
            </Link>
          </li>
          <li className="py-2 lg:py-0">
            <Link className="navbar__link relative block" href="#">
              JEWELRY
            </Link>
          </li>
          <li className="py-2 lg:py-0">
            <Link className="navbar__link relative block" href="#">
              PERFUME
            </Link>
          </li>
          <li className="py-2 lg:py-0">
            <Link className="navbar__link relative block" href="#">
              BLOG
            </Link>
          </li>
          <li className="py-2 lg:py-0">
            <Link className="navbar__link relative block" href="#">
              HOT OFFER
            </Link>
          </li>
        </ul>
      </div>
      {isOpen && (
        <div className="fixed inset-0 bg-black bg-opacity-50 z-30 lg:hidden" onClick={toggleMenu}></div>
      )}
    </nav>
  );
};

export default Navbar;
