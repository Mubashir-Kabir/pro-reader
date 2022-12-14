import { getAuth, signOut } from "firebase/auth";
import { useContext, useState } from "react";
import { Link, NavLink } from "react-router-dom";
import { AuthContext } from "../contexts/UserContext";
import app from "../Utilities/auth";

export const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const { user } = useContext(AuthContext);
  const auth = getAuth(app);

  const logOut = (event) => {
    event.preventDefault();
    signOut(auth)
      .then(() => {
        //loging out
      })
      .catch((error) => {
        // An error happened.
      });
  };

  return (
    <div className="px-4 py-4 mx-auto  bg-gray-100 sm:max-w-xl md:max-w-full  md:px-24 lg:px-8">
      <div className="relative flex items-center justify-between">
        <div className="flex items-center">
          <NavLink
            to="/"
            aria-label="Company"
            title="Company"
            className="inline-flex items-center mr-8"
          >
            <svg
              className="w-8 text-purple-600"
              viewBox="0 0 24 24"
              strokeLinejoin="round"
              strokeWidth="2"
              strokeLinecap="round"
              strokeMiterlimit="10"
              stroke="currentColor"
              fill="none"
            >
              <rect x="3" y="1" width="7" height="12" />
              <rect x="3" y="17" width="7" height="6" />
              <rect x="14" y="1" width="7" height="6" />
              <rect x="14" y="11" width="7" height="12" />
            </svg>
            <span className="ml-2 text-xl font-bold tracking-wide text-gray-800 uppercase">
              Pro-Reader
            </span>
          </NavLink>
          <ul className=" items-center hidden space-x-8 lg:flex">
            <li>
              <NavLink
                to="/home"
                aria-label="Our product"
                title="Home"
                className={({ isActive }) =>
                  isActive
                    ? "font-medium tracking-wide text-purple-600"
                    : "font-medium tracking-wide text-gray-700 transition-colors duration-200 hover:text-purple-600"
                }
              >
                Home
              </NavLink>
            </li>
            <li>
              <NavLink
                to="/books"
                aria-label="Our product"
                title="Download Books"
                className={({ isActive }) =>
                  isActive
                    ? "font-medium tracking-wide text-purple-600"
                    : "font-medium tracking-wide text-gray-700 transition-colors duration-200 hover:text-purple-600"
                }
              >
                Books
              </NavLink>
            </li>
            <li>
              <NavLink
                to="/about"
                aria-label="Product pricing"
                title="About Us"
                className={({ isActive }) =>
                  isActive
                    ? "font-medium tracking-wide text-purple-600"
                    : "font-medium tracking-wide text-gray-700 transition-colors duration-200 hover:text-purple-600"
                }
              >
                About
              </NavLink>
            </li>
            <li>
              <NavLink
                to="/contact"
                aria-label="About us"
                title="Contact Us"
                className={({ isActive }) =>
                  isActive
                    ? "font-medium tracking-wide text-purple-600"
                    : "font-medium tracking-wide text-gray-700 transition-colors duration-200 hover:text-purple-600"
                }
              >
                Contact
              </NavLink>
            </li>
          </ul>
        </div>
        {user?.uid ? (
          <div className="flex gap-2">
            <button
              onClick={logOut}
              className="hover:text-purple-600 hidden md:block"
            >
              Log Out
            </button>
            <div className="relative flex-shrink-0">
              <span className="absolute bottom-0 right-0 w-4 h-4 bg-green-600 border rounded-full text-gray-800 border-gray-50"></span>
              <img
                src={user.photoURL}
                alt=""
                className="w-12 h-12 border rounded-full bg-gray-500 border-gray-300"
              />
            </div>
          </div>
        ) : (
          <ul className=" items-center hidden space-x-8 lg:flex">
            <li>
              <Link
                to="/sign-in"
                aria-label="Sign in"
                title="Sign in"
                className="font-medium tracking-wide text-gray-700 transition-colors duration-200 hover:text-purple-600"
              >
                Sign in
              </Link>
            </li>
            <li>
              <Link
                to="/sign-up"
                className="inline-flex items-center justify-center h-12 px-6 font-medium tracking-wide text-white transition duration-200 rounded shadow-md bg-purple-600 hover:bg-purple-800 focus:shadow-outline focus:outline-none"
                aria-label="Sign up"
                title="Sign up"
              >
                Sign up
              </Link>
            </li>
          </ul>
        )}
        <div className="lg:hidden">
          <button
            aria-label="Open Menu"
            title="Open Menu"
            className="p-2 -mr-1 transition duration-200 rounded focus:outline-none focus:shadow-outline hover:bg-purple-100 focus:bg-purple-100"
            onClick={() => setIsMenuOpen(true)}
          >
            <svg className="w-5 text-gray-600" viewBox="0 0 24 24">
              <path
                fill="currentColor"
                d="M23,13H1c-0.6,0-1-0.4-1-1s0.4-1,1-1h22c0.6,0,1,0.4,1,1S23.6,13,23,13z"
              />
              <path
                fill="currentColor"
                d="M23,6H1C0.4,6,0,5.6,0,5s0.4-1,1-1h22c0.6,0,1,0.4,1,1S23.6,6,23,6z"
              />
              <path
                fill="currentColor"
                d="M23,20H1c-0.6,0-1-0.4-1-1s0.4-1,1-1h22c0.6,0,1,0.4,1,1S23.6,20,23,20z"
              />
            </svg>
          </button>
          {isMenuOpen && (
            <div className="absolute z-10 top-0 left-0 w-full">
              <div className="p-5 bg-white border rounded shadow-sm">
                <div className="flex items-center justify-between mb-4">
                  <div>
                    <a
                      href="/"
                      aria-label="Company"
                      title="Company"
                      className="inline-flex items-center"
                    >
                      <svg
                        className="w-8 text-purple-600"
                        viewBox="0 0 24 24"
                        strokeLinejoin="round"
                        strokeWidth="2"
                        strokeLinecap="round"
                        strokeMiterlimit="10"
                        stroke="currentColor"
                        fill="none"
                      >
                        <rect x="3" y="1" width="7" height="12" />
                        <rect x="3" y="17" width="7" height="6" />
                        <rect x="14" y="1" width="7" height="6" />
                        <rect x="14" y="11" width="7" height="12" />
                      </svg>
                      <span className="ml-2 text-xl font-bold tracking-wide text-gray-800 uppercase">
                        Pro-Reader
                      </span>
                    </a>
                  </div>
                  <div>
                    <button
                      aria-label="Close Menu"
                      title="Close Menu"
                      className="p-2 -mt-2 -mr-2 transition duration-200 rounded hover:bg-gray-200 focus:bg-gray-200 focus:outline-none focus:shadow-outline"
                      onClick={() => setIsMenuOpen(false)}
                    >
                      <svg className="w-5 text-gray-600" viewBox="0 0 24 24">
                        <path
                          fill="currentColor"
                          d="M19.7,4.3c-0.4-0.4-1-0.4-1.4,0L12,10.6L5.7,4.3c-0.4-0.4-1-0.4-1.4,0s-0.4,1,0,1.4l6.3,6.3l-6.3,6.3 c-0.4,0.4-0.4,1,0,1.4C4.5,19.9,4.7,20,5,20s0.5-0.1,0.7-0.3l6.3-6.3l6.3,6.3c0.2,0.2,0.5,0.3,0.7,0.3s0.5-0.1,0.7-0.3 c0.4-0.4,0.4-1,0-1.4L13.4,12l6.3-6.3C20.1,5.3,20.1,4.7,19.7,4.3z"
                        />
                      </svg>
                    </button>
                  </div>
                </div>
                <nav>
                  <ul className="space-y-4">
                    <li>
                      <NavLink
                        to="/home"
                        aria-label="Our product"
                        title="Our product"
                        className={({ isActive }) =>
                          isActive
                            ? "font-medium tracking-wide text-purple-600"
                            : "font-medium tracking-wide text-gray-700 transition-colors duration-200 hover:text-purple-600"
                        }
                      >
                        Home
                      </NavLink>
                    </li>
                    <li>
                      <NavLink
                        to="/books"
                        aria-label="Our product"
                        title="Our product"
                        className={({ isActive }) =>
                          isActive
                            ? "font-medium tracking-wide text-purple-600"
                            : "font-medium tracking-wide text-gray-700 transition-colors duration-200 hover:text-purple-600"
                        }
                      >
                        Books
                      </NavLink>
                    </li>
                    <li>
                      <NavLink
                        to="/about"
                        aria-label="Product pricing"
                        title="Product pricing"
                        className={({ isActive }) =>
                          isActive
                            ? "font-medium tracking-wide text-purple-600"
                            : "font-medium tracking-wide text-gray-700 transition-colors duration-200 hover:text-purple-600"
                        }
                      >
                        About
                      </NavLink>
                    </li>
                    <li>
                      <NavLink
                        to="/contact"
                        aria-label="About us"
                        title="About us"
                        className={({ isActive }) =>
                          isActive
                            ? "font-medium tracking-wide text-purple-600"
                            : "font-medium tracking-wide text-gray-700 transition-colors duration-200 hover:text-purple-600"
                        }
                      >
                        Contact
                      </NavLink>
                    </li>
                    {user?.uid ? (
                      <li>
                        <button
                          onClick={logOut}
                          aria-label="Sign in"
                          title="Sign in"
                          className="inline-flex items-center justify-center w-full h-12 px-6 font-medium tracking-wide text-white transition duration-200 rounded shadow-md bg-purple-600 hover:bg-purple-800 focus:shadow-outline focus:outline-none"
                        >
                          Log Out
                        </button>
                      </li>
                    ) : (
                      <>
                        <li>
                          <Link
                            to="/sign-in"
                            aria-label="Sign in"
                            title="Sign in"
                            className="inline-flex items-center justify-center w-full h-12 px-6 font-medium tracking-wide text-black transition duration-200 rounded shadow-md bg-gray-100 hover:bg-purple-800 hover:text-white focus:shadow-outline focus:outline-none"
                          >
                            Sign in
                          </Link>
                        </li>
                        <li>
                          <Link
                            to="sign-up"
                            className="inline-flex items-center justify-center w-full h-12 px-6 font-medium tracking-wide text-white transition duration-200 rounded shadow-md bg-purple-600 hover:bg-purple-800 focus:shadow-outline focus:outline-none"
                            aria-label="Sign up"
                            title="Sign up"
                          >
                            Sign up
                          </Link>
                        </li>
                      </>
                    )}
                  </ul>
                </nav>
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

{
  /* ; */
}
