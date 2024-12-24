import { Brand } from "./Components/Brand";
import Explore from "./Components/Explore";
import Hero from "./Components/Hero";
import Pricing from "./Components/Pricing";

export default function Home() {
  return (
    <>
      <Hero />
      <Brand />
      <Explore />
      <Pricing />
    </>
  );
}

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
