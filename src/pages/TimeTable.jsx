import React, { useEffect, useState } from 'react';
import { ChevronLeft, ChevronRight } from 'lucide-react';

const TimeTable = () => {
  const [currentDate, setCurrentDate] = useState(new Date());
  const [weekDays, setWeekDays] = useState([]);
  const [weekSchedule, setWeekSchedule] = useState({});

  const getWeekDays = function (date) {
    const dates = [];
    const start = new Date(date);
    start.setDate(start.getDate() - start.getDay() + 1);
    for (let i = 0; i < 7; i++) {
      const date = new Date(start);
      date.setDate(start.getDate() + i);
      dates.push(date);
    }
    for (let i = 0; i < dates.length; i++) {
      console.log('dates: ', dates[i].getDate());
    }
    return dates;
  };
  // const getWeekSchedule = function () {
  // const schedule = {
  //   Jan: {
  //     0: [
  //       {
  //         id: '1',
  //         subject: 'Biology',
  //         time: '07:00 - 08:00',
  //         teacher: 'James Gause',
  //         icon: '🧬',
  //         color: 'bg-orange-100',
  //       },
  //       {
  //         id: '2',
  //         subject: 'Biology',
  //         time: '07:00 - 08:00',
  //         teacher: 'James Gause',
  //         icon: '🧬',
  //         color: 'bg-orange-100',
  //       },
  //     ],
  //     1: [
  //       {
  //         id: '1',
  //         subject: 'Biology',
  //         time: '07:00 - 08:00',
  //         teacher: 'James Gause',
  //         icon: '🧬',
  //         color: 'bg-orange-100',
  //       },
  //       {
  //         id: '2',
  //         subject: 'Biology',
  //         time: '07:00 - 08:00',
  //         teacher: 'James Gause',
  //         icon: '🧬',
  //         color: 'bg-orange-100',
  //       },
  //     ],
  //   },
  //   Feb: {
  //     0: [
  //       {
  //         id: '1',
  //         subject: 'Biology',
  //         time: '07:00 - 08:00',
  //         teacher: 'James Gause',
  //         icon: '🧬',
  //         color: 'bg-orange-100',
  //       },
  //       {
  //         id: '2',
  //         subject: 'Biology',
  //         time: '07:00 - 08:00',
  //         teacher: 'James Gause',
  //         icon: '🧬',
  //         color: 'bg-orange-100',
  //       },
  //     ],
  //     1: [
  //       {
  //         id: '1',
  //         subject: 'Biology',
  //         time: '07:00 - 08:00',
  //         teacher: 'James Gause',
  //         icon: '🧬',
  //         color: 'bg-orange-100',
  //       },
  //       {
  //         id: '2',
  //         subject: 'Biology',
  //         time: '07:00 - 08:00',
  //         teacher: 'James Gause',
  //         icon: '🧬',
  //         color: 'bg-orange-100',
  //       },
  //     ],
  //   },
  // };
  //   const scheduleForWeek = {};
  //   setWeekSchedule(schedule);
  // };
  const schedule = {
    Jan: {
      0: [
        {
          id: '1',
          subject: 'Biology',
          time: '07:00 - 08:00',
          teacher: 'James Gause',
          icon: '🧬',
          color: 'bg-orange-100',
        },
        {
          id: '2',
          subject: 'Biology',
          time: '07:00 - 08:00',
          teacher: 'James Gause',
          icon: '🧬',
          color: 'bg-orange-100',
        },
      ],
      1: [
        {
          id: '1',
          subject: 'Biology',
          time: '07:00 - 08:00',
          teacher: 'James Gause',
          icon: '🧬',
          color: 'bg-orange-100',
        },
        {
          id: '2',
          subject: 'Biology',
          time: '07:00 - 08:00',
          teacher: 'James Gause',
          icon: '🧬',
          color: 'bg-orange-100',
        },
      ],
    },
    Feb: {
      0: [
        {
          id: '1',
          subject: 'Biology',
          time: '07:00 - 08:00',
          teacher: 'James Gause',
          icon: '🧬',
          color: 'bg-orange-100',
        },
        {
          id: '2',
          subject: 'Biology',
          time: '07:00 - 08:00',
          teacher: 'James Gause',
          icon: '🧬',
          color: 'bg-orange-100',
        },
      ],
      1: [
        {
          id: '1',
          subject: 'Biology',
          time: '07:00 - 08:00',
          teacher: 'James Gause',
          icon: '🧬',
          color: 'bg-orange-100',
        },
        {
          id: '2',
          subject: 'Biology',
          time: '07:00 - 08:00',
          teacher: 'James Gause',
          icon: '🧬',
          color: 'bg-orange-100',
        },
      ],
    },
  };
  useEffect(() => {
    setWeekDays(getWeekDays(currentDate));
  }, [currentDate]);

  const navigateWeeks = function (direction) {
    const newDate = new Date(currentDate);
    if (direction === 'next') {
      newDate.setDate(newDate.getDate() + 7);
    } else {
      newDate.setDate(newDate.getDate() - 7);
    }
    setCurrentDate(newDate);
  };
  return (
    <div className="max-w-[1400px] mx-auto p-6">
      <h1 className="text-2xl font-semibold mb-8">Timetable</h1>

      <div className="relative overflow-hidden">
        <div className="container mb-6">
          <button>
            <ChevronLeft size={24} onClick={() => navigateWeeks('prev')} />
          </button>
          <div className=" flex-1 overflow-hidden">
            {/* Weeks Day */}
            <div className="grid grid-cols-7 ">
              {weekDays.map((date, i) => (
                <div
                  className={`flex flex-col justify-center items-center p-2 ${
                    date.toDateString() === new Date().toDateString()
                      ? 'bg-primary/10 rounded-lg'
                      : ''
                  }`}
                >
                  <span className="text-sm text-gray-500">
                    {date.toLocaleString('en-Us', { month: 'short' })}
                  </span>

                  <span className="text-xl font-semibold">
                    {date.getDate()}
                  </span>

                  <span className="text-sm text-gray-500">
                    {date.toLocaleString('en-Us', { weekday: 'short' })}
                  </span>
                </div>
              ))}
            </div>
          </div>
          <button>
            <ChevronRight size={24} onClick={() => navigateWeeks('next')} />
          </button>
        </div>
        <div className="container">
          <div className="grid grid-cols-7 gap-4">
            {/* Loop over months in schedule */}
            {Object.entries(schedule).map(([month, days], index) => (
              <div>
                <h3>{month}</h3>
                <div>
                  {Object.entries(days).map(([day, subjects], dayIndex) => {
                    subjects.map((subject, index) => (
                      <div>
                        {subject.id}
                        {subject.subject}
                        {subject.time}
                        {subject.teacher}
                        {subject.icon}
                      </div>
                    ));
                  })}
                </div>
              </div>
            ))}
          </div>
          <div>{weekSchedule}</div>
        </div>
      </div>
    </div>
  );
};

export default TimeTable;
