import { NavLink } from "react-router-dom";

export const LandingPageCard = () => {
  return (
    <div className="px-4 py-16 mx-auto text-left sm:max-w-xl md:max-w-full lg:max-w-screen-xl md:px-24 lg:px-8 lg:py-20">
      <div className="p-8 rounded  sm:p-16">
        <div className="flex flex-col">
          <div className="mb-6">
            <h2 className="font-sans text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl sm:leading-none">
              The quick, brown fox
              <br className="hidden md:block" />
              jumps over{' '}
              <span className="inline-block text-purple-600">
                a lazy dog
              </span>
            </h2>
          </div>
          <div className="">
            <p className="mb-4 text-base text-gray-700">
              Sed ut perspiciatis unde omnis iste natus error sit voluptatem
              accusantium doloremque rem aperiam, eaque ipsa quae. Sed ut
              perspiciatis unde omnis iste. Sed ut perspiciatis unde omnis iste
              error sit voluptatem accusantium doloremque rem aperiam.
            </p>
            <NavLink to='/books' className="inline-flex items-center justify-center  h-12 px-6 font-medium tracking-wide text-white transition duration-200 rounded shadow-md bg-purple-600 hover:bg-purple-800 mr-4 focus:shadow-outline focus:outline-none">
                Visit Books
            </NavLink>
            <NavLink
              to="/about"
              aria-label=""
              className="inline-flex items-center font-semibold transition-colors duration-200 text-purple-400 hover:text-purple-800"
            >
              Learn more..
            </NavLink>
          </div>
        </div>
      </div>
    </div>
  );
};