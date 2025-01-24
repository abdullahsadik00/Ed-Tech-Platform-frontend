import React from 'react';
import { motion } from 'framer-motion';

const Address = () => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
      className="p-6 dark:bg-zinc-900"
    >
      <h2 className="font-sans font-semibold leading-5 tracking-wide text-xl mb-4">
        Manage Addresses
      </h2>
      <p className="font-normal text-left font-lato text-lg tracking-wide leading-7 text-[#8c8c8c] mb-6">
        Add or edit your delivery addresses
      </p>
      <div className="grid gap-6">
        {/* Address Form */}
        <motion.div
          className="bg-white dark:bg-zinc-800 p-6 rounded-lg shadow-sm border border-gray-100 dark:border-zinc-700"
          whileHover={{ scale: 1.01 }}
        >
          <form className="space-y-6">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div>
                <label className="block text-sm font-medium text-gray-700 dark:text-zinc-300 mb-1">
                  Street Address
                </label>
                <input
                  type="text"
                  className="w-full p-2.5 border border-gray-200 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                  placeholder="123 Main St"
                />
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700 dark:text-zinc-300 mb-1">
                  Apartment/Suite
                </label>
                <input
                  type="text"
                  className="w-full p-2.5 border border-gray-200 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                  placeholder="Apt 4B"
                />
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700 dark:text-zinc-300 mb-1">
                  City
                </label>
                <input
                  type="text"
                  className="w-full p-2.5 border border-gray-200 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                  placeholder="New York"
                />
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700 dark:text-zinc-300 mb-1">
                  Postal Code
                </label>
                <input
                  type="text"
                  className="w-full p-2.5 border border-gray-200 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                  placeholder="10001"
                />
              </div>
            </div>
            <div className="flex justify-end space-x-4">
              <motion.button
                whileHover={{
                  scale: 1.02,
                  boxShadow: '0 4px 12px rgba(0, 0, 0, 0.05)',
                  transition: { duration: 0.2, ease: 'easeInOut' },
                }}
                whileTap={{ scale: 0.98 }}
                initial={{ boxShadow: '0 2px 4px rgba(0, 0, 0, 0.05)' }}
                className="px-6 py-2.5  text-gray-600 hover:dark:text-slate-600 dark:text-white border border-gray-200 rounded-lg 
                   hover:bg-gray-50 transition-all duration-300 ease-in-out
                   "
                type="button"
              >
                Cancel
              </motion.button>
              <motion.button
                whileHover={{
                  scale: 1.02,
                  boxShadow: '0 4px 12px rgba(0, 0, 0, 0.1)',
                  transition: { duration: 0.2, ease: 'easeInOut' },
                }}
                whileTap={{ scale: 0.98 }}
                initial={{ boxShadow: '0 2px 4px rgba(0, 0, 0, 0.05)' }}
                className="px-6 py-2.5 text-white bg-primary-300 rounded-lg
                   hover:bg-primary-400 transition-all duration-300 ease-in-out
                   focus:outline-none focus:ring-2 focus:ring-primary-300 focus:ring-offset-2"
                type="submit"
              >
                Save Address
              </motion.button>
            </div>
          </form>
        </motion.div>
      </div>
    </motion.div>
  );
};

export default Address;
