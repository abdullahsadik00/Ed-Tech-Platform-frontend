// import React from 'react';
// import { motion } from 'framer-motion';

// const Address = () => {
//   return (
//     <motion.div
//       initial={{ opacity: 0, y: 20 }}
//       animate={{ opacity: 1, y: 0 }}
//       transition={{ duration: 0.5 }}
//       className="p-6 dark:bg-zinc-900"
//     >
//       <h2 className="font-sans font-semibold leading-5 tracking-wide text-xl mb-4">
//         Manage Addresses
//       </h2>
//       <p className="font-normal text-left font-lato text-lg tracking-wide leading-7 text-[#8c8c8c] mb-6">
//         Add or edit your delivery addresses
//       </p>
//       <div className="grid gap-6">
//         {/* Address Form */}
//         <motion.div
//           className="bg-white dark:bg-zinc-800 p-6 rounded-lg shadow-sm border border-gray-100 dark:border-zinc-700"
//           whileHover={{ scale: 1.01 }}
//         >
//           <form className="space-y-6">
//             <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
//               <div>
//                 <label className="block text-sm font-medium text-gray-700 dark:text-zinc-300 mb-1">
//                   Street Address
//                 </label>
//                 <input
//                   type="text"
//                   className="w-full p-2.5 border border-gray-200 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
//                   placeholder="123 Main St"
//                 />
//               </div>
//               <div>
//                 <label className="block text-sm font-medium text-gray-700 dark:text-zinc-300 mb-1">
//                   Apartment/Suite
//                 </label>
//                 <input
//                   type="text"
//                   className="w-full p-2.5 border border-gray-200 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
//                   placeholder="Apt 4B"
//                 />
//               </div>
//               <div>
//                 <label className="block text-sm font-medium text-gray-700 dark:text-zinc-300 mb-1">
//                   City
//                 </label>
//                 <input
//                   type="text"
//                   className="w-full p-2.5 border border-gray-200 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
//                   placeholder="New York"
//                 />
//               </div>
//               <div>
//                 <label className="block text-sm font-medium text-gray-700 dark:text-zinc-300 mb-1">
//                   Postal Code
//                 </label>
//                 <input
//                   type="text"
//                   className="w-full p-2.5 border border-gray-200 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
//                   placeholder="10001"
//                 />
//               </div>
//             </div>
//             <div className="flex justify-end space-x-4">
//               <motion.button
//                 whileHover={{
//                   scale: 1.02,
//                   boxShadow: '0 4px 12px rgba(0, 0, 0, 0.05)',
//                   transition: { duration: 0.2, ease: 'easeInOut' },
//                 }}
//                 whileTap={{ scale: 0.98 }}
//                 initial={{ boxShadow: '0 2px 4px rgba(0, 0, 0, 0.05)' }}
//                 className="px-6 py-2.5  text-gray-600 hover:dark:text-slate-600 dark:text-white border border-gray-200 rounded-lg
//                    hover:bg-gray-50 transition-all duration-300 ease-in-out
//                    "
//                 type="button"
//               >
//                 Cancel
//               </motion.button>
//               <motion.button
//                 whileHover={{
//                   scale: 1.02,
//                   boxShadow: '0 4px 12px rgba(0, 0, 0, 0.1)',
//                   transition: { duration: 0.2, ease: 'easeInOut' },
//                 }}
//                 whileTap={{ scale: 0.98 }}
//                 initial={{ boxShadow: '0 2px 4px rgba(0, 0, 0, 0.05)' }}
//                 className="px-6 py-2.5 text-white bg-primary-300 rounded-lg
//                    hover:bg-primary-400 transition-all duration-300 ease-in-out
//                    focus:outline-none focus:ring-2 focus:ring-primary-300 focus:ring-offset-2"
//                 type="submit"
//               >
//                 Save Address
//               </motion.button>
//             </div>
//           </form>
//         </motion.div>
//       </div>
//     </motion.div>
//   );
// };

// export default Address;

import React from 'react';
import { Moon, Sun } from 'lucide-react';

