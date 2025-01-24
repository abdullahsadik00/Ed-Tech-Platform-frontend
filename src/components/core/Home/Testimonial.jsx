import React, { useState, useEffect } from 'react';
import { testimonials } from '../../../assets/data/Testimonials'; // Adjust the path as necessary

const Testimonial = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isHovered, setIsHovered] = useState(false);

  const nextTestimonial = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % testimonials.length);
  };

  const prevTestimonial = () => {
    setCurrentIndex(
      (prevIndex) => (prevIndex - 1 + testimonials.length) % testimonials.length
    );
  };

  useEffect(() => {
    const interval = setInterval(() => {
      if (!isHovered) {
        nextTestimonial();
      }
    }, 3000); // Change slide every 3 seconds

    return () => clearInterval(interval);
  }, [isHovered]);

  return (
    <section
      className="w-full overflow-hidden bg-richblack-800 py-10"
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      <div className="flex flex-col md:w-8/12 mx-auto">
        <p className="text-center mb-10 text-3xl font-bold tracking-tight text-white sm:text-4xl">
          What are say about us
        </p>
        <div className="flex flex-row items-center">
          <button
            type="button"
            className="flex items-center justify-center h-full px-4 cursor-pointer transition-transform duration-200 hover:scale-105"
            onClick={prevTestimonial}
            aria-label="Previous testimonial"
          >
            <span className="inline-flex items-center justify-center w-10 h-10 rounded-full bg-[#3B82F6] transition-colors duration-200 hover:bg-[#1E40AF]">
              <svg
                className="w-4 h-4 text-white"
                aria-hidden="true"
                role="img"
                aria-label="Previous"
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 6 10"
              >
                <path
                  stroke="currentColor"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M5 1 1 5l4 4"
                />
              </svg>
            </span>
          </button>
          <div className="w-8/12 h-80 mx-auto border border-white bg-[#f7f7f7] shadow-[0_0_10px_rgba(255,255,255,0.5)] mb-10">
            {testimonials.map((testimonial, index) => (
              <div
                key={index}
                className={`w-full h-full flex flex-col justify-center items-center transition-opacity duration-700 ease-in-out ${
                  index === currentIndex ? 'block' : 'hidden'
                }`}
              >
                <div className="w-[40px] h-[40px]">
                  <img
                    src="https://placehold.co/40"
                    className="block w-full object-contain rounded-full"
                    alt={testimonial.name}
                  />
                </div>
                <div className="flex flex-col items-center justify-center text-center p-4">
                  <p className="text-lg my-4">{testimonial.content}</p>
                  <h4 className="text-xl">{testimonial.name}</h4>
                </div>
              </div>
            ))}
          </div>
          <button
            type="button"
            className="flex items-center justify-center h-full px-4 cursor-pointer transition-transform duration-200 hover:scale-105"
            onClick={nextTestimonial}
            aria-label="Next testimonial"
          >
            <span className="inline-flex items-center justify-center w-10 h-10 rounded-full bg-[#3B82F6] transition-colors duration-200 hover:bg-[#1E40AF]">
              <svg
                className="w-4 h-4 text-white"
                aria-hidden="true"
                role="img"
                aria-label="Next"
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 6 10"
              >
                <path
                  stroke="currentColor"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="m1 9 4-4-4-4"
                />
              </svg>
            </span>
          </button>
        </div>
        <div className="flex justify-center">
          <div className="flex">
            {testimonials.map((_, index) => (
              <button
                key={index}
                type="button"
                className={`w-3 h-3 mx-1 rounded-full ${
                  index === currentIndex ? 'bg-white' : 'bg-richblack-200 '
                }`}
                aria-current={index === currentIndex ? 'true' : 'false'}
                aria-label={`Slide ${index + 1}`}
                onClick={() => setCurrentIndex(index)}
              ></button>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Testimonial;
