export default function About() {
  return (
    <section id="about" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div className="space-y-6">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900">
              Appicoders - #1 Mobile App & Web Development Company in USA
            </h2>
            <p className="text-lg text-gray-600">
              Welcome to Appicoders, your trusted partner for expert mobile app
              and web development. With over 10+ years of experience, we
              specialize in designing, developing, and marketing cutting-edge
              solutions for all major mobile platforms, including Android, iOS,
              and Windows. But we don'tjust stop there.
            </p>
            <p className="text-gray-600">
              Our team of experts also excels in emerging technologies like AR,
              VR, and ML, as well as enterprise app development and digital
              marketing. Partner with us and experience the power of technology
              brought to life.WhyChooseUs
            </p>
            <button className=" bg-gradient-to-r from-red-700 to-black text-white font-semibold py-3 px-8 rounded inline-flex items-center">
              Read More
            </button>
          </div>

          <div className="relative">
            <img
              src="/image2.jpg"
              alt="Development Team"
              className="rounded-2xl w-full shadow-lg"
            />
          </div>
        </div>
      </div>
    </section>
  );
}
