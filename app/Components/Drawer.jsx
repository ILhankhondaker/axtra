import Image from "next/image";

const Drawer = () => {
  return (
    <div className="drawer">
      <input id="my-drawer" type="checkbox" className="drawer-toggle" />
      <div className="drawer-content ">
        {/* Page content here */}
        <label htmlFor="my-drawer" className="drawer-button btn-lg">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            class="h-5 w-4 tex-9xl"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path
              stroke-linecap="round"
              stroke-linejoin="round"
              stroke-width="2"
              d="M4 6h16M4 12h16M4 18h7"
            />
          </svg>
        </label>
      </div>
      <div className="drawer-side">
        <label
          htmlFor="my-drawer"
          aria-label="close sidebar"
          className="drawer-overlay"
        ></label>
        <ul className="menu bg-base-200 text-base-content grid grid-cols-1 gap-y-48 content-center  min-h-full w-80 p-4">
          {/* Sidebar content here */}
          <Image
            src="/site-logo-white.webp"
            alt=" logo"
            width={180}
            height={38}
          />

          <li className="text-white text-xl font-bold">
            <h6 className="font-black text-3xl text-white">Follow Us</h6>
            <a className="link link-hover">Dribbble</a>
            <a className="link link-hover">Behance</a>
            <a className="link link-hover">Instagram</a>
            <a className="link link-hover">Facebook</a>
            <a className="link link-hover">Twitter</a>
            <a className="link link-hover">YouTube</a>
          </li>
          <li className="text-white text-xl font-bold">
            <a className="link link-hover">About</a>
            <a className="link link-hover">contact</a>
            <a className="link link-hover">Career</a>
            <a className="link link-hover">blog</a>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Drawer;
