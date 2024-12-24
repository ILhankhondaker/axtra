"use client";
import { gsap } from "gsap";
import Image from "next/image";
import Link from "next/link";
import { useEffect, useRef } from "react";

const Footer = () => {
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
      {["About us", "Contact", "career", "faqs"].map((menuItem, index) => (
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
      ))}
    </>
  );

  const textRefs = useRef([]);

  useEffect(() => {
    // Create a timeline for infinite animation
    const timeline = gsap.timeline({ repeat: -1, yoyo: true }); // Infinite loop with yoyo effect

    textRefs.current.forEach((text, index) => {
      timeline.to(text, {
        y: -20, // Move text up
        duration: 1,
        ease: "power1.inOut",
        delay: index * 0.01, // Stagger effect for wave-like animation
      });
    });

    return () => {
      timeline.kill(); // Clean up animation on component unmount
    };
  }, []);

  return (
    <div className="">
      <footer className="footer grid grid-cols-1 lg:grid-cols-3 bg-black text-white p-10">
        <div>
          <Image
            src="/site-logo-white.webp"
            alt=" logo"
            width={120}
            height={38}
          />
          <h6 className=" footer-title font-bold w-72 mt-10">
            When do they work well, and when do they on us and finally, when do
            we actually need how can we avoid them.
          </h6>
        </div>
        <nav className="uppercase ">
          <h6 className="text-center">Facebook</h6>

          <a className="">Twitter</a>
          <a className="">linkedin</a>
          <a className="">instagram</a>
        </nav>
        <div style={styles.container}>
          {["let's", "talk"].map((word, index) => (
            <span
              key={index}
              ref={(el) => (textRefs.current[index] = el)}
              className="text-5xl  lg:text-7xl font-black uppercase py-5 bg-gradient-to-r from-pink-500 to-yellow-500 bg-clip-text text-transparent "
            >
              {word}
            </span>
          ))}
        </div>
      </footer>
      <footer className="footer bg-black text-base-content border-base-300 border-t px-10 py-10">
        <aside className="grid-flow-col items-center">
          <p className="text-white text-xl">
            © 2022 - 2025 | Alrights reserved <br /> by Wealcoder
          </p>
        </aside>
        <nav className="md:place-self-center md:justify-self-end">
          <ul className="menu menu-horizontal font-bold text-white  gap-2 uppercase">
            {NavMenu}
          </ul>
        </nav>
      </footer>
    </div>
  );
};
const styles = {
  container: {
    display: "flex",
    alignItems: "center",
    justifyContent: "center",

    overflow: "hidden",
  },
  word: {
    fontSize: "2.5rem",
    color: "#fff",
    margin: "0 10px",
    display: "inline-block",
  },
};

export default Footer;
