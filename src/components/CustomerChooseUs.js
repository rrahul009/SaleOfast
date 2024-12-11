import React from "react";

const CustomerChooseUs = () => {
  const reasons = [
    {
      title: "High-Quality Products",
      description: "We offer premium products at competitive prices that exceed customer expectations.",
      icon: "https://static.vecteezy.com/system/resources/previews/011/875/468/non_2x/quality-icon-award-to-winner-medal-for-professional-line-symbol-assurance-sign-premium-level-product-warranty-rosette-ribbon-with-tick-outline-illustration-vector.jpg",
    },
    {
      title: "Personalized Support",
      description: "Our dedicated team provides exceptional customer service tailored to your needs.",
      icon: "https://cdn-icons-png.freepik.com/512/3782/3782758.png",
    },
    {
      title: "Fast & Reliable Delivery",
      description: "Experience quick and dependable delivery for all your orders, every time.",
      icon: "https://static.vecteezy.com/system/resources/thumbnails/005/261/209/small/fast-delivery-icon-free-vector.jpg",
    },
    {
      title: "Innovative Technology",
      description: "We bring you cutting-edge solutions that are intuitive and user-friendly.",
      icon: "https://cdn-icons-png.flaticon.com/512/2503/2503729.png",
    },
    {
      title: "Trust & Transparency",
      description: "We prioritize honesty and transparency in all our interactions and transactions.",
      icon: "https://png.pngtree.com/png-vector/20230527/ourmid/pngtree-trust-icon-vector-image-illustration-trust-honesty-vector-png-image_52313030.jpg",
    },
  ];

  return (
    <div className=" py-8 px-4">
      <div className="container mx-auto max-w-7xl text-center">
        {/* Section Header */}
        <h1 className="text-3xl font-extrabold text-gray-800 mb-4 tracking-tight">
          Why Customers Choose Us
        </h1>
        <p className="text-lg text-gray-600 mb-8 max-w-2xl mx-auto">
          We are committed to delivering exceptional value and solutions that set us apart. Here’s what makes us the best choice for your business:
        </p>
        
        {/* Card Grid - Displaying all cards in one row */}
        <div className="flex space-x-8 overflow-x-auto pb-4">
          {reasons.map((reason, index) => (
            <div
              key={index}
              className="bg-white shadow-lg rounded-lg p-6 text-center w-64 flex-shrink-0 transition-all duration-300 transform hover:scale-105 hover:shadow-2xl"
            >
              {/* Icon */}
              <div className="w-20 h-20 mx-auto mb-4">
                <img
                  src={reason.icon}
                  alt={reason.title}
                  className="object-contain w-full h-full"
                />
              </div>

              {/* Title */}
              <h3 className="text-xl font-semibold text-gray-800 mb-3">
                {reason.title}
              </h3>

              {/* Description */}
              <p className="text-gray-600 text-sm leading-relaxed">{reason.description}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default CustomerChooseUs;
