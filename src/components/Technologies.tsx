export default function Technologies() {
  return (
    <section className="py-20 bg-gradient-to-r from-[#2F2F2F] via-[#2C2D31] to-[#0A131B]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-white">Technologies</h2>
        </div>

        <div className=" rounded-2xl  p-8">
          <div className="grid lg:grid-cols-2  items-center">
            {/* Text Section */}
            <div className="space-y-6 bg-white border rounded-xl min-h-[35rem] h-[100%] p-12 md:ml-10 flex justify-center flex-col">
              <h3 className="text-2xl font-bold text-gray-900">IOT</h3>
              <p className="text-gray-700">
                The Internet of Things, or IOT, is like a symphony of
                interconnected devices, working together in perfect harmony to
                simplify and enrich our lives. With sensors and data collection
                capabilities, it allows us to monitor and control everything
                from our homes to our cities, making the impossible possible and
                transforming the way we interact with our environment.
              </p>

              <div className="flex space-x-2 pt-4">
                <span className="h-2 w-8 bg-red-500 rounded-full"></span>
                <span className="h-2 w-2 bg-gray-300 rounded-full"></span>
                <span className="h-2 w-2 bg-gray-300 rounded-full"></span>
                <span className="h-2 w-2 bg-gray-300 rounded-full"></span>
              </div>
            </div>

            <div className="flex justify-center">
              <img
                src="/image1.jpg" // Replace with your actual image path
                alt="IoT Technology"
                className="rounded-xl shadow-lg max-w-full w-full h-80 object-cover z-10 md:ml-[-5rem]"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
