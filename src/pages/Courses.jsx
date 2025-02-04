import React, { useState } from 'react';

import CourseHeader from '../components/courseComponent/CourseHeader';

import { motion } from 'framer-motion';
import CourseHeaderThumbnail from '../components/courseComponent/CourseHeaderThumbnail';
import CourseStep2 from '../components/courseComponent/courseStep2';
import CourseStep3 from '../components/courseComponent/courseStep3';
import CourseStep1 from '../components/courseComponent/courseStep1';

const Courses = () => {
  const [currentStep, setCurrentStep] = useState(1);

  const [showThumbnailSelector, setShowThumbnailSelector] = useState(false);

  const [selectedContent, setSelectedContent] = useState([]);

  const handleNext = () => {
    if (currentStep < 3) {
      setCurrentStep(currentStep + 1);
    }
  };

  const handleBack = () => {
    if (currentStep > 1) {
      setCurrentStep(currentStep - 1);
    }
  };

  const checkStringType = (input) => {
    const urlPattern = /^(https?:\/\/)?([a-zA-Z0-9.-]+\.[a-zA-Z]{2,})(\/\S*)?$/;
    setShowThumbnailImage(urlPattern.test(input));
  };

  const handleThumbnailSelect = (value) => {
    checkStringType(value);
    handleInputChange('selectedThumbnail', value);
  };
  const [formData, setFormData] = useState({
    title: '',
    description: '',
    shortDescription: '',
    selectedTags: [],
    selectedThumbnail: 'https://picsum.photos/800/300',
    previewVideo: '',
    price: '0',
    currency: 'INR',
    level: 'BEGINNER',
    language: 'English',
    duration: '0',
    totalLectures: '0',
    isPrivate: false,
    allowGuestPreview: true,
    metaTitle: '',
    metaDescription: '',
  });

  const handleContentSelect = (content) => {
    if (!selectedContent.find((item) => item.id === content.id)) {
      setSelectedContent([...selectedContent, content]);
    }
  };

  const handleRemoveContent = (contentId) => {
    setSelectedContent(selectedContent.filter((item) => item.id !== contentId));
  };

  return (
    <div className="min-h-screen bg-gradient-to-b from-primary-50 to-primary-200 dark:from-zinc-950 dark:to-zinc-700 pb-20">
      <CourseHeader
        currentStep={currentStep}
        totalSteps={3}
        onNext={handleNext}
        onBack={handleBack}
      />

      {currentStep === 1 && (
        <CourseStep1 formData={formData} setFormData={setFormData} />
      )}
      {currentStep === 2 && (
        <CourseStep2
          formData={formData}
          setFormData={setFormData}
          handleBack={handleBack}
          handleNext={handleNext}
        />
      )}
      {currentStep === 3 && (
        <CourseStep3
          formData={formData}
          setFormData={setFormData}
          handleBack={handleBack}
        />
      )}

      {showThumbnailSelector && (
        <CourseHeaderThumbnail
          onSelect={handleThumbnailSelect}
          onClose={() => setShowThumbnailSelector(false)}
        />
      )}
    </div>
  );
};

export default Courses;
