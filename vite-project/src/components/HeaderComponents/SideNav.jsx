import React from "react";

import { Link } from "react-router";
import { CiLogin } from "react-icons/ci";
import { IoFootballOutline } from "react-icons/io5";
import { SiPremierleague } from "react-icons/si";
import { FaHome } from "react-icons/fa";

function SideNav({ setShow }) {
  return (
    <div
      id="drawer-navigation"
      className="fixed top-0 left-0 z-40 h-screen md:w-1/3 p-4 overflow-y-auto transition-transform translate-x-0 bg-white w-64 dark:bg-gray-800"
      tabIndex="-1"
      aria-labelledby="drawer-navigation-label"
    >
      {/* Close Button */}
      <button
        type="button"
        onClick={() => setShow(false)}
        className="text-white bg-[#0891b2] hover:bg-white hover:text-[#0891b2] rounded-lg text-sm w-8 h-8 absolute top-2.5 end-2.5 dark:hover:bg-gray-600"
      >
        <svg
          className="w-[30px] h-3"
          aria-hidden="true"
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 14 14"
        >
          <path
            stroke="currentColor"
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="2"
            d="M1 1l6 6m0 0l6 6M7 7l6-6M7 7l-6 6"
          />
        </svg>
        <span className="sr-only">Close menu</span>
      </button>

      {/* Navigation Items */}
      <div className="py-4">
        <ul className="space-y-2 font-medium">
          <li>
            <Link
              onClick={() => setShow(false)}
              to="/"
              className="flex items-center p-2 text-[#0891b2] rounded-lg hover:bg-[#0891b2] hover:text-white dark:text-white dark:hover:bg-gray-700 md:text-xl"
            >
              <span className="flex items-center gap-2">
                <span className="ml-3">Home</span>
                <FaHome />
              </span>
            </Link>
          </li>
          <li>
            <Link
              onClick={() => setShow(false)}
              to="/leagues"
              className="flex items-center p-2 text-[#0891b2] rounded-lg hover:bg-[#0891b2] hover:text-white dark:text-white dark:hover:bg-gray-700 md:text-xl"
            >
              <span className="flex items-center gap-2">
                <span className="ml-3">Leagues</span>
                <SiPremierleague />
              </span>
            </Link>
          </li>
          <li>
            <Link
              onClick={() => setShow(false)}
              to="/matches"
              className="flex items-center p-2 text-[#0891b2] rounded-lg hover:bg-[#0891b2] hover:text-white dark:text-white dark:hover:bg-gray-700 md:text-xl"
            >
              <span className="flex items-center gap-2">
                <span className="ml-3">Matches</span>
                <IoFootballOutline />
              </span>
            </Link>
          </li>
          <li>
            <Link
              onClick={() => setShow(false)}
              to="/signup"
              className="flex items-center p-2 text-[#0891b2] rounded-lg hover:bg-[#0891b2] hover:text-white dark:text-white dark:hover:bg-gray-700 md:text-xl"
            >
              <span className="flex items-center gap-2">
                <span className="ml-3">Sign up</span>
                <CiLogin />
              </span>
            </Link>
          </li>
          <li>
            <Link
              onClick={() => setShow(false)}
              to="/login"
              className="flex items-center p-2 text-[#0891b2] rounded-lg hover:bg-[#0891b2] hover:text-white dark:text-white dark:hover:bg-gray-700 md:text-xl"
            >
              <span className="flex items-center gap-2">
                <span className="ml-3">Login</span>
                <CiLogin />
              </span>
            </Link>
          </li>
        </ul>
      </div>
    </div>
  );
}

export default SideNav;
