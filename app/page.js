"use client";
import { gsap } from "gsap";
import { useRef } from "react";
export default function Home() {
  const textRef = useRef(null);

  const handleMouseEnter = () => {
    const letters = textRef.current.querySelectorAll("span");
    gsap.to(letters, {
      y: -10,
      stagger: 0.05,
      duration: 0.4,
      ease: "power3.out",
    });
  };

  const handleMouseLeave = () => {
    const letters = textRef.current.querySelectorAll("span");
    gsap.to(letters, {
      y: 0,
      stagger: 0.05,
      duration: 0.4,
      ease: "power3.out",
    });
  };

  const text = "Hover Wave";

  return (
    <div className="">
      <h1 className="text-center text-9xl">lets Try</h1>
      <div style={styles.container}>
        <h1
          ref={textRef}
          style={styles.text}
          onMouseEnter={handleMouseEnter}
          onMouseLeave={handleMouseLeave}
        >
          {text.split("").map((letter, index) => (
            <span key={index} style={styles.letter}>
              {letter === " " ? "\u00A0" : letter}
            </span>
          ))}
        </h1>
      </div>
    </div>
  );
}
const styles = {
  container: {
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    height: "100vh",
    backgroundColor: "#282c34",
  },
  text: {
    fontSize: "3rem",
    fontWeight: "bold",
    color: "#fff",
    cursor: "pointer",
    display: "inline-block",
  },
  letter: {
    display: "inline-block",
  },
};

{
  /* <Image
          className="dark:invert"
          src="/next.svg"
          alt="Next.js logo"
          width={180}
          height={38}
          priority
        /> */
}
