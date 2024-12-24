"use client";
import { gsap } from "gsap";
import { useEffect, useRef } from "react";

import Image from "next/image";

const Hero = () => {
  const textRefs = useRef([]);

  useEffect(() => {
    const timeline = gsap.timeline();
    timeline.fromTo(
      textRefs.current,
      { x: "100%", opacity: 0 }, // Start off-screen to the left
      {
        x: "0%",
        opacity: 1,
        duration: 2,
        stagger: 0.5, // Delay between each text block animation
        ease: "power3.out",
      }
    );
  }, []);
  return (
    <div className=" mx-auto pt-40 bg-shape ">
      <div className="max-w-screen-2xl mx-auto px-10">
        <h1 className="text-2xl font-bold">DIGITAl</h1>
        <h1
          ref={(el) => (textRefs.current[0] = el)}
          className="text-7xl lg:text-[320px] font-black"
        >
          MARK
        </h1>
        <div className="flex flex-col lg:flex-row-reverse  items-center justify-between">
          <h1
            ref={(el) => (textRefs.current[1] = el)}
            className="text-7xl lg:text-[320px] font-black z-30"
          >
            ETING
          </h1>
          <p
            ref={(el) => (textRefs.current[2] = el)}
            className="text-xl font-bold"
          >
            {" "}
            Static and dynamic secure code review can prvent a day before your
            product in even released. We can integraate with your dev
            environment
          </p>
        </div>
        <div className="flex flex-row-reverse lg:mt-[-110px]  z-0 ">
          <Image src="/hero.webp" alt=" logo" width={1100} height={138} />
        </div>
      </div>
    </div>
  );
};

export default Hero;
