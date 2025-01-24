import React from 'react';
import { Rocket } from 'lucide-react';

const Logo = () => {
  return (
    <a href="/" className="flex items-center gap-2 px-2 py-3">
      <Rocket className="h-5 w-5 text-primary-100" />
      <span className="font-bold text-lg bg-gradient-to-r from-primary-50 to-primary-600 bg-clip-text text-transparent">
        Ed tech Platform
      </span>
    </a>
  );
};

export default Logo;
