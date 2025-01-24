import React from 'react';

const CourseHeader = ({ currentStep, totalSteps, onNext, onBack }) => {
  return (
    <header className="flex items-center justify-between px-6 py-4  ">
      <div className="flex items-center space-x-4">
        <button
          onClick={onBack}
          className="text-text-light hover:text-text transition-colors"
        >
          ←
        </button>
        <div className="text-sm font-medium">
          Step {currentStep} of {totalSteps}
        </div>
      </div>
      <button
        onClick={onNext}
        className="px-6 py-2 bg-primary text-white rounded-full hover:bg-primary-light transition-colors duration-200"
      >
        Continue
      </button>
    </header>
  );
};

export default CourseHeader;
