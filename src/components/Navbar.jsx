import React from "react";
import { Link } from "react-router-dom";


const Navbar = () => {
  return (
    <div className="sticky top-0 z-50 bg-black/80 backdrop-blur-xl border-b border-white/10">
      <div className="navbar max-w-7xl mx-auto px-4 text-white">

        {/* Left Section */}
        <div className="navbar-start">
          <div className="dropdown">
            <label tabIndex={0} className="btn btn-ghost lg:hidden text-white">
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
                  d="M4 6h16M4 12h8m-8 6h16"
                />
              </svg>
            </label>
            <ul
              tabIndex={0}
              className="menu menu-sm dropdown-content mt-3 p-3 shadow-xl bg-black/90 backdrop-blur rounded-xl w-52 border border-white/10"
            >
              <li><a className="hover:text-blue-400">Home</a></li>
              <li><a className="hover:text-blue-400">Gallery</a></li>
              <li><a className="hover:text-blue-400">Pricing</a></li>
              <li><a className="hover:text-blue-400">Contact</a></li>
            </ul>
          </div>

          {/* Logo */}
          <a className="text-2xl font-extrabold tracking-wide text-white">
            AI<span className="text-blue-500">Vision</span>
          </a>
        </div>

        {/* Center Menu */}
        <div className="navbar-center hidden lg:flex">
          <ul className="menu menu-horizontal px-1 gap-6 text-sm font-medium">
            <li>
              <a className="hover:text-blue-400 transition">Home</a>
            </li>
            <li>
              <a className="hover:text-blue-400 transition">Gallery</a>
            </li>
            <li>
              <a className="hover:text-blue-400 transition">AI Tools</a>
            </li>
            <li>
              <a className="hover:text-blue-400 transition">Pricing</a>
            </li>
            <li>
              <a className="hover:text-blue-400 transition">Contact</a>
            </li>
          </ul>
        </div>

        {/* Right CTA */}
        <div className="navbar-end flex gap-3">
        <Link to="/users"> <button className="btn btn-ghost text-white hover:text-blue-400">
            Users
          </button></Link>

          <Link to="/register">  <button className="btn bg-blue-600 hover:bg-blue-700 text-white rounded-xl px-6 shadow-lg shadow-blue-600/30">
            Sign up
          </button></Link> 
        </div>
      </div>
    </div>
  );
};

export default Navbar;
