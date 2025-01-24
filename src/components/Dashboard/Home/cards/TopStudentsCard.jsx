import React from 'react';
import { Trophy } from 'lucide-react';

const TopStudentsCard = () => {
  return (
    <div className="rounded-xl border bg-white p-6 shadow-sm">
      <div className="flex items-center justify-between mb-6">
        <h2 className="text-lg font-semibold">Top Students</h2>
        <Trophy className="h-5 w-5 text-yellow-500" />
      </div>

      <div className="space-y-4">
        {[1, 2].map((_, i) => (
          <div
            key={i}
            className="flex items-center gap-4 rounded-lg bg-muted/50 p-4 transition-colors hover:bg-muted"
          >
            <img
              src="https://images.unsplash.com/photo-1535713875002-d1d0cf377fde?w=60&h=60&fit=crop"
              alt="Student avatar"
              className="h-12 w-12 rounded-full object-cover"
            />
            <div>
              <h3 className="font-medium">Alex Johnson</h3>
              <p className="text-sm text-accent">Overall Score 95%</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default TopStudentsCard;
