import React from 'react';

const HeroImage = () => (
  <div className="relative lg:absolute lg:inset-y-0 lg:right-0 lg:w-1/2">
    <div className="absolute inset-0 bg-gradient-to-tr from-primary/20 to-transparent rounded-2xl" />
    <img
      src="https://images.unsplash.com/photo-1522202176988-66273c2fd55f?auto=format&fit=crop&q=80&w=800"
      alt="Students learning"
      className="w-full h-[400px] lg:h-full object-cover rounded-2xl shadow-xl"
    />
    <div className="absolute inset-0 bg-gradient-to-r from-white/90 via-white/50 to-transparent lg:hidden" />
  </div>
);

export default HeroImage;
