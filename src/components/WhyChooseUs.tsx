import React from "react";
import { FaBusinessTime, FaHandshake, FaUsers } from "react-icons/fa";

const WhyChooseUs = () => {
  const cards = [
    {
      id: 1,
      icon: <FaBusinessTime size={75} className="text-gray-600" />,
      title: "Focused Business Approach",
      description:
        "We research, plan, and execute - and these qualities make us stand out from the crowd. We put the needs of our clients ahead of us.",
    },
    {
      id: 2,
      icon: <FaHandshake size={75} className="text-red-500" />,
      title: "Flexible Payment Terms",
      description:
        "Get your apps developed with most affordable price and with our flexible payment terms, you pay as your project progresses.",
    },
    {
      id: 3,
      icon: <FaUsers size={75} className="text-gray-600" />,
      title: "Professional Team",
      description:
        "Our mobile development company has extremely professional & expert developers who specialize in Android, IOS, and webapp platforms.",
    },
  ];

  return (
    <section className="py-16  bg-gray-100">
      <div className="max-w-7xl mx-auto px-6 text-center">
        <h2 className="text-3xl font-bold text-center mb-4 text-[#000000]">
          Why Choose Us?
        </h2>
        <p className="text-center text-gray-600 mb-10 max-w-2xl mx-auto">
          With our unique approach and cost-effective solutions, your business
          will prosper because quality is the top priority for us.
        </p>
        <div className="mt-12 grid md:grid-cols-3 gap-12">
          {cards.map((card) => (
            <div
              key={card.id}
              className="bg-white rounded-[50%] md:w-[100%] md:h-[100%] shadow-lg p-10 flex flex-col items-center hover:shadow-xl tr"
            >
              <div className="bg-gray-100 rounded-full p-6 mb-4 flex items-center justify-center">
                {card.icon}
              </div>
              <h3 className="font-semibold text-lg mb-2">{card.title}</h3>
              <p className="text-sm text-gray-600">{card.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default WhyChooseUs;
