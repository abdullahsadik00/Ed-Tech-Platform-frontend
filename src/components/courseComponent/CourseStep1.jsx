import React, { useState } from 'react';
import Tag from './Tag';
import { motion } from 'framer-motion';
import {
  User,
  GraduationCap,
  Book,
  FileText,
  Upload,
  Library,
  BookOpen,
} from 'lucide-react';

const CourseStep1 = ({
  formData,
  setFormData,
  currentStep,
  setCurrentStep,
}) => {
  const [showThumbnailImage, setShowThumbnailImage] = useState(true);

  const handleInputChange = (field, value) => {
    setFormData((prev) => ({
      ...prev,
      [field]: value,
    }));
  };

  const toggleTag = (tag) => {
    setFormData((prev) => ({
      ...prev,
      selectedTags: prev.selectedTags.includes(tag)
        ? prev.selectedTags.filter((t) => t !== tag)
        : [...prev.selectedTags, tag],
    }));
  };
  const categories = [
    'Prototyping',
    'UI/UX',
    'Design',
    'Development',
    'Business',
    'Marketing',
    'Personal Development',
  ];

  const levels = ['BEGINNER', 'INTERMEDIATE', 'ADVANCED', 'EXPERT'];
  const languages = ['English', 'Hindi', 'Spanish', 'French', 'German'];
  const handleNext = () => {
    if (currentStep < 3) {
      setCurrentStep(currentStep + 1);
    }
  };
  return (
    <motion.main
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.5 }}
      className="max-w-3xl min-w-lg mx-auto bg-white rounded-md dark:bg-zinc-950"
    >
      <div className="animate-fade-in">
        <motion.div
          className="relative mb-5"
          initial={{ y: 20, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ delay: 0.2 }}
        >
          {showThumbnailImage ? (
            <img
              src={formData.selectedThumbnail}
              alt="Learning Path Overview"
              className="w-full h-48 object-cover rounded-t-xl custom-shadow"
            />
          ) : (
            <div
              className="w-full h-48 object-cover rounded-t-xl custom-shadow"
              style={{ backgroundColor: formData.selectedThumbnail }}
            />
          )}

          <button
            onClick={() => setShowThumbnailSelector(true)}
            className="absolute top-4 right-4 px-4 py-2 bg-white/90 backdrop-blur-sm rounded-lg 
                 text-sm font-medium hover:bg-white transition-colors shadow-sm dark:bg-zinc-800 dark:text-zinc-200"
          >
            Update thumbnail
          </button>
          <div className="absolute w-14 h-14 bg-primary-lighter left-4 -bottom-7 rounded-md flex items-center justify-center">
            <User size={38} className="text-zinc-600" />
          </div>
        </motion.div>

        <motion.div
          className="p-6"
          initial={{ y: 20, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ delay: 0.3 }}
        >
          <textarea
            value={formData.title}
            onChange={(e) => handleInputChange('title', e.target.value)}
            placeholder="What is the Learning Path"
            className="text-3xl font-semibold pl-0 w-full border-none focus:outline-none focus:ring-0 active:outline-none placeholder:text-gray-400 dark:bg-zinc-950 dark:text-zinc-200"
            rows={1}
          />

          <div className="space-y-4 mt-2">
            <div className="space-y-3 flex flex-col sm:flex-row sm:items-center">
              <label className="font-medium w-full sm:w-56 mb-2 sm:mb-0">
                Category
              </label>
              <div className="flex flex-wrap gap-2">
                {categories.map((tag) => (
                  <Tag
                    key={tag}
                    label={tag}
                    active={formData.selectedTags.includes(tag)}
                    onClick={() => toggleTag(tag)}
                  />
                ))}
              </div>
            </div>

            <div className="flex flex-col sm:flex-row sm:items-center">
              <label className="font-medium w-full sm:w-56 mb-2 sm:mb-0">
                Estimate duration
              </label>
              <div className="flex w-full items-center gap-2 border border-border rounded-lg px-4 py-2 dark:bg-zinc-800 dark:text-zinc-200">
                <input
                  type="number"
                  value={formData.duration}
                  onChange={(e) =>
                    handleInputChange('duration', e.target.value)
                  }
                  placeholder="Duration"
                  className="w-full p-0 bg-transparent border-none focus:outline-none focus:ring-0 dark:bg-zinc-800 dark:text-zinc-200"
                />
                <select
                  value={formData.currency}
                  onChange={(e) =>
                    handleInputChange('currency', e.target.value)
                  }
                  className="bg-transparent w-28 p-0 px-3 border-none focus:outline-none focus:ring-0"
                >
                  <option value="HOUR">Hours</option>
                  <option value="DAY">Days</option>
                  <option value="WEEK">Weeks</option>
                  <option value="MONTH">Month</option>
                </select>
              </div>
            </div>

            <div className="space-y-3 flex items-center">
              <label className="font-medium sm:w-56 w-72">Price</label>
              <div className="flex w-full items-center gap-2 border border-border rounded-lg px-4 py-2 dark:bg-zinc-800 dark:text-zinc-200 ">
                <input
                  type="number"
                  value={formData.price}
                  onChange={(e) => handleInputChange('price', e.target.value)}
                  placeholder="Price"
                  className="w-full p-0 bg-transparent border-none focus:outline-none focus:ring-0 dark:bg-zinc-800 dark:text-zinc-200"
                />
                <select
                  value={formData.currency}
                  onChange={(e) =>
                    handleInputChange('currency', e.target.value)
                  }
                  className="bg-transparent w-28 p-0 px-3 border-none focus:outline-none focus:ring-0"
                >
                  <option value="INR">INR</option>
                  <option value="USD">USD</option>
                  <option value="EUR">EUR</option>
                </select>
              </div>
            </div>

            <div className="space-y-3 flex items-center">
              <label className="font-medium sm:w-56 w-72">Level</label>
              <div className="flex w-full items-center gap-2 border border-border rounded-lg dark:bg-zinc-800 dark:text-zinc-200">
                <select
                  value={formData.level}
                  onChange={(e) => handleInputChange('level', e.target.value)}
                  className="bg-transparent border-none focus:outline-none focus:ring-2 focus:ring-primary w-full rounded-lg dark:bg-zinc-800 dark:text-zinc-200 border border-border focus:border-primary transition-colors"
                >
                  {levels.map((l) => (
                    <option key={l} value={l}>
                      {l}
                    </option>
                  ))}
                </select>
              </div>
            </div>

            <div className="space-y-3 flex items-center">
              <label className="font-medium sm:w-56 w-72">Language</label>
              <div className="flex w-full items-center gap-2 border border-border rounded-lg dark:bg-zinc-800 dark:text-zinc-200">
                <select
                  value={formData.language}
                  onChange={(e) =>
                    handleInputChange('language', e.target.value)
                  }
                  className="bg-transparent border-none focus:outline-none focus:ring-2 focus:ring-primary w-full rounded-lg dark:bg-zinc-800 dark:text-zinc-200 border border-border focus:border-primary transition-colors"
                >
                  {languages.map((l) => (
                    <option key={l} value={l}>
                      {l}
                    </option>
                  ))}
                </select>
              </div>
            </div>

            <div className="flex flex-col sm:flex-row sm:items-center">
              <label className="font-medium w-full sm:w-56 mb-2 sm:mb-0 dark:text-slate-300">
                Description
              </label>
              <textarea
                value={formData.description}
                onChange={(e) =>
                  handleInputChange('description', e.target.value)
                }
                placeholder="Let your learner know a little about the learning path..."
                className="w-full h-32 px-4 py-3 rounded-lg border border-border focus:outline-none focus:border-primary transition-colors resize-none dark:bg-zinc-800 dark:text-zinc-200"
              />
            </div>
            <div className="text-right text-sm !mt-1">
              {formData.description.length}/450
            </div>
            <div className="text-right">
              <button
                onClick={handleNext}
                className="px-4 py-2 text-sm font-medium text-white bg-blue-600 dark:bg-blue-500 rounded-lg hover:bg-blue-700 dark:hover:bg-blue-600"
              >
                Continue
              </button>
            </div>
          </div>
        </motion.div>
      </div>
    </motion.main>
  );
};

export default CourseStep1;
