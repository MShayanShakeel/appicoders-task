export default function Hero() {
  return (
    <section
      id="home"
      className="pt-16 min-h-screen flex items-center hero-pattern"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
        <div className="grid lg:grid-cols-[30%_50%] items-center gap-8">
          <div className="relative">
            <div className="bg-card rounded-2xl border-border">
              <div className="flex justify-center">
                <img
                  src="/image3.webp"
                  alt="IoT Technology"
                  className="rounded-xl w-[50%] md:w-[100%] h-[auto] object-cover"
                />
              </div>
            </div>
          </div>
          <div className="space-y-8">
            <div className="space-y-4">
              {/* <p className="text-primary font-medium">Leading Innovation</p> */}
              <h1 className="text-4xl md:text-5xl font-bold text-balance mb-10">
                Leading the Way in App Development Innovation
              </h1>
              <p className="text-xl text-muted-foreground text-pretty mb-10">
                We build Android & iOS Mobile Apps that cater to all your
                business needs and take it to the next level.
              </p>
            </div>

            <div className="flex flex-col sm:flex-row gap-4">
              <button className=" bg-gradient-to-r from-red-700 to-black text-white font-semibold px-14 py-4 rounded">
                GET A FREE QUOTE
              </button>
              {/* <button className="border border-gray-300 px-8 py-4 rounded-lg hover:bg-gray-50 font-medium">
                View GET A FREE QUOTE
              </button> */}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
