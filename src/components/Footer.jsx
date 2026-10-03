const Footer = () => {
  return (
    <footer
      id="contact"
      className="border-t border-gray-100 bg-white"
    >
      <div className="mx-auto max-w-7xl px-5 py-12 lg:px-8">

        <div className="grid gap-10 md:grid-cols-4">

         
          <div className="md:col-span-2">
            <a href="#home" className="flex items-center">
          <img src="src/assets/logo-text.png" alt="Dev Stack" className="h-9 w-auto object-contain"/>
        </a>

            <p className="mt-4 max-w-sm text-sm leading-6 text-gray-500">
              Curated tools, technologies, and resources for
              developers building modern software.
            </p>

            <div className="mt-5 flex gap-5 text-xs font-medium text-gray-600">
              <a href="#" className="hover:text-pink-500">
                GitHub
              </a>

              <a href="#" className="hover:text-pink-500">
                Twitter
              </a>

              <a href="#" className="hover:text-pink-500">
                LinkedIn
              </a>
            </div>
          </div>

          
          <div>
            <h3 className="text-xs font-bold uppercase tracking-wider text-gray-800">
              Product
            </h3>

            <div className="mt-4 space-y-3 text-sm text-gray-500">
              <a href="#home" className="block hover:text-pink-500">
                Home
              </a>

              <a
                href="#technologies"
                className="block hover:text-pink-500"
              >
                Technologies
              </a>

              <a href="#projects" className="block hover:text-pink-500">
                Projects
              </a>
            </div>
          </div>

          <div>
            <h3 className="text-xs font-bold uppercase tracking-wider text-gray-800">
              Company
            </h3>

            <div className="mt-4 space-y-3 text-sm text-gray-500">
              <a href="#about" className="block hover:text-pink-500">
                About
              </a>

              <a href="#contact" className="block hover:text-pink-500">
                Contact
              </a>

              <a href="#" className="block hover:text-pink-500">
                Careers
              </a>
            </div>
          </div>

        </div>

        <div className="mt-10 flex flex-col justify-between gap-4 border-t border-gray-100 pt-6 text-xs text-gray-400 sm:flex-row">
          <p>
            © 2026 Dev Stack. All rights reserved.
          </p>

          <div className="flex gap-6">
            <a href="#" className="hover:text-pink-500">
              Privacy
            </a>

            <a href="#" className="hover:text-pink-500">
              Terms
            </a>
          </div>
        </div>

      </div>
    </footer>
  );
};

export default Footer;