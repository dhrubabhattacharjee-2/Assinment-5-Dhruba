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
          <div className="relative flex h-72 w-72 items-center justify-center sm:h-80 sm:w-80">
            <div className="absolute inset-10 rounded-full bg-gradient-to-r from-orange-200 via-pink-200 to-purple-200 opacity-40 blur-3xl"></div>

            <div className="relative rounded-3xl border border-white bg-gradient-to-br from-purple-500/10 via-pink-500/10 to-orange-500/10 p-8 shadow-xl">
              <div className="grid grid-cols-3 gap-3 rounded-2xl bg-gray-950 p-5 shadow-2xl">
                <div className="col-span-3 rounded-lg bg-gradient-to-r from-orange-400 via-pink-500 to-purple-500 p-4 text-center text-2xl font-bold text-white">
                  &lt;/&gt;
                </div>

                <div className="rounded-lg bg-gray-800 p-4 text-center text-cyan-300">
                  JS
                </div>

                <div className="rounded-lg bg-gray-800 p-4 text-center text-blue-300">
                  TS
                </div>

                <div className="rounded-lg bg-gray-800 p-4 text-center text-pink-300">
                  CSS
                </div>

                <div className="col-span-3 rounded-lg bg-gray-800 p-4 text-center text-green-300">
                  React + Node + Database
                </div>
              </div>
            </div>
          </div>
        </div>

      </div>
    </section>
  );
};

export default Hero;