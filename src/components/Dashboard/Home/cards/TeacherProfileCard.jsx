import React, { useState } from 'react';
import {
  format,
  addMonths,
  subMonths,
  startOfMonth,
  endOfMonth,
  eachDayOfInterval,
} from 'date-fns';
import { ChevronLeft, ChevronRight } from 'lucide-react';

const TeacherProfileCard = () => {
  const [currentDate, setCurrentDate] = useState(new Date());

  const daysInMonth = eachDayOfInterval({
    start: startOfMonth(currentDate),
    end: endOfMonth(currentDate),
  });

  const startDay = startOfMonth(currentDate).getDay();
  const emptyDays = Array(startDay).fill(null);

  const nextMonth = () => setCurrentDate(addMonths(currentDate, 1));
  const prevMonth = () => setCurrentDate(subMonths(currentDate, 1));

  return (
    <div className="rounded-xl border border-border bg-white text-card-foreground shadow-sm dark:bg-card dark:border-border">
      <div className="border-b border-border p-6">
        <div className="flex items-center gap-4">
          <img
            src="https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=60&h=60&fit=crop"
            alt="Teacher avatar"
            className="h-12 w-12 rounded-full object-cover"
          />
          <div>
            <h3 className="font-medium text-foreground">Monica Howard</h3>
            <p className="text-sm text-muted-foreground">Mathematics Teacher</p>
          </div>
        </div>
      </div>

      <div className="p-4">
        <div className="text-center">
          <div className="flex items-center justify-between mb-4">
            <button
              onClick={prevMonth}
              className="p-2 hover:bg-accent rounded-full text-muted-foreground hover:text-foreground"
            >
              <ChevronLeft className="h-5 w-5" />
            </button>
            <h4 className="font-medium text-foreground">
              {format(currentDate, 'MMMM yyyy')}
            </h4>
            <button
              onClick={nextMonth}
              className="p-2 hover:bg-accent rounded-full text-muted-foreground hover:text-foreground"
            >
              <ChevronRight className="h-5 w-5" />
            </button>
          </div>

          <div className="grid grid-cols-7 gap-1 text-sm mb-2">
            {['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat'].map((day) => (
              <div key={day} className="p-2 text-muted-foreground">
                {day}
              </div>
            ))}
          </div>

          <div className="grid grid-cols-7 gap-1">
            {emptyDays.map((_, index) => (
              <div key={`empty-${index}`} className="p-2" />
            ))}
            {daysInMonth.map((day) => (
              <button
                key={day.toString()}
                className={`p-2 hover:bg-primary-100 rounded-full text-foreground
                  ${
                    format(currentDate, 'dd') === format(day, 'dd')
                      ? 'bg-primary-300 text-primary-foreground hover:bg-secondary-300 dark:bg-primary-300 dark:text-primary-foreground dark:hover:bg-secondary-300'
                      : ''
                  }`}
                onClick={() => {
                  console.log('day selected', day);
                  setCurrentDate(day);
                }}
              >
                {format(day, 'd')}
              </button>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default TeacherProfileCard;
