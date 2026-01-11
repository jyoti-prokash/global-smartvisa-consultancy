import React from "react";
import logo from "../../assets/logo.jpg";

const Navbar = () => {
  const Menu = (
    <>
      <li className="mx-4 font-semibold">
        <a href="#">HOME</a>
      </li>
      <li className="mx-4 font-semibold">
        <a href="#">SERVICE</a>
      </li>
      <li className="mx-4 font-semibold">
        <a href="#">ABOUT</a>
      </li>
      <li className="mx-4 font-semibold">
        <a href="#">CONTACT</a>
      </li>
    </>
  );

  return (
    <div className="navbar bg-base-100 shadow-sm px-6 lg:px-72">
      
      {/* Logo */}
      <div className="flex-1">
        <img className="w-28" src={logo} alt="logo" />
      </div>

      {/* Desktop Menu (Large Screen) */}
      <div className="hidden lg:flex">
        <ul className="menu menu-horizontal">{Menu}</ul>
      </div>

      {/* Mobile Menu (Small Screen) */}
      <div className="dropdown dropdown-end lg:hidden">
        <label tabIndex={0} className="btn btn-ghost btn-circle">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="h-6 w-6"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d="M4 6h16M4 12h16M4 18h7"
            />
          </svg>
        </label>

        <ul
          tabIndex={0}
          className="menu menu-sm dropdown-content mt-3 w-52 rounded-box bg-base-100 p-2 shadow"
        >
          {Menu}
        </ul>
      </div>
    </div>
  );
};

export default Navbar;
