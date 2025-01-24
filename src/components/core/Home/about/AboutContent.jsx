import React from 'react';

const AboutContent = () => {
  return (
    <div className="w-full md:w-1/2 p-6 lg:p-12">
      <div className="space-y-6">
        <span className="inline-block px-4 py-1 text-sm font-medium text-primary bg-primary/10 rounded-full">
          About Us
        </span>

        <h2 className="text-3xl md:text-4xl font-bold text-white">
          The roots of education are bitter,{' '}
          <span className="text-primary">but the fruit is sweet</span>
        </h2>

        <p className="text-gray-300 leading-relaxed">
          At Ed Tech Platform, we're passionate about making education
          accessible, engaging, and enjoyable for everyone. Our mission is to
          empower learners and educators with innovative tools that foster
          growth, creativity, and a lifelong love for learning.
        </p>

        <div className="pt-6">
          <a
            href="/learn-more"
            className="inline-flex items-center px-6 py-3 bg-primary/10 text-primary rounded-lg hover:bg-primary/20 transition-colors"
          >
            Learn More
          </a>
        </div>
      </div>
    </div>
  );
};

export default AboutContent;
