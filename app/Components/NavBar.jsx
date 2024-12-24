"use client";
import { gsap } from "gsap";

import Image from "next/image";
import Link from "next/link";
import { useEffect, useState } from "react";
import Drawer from "./Drawer";
const NavBar = () => {
  const handleMouseEnter = (event) => {
    const spans = event.currentTarget.querySelectorAll("span");
    gsap.to(spans, {
      y: -10,
      stagger: 0.05,
      ease: "power3.out",
      duration: 0.4,
    });
  };

  const handleMouseLeave = (event) => {
    const spans = event.currentTarget.querySelectorAll("span");
    gsap.to(spans, {
      y: 0,
      stagger: 0.05,
      ease: "power3.out",
      duration: 0.4,
    });
  };

  const NavMenu = (
    <>
      {["Home", "About", "Pages", "Services", "Team", "Blog", "Contact"].map(
        (menuItem, index) => (
          <li key={index}>
            <Link
              onMouseEnter={handleMouseEnter}
              onMouseLeave={handleMouseLeave}
              className=""
              href="/"
            >
              {menuItem.split("").map((letter, idx) => (
                <span key={idx}>{letter === " " ? "\u00A0" : letter}</span>
              ))}
            </Link>
          </li>
        )
      )}
    </>
  );

  const [scrollActive, setScrollActive] = useState(false);
  useEffect(() => {
    window.addEventListener("scroll", () => {
      setScrollActive(window.scrollY > 20);
    });
  }, []);

  return (
    <div className=" ">
      <header
        className={
          "fixed top-0 w-screen   z-40 bg-white-500 transition-all " +
          (scrollActive ? "  pt-0 border-b-2 " : " pt-0")
        }
      >
        <div className="navbar z-40 px-5 bg-white top-0  px-20   top-0">
          <div className="navbar-start">
            <Image src="/axtra-logo.webp" alt=" logo" width={180} height={38} />
          </div>
          <div className="navbar-center hidden lg:flex">
            <ul className="menu menu-horizontal px-1 text-xl gap-10">
              {NavMenu}
            </ul>
          </div>
          <div className="navbar-end ">
            <button className="btn btn-ghost btn-circle">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-5 w-5"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
                />
              </svg>
            </button>
            {/* <a className="btn">Button</a> */}
            <div>
              <Drawer />
            </div>
          </div>
        </div>
      </header>
    </div>
  );
};

export default NavBar;
