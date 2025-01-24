import React, { useState } from 'react';

const Item = ({ title, children }) => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="border-b">
      <button
        type="button"
        aria-label="Open item"
        title="Open item"
        className="flex items-center justify-between w-full p-4 focus:outline-none"
        onClick={() => setIsOpen(!isOpen)}
      >
        <p className="text-lg font-medium">{title}</p>
        <svg
          viewBox="0 0 24 24"
          className={`w-3 text-gray-600 transform transition-transform duration-200 ${
            isOpen ? 'rotate-180' : ''
          }`}
        >
          <polyline
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeMiterlimit="10"
            points="2,7 12,17 22,7"
            strokeLinejoin="round"
          />
        </svg>
      </button>
      {isOpen && (
        <div className="p-4 pt-0">
          <p className="text-gray-700">{children}</p>
        </div>
      )}
    </div>
  );
};

const Faq = () => {
  const faqData = [
    {
      question: 'What is Ed-tech Platform?',
      answer:
        'A comprehensive school/college management system that streamlines operations like student management, attendance, grades, fees, and communication in one platform.',
    },
    {
      question: 'How are student records managed?',
      answer:
        'It maintains detailed student profiles with personal, academic, and attendance records that can be easily updated by authorized staff.',
    },
    {
      question: 'Can teachers track attendance?',
      answer:
        'Yes, teachers can record and track attendance digitally, with automatic updates and notifications sent to parents for absentees.',
    },
    {
      question: 'How does the platform handle exams and grades?',
      answer:
        'Create custom exam schedules, enter grades, generate report cards, and provide parents and students access to progress reports and transcripts.',
    },
    {
      question: 'Is fee management supported?',
      answer:
        'Yes, with features like fee structures, payment tracking, online payments, and automated reminders for due fees.',
    },
    {
      question: 'Can parents and teachers communicate via the platform?',
      answer:
        'Yes, through secure messaging, announcements, and notifications for updates on homework, exams, and events.',
    },
  ];

  return (
    <div className="px-4 py-16 mx-auto sm:max-w-xl md:max-w-full lg:max-w-screen-xl md:px-24 lg:px-8 lg:py-20">
      <div className="max-w-xl sm:mx-auto lg:max-w-2xl">
        <div className="max-w-xl mb-10 md:mx-auto sm:text-center lg:max-w-2xl md:mb-12">
          <h2 className="text-3xl font-bold leading-none tracking-tight text-gray-900 sm:text-4xl md:mx-auto">
            Frequently Asked Questions
          </h2>
        </div>
        <div className="space-y-4">
          {faqData.map((item, index) => (
            <Item key={index} title={item.question}>
              {item.answer}
            </Item>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Faq;
