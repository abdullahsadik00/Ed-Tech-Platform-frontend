import { motion } from 'framer-motion';
import React from 'react';
import {
  GraduationCap,
  Book,
  FileText,
  Upload,
  Library,
  BookOpen,
  Languages,
  ClipboardType,
  Clock,
} from 'lucide-react';
const CourseStep2 = ({ formData, setFormData, handleBack, handleNext }) => {
  const contentTypes = [
    {
      id: 'stage',
      icon: <GraduationCap className="h-6 w-6" />,
      title: 'Stage',
      description: 'Create learning stages for structured progress',
    },
    {
      id: 'course',
      icon: <Book className="h-6 w-6" />,
      title: 'Course',
      description: 'Create and publish educational content',
    },
    {
      id: 'page',
      icon: <FileText className="h-6 w-6" />,
      title: 'Page',
      description: 'Create standalone pages containing educational content',
    },
    {
      id: 'quiz',
      icon: <BookOpen className="h-6 w-6" />,
      title: 'Quiz',
      description: 'Create assessments to evaluate learners',
    },
    {
      id: 'upload',
      icon: <Upload className="h-6 w-6" />,
      title: 'Upload',
      description: 'Upload your educational materials',
    },
    {
      id: 'library',
      icon: <Library className="h-6 w-6" />,
      title: 'Library',
      description: 'Access your content library',
    },
  ];
  return (
    <motion.main
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.5 }}
      className="max-w-3xl min-w-lg mx-auto bg-white rounded-md dark:bg-zinc-950 p-6"
    >
      <div className="mb-8">
        <h1 className="text-2xl font-bold mb-2">
          {formData.title || 'Course Content'}
        </h1>
        <p className="text-gray-600 dark:text-gray-400">
          {formData.description || 'Add content to your learning path'}
        </p>

        <div className="flex items-center gap-5 mt-4 flex-wrap">
          <div className="flex items-center gap-2 flex-wrap">
            <ClipboardType size={20} />
            {formData.selectedTags.length > 0 &&
              formData.selectedTags.map((tag) => {
                return (
                  <div className="flex items-center gap-1">
                    <span className="text-sm bg-gray-100 px-2.5 py-1 rounded-lg dark:bg-gray-700">
                      {/* {formData.selectedTags[0]} */}
                      {tag}
                    </span>
                    {/* <span className="text-sm bg-gray-100 px-2 py-1 rounded dark:bg-gray-700">
                    Not Urgent
                  </span> */}
                  </div>
                );
              })}
          </div>

          <div className="flex items-center gap-2">
            <Clock size={20} />
            <span className="text-sm text-gray-500">
              Estimated {formData.duration} {formData.currency.toLowerCase()}
            </span>
          </div>
          <div className="flex items-center gap-2">
            <Languages size={20} />
            <span className="text-sm text-gray-500">{formData.language}</span>
          </div>
        </div>
      </div>

      <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-6 gap-4">
        {contentTypes.map((content) => (
          <button
            key={content.id}
            onClick={() => handleContentSelect(content)}
            className="flex flex-col items-center justify-center p-4 border rounded-lg hover:bg-gray-50 transition-colors dark:border-gray-700 dark:hover:bg-gray-800"
          >
            <div className="mb-2 text-primary">{content.icon}</div>
            <span className="text-sm font-medium">{content.title}</span>
          </button>
        ))}
      </div>

      <div className="mt-8 flex justify-between">
        <button
          onClick={handleBack}
          className="px-4 py-2 text-sm font-medium text-gray-600 bg-gray-100 rounded-lg hover:bg-gray-200 dark:bg-gray-700 dark:text-gray-200 dark:hover:bg-gray-600"
        >
          Back
        </button>
        <button
          onClick={handleNext}
          className="px-4 py-2 text-sm font-medium text-white bg-blue-600 dark:bg-blue-500 rounded-lg hover:bg-blue-700 dark:hover:bg-blue-600"
        >
          Continue
        </button>
      </div>
    </motion.main>
  );
};

export default CourseStep2;
