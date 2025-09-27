export default function Contact() {
  return (
    <section id="contact" className="bg-red-600">
      <div className="mx-auto grid lg:grid-cols-[65%_35%]">
        {/* LEFT SIDE (65%) */}
        <div className="p-10 text-white w-[70%] mx-auto">

          <h3 className="text-lg font-semibold uppercase">LET'S TALK</h3>
          <h2 className="text-3xl md:text-4xl font-bold mt-2">
            Got an idea? Let’s get in touch!
          </h2>
          <p className="mt-3 text-sm md:text-base">
            Have queries? Not sure of your App Strategy? Discuss with us and
            we'll guide you the way forward.
          </p>

          {/* Form */}
          <form className="mt-6 space-y-4">
            <input
              type="text"
              placeholder="First name"
              className="w-full bg-white text-black px-3 py-2 rounded"
            />
            <input
              type="text"
              placeholder="Last name"
              className="w-full bg-white text-black px-3 py-2 rounded"
            />
            <input
              type="email"
              placeholder="Email Address"
              className="w-full bg-white text-black px-3 py-2 rounded"
            />
            <input
              type="tel"
              placeholder="Phone Number"
              className="w-full bg-white text-black px-3 py-2 rounded"
            />
            <textarea
              placeholder="Message"
              rows={4}
              className="w-full bg-white text-black px-3 py-2 rounded"
            />
            <button
              type="submit"
              className="w-full bg-gradient-to-r from-red-700 to-black text-white font-semibold py-3 rounded"
            >
              Let’s get in touch
            </button>
          </form>
        </div>

        {/* RIGHT SIDE (35%) */}
        <div className="flex flex-col">
          {/* Image */}
          <div className="flex justify-center">
            <img
              src="/image1.jpg" // replace with actual
              alt="Team meeting"
              className="w-full h-80 object-cover"
            />
          </div>

          {/* Contact info */}
          <div className="bg-[#282737] text-center text-white p-6 space-y-4 flex flex-col items-center justify-center">
            <p>
              Please submit your inquiry and our App Development Strategist will
              contact you shortly
            </p>
            <div className="space-y-2">
              <p className="text-[3rem] font-bold">📞</p>
              <p className="text-lg font-bold">+1-(800) 826 8018</p>
              <p className="text-sm">info@appicoders.com</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
