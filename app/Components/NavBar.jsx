import Image from "next/image";
import Link from "next/link";
const NavBar = () => {
  const NavMenu = (
    <>
      <li>
        <Link className=" hover:text-white " href="/">
          Home
        </Link>
      </li>

      <li>
        {" "}
        <Link className=" hover:text-white  " href="/">
          About
        </Link>
      </li>
      <li>
        {" "}
        <Link className=" hover:text-white  " href="/">
          Pages
        </Link>
      </li>
      <li>
        {" "}
        <Link className=" hover:text-white  " href="/">
          Services
        </Link>
      </li>
      <li>
        {" "}
        <Link className=" hover:text-white  " href="/">
          Team
        </Link>
      </li>
      <li>
        {" "}
        <Link className=" hover:text-white  " href="/">
          Blog
        </Link>
      </li>
      <li>
        {" "}
        <Link className=" hover:text-white  " href="/">
          Contact
        </Link>
      </li>
    </>
  );
  return (
    <div>
      <div className="navbar px-5">
        <div className="navbar-start">
          <div className="dropdown">
            <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-5 w-5"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M4 6h16M4 12h8m-8 6h16"
                />
              </svg>
            </div>
            <ul
              tabIndex={0}
              className="menu menu-sm dropdown-content bg-base-100 rounded-box z-[1] mt-3 w-52 p-2 shadow"
            >
              {NavMenu}
            </ul>
          </div>
          <Image src="/axtra-logo.webp" alt=" logo" width={180} height={38} />
        </div>
        <div className="navbar-center hidden lg:flex">
          <ul className="menu menu-horizontal px-1 text-xl gap-10">
            {NavMenu}
          </ul>
        </div>
        <div className="navbar-end">
          <a className="btn">Button</a>
        </div>
      </div>
    </div>
  );
};

export default NavBar;
