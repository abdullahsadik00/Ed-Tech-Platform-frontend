import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { User, MapPin, CreditCard, Lock, Bell, Building2 } from 'lucide-react';
import Profile from '../components/setting/Profile';
import Address from '../components/setting/Address';
import PaymentMethod from '../components/setting/PaymentMethod';
import PasswordUpdate from '../components/setting/PasswordUpdate';
import Notification from '../components/setting/Notification';
import BankInformation from '../components/setting/BankInformation';

const Setting = () => {
  const [index, setIndex] = useState(0);
  console.log(`Setting ${index}`);

  const menuItems = [
    { icon: User, text: 'Profile' },
    { icon: MapPin, text: 'Address' },
    { icon: CreditCard, text: 'Payment Methods' },
    { icon: Lock, text: 'Update Password' },
    { icon: Bell, text: 'Notifications' },
    { icon: Building2, text: 'Bank Information' },
  ];

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      className="min-h-screen bg-gradient-to-b from-primary-50 to-primary-200 dark:from-zinc-950 dark:to-zinc-700 p-6"
    >
      <motion.div
        initial={{ y: 20, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ delay: 0.2 }}
        className="max-w-7xl mx-auto bg-white rounded-md shadow-sm border border-gray-100 dark:border-zinc-800 overflow-hidden"
      >
        <div className="flex flex-col md:flex-row min-h-[600px] dark:bg-zinc-950">
          {/* Sidebar */}
          <div className="w-full md:w-64 border-b md:border-b-0 md:border-r border-gray-100 dark:border-zinc-800">
            <nav className="p-4">
              {menuItems.map((item, idx) => (
                <motion.button
                  key={idx}
                  whileHover={{ scale: 1, x: 5 }}
                  whileTap={{ scale: 0.98 }}
                  onClick={() => setIndex(idx)}
                  className={`w-full flex items-center gap-3 px-4 py-3 my-2 rounded-xl transition-all duration-200 ${
                    index === idx
                      ? 'bg-gray-50 text-gray-900'
                      : 'text-gray-600 hover:bg-gray-100'
                  }`}
                >
                  <item.icon
                    className={`w-5 h-5 ${
                      index === idx ? 'text-gray-900' : 'text-gray-400'
                    }`}
                  />
                  <span className="font-medium">{item.text}</span>
                </motion.button>
              ))}
            </nav>
          </div>

          {/* Content Area */}
          <div className="flex-1">
            <AnimatePresence mode="wait">
              {index === 0 && <Profile />}
              {index === 1 && <Address />}
              {index === 2 && <PaymentMethod />}
              {index === 3 && <PasswordUpdate />}
              {index === 4 && <Notification />}
              {index === 5 && <BankInformation />}
            </AnimatePresence>
          </div>
        </div>
      </motion.div>
    </motion.div>
  );
};

export default Setting;
