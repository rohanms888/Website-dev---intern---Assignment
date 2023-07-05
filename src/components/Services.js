import React from 'react';

const Services = () => {
  return (
    <section id="services" className="py-10">
      <div className="container mx-auto px-4">
        <h2 className="text-4xl font-bold text-center mb-8">Our Services</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div className="bg-white rounded shadow-md p-6">
            <div className="text-center">
              <img
                src="service-icon-1.png"
                alt="Service 1"
                className="h-16 mx-auto mb-4"
              />
              <h3 className="text-lg font-semibold mb-2">Individual Money Transfers</h3>
              <p className="text-gray-600">
                Easily send money to individuals across borders with our fast and secure platform.
              </p>
            </div>
          </div>
          <div className="bg-white rounded shadow-md p-6">
            <div className="text-center">
              <img
                src="service-icon-2.png"
                alt="Service 2"
                className="h-16 mx-auto mb-4"
              />
              <h3 className="text-lg font-semibold mb-2">Business Payments</h3>
              <p className="text-gray-600">
                Make international business payments with ease, ensuring efficiency and accuracy.
              </p>
            </div>
          </div>
          <div className="bg-white rounded shadow-md p-6">
            <div className="text-center">
              <img
                src="service-icon-3.png"
                alt="Service 3"
                className="h-16 mx-auto mb-4"
              />
              <h3 className="text-lg font-semibold mb-2">Real-time Payment Tracking</h3>
              <p className="text-gray-600">
                Stay updated with real-time tracking of your cross-border transactions.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Services;