const ColorBlock = ({
  label,
  lightClass,
  darkClass,
  textClass = 'text-foreground dark:text-foreground-dark',
}) => (
  <div className="flex flex-col gap-2">
    <div
      className={`${lightClass} dark:${darkClass} h-20 rounded-lg shadow-md flex items-center justify-center`}
    >
      <span className={textClass}>{label}</span>
    </div>
    <div className="text-xs font-mono">
      <p>Light: {lightClass}</p>
      <p>Dark: {darkClass}</p>
    </div>
  </div>
);

function Address() {
  const [isDark, setIsDark] = React.useState(false);

  const toggleTheme = () => {
    setIsDark(!isDark);
    document.documentElement.classList.toggle('dark');
  };

  return (
    <div className="min-h-screen bg-background dark:bg-background-dark p-8">
      <div className="max-w-7xl mx-auto space-y-8">
        <div className="flex justify-between items-center">
          <h1 className="text-2xl font-bold text-foreground dark:text-foreground-dark">
            Color Theme Guide
          </h1>
          <button
            variant="outline"
            size="icon"
            onClick={toggleTheme}
            className="h-10 w-10"
          >
            {isDark ? (
              <Sun className="h-4 w-4" />
            ) : (
              <Moon className="h-4 w-4" />
            )}
          </button>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {/* Background & Foreground */}
          <ColorBlock
            label="Background"
            lightClass="bg-background"
            darkClass="bg-background-dark"
          />
          <ColorBlock
            label="Foreground"
            lightClass="bg-foreground"
            darkClass="bg-foreground-dark"
          />

          {/* Primary Colors */}
          <ColorBlock
            label="Primary"
            lightClass="bg-primary"
            darkClass="bg-primary-dark"
            textClass="text-white"
          />
          <ColorBlock
            label="Primary Light"
            lightClass="bg-primary-light"
            darkClass="bg-zinc-600"
          />
          <ColorBlock
            label="Primary Lighter"
            lightClass="bg-primary-lighter"
            darkClass="bg-zinc-500"
          />
          <ColorBlock
            label="Primary Lightest"
            lightClass="bg-primary-lightest"
            darkClass="bg-zinc-400"
          />

          {/* Secondary Colors */}
          <ColorBlock
            label="Secondary"
            lightClass="bg-secondary"
            darkClass="bg-secondary-dark"
          />
          <ColorBlock
            label="Secondary Light"
            lightClass="bg-secondary-light"
            darkClass="bg-zinc-700"
          />

          {/* Accent Colors */}
          <ColorBlock
            label="Accent"
            lightClass="bg-accent"
            darkClass="bg-accent-dark"
          />
          <ColorBlock
            label="Accent Light"
            lightClass="bg-accent-light"
            darkClass="bg-zinc-500"
          />
          <ColorBlock
            label="Accent Lighter"
            lightClass="bg-accent-lighter"
            darkClass="bg-zinc-400"
          />

          {/* Muted Colors */}
          <ColorBlock
            label="Muted"
            lightClass="bg-muted"
            darkClass="bg-muted-dark"
          />

          {/* Destructive Colors */}
          <ColorBlock
            label="Destructive"
            lightClass="bg-destructive"
            darkClass="bg-destructive-dark"
            textClass="text-destructive-foreground dark:text-destructive-dark-foreground"
          />

          {/* Border & Input Colors */}
          <ColorBlock
            label="Border"
            lightClass="bg-border"
            darkClass="bg-border-dark"
          />
          <ColorBlock
            label="Input"
            lightClass="bg-input"
            darkClass="bg-input-dark"
          />
          <ColorBlock
            label="Ring"
            lightClass="bg-ring"
            darkClass="bg-ring-dark"
          />
        </div>

        {/* Zinc Scale */}
        <div>
          <h2 className="text-xl font-semibold mb-4 text-foreground dark:text-foreground-dark">
            Zinc Scale
          </h2>
          <div className="grid grid-cols-2 md:grid-cols-5 lg:grid-cols-11 gap-4">
            {[50, 100, 200, 300, 400, 500, 600, 700, 800, 900, 950].map(
              (weight) => (
                <ColorBlock
                  key={weight}
                  label={`${weight}`}
                  lightClass={`bg-zinc-${weight}`}
                  darkClass={`bg-zinc-${weight}`}
                  textClass={weight < 500 ? 'text-zinc-900' : 'text-zinc-50'}
                />
              )
            )}
          </div>
        </div>
      </div>
    </div>
  );
}
export default Address;
