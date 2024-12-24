import { FaCheck } from "react-icons/fa6";
import { IoIosCheckboxOutline } from "react-icons/io";
const Pricing = () => {
  return (
    <div>
      <div className="hero bg-[#f3ecec] min-h-screen">
        <div className="hero-content flex-col lg:flex-row justify-between">
          <div className="w-auto max-w-sm lg:max-w-2xl  lg:mr-10">
            <h1 className="uppercase text-xl">Pricing Table</h1>
            <h1 className="text-5xl lg:text-7xl font-bold uppercase my-5">
              Be kind to your mind
            </h1>
            <div className="my-10">
              <div
                tabIndex={0}
                className="collapse collapse-plus border-y rounded-none border-base-300 bg-[#f3ecec] "
              >
                <div className="collapse-title text-xl font-bold">
                  Design should enrich our day
                </div>
                <div className="collapse-content">
                  <p className="my-5">
                    Our design services starts and ends with a best-in-class
                    experience strategy that builds brands. Through a process of
                    iteration and prototyping design interfaces that bring joy
                    to people
                  </p>
                </div>
              </div>
              <div
                tabIndex={0}
                className="collapse collapse-plus border-b rounded-none border-base-300 bg-[#f3ecec] "
              >
                <div className="collapse-title text-xl font-bold">
                  Bring their individual experience and creative
                </div>
                <div className="collapse-content">
                  <p className="my-5">
                    This is the second `$item's` accordion body. It is hidden by
                    default, until the collapse plugin adds the appropriate
                    classes that we use to style each element. These classes.
                  </p>
                </div>
              </div>

              <div
                tabIndex={0}
                className="collapse collapse-plus border-b rounded-none border-base-300 bg-[#f3ecec] "
              >
                <div className="collapse-title text-xl font-bold">
                  Design should enrich our day
                </div>
                <div className="collapse-content">
                  <p className="my-5">
                    Our design services starts and ends with a best-in-class
                    experience strategy that builds brands. Through a process of
                    iteration and prototyping design interfaces that bring joy
                    to people
                  </p>
                </div>
              </div>
              <div
                tabIndex={0}
                className="collapse collapse-plus border-b rounded-none border-base-300 bg-[#f3ecec] "
              >
                <div className="collapse-title text-xl font-bold">
                  Developing core web applications
                </div>
                <div className="collapse-content">
                  <p className="my-5">
                    Our design services starts and ends with a best-in-class
                    experience strategy that builds brands. Through a process of
                    iteration and prototyping design interfaces that bring joy
                    to people
                  </p>
                </div>
              </div>
            </div>
          </div>
          <div className="text-center lg:text-left">
            {/* card black */}
            <div className="indicator ">
              <span className="indicator-item indicator-top indicator-end-80% badge bg-[#ff9776] text-white border-none p-3 rounded-sm mr-20">
                Best Value
              </span>
              <div className="grid  grid-cols-6 w-auto max-w-sm lg:max-w-2xl   bg-black text-white   rounded-lg shadow-lg p-10">
                <FaCheck className="text-4xl rounded text-black p-2 bg-[#ff9776]" />
                <div className=" col-span-4">
                  <div className="badge badge-outline p-4">YEARLY</div>
                  <h1 className="text-2xl uppercase font-bold my-5">
                    14 days free
                  </h1>
                  <p>
                    Subscription fee is $129.99 USD and automatically renews
                    each year
                  </p>
                </div>
                <h1 className="text-2xl lg:text-5xl inline">
                  $129<span className="text-xl inline">.99</span>
                </h1>
              </div>
            </div>
            {/* card whie  */}
            <div className=" ">
              <div className="grid  grid-cols-6 w-auto max-w-sm lg:max-w-2xl   bg-white text-black my-5   rounded-lg shadow-lg p-10">
                <IoIosCheckboxOutline className="text-5xl rounded text-gray-500  " />
                <div className="col-span-4">
                  <div className="badge badge-outline p-4">MONTHLY</div>
                  <h1 className="text-2xl uppercase font-bold my-5">
                    7 days free
                  </h1>
                  <p>
                    Subscription fee is $12.99 USD and automatically renews each
                    year.
                  </p>
                </div>
                <h1 className="text-2xl lg:text-5xl inline">
                  $12<span className="text-xl inline">.99</span>
                </h1>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Pricing;
