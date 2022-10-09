import { Link, useLoaderData } from "react-router-dom";

export const BookDetails = () => {
    const {image,title,subtitle,desc,authors,language,pages,price,publisher,year,}=useLoaderData();
    console.log(useLoaderData());
  return (
    <div className="px-4 py-16 mx-auto sm:max-w-xl md:max-w-full lg:max-w-screen-xl md:px-24 lg:px-8 lg:py-20">
      <div className="grid gap-10 items-center
       lg:grid-cols-2">
        <div>
          <img
            className="object-cover w-full h-56 rounded shadow-lg sm:h-96"
            src={image}
            alt=""
          />
        </div>
        <div className="lg:pr-10 text-left">
          
          <h5 className="mb-2 text-4xl font-extrabold leading-none text-purple-600">
            {title}
          </h5>
          <p className="mb-4"><small>{subtitle}</small></p>
          <p className="mb-6 text-gray-900">
            {desc}
          </p>
          <hr className="mb-5 border-gray-300" />
          <div className="flex flex-wrap flex-col md:flex-row md:gap-4">
            <h3 className="text-md font-semibold">Authors: <small className="font-normal">{authors}</small></h3>
            <h3 className="text-md font-semibold">Language: <small className="font-normal">{language}</small></h3>
            <h3 className="text-md font-semibold">Pages: <small className="font-normal">{pages}</small></h3>
            <h3 className="text-md font-semibold">Publisher: <small className="font-normal">{publisher}</small></h3>
            <h3 className="text-md font-semibold">Year: <small className="font-normal">{year}</small></h3>
            
          </div>
          <div className="flex items-center mt-6 gap-4 flex-col-reverse md:flex-row">
            <Link to='/' className="inline-flex items-center justify-center h-12 px-6 font-medium tracking-wide text-white transition duration-200 rounded shadow-md bg-purple-600 hover:bg-purple-800 focus:shadow-outline focus:outline-none">
                Download
            </Link>
            <h2 className="text-purple-600 font-bold text-xl">Price: {price}</h2>
          </div>
        </div>
        
      </div>
    </div>
  );
};