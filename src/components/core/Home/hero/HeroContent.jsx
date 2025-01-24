import React from 'react';
import { ArrowRight } from 'lucide-react';

const HeroContent = () => (
  <div className="relative z-10 flex flex-col max-w-xl px-4 md:px-0 lg:px-8">
    <span className="inline-block px-4 py-1 mb-6 text-sm font-medium text-primary bg-primary/10 rounded-full">
      Transform Your Learning Journey
    </span>
    <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold mb-6 tracking-tight">
      Start Learning and <span className="text-primary">Have Fun</span>
    </h1>
    <p className="text-lg text-gray-600 mb-8 max-w-lg">
      Discover an exciting way to learn with our interactive and engaging
      platform. Whether you're a student or teacher, education has never been
      this enjoyable.
    </p>
    <div className="flex flex-wrap gap-4">
      <a
        href="/get-started"
        className="inline-flex items-center px-6 py-3 bg-primary text-white rounded-lg hover:bg-primary/90 transition-colors shadow-lg hover:shadow-primary/25"
      >
        Get Started
        <ArrowRight className="ml-2 h-5 w-5" />
      </a>
      <a
        href="/courses"
        className="inline-flex items-center px-6 py-3 border border-gray-300 rounded-lg hover:bg-gray-50 transition-colors"
      >
        Browse Courses
      </a>
    </div>
  </div>
);

export default HeroContent;
