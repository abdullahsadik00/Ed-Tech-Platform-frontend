import React, { useRef, useState } from 'react';
import {
  Calendar,
  ChevronDown,
  ChevronLeft,
  ChevronRight,
  User,
  Camera
} from 'lucide-react';
import { motion } from 'framer-motion';

const Profile = () => {
  const [selectedGender, setSelectedGender] = useState('Select Gender');
  const [dropdownOpen, setDropdownOpen] = useState(false);
  const [selectedDate, setSelectedDate] = useState('');
  const [showCalendar, setShowCalendar] = useState(false);
  const [currentDate, setCurrentDate] = useState(new Date());
  const [profileImage, setProfileImage] = useState<string| null>(null);
  const fileInputRef = useRef<HTMLInputElement>(null);

  const handleGenderSelect = (gender:string) => {
    setSelectedGender(gender);
    setDropdownOpen(false);
  };

  const renderCalendarDays = () => {
    const days = [];
    const year = currentDate.getFullYear();
    const month = currentDate.getMonth();
    const firstDay = new Date(year, month, 1).getDay();
    const daysInMonth = new Date(year, month + 1, 0).getDate();

    // Add empty cells for days before the first day of the month
    for (let i = 0; i < firstDay; i++) {
      days.push(<div key={`empty-${i}`} className="h-8" />);
    }

    // Add days of the month
    for (let i = 1; i <= daysInMonth; i++) {
      const date = new Date(year, month, i);
      const isToday = new Date().toDateString() === date.toDateString();

      days.push(
        <button
          key={i}
          onClick={() => {
            setSelectedDate(date.toLocaleDateString());
            setShowCalendar(false);
          }}
          className={`h-8 w-8 rounded-full flex items-center justify-center transition-colors
            ${isToday ? 'bg-gray-900 text-white' : 'hover:bg-gray-100'}
          `}
        >
          {i}
        </button>
      );
    }

    return days;
  };
  const handleImageUpload = (event: React.ChangeEvent<HTMLInputElement>) => {
    const file = event.target.files?.[0];
    if (file) {
      const reader = new FileReader();
      reader.onloadend = () => {
        setProfileImage(reader.result as string);
      };
      reader.readAsDataURL(file);
    }
  };
  
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
      className="p-6  "
    >
      {/* Header */}
      <div className="mb-8">
        <h2 className="font-sans font-semibold leading-5 tracking-wide text-xl mb-4">
          Edit Profile
        </h2>
        <p className="mt-2 text-gray-500  ">
          Update your personal information and how others see you on the
          platform.
        </p>
      </div>

      {/* Form Sections */}
      <motion.div
        className="bg-white   rounded-lg shadow-sm border border-gray-100  "
        whileHover={{ scale: 1.01 }}
      >
        {/* Profile Photo Section */}
        <div className="p-6 border-b border-gray-100  ">
          <div className="flex items-center space-x-8">
            <div className="relative">
              <div className="w-24 h-24 rounded-full bg-gray-100   overflow-hidden">
                {profileImage ? (
                  <img
                    src={profileImage}
                    alt="Profile"
                    className="w-full h-full object-cover"
                  />
                ) : (
                  <User className="w-full h-full p-6 text-gray-400  " />
                )}
              </div>
              <button
                onClick={() => fileInputRef.current?.click()}
                className="absolute bottom-0 right-0 p-2 bg-white   rounded-full shadow-lg border border-gray-200   hover:bg-gray-50   transition-colors"
              >
                <Camera className="w-4 h-4 text-gray-600   " />
              </button>
              <input
                type="file"
                ref={fileInputRef}
                onChange={handleImageUpload}
                accept="image/*"
                className="hidden"
              />
            </div>
            <div>
              <h3 className="text-lg font-medium text-gray-900  ">
                Profile Photo
              </h3>
              <p className="text-sm text-gray-500  ">
                Upload a new profile photo. Recommended size: 400x400px
              </p>
            </div>
          </div>
        </div>

        <form className="p-6 space-y-8">
          {/* Personal Information */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {/* Left Column - Basic Info */}
            <section>
              <h3 className="text-lg font-medium text-gray-900    mb-6">
                Basic Information
              </h3>
              <div className="space-y-6">
                <div>
                  <label className="block text-sm font-medium text-gray-700    mb-1">
                    First Name
                  </label>
                  <input
                    type="text"
                    className="w-full p-2.5 border border-gray-200   rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent    "
                    placeholder="John"
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700    mb-1">
                    Middle Name
                  </label>
                  <input
                    type="text"
                    className="w-full p-2.5 border border-gray-200   rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent    "
                    placeholder="William"
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700    mb-1">
                    Last Name
                  </label>
                  <input
                    type="text"
                    className="w-full p-2.5 border border-gray-200   rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent    "
                    placeholder="Doe"
                  />
                </div>
              </div>
            </section>

            {/* Right Column - Additional Info */}
            <section>
              <h3 className="text-lg font-medium text-gray-900    mb-6">
                Additional Details
              </h3>
              <div className="space-y-6">
                {/* Gender Dropdown */}
                <div className="relative">
                  <label className="block text-sm font-medium text-gray-700    mb-1">
                    Gender
                  </label>
                  <button
                    type="button"
                    onClick={() => setDropdownOpen(!dropdownOpen)}
                    className="w-full flex items-center justify-between p-2.5 border border-gray-200   rounded-lg bg-white    "
                  >
                    <span>{selectedGender}</span>
                    <ChevronDown className="w-4 h-4 text-gray-400" />
                  </button>

                  {dropdownOpen && (
                    <div className="absolute z-10 mt-1 w-full rounded-lg bg-white   shadow-lg border border-gray-100  ">
                      {['Male', 'Female', 'Other'].map((gender) => (
                        <button
                          key={gender}
                          type="button"
                          onClick={() => handleGenderSelect(gender)}
                          className="block w-full px-4 py-2 text-left hover:bg-gray-50   first:rounded-t-lg last:rounded-b-lg  "
                        >
                          {gender}
                        </button>
                      ))}
                    </div>
                  )}
                </div>

                {/* Date Picker */}
                <div className="relative">
                  <label className="block text-sm font-medium text-gray-700    mb-1">
                    Date of Birth
                  </label>
                  <div className="relative">
                    <input
                      type="text"
                      readOnly
                      value={selectedDate}
                      onClick={() => setShowCalendar(!showCalendar)}
                      className="w-full p-2.5 border border-gray-200   rounded-lg bg-white     cursor-pointer"
                      placeholder="Select date"
                    />
                    <Calendar className="absolute right-3 top-1/2 -translate-y-1/2 w-4 h-4 text-gray-400  " />
                  </div>
                  {showCalendar && (
                    <div className="absolute z-10 mt-1 p-4 bg-white   rounded-lg shadow-lg border border-zinc-100 ">
                      <div className="flex items-center justify-between mb-4">
                        <button
                          type="button"
                          onClick={() =>
                            setCurrentDate(
                              new Date(
                                currentDate.setMonth(currentDate.getMonth() - 1)
                              )
                            )
                          }
                          className="p-1 hover:bg-zinc-200 rounded-full transition-colors"
                        >
                          <ChevronLeft className="w-4 h-4  " />
                        </button>
                        <span className="font-medium  ">
                          {currentDate.toLocaleDateString('default', {
                            month: 'long',
                            year: 'numeric',
                          })}
                        </span>
                        <button
                          type="button"
                          onClick={() =>
                            setCurrentDate(
                              new Date(
                                currentDate.setMonth(currentDate.getMonth() + 1)
                              )
                            )
                          }
                          className="p-1 hover:bg-zinc-100 rounded-full transition-colors"
                        >
                          <ChevronRight className="w-4 h-4  " />
                        </button>
                      </div>
                      <div className="grid grid-cols-7 gap-1 text-center mb-2">
                        {['Su', 'Mo', 'Tu', 'We', 'Th', 'Fr', 'Sa'].map(
                          (day) => (
                            <div
                              key={day}
                              className="text-xs font-medium text-zinc-400  "
                            >
                              {day}
                            </div>
                          )
                        )}
                      </div>
                      <div className="grid grid-cols-7 gap-1">
                        {renderCalendarDays()}
                      </div>
                    </div>
                  )}
                </div>
              </div>
            </section>
          </div>{' '}
          {/* Contact Information */}
          <section className="border-t border-gray-100   pt-8">
            <h3 className="text-lg font-medium text-gray-900    mb-6">
              Contact Information
            </h3>
            <div className="grid grid-cols-1 md:grid-cols-2  gap-6">
              <div>
                <label className="block text-sm font-medium text-gray-700    mb-1">
                  Phone Number
                </label>
                <input
                  type="tel"
                  className="w-full p-2.5 border border-gray-200   rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent    "
                  placeholder="+1 (555) 000-0000"
                />
              </div>
              {/* <div>
                <label className="block text-sm font-medium text-gray-700    mb-1">
                  Mobile
                </label>
                <input
                  type="tel"
                  className="w-full p-2.5 border border-gray-200   rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent    "
                  placeholder="+1 (555) 000-0000"
                />
              </div> */}
              <div>
                <label className="block text-sm font-medium text-gray-700    mb-1">
                  Email
                </label>
                <input
                  type="email"
                  className="w-full p-2.5 border border-gray-200   rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent    "
                  placeholder="john@example.com"
                />
              </div>
            </div>
          </section>
          {/* Form Actions */}
          <div className="flex justify-end gap-4 pt-6 border-t border-gray-100  ">
            <button
              type="button"
              className="px-4 py-2 text-sm font-medium text-gray-700    bg-white   border border-gray-300   rounded-lg hover:bg-gray-50  "
            >
              Cancel
            </button>
            <button
              type="submit"
              className="px-4 py-2 text-sm font-medium text-white bg-blue-600 rounded-lg hover:bg-blue-700"
            >
              Save Changes
            </button>
          </div>
        </form>
      </motion.div>
    </motion.div>
  );
};

export default Profile;