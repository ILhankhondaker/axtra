"use client";
import { gsap } from "gsap";

import Image from "next/image";
import Link from "next/link";
import Drawer from "./Drawer";
const NavBar = () => {
  //   const NavMenu = (
  //     <>
  //       <li>
  //         <Link className=" hover:text-white " href="/">
  //           Home
  //         </Link>
  //       </li>

  //       <li>
  //         {" "}
  //         <Link className=" hover:text-white  " href="/">
  //           About
  //         </Link>
  //       </li>
  //       <li>
  //         {" "}
  //         <Link className=" hover:text-white  " href="/">
  //           Pages
  //         </Link>
  //       </li>
  //       <li>
  //         {" "}
  //         <Link className=" hover:text-white  " href="/">
  //           Services
  //         </Link>
  //       </li>
  //       <li>
  //         {" "}
  //         <Link className=" hover:text-white  " href="/">
  //           Team
  //         </Link>
  //       </li>
  //       <li>
  //         {" "}
  //         <Link className=" hover:text-white  " href="/">
  //           Blog
  //         </Link>
  //       </li>
  //       <li>
  //         {" "}
  //         <Link className=" hover:text-white  " href="/">
  //           Contact
  //         </Link>
  //       </li>
  //     </>
  //   );

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

  return (
    <div>
      <div className="navbar px-5">
        <div className="navbar-start">
          <div className="dropdown">
            <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-5 w-5 "
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M4 6h16M4 12h8m-8 6h16"
                />
              </svg>
            </div>
            <ul
              tabIndex={0}
              className="menu menu-sm dropdown-content bg-base-100 rounded-box z-[1] mt-3 w-52 p-2 shadow"
              onMouseEnter={handleMouseEnter}
              onMouseLeave={handleMouseLeave}
            >
              {NavMenu}
            </ul>
          </div>
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
    </div>
  );
};

export default NavBar;
