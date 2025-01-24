import React from 'react';

export const AuthButton = ({
  children,
  variant = 'primary',
  icon,
  className,
  ...props
}) => {
  const baseStyles =
    'w-full font-medium rounded-lg text-sm px-5 py-2.5 flex items-center justify-center mb-4 transition-all duration-300 ease-in-out';

  const variants = {
    primary: 'bg-[#3C43C1] text-white hover:bg-[#3C43C1]/90',
    google:
      'text-[#DB4437] border border-[#DB4437] hover:bg-[#DB4437] hover:text-white',
    facebook:
      'text-[#4267B2] border border-[#4267B2] hover:bg-[#4267B2] hover:text-white',
  };

  const combinedClassName = `${baseStyles} ${variants[variant]} ${
    className || ''
  }`;

  return (
    <button type="button" className={combinedClassName} {...props}>
      {icon && <span className="mr-2">{icon}</span>}
      {children}
    </button>
  );
};
