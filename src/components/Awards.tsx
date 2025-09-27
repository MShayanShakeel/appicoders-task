import { FaAward } from "react-icons/fa";

const awards = [
  {
    title: "Top Mobile App Development Company",
    year: "2019",
    organization: "IT Firms",
  },
  {
    title: "Top Web Development Companies",
    year: "2022",
    organization: "TopDevelopers",
  },
  {
    title: "Top React Native Developers",
    year: "2019",
    organization: "Clutch",
  },
  {
    title: "Top Mobile App Development Companies",
    year: "2023",
    organization: "AppFutura",
  },
];

export default function Awards() {
  return (
    <section className="py-20 bg-[#ffffff] text-[#000000]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center space-y-4 mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-[#000000]">
            Awards and Recognitions
          </h2>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {awards.map((award, index) => (
            <div
              key={index}
              className="bg-gray-50 p-6 rounded-xl border border-gray-200 text-center"
            >
              <FaAward className="text-blue-600 mx-auto mb-4" size={32} />
              <h3 className="font-semibold mb-2 text-gray-900">
                {award.title}
              </h3>
              <p className="text-sm text-gray-600">{award.organization}</p>
              <p className="text-sm text-blue-600 font-medium">{award.year}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
