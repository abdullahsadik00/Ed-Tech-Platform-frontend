'use client';

import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

const itemVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0 },
};

export default function SelectLibraryModal({ onClose, onAdd }) {
  const [selectedContent, setSelectedContent] = useState([]);
  const [searchQuery, setSearchQuery] = useState('');

  const contentItems = [
    { id: 1, title: 'Share with me', icon: '🔗' },
    { id: 2, title: 'Figma Basic', icon: '📱' },
    { id: 3, title: 'How to layouting clean design', icon: '📝' },
    { id: 4, title: 'Mobile & Desktop Direction Layout', icon: '💻' },
    { id: 5, title: 'Design Screen Pattern', icon: '🎨' },
    { id: 6, title: 'Understand the Basics of Layout and Spacing', icon: '📐' },
    { id: 7, title: 'Mobile & Desktop Flow Pattern', icon: '📱' },
    { id: 8, title: 'Fikri Studio', icon: '🎨' },
  ];

  const handleSelect = (item) => {
    if (selectedContent.find((i) => i.id === item.id)) {
      setSelectedContent(selectedContent.filter((i) => i.id !== item.id));
    } else {
      setSelectedContent([...selectedContent, item]);
    }
  };

  const filteredContent = contentItems.filter((item) =>
    item.title.toLowerCase().includes(searchQuery.toLowerCase())
  );

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      className="p-6"
    >
      <motion.h2
        variants={itemVariants}
        initial="hidden"
        animate="visible"
        className="text-xl font-bold mb-4"
      >
        Select from Library
      </motion.h2>
      <motion.div
        variants={itemVariants}
        initial="hidden"
        animate="visible"
        className="flex gap-4 mb-4"
      >
        <input
          type="text"
          placeholder="Search..."
          className="w-full px-4 py-2 border rounded-lg"
          value={searchQuery}
          onChange={(e) => setSearchQuery(e.target.value)}
        />
        <motion.button
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
          className="px-4 py-2 border rounded-lg"
        >
          Add Filter
        </motion.button>
        <div className="flex items-center gap-2">
          <span>Selected Content</span>
          <span className="bg-gray-200 px-2 py-1 rounded-full text-sm">
            {selectedContent.length}
          </span>
          {selectedContent.length > 0 && (
            <button
              onClick={() => setSelectedContent([])}
              className="text-blue-600 text-sm"
            >
              Clear All
            </button>
          )}
        </div>
      </motion.div>

      <motion.div
        variants={itemVariants}
        initial="hidden"
        animate="visible"
        className="grid grid-cols-2 gap-4"
      >
        {/* Content list */}
        <div className="border rounded-lg p-4 max-h-[400px] overflow-y-auto">
          <AnimatePresence>
            {filteredContent.map((item) => (
              <motion.div
                key={item.id}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -20 }}
                whileHover={{ scale: 1.02 }}
                onClick={() => handleSelect(item)}
                className={`p-3 flex items-center gap-2 cursor-pointer rounded-lg ${
                  selectedContent.find((i) => i.id === item.id)
                    ? 'bg-blue-50'
                    : 'hover:bg-gray-50'
                }`}
              >
                <span className="text-2xl">{item.icon}</span>
                <span>{item.title}</span>
              </motion.div>
            ))}
          </AnimatePresence>
        </div>

        {/* Selected content */}
        <div className="border rounded-lg p-4">
          <AnimatePresence>
            {selectedContent.length === 0 ? (
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                className="h-full flex flex-col items-center justify-center text-gray-500"
              >
                <div className="mb-2">📄</div>
                <p>No content</p>
                <p className="text-sm">
                  Please choose the module you'd like to add.
                </p>
              </motion.div>
            ) : (
              selectedContent.map((item) => (
                <motion.div
                  key={item.id}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -20 }}
                  className="flex items-center justify-between p-2 bg-gray-50 rounded mb-2"
                >
                  <div className="flex items-center gap-2">
                    <span className="text-xl">{item.icon}</span>
                    <span>{item.title}</span>
                  </div>
                  <motion.button
                    whileHover={{ scale: 1.1 }}
                    whileTap={{ scale: 0.9 }}
                    onClick={() => handleSelect(item)}
                    className="text-gray-500 hover:text-gray-700"
                  >
                    ×
                  </motion.button>
                </motion.div>
              ))
            )}
          </AnimatePresence>
        </div>
      </motion.div>

      <motion.div
        variants={itemVariants}
        initial="hidden"
        animate="visible"
        className="flex justify-end gap-2 mt-4"
      >
        <motion.button
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
          onClick={onClose}
          className="px-4 py-2 border rounded-lg hover:bg-gray-50"
        >
          Cancel
        </motion.button>
        <motion.button
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
          onClick={() => onAdd(selectedContent)}
          disabled={selectedContent.length === 0}
          className="px-4 py-2 bg-blue-600 text-white rounded-lg disabled:opacity-50 hover:bg-blue-700"
        >
          Add
        </motion.button>
      </motion.div>
    </motion.div>
  );
}
