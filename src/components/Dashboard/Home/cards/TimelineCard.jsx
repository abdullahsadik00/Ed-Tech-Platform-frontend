import React from 'react';
import { Clock } from 'lucide-react';

const TimelineCard = () => {
  const events = [
    {
      title: 'Mathematics Class',
      class: 'Class 10th',
      time: '10:00 AM',
    },
    {
      title: 'Science Lab',
      class: 'Class 9th',
      time: '11:30 AM',
    },
  ];

  return (
    <div className="rounded-xl border bg-card p-6 shadow-sm">
      <h2 className="text-lg font-semibold mb-6">Timeline</h2>

      <div className="space-y-4">
        {events.map((event, i) => (
          <div
            key={i}
            className="rounded-lg bg-muted/50 p-4 transition-colors hover:bg-muted"
          >
            <div className="flex items-center justify-between mb-2">
              <h3 className="font-medium">{event.title}</h3>
              <Clock className="h-4 w-4 text-muted-foreground" />
            </div>
            <div className="flex items-center justify-between text-sm">
              <span className="text-accent">{event.class}</span>
              <span className="text-primary">{event.time}</span>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default TimelineCard;
