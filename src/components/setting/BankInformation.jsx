import React from 'react';
import { motion } from 'framer-motion';
import { Building2 } from 'lucide-react';

const BankInformation = () => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
      className="p-6 dark:bg-zinc-900"
    >
      <h2 className="font-poppins font-semibold leading-5 tracking-wide text-xl mb-4 dark:text-zinc-100">
        Bank Information
      </h2>
      <p className="font-normal text-left font-lato text-lg tracking-wide leading-7 text-[#8c8c8c] dark:text-zinc-400 mb-6">
        Manage your bank account details
      </p>
      <motion.div
        className="bg-white dark:bg-zinc-800 p-6 rounded-lg shadow-sm border border-gray-100 dark:border-zinc-700"
        whileHover={{ scale: 1.01 }}
      >
        <form className="space-y-6">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="md:col-span-2">
              <label className="block text-sm font-medium text-gray-700 dark:text-zinc-300 mb-1">
                Bank Name
              </label>
              <div className="relative">
                <input
                  type="text"
                  className="w-full p-2.5 pl-10 border border-gray-200 dark:border-zinc-700 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent dark:bg-zinc-800 dark:text-zinc-100"
                  placeholder="Enter bank name"
                />
                <Building2
                  className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 dark:text-zinc-500"
                  size={16}
                />
              </div>
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-700 dark:text-zinc-300 mb-1">
                Account Number
              </label>
              <input
                type="text"
                className="w-full p-2.5 border border-gray-200 dark:border-zinc-700 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent dark:bg-zinc-800 dark:text-zinc-100"
                placeholder="Enter account number"
              />
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-700 dark:text-zinc-300 mb-1">
                Routing Number
              </label>
              <input
                type="text"
                className="w-full p-2.5 border border-gray-200 dark:border-zinc-700 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent dark:bg-zinc-800 dark:text-zinc-100"
                placeholder="Enter routing number"
              />
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-700 dark:text-zinc-300 mb-1">
                Account Type
              </label>
              <select className="w-full p-2.5 border border-gray-200 dark:border-zinc-700 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent dark:bg-zinc-800 dark:text-zinc-100">
                <option value="">Select account type</option>
                <option value="checking">Checking</option>
                <option value="savings">Savings</option>
              </select>
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-700 dark:text-zinc-300 mb-1">
                Swift Code
              </label>
              <input
                type="text"
                className="w-full p-2.5 border border-gray-200 dark:border-zinc-700 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent dark:bg-zinc-800 dark:text-zinc-100"
                placeholder="Enter SWIFT code"
              />
            </div>
          </div>
          <div className="flex justify-end space-x-4">
            <motion.button
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
              className="px-4 py-2 text-gray-600 dark:text-zinc-300 bg-gray-100 dark:bg-zinc-700 rounded-lg hover:bg-gray-200 dark:hover:bg-zinc-600"
              type="button"
            >
              Cancel
            </motion.button>
            <motion.button
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
              className="px-4 py-2 text-white bg-blue-600 dark:bg-blue-500 rounded-lg hover:bg-blue-700 dark:hover:bg-blue-600"
              type="submit"
            >
              Save Bank Information
            </motion.button>
          </div>
        </form>
      </motion.div>
    </motion.div>
  );
};

export default BankInformation;
