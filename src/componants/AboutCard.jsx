export const AboutCard = () => {
  return (
    <div className="px-4 py-16 mx-auto sm:max-w-xl md:max-w-full lg:max-w-screen-xl md:px-24 lg:px-8 lg:py-20">
      <div className="max-w-xl mb-10 md:mx-auto sm:text-center lg:max-w-2xl md:mb-12">
        
        <h2 className="max-w-lg mb-6 font-sans text-3xl font-bold leading-none tracking-tight text-gray-900 sm:text-4xl md:mx-auto">
          <span className="relative inline-block">
            <svg
              viewBox="0 0 52 24"
              fill="currentColor"
              className="absolute top-2 left-2 z-0 hidden w-32 -mt-8 -ml-20 text-purple-500 lg:w-32 lg:-ml-28 lg:-mt-10 sm:block"
            >
              <defs>
                <pattern
                  id="34f481be-159a-4846-821d-9ca19fb6bcc5"
                  x="0"
                  y="0"
                  width=".135"
                  height=".30"
                >
                  <circle cx="1" cy="1" r=".7" />
                </pattern>
              </defs>
              <rect
                fill="url(#34f481be-159a-4846-821d-9ca19fb6bcc5)"
                width="52"
                height="24"
              />
            </svg>
            <span className="relative">The</span>
          </span>{' '}
          A reader lives a thousand lives before he dies
        </h2>
        <p className="text-base text-gray-700 md:text-lg">
          Books are a uniquely portable magic. Books serve to show a man that those original thoughts of his aren't very new after all. The man who does not read good books is no better than the man who can't.
        </p>
      </div>
      <div className="grid gap-8 row-gap-5 mb-8 md:row-gap-8 lg:grid-cols-4 sm:grid-cols-2">
        <div className="duration-300 transform bg-white border-l-4 border-purple-600 hover:-translate-y-2">
          <div className="h-full p-5 border border-l-0 rounded-r shadow-sm">
            <h6 className="mb-2 font-semibold leading-5">Books are a uniquely portable magic.</h6>
            <p className="text-sm text-gray-900">
              Sportacus andrew weatherall goose Refined gentlemen super mario
              des lynam alpha trion zap rowsdower.
            </p>
          </div>
        </div>
        <div className="duration-300 transform bg-white border-l-4 border-purple-600 hover:-translate-y-2">
          <div className="h-full p-5 border border-l-0 rounded-r shadow-sm">
            <h6 className="mb-2 font-semibold leading-5">Skate ipsum dolor</h6>
            <p className="text-sm text-gray-900">
              Bulbasaur Lorem ipsum dolor sit amet, consectetur adipiscing elit.
            </p>
          </div>
        </div>
        <div className="duration-300 transform bg-white border-l-4 border-purple-600 hover:-translate-y-2">
          <div className="h-full p-5 border border-l-0 rounded-r shadow-sm">
            <h6 className="mb-2 font-semibold leading-5">
              Baseball ipsum dolor
            </h6>
            <p className="text-sm text-gray-900">
              Bro ipsum dolor sit amet gaper backside single track, manny Bike
              epic clipless. Schraeder drop gondy.
            </p>
          </div>
        </div>
        <div className="duration-300 transform bg-white border-l-4 border-purple-600 hover:-translate-y-2">
          <div className="h-full p-5 border border-l-0 rounded-r shadow-sm">
            <h6 className="mb-2 font-semibold leading-5">They urge you</h6>
            <p className="text-sm text-gray-900">
              A flower in my garden, a mystery in my panties. Heart attack never
              stopped old Big Bear.
            </p>
          </div>
        </div>
      </div>
      <div className="text-center">
        <a
          href="/"
          className="inline-flex items-center justify-center w-full h-12 px-6 font-medium tracking-wide text-white transition duration-200 rounded shadow-md md:w-auto bg-purple-600 hover:bg-purple-900 focus:shadow-outline focus:outline-none"
        >
          Learn more
        </a>
      </div>
    </div>
  );
};