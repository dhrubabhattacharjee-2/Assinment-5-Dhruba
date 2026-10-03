import bannerStack from "../assets/banner-stack.png";

const Hero = () => {
  return (
    <section
      id="home"
      className="mx-auto max-w-7xl px-5 pb-16 pt-20 lg:px-8 lg:pb-24 lg:pt-28"
    >
      <div className="grid items-center gap-12 lg:grid-cols-2">

        
        <div>
          <h1 className="max-w-2xl text-4xl font-extrabold leading-tight tracking-tight text-gray-900 sm:text-5xl lg:text-6xl">
            Build Your Ideal
            <span className="block brand-gradient">
              Development Stack
            </span>
          </h1>

          <p className="mt-6 max-w-xl text-base leading-7 text-gray-500 sm:text-lg">
            Explore frontend, backend, database, and tooling options,
            compare them side by side, and put together the stack that
            fits your next project.
          </p>

          <div className="mt-8 flex flex-wrap gap-3">
            <a
              href="#technologies"
              className="gradient-bg rounded-lg px-5 py-3 text-sm font-semibold text-white shadow-sm transition hover:scale-105"
            >
              Explore Technologies
            </a>

            <button className="rounded-lg border border-gray-200 bg-white px-6 py-3 text-sm font-medium text-gray-600 transition hover:border-pink-300 hover:text-pink-500">
              Learn More
            </button>
          </div>
        </div>


        <div className="flex justify-center lg:justify-end">
          <img src={bannerStack} alt="Development Stack" className="w-full max-w-md object-contain"/>
        </div>
    
      </div>
    </section>
  );
};

export default Hero;