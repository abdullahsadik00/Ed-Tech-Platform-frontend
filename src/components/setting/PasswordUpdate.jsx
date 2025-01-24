import React from 'react';
import { motion } from 'framer-motion';
import { Lock } from 'lucide-react';

const PasswordUpdate = () => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
      className="p-6 dark:bg-zinc-900"
    >
      <h2 className="font-poppins font-semibold leading-5 tracking-wide text-xl mb-4">
        Update Password
      </h2>
      <p className="font-normal text-left font-lato text-lg tracking-wide leading-7 text-[#8c8c8c] mb-6">
        Change your account password
      </p>
      <motion.div
        className="bg-white dark:bg-zinc-800 p-6 rounded-lg shadow-sm border border-gray-100 dark:border-zinc-700"
        whileHover={{ scale: 1.01 }}
      >
        <form className="space-y-6">
          <div>
            <label className="block text-sm font-medium text-gray-700 dark:text-zinc-300 mb-1">
              Current Password
            </label>
            <div className="relative">
              <input
                type="password"
                className="w-full p-2.5 pl-10 border border-gray-200 dark:border-zinc-700 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent dark:bg-zinc-800 dark:text-zinc-100"
                placeholder="Enter current password"
              />
              <Lock
                className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400"
                size={16}
              />
            </div>
          </div>
          <div>
            <label className="block text-sm font-medium text-gray-700 dark:text-zinc-300 mb-1">
              New Password
            </label>
            <div className="relative">
              <Lock
                className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400"
                size={16}
              />

              <input
                type="password"
                className="w-full p-2.5 pl-10 border border-gray-200 dark:border-zinc-700 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent dark:bg-zinc-800 dark:text-zinc-100"
                placeholder="Enter new password"
              />
            </div>
          </div>
          <div>
            <label className="block text-sm font-medium text-gray-700 dark:text-zinc-300 mb-1">
              Confirm New Password
            </label>
            <div className="relative">
              <Lock
                className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400"
                size={16}
              />

              <input
                type="password"
                className="w-full p-2.5 pl-10 border border-gray-200 dark:border-zinc-700 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent dark:bg-zinc-800 dark:text-zinc-100"
                placeholder="Confirm new password"
              />
            </div>
          </div>
          <div className="flex justify-end space-x-4">
            <motion.button
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
              className="px-4 py-2 text-gray-600 bg-gray-100 rounded-lg hover:bg-gray-200"
              type="button"
            >
              Cancel
            </motion.button>
            <motion.button
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
              className="px-4 py-2 text-white bg-blue-600 rounded-lg hover:bg-blue-700"
              type="submit"
            >
              Update Password
            </motion.button>
          </div>
        </form>
      </motion.div>
    </motion.div>
  );
};

export default PasswordUpdate;
