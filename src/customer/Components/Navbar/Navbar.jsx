import { Fragment, useState } from "react";
import { Link } from "react-router-dom";

function Navbar() {
  const [isNavigation, setIsNavigation] = useState(false);
  const [showMenu, setShowMenu] = useState(false);

  const handleShowMenu = () => {
    setShowMenu(!showMenu);
  };
  return (
    <Fragment>
      {/* Navigation bar */}
      <nav className="bg-blue-700 text-white border-b border-gray-200 lg:px-20 px-2">
        <div className="mx-auto px-4">
          <div className="flex justify-between items-center">
            {/* Logo */}
            <Link to="/" className="flex items-center py-6">
              <img
                src="data:image/jpeg;base64,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"
                alt="Shopwithabhi"
                className="h-8 w-8 mr-2"
              />
              <span className="font-bold text-white text-lg">
                Shop With Zosh
              </span>
            </Link>

            {/* Navigation menu */}
            <ul className="hidden md:flex items-center space-x-4">
              <li>
                <Link
                  to="/men"
                  className="font-medium text-white hover:text-black"
                >
                  Men
                </Link>
              </li>
              <li>
                <Link
                  to="/women"
                  className="font-medium text-white hover:text-black"
                >
                  Women
                </Link>
              </li>
              <li>
                <Link
                  to="/kids"
                  className="font-medium text-white hover:text-black"
                >
                  Kids
                </Link>
              </li>
              <li>
                <Link
                  to="/home-living"
                  className="font-medium text-white hover:text-black"
                >
                  Home & Living
                </Link>
              </li>
              <li>
                <Link
                  to="/beauty"
                  className="font-medium text-white hover:text-black"
                >
                  Beauty
                </Link>
              </li>
              <li>
                <Link
                  to="/offers"
                  className="font-medium text-white hover:text-black"
                >
                  Offers
                </Link>
              </li>
            </ul>

            {/* Search bar */}
            <form className="hidden md:block flex-grow max-w-sm">
              <div className="relative w-full">
                <input
                  type="search"
                  className="block w-full border border-gray-300 rounded-md py-2 pl-10 pr-3 leading-5 placeholder-gray-500 focus:outline-none focus:placeholder-gray-400 focus:border-blue-500 focus:ring-blue-500 focus:text-gray-900 sm:text-sm"
                  placeholder="Search"
                />
                <div className="absolute inset-y-0 left-0 flex items-center justify-center pl-3">
                  <svg
                    className="h-5 w-5 text-gray-400"
                    viewBox="0 0 20 20"
                    fill="currentColor"
                  >
                    <path
                      fillRule="evenodd"
                      d="M7.716 14.966A7.25 7.25 0 1114.35 8.33a7.25 7.25 0 01-6.634 6.635zM15.5 9.75a5.75 5.75 0 10-11.5 0 5.75 5.75 0 0011.5 0z"
                      clipRule="evenodd"
                    />
                  </svg>
                </div>
              </div>
            </form>

            <div className="flex">
              <span className="px-2">User</span>
              <span className="px-2">Cart</span>
            </div>

            {/* Mobile navigation menu */}
            <div className="md:hidden flex items-center">
              <button onClick={handleShowMenu} className="text-white p-2">
                <svg
                  className="h-6 w-6"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                >
                  <path d="M4 6h16M4 12h16M4 18h16" />
                </svg>
              </button>
            </div>
          </div>
        </div>
      </nav>

      {/* Mobile navigation menu */}
      {showMenu && (
        <div className="md:hidden bg-white">
          <ul className="flex flex-col py-4 space-y-2 px-5">
            <li>
              <Link
                to="/men"
                className="font-medium text-white hover:text-black"
              >
                Men
              </Link>
            </li>
            <li>
              <Link
                to="/women"
                className="font-medium text-white hover:text-black"
              >
                Women
              </Link>
            </li>
            <li>
              <Link
                to="/kids"
                className="font-medium text-white hover:text-black"
              >
                Kids
              </Link>
            </li>
            <li>
              <Link
                to="/home-living"
                className="font-medium text-white hover:text-black"
              >
                Home & Living
              </Link>
            </li>
            <li>
              <Link
                to="/beauty"
                className="font-medium text-white hover:text-black"
              >
                Beauty
              </Link>
            </li>
            <li>
              <Link
                to="/offers"
                className="font-medium text-white hover:text-black"
              >
                Offers
              </Link>
            </li>
          </ul>
        </div>
      )}
    </Fragment>
  );
}
export default Navbar;
