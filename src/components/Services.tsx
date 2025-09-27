import {
  FaBox,
  FaBrain,
  FaCode,
  FaGlobe,
  FaMobileAlt,
  FaBolt,
} from "react-icons/fa";

const services = [
  {
    icon: <FaMobileAlt className="w-8 h-8 text-blue-500" />,
    title: "Custom Mobile Applications",
    description: "iOS, Android and Wearable Apps",
  },
  {
    icon: <FaBrain className="w-8 h-8 text-purple-500" />,
    title: "Artificial Intelligence",
    description: "Innovative AI & ML Solutions",
  },
  {
    icon: <FaGlobe className="w-8 h-8 text-green-500" />,
    title: "Custom Web Development",
    description: "Robust Webs, Progressive Web Apps",
  },
  {
    icon: <FaBox className="w-8 h-8 text-yellow-500" />,
    title: "Blockchain Development",
    description: "Custom Blockchain Solutions",
  },
  {
    icon: <FaBolt className="w-8 h-8 text-red-500" />,
    title: "Augmented Reality",
    description: "Futuristic AR Apps",
  },
  {
    icon: <FaCode className="w-8 h-8 text-pink-500" />,
    title: "MVP Development",
    description: "For Startups & Entrepreneurs",
  },
];

export default function Services() {
  return (
    <section className="py-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center space-y-4 mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900">
            Our Services
          </h2>
          <p className="text-xl text-gray-600">Get to know what we excel at</p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <div
              key={index}
              className="bg-gray-50 p-6 rounded-xl border border-gray-200 flex flex-col items-start gap-4"
              // className="bg-gray-50 p-6 rounded-xl border border-gray-200 flex flex-col items-start gap-4"
            >
              <div className="p-2 bg-white rounded-lg shadow-sm">
                {service.icon}
              </div>
              <div>
                <h3 className="text-lg font-semibold mb-2 text-gray-900">
                  {service.title}
                </h3>
                <p className="text-gray-600 text-sm">{service.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
