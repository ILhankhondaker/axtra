import Image from "next/image";

const Explore = () => {
  return (
    <div className="hero bg-black text-white min-h-screen">
      <div className="hero-content flex justify-between flex-col lg:flex-row">
        <Image
          src="/explore.webp"
          alt=" logo"
          width={280}
          height={238}
          className="max-w-sm w-80 rounded-lg shadow-2xl"
        />
        <div className="p-5 lg:p-20">
          <h1 className="uppercase my-5 font-bold">Who We Are</h1>
          <h1 className="text-3xl lg:text-7xl font-bold uppercase mb-5">
            We are leading digital marketing agency.
          </h1>
          <p className="py-6 w-72 justify-content lg:w-96 ml-2 lg:ml-80">
            We’re a team of strategic mdigital marketing working globally with
            largest brands, We believe that progress only happens when you
            refused to play things safe. We combine ideas and behaviors, and
            insights with design, technological data to produce brand
            experiences that customers love our services.
          </p>
        </div>
      </div>
    </div>
  );
};

export default Explore;