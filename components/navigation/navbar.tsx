import { destroyCookie } from "nookies";
import { useContext } from "react";

import { ACCESS_TOKEN_KEY } from "@/constant/auth";
import { UserContext } from "@/store/user-context";

export function Navbar() {
  const userCtx = useContext(UserContext);
  let avatarImgPath = userCtx.user.avatarUrl;

  if (!avatarImgPath) {
    avatarImgPath = "/default-avatar.png";
  }

  const onSignOutHandler = (e: React.MouseEvent<HTMLElement>) => {
    e.preventDefault();
    destroyCookie(null, ACCESS_TOKEN_KEY);
    window.location.reload();
  };

  return (
    <nav
      className="bg-white border-gray-200 dark:bg-gray-900 flex-no-wrap fixed top-0 flex w-full
        items-center justify-between shadow-md shadow-black/5 dark:bg-neutral-600
        dark:shadow-black/10 lg:flex-wrap lg:justify-start z-10"
    >
      <div className="max-w-screen-xl flex flex-wrap items-center justify-between mx-auto px-4 w-full">
        <div className="flex items-center justify-between w-1/2 md:max-w-[512px]">
          <a
            className="flex items-center space-x-3 rtl:space-x-reverse"
            href="localhost:3000"
          >
            <img
              alt="Flowbite Logo"
              className="h-8"
              src="/craft-net-logo.svg"
            />
            <span className="self-center text-2xl font-semibold whitespace-nowrap dark:text-white">
              Craftnet
            </span>
          </a>
          <form className="w-[calc(100%-150px)] mx-auto flex">
            <label
              className="mb-2 text-sm font-medium text-gray-900 sr-only dark:text-white"
              htmlFor="default-search"
            >
              Search
            </label>
            <div className="relative">
              <input
                required
                className="block w-full p-2 text-sm text-gray-900 border border-gray-300 rounded-lg bg-gray-50 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                id="default-search"
                placeholder="Search Crafnet"
                type="search"
              />
            </div>
            <button
              className="p-2.5 ms-1 text-sm font-medium text-white bg-blue-700 rounded-lg border border-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
              type="submit"
            >
              <svg
                aria-hidden="true"
                className="w-4 h-4"
                fill="none"
                viewBox="0 0 20 20"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="m19 19-4-4m0-7A7 7 0 1 1 1 8a7 7 0 0 1 14 0Z"
                  stroke="currentColor"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                />
              </svg>
              <span className="sr-only">Search</span>
            </button>
          </form>
        </div>
        <div className="hidden w-full md:block md:w-auto" id="navbar-default">
          <ul className="font-medium flex flex-col p-4 md:p-0 mt-4 border border-gray-100 rounded-lg bg-gray-50 md:flex-row md:space-x-8 rtl:space-x-reverse md:mt-0 md:border-0 md:bg-white dark:bg-gray-800 md:dark:bg-gray-900 dark:border-gray-700">
            <li>
              <a
                aria-current="page"
                className="block py-2 px-3 text-white bg-blue-700 rounded md:bg-transparent md:text-blue-700 md:p-0 dark:text-white md:dark:text-blue-500"
                href="localhost:3000"
              >
                Home
              </a>
            </li>
            <li>
              <a
                className="block py-2 px-3 text-gray-900 rounded hover:bg-gray-100 md:hover:bg-transparent md:border-0 md:hover:text-blue-700 md:p-0 dark:text-white md:dark:hover:text-blue-500 dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent"
                href="localhost:3000"
              >
                Videos
              </a>
            </li>
            <li>
              <a
                className="block py-2 px-3 text-gray-900 rounded hover:bg-gray-100 md:hover:bg-transparent md:border-0 md:hover:text-blue-700 md:p-0 dark:text-white md:dark:hover:text-blue-500 dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent"
                href="localhost:3000"
              >
                Pages
              </a>
            </li>
            <li>
              <a
                className="block py-2 px-3 text-gray-900 rounded hover:bg-gray-100 md:hover:bg-transparent md:border-0 md:hover:text-blue-700 md:p-0 dark:text-white md:dark:hover:text-blue-500 dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent"
                href="localhost:3000"
              >
                Groups
              </a>
            </li>
          </ul>
        </div>
        <div>
          <button
            className="h-11 rounded-full bg-cyan-300"
            data-dropdown-toggle="dropdownInformation"
            id="dropdownInformationButton"
            type="button"
          >
            <img
              alt="Avatar"
              className="h-full rounded-full"
              src={avatarImgPath}
            />
          </button>

          {/*Dropdown menu*/}
          <div
            className="z-10 hidden bg-white divide-y divide-gray-100 rounded-lg shadow w-44 dark:bg-gray-700 dark:divide-gray-600"
            id="dropdownInformation"
          >
            <div className="px-4 py-3 text-sm text-gray-900 dark:text-white">
              <div>{userCtx.user.getFullName()}</div>
              <div className="font-medium truncate">{userCtx.user.email}</div>
            </div>
            <ul
              aria-labelledby="dropdownInformationButton"
              className="py-2 text-sm text-gray-700 dark:text-gray-200"
            >
              <li>
                <a
                  className="block px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white"
                  href="localhost:3000"
                >
                  Dashboard
                </a>
              </li>
              <li>
                <a
                  className="block px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white"
                  href="localhost:3000"
                >
                  Settings
                </a>
              </li>
              <li>
                <a
                  className="block px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white"
                  href="localhost:3000"
                >
                  Earnings
                </a>
              </li>
            </ul>
            <div className="py-2">
              <button
                className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 dark:hover:bg-gray-600 dark:text-gray-200 dark:hover:text-white w-full text-justify"
                onClick={onSignOutHandler}
              >
                Sign out
              </button>
            </div>
          </div>
        </div>
      </div>
    </nav>
  );
}
