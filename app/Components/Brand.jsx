"use client";
import { gsap } from "gsap";
import Image from "next/image";
import { useEffect, useRef } from "react";

export const Brand = () => {
  const imageRefs = useRef([]);

  useEffect(() => {
    const timeline = gsap.timeline();
    timeline.from(imageRefs.current, {
      opacity: 0,
      y: 50,
      stagger: 0.2, // Delay between each animation
      duration: 6,
      ease: "power3.out",
    });
  }, []);

  const textRef = useRef(null);
  useEffect(() => {
    gsap.fromTo(
      textRef.current,
      { opacity: 0, y: 50 },
      { opacity: 1, y: 0, duration: 2.5, ease: "power3.out" }
    );
  }, []);
  const images = [
    "/brand1.webp",
    "/brand2.webp",
    "/brand3.webp",
    "/brand4.webp",
    "/brand5.webp",
    "/brand6.webp",
  ];

  return (
    <div className="max-w-screen-xl mx-auto px-4 py-20">
      <h1 className="text-center text-xl mb-16 uppercase " ref={textRef}>
        We worked with global largest brands
      </h1>

      <div className="grid justify-items-center gap-y-8 gap-x-4  grid-cols-2 md:grid-cols-3 lg:grid-cols-6 z-10">
        {images.map((src, index) => (
          <Image
            key={index}
            ref={(el) => (imageRefs.current[index] = el)}
            src={src}
            alt={`Image ${index + 1}`}
            width={100}
            height={100}
          />
        ))}
      </div>
    </div>
  );
};
