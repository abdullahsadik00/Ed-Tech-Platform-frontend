import { motion } from 'framer-motion';
import React from 'react';
import LearningPath from './LearningPath';

const CourseStep3 = ({ formData, setFormData, handleBack }) => {
  return (
    <motion.main
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.5 }}
      className="max-w-3xl min-w-lg mx-auto"
    >
      <LearningPath />
      <div className="mt-8 flex justify-between bg-white dark:bg-zinc-950 p-6 rounded-md">
        <button
          onClick={handleBack}
          className="px-4 py-2 text-sm font-medium text-gray-600 bg-gray-100 rounded-lg hover:bg-gray-200 dark:bg-gray-700 dark:text-gray-200 dark:hover:bg-gray-600"
        >
          Back
        </button>
        <button
          onClick={() => console.log('Save course')}
          className="px-4 py-2 text-sm font-medium text-white bg-blue-600 dark:bg-blue-500 rounded-lg hover:bg-blue-700 dark:hover:bg-blue-600"
        >
          Save Course
        </button>
      </div>
    </motion.main>
  );
};

export default CourseStep3;
