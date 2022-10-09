import { NavLink } from "react-router-dom";

export const Book = ({book}) => {
    console.log(book);
   const {image,title,subtitle,price}=book;
  return (
    <div>
          <div className="relative overflow-hidden transition duration-300 transform rounded shadow-lg lg:hover:-translate-y-2 hover:shadow-2xl">
            <img
              className="object-cover w-full h-56 md:h-64 xl:h-80"
              src={image}
              alt="Person"
            />
            <div className="absolute inset-0 flex flex-col justify-center px-5 py-4 text-center transition-opacity duration-300 bg-black bg-opacity-75 opacity-0 hover:opacity-100">
              <p className="mb-1 text-lg font-bold text-gray-100">
                {title}
              </p>
              <p className="mb-4 text-xs text-gray-100">{subtitle}</p>
              <p className="mb-4  tracking-wide text-red-400">
                {price}
              </p>
              <div className="flex items-center justify-center space-x-3">
                <NavLink
                  to="/"
                  className=" font-bold text-2xl text-teal-600 transition-colors duration-300 hover:text-teal-300"
                >
                  Download Now
                </NavLink>
                
              </div>
            </div>
          </div>
        </div>
  );
};