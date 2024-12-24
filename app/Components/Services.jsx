import { MdArrowOutward } from "react-icons/md";
const Services = () => {
  return (
    <div className=" py-10 ">
      <div className="p-5  mx-autto lg:p-20">
        <div className="lg:w-[650px] mx-auto">
          <h1 className="uppercase my-5 font-bold ">Services</h1>
          <h1 className="text-3xl lg:text-7xl font-bold uppercase mb-5 text-center">
            Our marketing <br />
            Services
          </h1>
        </div>
        <div className=" mx-auto  flex justify-evenly ">
          <h1></h1>
          <p className="py-6 justify-content w-auto  lg:w-96   border-l-2 pl-2 lg:pl-10 ">
            We’re a team of strategic mdigital marketing working globally with
            largest brands, We believe that progress only happens when you
            refused to play things safe. We combine ideas and behaviors, and
            insights with design, technological data to produce brand
            experiences that customers love our services.
          </p>
        </div>
      </div>

      <div className="grid justify-items-center border-y   lg:grid-cols-3   py-10">
        <h1 className="text-3xl font-bold uppercase">
          Search Engine <br /> Optimization
        </h1>
        <div className=" my-5 p-2">
          <p className="text-xl font-bold mb-5">
            We help brands stand out through aweful, <br /> elegant visual
            design. Our design mainly <br /> philosophy.
          </p>
          <h1 className="font-bold text-lg">+ Logo Design</h1>
          <h1 className="font-bold text-lg">+ Advertisement</h1>
          <h1 className="font-bold text-lg">+ Promotion</h1>
        </div>
        <div>
          <button className="btn py-20 px-12 bg-white border  rounded-full font-bold text-black hover:text-white ">
            Details <MdArrowOutward />
          </button>
        </div>
      </div>
      <div className="grid justify-items-center border-b    lg:grid-cols-3   py-10">
        <h1 className="text-3xl font-bold uppercase">
          Emil <br /> Marketing
        </h1>
        <div className=" my-5 p-2">
          <p className="text-xl font-bold mb-5">
            We help brands stand out through aweful, <br /> elegant visual
            design. Our design mainly <br /> philosophy.
          </p>
          <h1 className="font-bold text-lg">+ Logo Design</h1>
          <h1 className="font-bold text-lg">+ Advertisement</h1>
          <h1 className="font-bold text-lg">+ Promotion</h1>
        </div>
        <div>
          <button className="btn py-20 px-12 bg-white border  rounded-full font-bold text-black hover:text-white ">
            Details <MdArrowOutward />
          </button>
        </div>
      </div>
      <div className="grid justify-items-center border-b    lg:grid-cols-3   py-10">
        <h1 className="text-3xl font-bold uppercase">
          COntent <br /> Marketing
        </h1>
        <div className=" my-5 p-2">
          <p className="text-xl font-bold mb-5">
            We help brands stand out through aweful, <br /> elegant visual
            design. Our design mainly <br /> philosophy.
          </p>
          <h1 className="font-bold text-lg">+ Logo Design</h1>
          <h1 className="font-bold text-lg">+ Advertisement</h1>
          <h1 className="font-bold text-lg">+ Promotion</h1>
        </div>
        <div>
          <button className="btn py-20 px-12 bg-white border  rounded-full font-bold text-black hover:text-white ">
            Details <MdArrowOutward />
          </button>
        </div>
      </div>
      <div className="grid justify-items-center border-b w-auto    lg:grid-cols-3   py-10">
        <h1 className="text-3xl font-bold uppercase">
          Social <br /> Marketing
        </h1>
        <div className=" my-5 p-2">
          <p className="text-xl font-bold mb-5">
            We help brands stand out through aweful, <br /> elegant visual
            design. Our design mainly <br /> philosophy.
          </p>
          <h1 className="font-bold text-lg">+ Logo Design</h1>
          <h1 className="font-bold text-lg">+ Advertisement</h1>
          <h1 className="font-bold text-lg">+ Promotion</h1>
        </div>
        <div>
          <button className="btn py-20 px-12 bg-white border  rounded-full font-bold text-black hover:text-white ">
            Details <MdArrowOutward />
          </button>
        </div>
      </div>
    </div>
  );
};

export default Services;
