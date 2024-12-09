import React from 'react';

const Hero = () => {
  return (
    <section className="pt-32 pb-20 bg-gradient-to-br from-primary-50 to-white">
      <div className="container mx-auto px-6">
        <div className="text-center">
          <h1 className="text-5xl font-bold text-gray-900 mb-6">
            Diyezon Technology
          </h1>
          <p className="text-xl text-gray-600 mb-8">
            Software Development & Business Consultancy
          </p>
          <a 
            href="#contact"
            className="inline-block bg-primary-500 text-white px-8 py-3 rounded-lg hover:bg-primary-600 transition-colors"
          >
            Contact Us
          </a>
        </div>
      </div>
    </section>
  );
};

export default Hero;