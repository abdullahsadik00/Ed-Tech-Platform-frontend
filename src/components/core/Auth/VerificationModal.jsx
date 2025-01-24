import React, { useState } from 'react';
import { AuthButton } from './AuthButton';

export const VerificationModal = ({ isOpen, onClose }) => {
  const [code, setCode] = useState(['', '', '', '', '', '']);

  const handleCodeChange = (index, value) => {
    if (value.length <= 1) {
      const newCode = [...code];
      newCode[index] = value;
      setCode(newCode);

      // Auto-focus next input
      if (value && index < 5) {
        const nextInput = document.getElementById(`code-${index + 1}`);
        nextInput?.focus();
      }
    }
  };

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center">
      <div className="absolute inset-0 bg-black/50" onClick={onClose} />
      <div className="relative bg-white rounded-lg w-full max-w-md mx-4 p-6">
        <div className="flex justify-end">
          <button
            onClick={onClose}
            className="text-gray-500 hover:text-gray-700"
          >
            <svg
              className="w-6 h-6"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M6 18L18 6M6 6l12 12"
              />
            </svg>
          </button>
        </div>

        <h3 className="font-semibold text-2xl text-center tracking-wide mb-2">
          Almost done
        </h3>
        <p className="text-sm text-center text-gray-600 mb-6">
          Please type the code we sent to your email
        </p>

        <div className="flex justify-center gap-2 mb-6">
          {code.map((digit, index) => (
            <input
              key={index}
              id={`code-${index}`}
              type="text"
              maxLength={1}
              value={digit}
              onChange={(e) => handleCodeChange(index, e.target.value)}
              className="w-12 h-12 text-center border rounded-lg focus:ring-2 focus:ring-[#3C43C1]/50 text-lg font-semibold"
            />
          ))}
        </div>

        <AuthButton onClick={onClose}>Verify</AuthButton>

        <div className="text-center">
          <p className="text-sm font-medium mb-2">51:12</p>
          <p className="text-sm text-gray-600">
            Can't access your email?{' '}
            <button className="font-semibold text-gray-900 hover:underline">
              Contact support
            </button>
          </p>
        </div>
      </div>
    </div>
  );
};
