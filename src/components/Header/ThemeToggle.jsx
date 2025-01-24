import React from 'react';
import { Moon, Sun } from 'lucide-react';
import { useTheme } from 'next-themes';

const ThemeToggle = () => {
  const { theme, setTheme } = useTheme();
  console.log(`ThemeToggle`, theme);
  return (
    <div className="mr-2">
      {theme === 'dark' ? (
        <button
          onClick={() => setTheme('light')}
          className="p-2 rounded-full hover:bg-gray-100 hover:text-gray-800 transition-colors duration-200"
          aria-label="Switch to light theme"
        >
          <Sun className="h-5 w-5 hover:bg-gray-100 hover:text-gray-800" />
        </button>
      ) : (
        <button
          onClick={() => setTheme('dark')}
          className="p-2 rounded-full hover:bg-gray-800 transition-colors duration-200"
          aria-label="Switch to dark theme"
        >
          <Moon className="h-5 w-5 hover:bg-gray-800 hover:text-gray-100" />
        </button>
      )}
    </div>
  );
};

export default ThemeToggle;
