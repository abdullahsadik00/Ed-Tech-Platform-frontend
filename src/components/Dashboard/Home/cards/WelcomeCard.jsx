import React from 'react';
import { Users } from 'lucide-react';

const WelcomeCard = () => {
  return (
    <div className="relative overflow-hidden rounded-xl bg-gradient-to-r from-primary-600 to-primary-500 dark:from-primary-700 dark:to-primary-900 p-6 dark:shadow-inner-lg">
      <div className="flex items-center justify-between">
        <div className="space-y-2">
          <h2 className="text-xl font-semibold text-white">
            Welcome Back, Teacher!
          </h2>
          <p className="text-primary-100 dark:text-primary-200">
            Your students are doing great!
            <span className="mx-1 font-bold text-white">60%</span>
            have completed their exams.
          </p>
        </div>
        <div className="hidden md:block">
          <Users className="h-24 w-24 text-primary-200/50 dark:text-primary-100/40" />
        </div>
      </div>

      {/* Decorative elements */}
      <div className="absolute -right-8 -top-8 h-32 w-32 rounded-full bg-primary-400/20 dark:bg-primary-300/10" />
      <div className="absolute -bottom-8 -left-8 h-32 w-32 rounded-full bg-primary-400/20 dark:bg-primary-300/10" />
    </div>
  );
};

export default WelcomeCard;
