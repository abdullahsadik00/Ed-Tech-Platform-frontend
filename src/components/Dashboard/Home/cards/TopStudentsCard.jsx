import { Trophy } from 'lucide-react';

const TopStudentsCard = () => {
  return (
    <div className="rounded-xl bg-white p-6 shadow-lg dark:bg-primary-dark">
      <div className="flex items-center justify-between mb-6">
        <h2 className="text-lg font-semibold text-foreground dark:text-foreground-dark">
          Top Students
        </h2>
        <Trophy className="h-5 w-5 text-yellow-500" />
      </div>

      <div className="space-y-4">
        {[1, 2].map((_, i) => (
          <div
            key={i}
            className="flex items-center gap-4 rounded-lg bg-primary-lightest p-4 transition-colors hover:bg-primary-lighter dark:bg-primary-dark dark:hover:bg-primary"
          >
            <img
              src="https://images.unsplash.com/photo-1535713875002-d1d0cf377fde?w=60&h=60&fit=crop"
              alt="Student avatar"
              className="h-12 w-12 rounded-full object-cover"
            />
            <div>
              <h3 className="font-medium text-foreground dark:text-foreground-dark">
                Alex Johnson
              </h3>
              <p className="text-sm text-secondary dark:text-secondary-dark">
                Overall Score 95%
              </p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default TopStudentsCard;
