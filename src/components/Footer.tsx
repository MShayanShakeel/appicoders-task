export default function Footer() {
  return (
    <footer className="bg-[#20222E] border-t border-gray-200 py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid md:grid-cols-3 gap-12">
          <div className="space-y-4">
            <div className="flex justify-start">
              <img
                src="/logo.webp"
                alt="Technology"
                className="rounded-xl object-cover"
              />
            </div>
            <p className="text-lg text-[#ffffff]">Contact Us</p>
            <p className="text-sm text-gray-600 hover:text-blue-600">
              Tel: +1 (800) 826-8018
            </p>
            <p className="text-sm text-gray-600 hover:text-blue-600">
              Email: info@appicoders.com
            </p>
          </div>

          <div className="space-y-4">
            <ul className="space-y-2 text-sm text-gray-600">
              <p className="text-lg text-[#ffffff]">About Us</p>
              <li>
                <a href="#" className="hover:text-blue-600">
                  Home
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-blue-600">
                  About Us
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-blue-600">
                  Contact Us
                </a>
              </li>
            </ul>
          </div>
          <div className="space-y-4">
            <ul className="space-y-2 text-sm text-gray-600">
              <p className="text-lg text-[#ffffff]">Appicoders Services</p>
              <li>
                <a href="#" className="hover:text-blue-600">
                  » iPhone Application Developments
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-blue-600">
                  » Android Application Development
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-blue-600">
                  » Enterprise App Development
                </a>
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t border-gray-200 mt-12 pt-8 text-center text-sm text-gray-600">
          © 2023 APPICODERS. ALL RIGHTS RESERVED.
        </div>
      </div>
    </footer>
  );
}
