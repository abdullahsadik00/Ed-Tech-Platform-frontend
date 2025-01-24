import React from 'react';

const AuthButtons = () => {
  return (
    <div className="hidden md:flex items-center space-x-4">
      <a
        href="/login"
        className="px-4 py-2 hover:text-primary text-primary-foreground transition-colors duration-200"
      >
        Login
      </a>
      <a
        href="/signup"
        className="px-4 py-2 bg-primary text-white rounded-lg hover:bg-primary-600 transition-all duration-200 shadow-lg hover:shadow-inner-md"
      >
        Sign Up
      </a>
    </div>
  );
};

export default AuthButtons;
