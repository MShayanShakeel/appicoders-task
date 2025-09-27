import { FaHeartbeat, FaDumbbell, FaMoneyBillWave, FaHospitalUser, FaBusinessTime, FaBroom } from "react-icons/fa";

const industries = [
  {
    title: "Medical & Pharma Services",
    description: "From telemedicine to drug delivery, Appicoders develops cutting-edge medical apps that advance patient care and pharma services.",
    icon: <FaHeartbeat className="w-8 h-8 text-red-500" />,
  },
  {
    title: "Training & Fitness",
    description: "Whether you need a personalized workout program or a virtual trainer, Appicoders crafts fitness apps that help you reach your goals.",
    icon: <FaDumbbell className="w-8 h-8 text-blue-500" />,
  },
  {
    title: "Fintech",
    description: "Appicoders' fintech apps facilitate secure, seamless transactions and empower businesses with AI-powered analytics for better decision-making.",
    icon: <FaMoneyBillWave className="w-8 h-8 text-green-500" />,
  },
  {
    title: "Health & Fitness",
    description: "From wellness trackers to medical records, Appicoders develops apps that enhance health outcomes and revolutionize patient care.",
    icon: <FaHospitalUser className="w-8 h-8 text-pink-500" />,
  },
  {
    title: "Business & Services",
    description: "Appicoders' business apps streamline operations, from project management to customer service, and optimize efficiency for enhanced profitability.",
    icon: <FaBusinessTime className="w-8 h-8 text-purple-500" />,
  },
  {
    title: "Cleaning Services",
    description: "Appicoders' cleaning service apps enable customers to book professional cleaning services with ease and simplicity, revolutionizing the industry.",
    icon: <FaBroom className="w-8 h-8 text-yellow-500" />,
  },
];


export default function Industries() {
  return (
    <section className="py-20 bg-[#ffffff] text-[#000000]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center space-y-4 mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900">
            Industries
          </h2>
          <p className="text-xl text-gray-600">
            Specialized solutions across multiple sectors
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {industries.map((industry, index) => (
            <div
              key={index}
              className="bg-gray-50 p-6 rounded-xl border border-gray-200 flex items-start gap-4"
            >
              <div className="p-2 rounded-lg">
                {industry.icon}
              </div>
              <div>
                <h3 className="text-lg font-semibold mb-2 text-gray-900">
                  {industry.title}
                </h3>
                <p className="text-gray-600 text-sm">{industry.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
