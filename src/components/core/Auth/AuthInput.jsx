import React from 'react';

export const AuthInput = ({
  icon,
  rightIcon,
  onRightIconClick,
  className,
  ...props
}) => {
  return (
    <div className="relative mb-4">
      <input
        className={`w-full bg-[#F3F4F6] p-2.5 pl-10 pr-10 text-base text-gray-700 rounded-lg focus:bg-white focus:ring-2 focus:ring-[#3C43C1]/50 transition-all duration-300 ${
          className || ''
        }`}
        {...props}
      />
      {icon && (
        <div className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-500">
          {icon}
        </div>
      )}
      {rightIcon && (
        <button
          type="button"
          onClick={onRightIconClick}
          className="absolute right-3 top-1/2 -translate-y-1/2 text-gray-500 hover:text-gray-700 transition-colors"
        >
          {rightIcon}
        </button>
      )}
    </div>
  );
};
