import React from 'react';

const AboutImages = ({ images }) => {
  return (
    <div className="relative w-full md:w-1/2">
      <div className="grid grid-cols-2 gap-4 p-6">
        {images.map((image, index) => (
          <div
            key={index}
            className={`relative ${index % 2 === 1 ? 'mt-8' : ''}`}
          >
            <div className="absolute inset-0 bg-gradient-to-tr from-primary/20 to-transparent rounded-2xl" />
            <img
              src={image.src}
              alt={image.alt}
              className="w-full aspect-[4/3] object-cover rounded-2xl shadow-xl hover:scale-105 transition-transform duration-300"
            />
          </div>
        ))}
      </div>

      {/* Decorative elements */}
      <div className="absolute -z-10 inset-0 bg-[radial-gradient(circle_at_50%_50%,rgba(0,0,0,0.1),transparent_50%)]" />
    </div>
  );
};

export default AboutImages;
