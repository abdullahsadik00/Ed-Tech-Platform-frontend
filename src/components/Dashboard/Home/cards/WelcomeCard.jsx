import { Users } from 'lucide-react';

const WelcomeCard = () => {
  return (
    <div className="relative overflow-hidden rounded-xl bg-gradient-to-r from-primary to-secondary p-6 text-white shadow-lg">
      <div className="flex items-center justify-between">
        <div className="space-y-2">
          <h2 className="text-2xl font-semibold">Welcome Back, Teacher!</h2>
          <p className="text-primary-lightest">
            Your students are doing great!
            <span className="mx-1 font-bold">60%</span>
            have completed their exams.
          </p>
        </div>
        <div className="hidden md:block">
          <Users className="h-24 w-24 text-primary-lightest/50" />
        </div>
      </div>
      <div className="absolute -right-8 -top-8 h-32 w-32 rounded-full bg-white/10" />
      <div className="absolute -bottom-8 -left-8 h-32 w-32 rounded-full bg-white/10" />
    </div>
  );
};

export default WelcomeCard;
