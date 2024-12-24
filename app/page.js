import BottomToTop from "./Components/BottomToTop";
import { Brand } from "./Components/Brand";
import Explore from "./Components/Explore";
import Hero from "./Components/Hero";
import Pricing from "./Components/Pricing";
import Services from "./Components/Services";

export default function Home() {
  return (
    <>
      <Hero />
      <Brand />
      <Explore />
      <Services />
      <Pricing />
      <BottomToTop />
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
