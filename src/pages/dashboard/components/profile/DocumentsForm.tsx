import { Calendar1, ChevronLeft, ChevronRight } from 'lucide-react';
import { useState } from 'react'

const DocumentsForm = ({ register,
    onChange, setFieldValue, watch }: any) => {
    const [showCalendar, setShowCalendar] = useState<boolean>(false);
    const [currentDate, setCurrentDate] = useState<Date>(new Date());

    const visaExpiryDate = watch('visaExpiryDate');
    const visaIssueDate = watch('visaIssueDate');
    const passportIssueDate = watch('passportIssueDate');
    const passportExpiryDate = watch('passportExpiryDate');
    const renderCalendarDays = (onDateSelect: (date: Date) => void) => {
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
                    onClick={() => onDateSelect(date)}
                    className={`h-8 w-8 rounded-full flex items-center justify-center transition-colors
            ${isToday ? 'bg-gray-900 text-white' : 'hover:bg-gray-100'}
          `}> {i} </button>
            );
        }

        return days;
    };
    return (
        <section className="border-t border-gray-100   pt-8">
            <h3 className="text-lg font-medium text-gray-900    mb-6">
                Family Information
            </h3>
            <div className="grid grid-cols-1 md:grid-cols-2  gap-6">
                {/* Aadhar Card Number */}
                <div>
                    <label className="block text-sm font-medium text-gray-700 mb-1">
                        Aadhar Card Number
                    </label>
                    <input
                        type="text"
                        className="w-full p-2.5 border border-gray-200 rounded-lg"
                        placeholder="1234 5678 9012"
                        {...register('firstName')}
                        onChange={onChange}
                    />
                </div>

                {/* Passport Number */}
                <div>
                    <label className="block text-sm font-medium text-gray-700 mb-1">
                        Passport Number
                    </label>
                    <input
                        type="text"
                        className="w-full p-2.5 border border-gray-200 rounded-lg"
                        placeholder="M1234567"
                        {...register('firstName')}
                        onChange={onChange}
                    />
                </div>

                {/* Passport Issue Place */}
                <div>
                    <label className="block text-sm font-medium text-gray-700 mb-1">
                        Passport Issue Place
                    </label>
                    <input
                        type="text"
                        className="w-full p-2.5 border border-gray-200 rounded-lg"
                        placeholder="New Delhi"
                        {...register('firstName')}
                        onChange={onChange}
                    />
                </div>

                {/* Passport Issue Date */}
                <div>
                    <label className="block text-sm font-medium text-gray-700 mb-1">
                        Passport Issue Date
                    </label>
                    <div className="relative">
                        <input
                            type="text"
                            readOnly
                            value={passportIssueDate || ''}
                            onClick={() => setShowCalendar(!showCalendar)}
                            className="w-full p-2.5 border border-gray-200   rounded-lg bg-white     cursor-pointer"
                            placeholder="Select date"
                        />
                        <Calendar1 className="absolute right-3 top-1/2 -translate-y-1/2 w-4 h-4 text-gray-400  " />
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
                                {renderCalendarDays((date) => {
                                    const formatted = date.toLocaleDateString(); // Format as needed
                                    setFieldValue('passportIssueDate', formatted);
                                    setShowCalendar(false);
                                })}
                            </div>
                        </div>
                    )}
                </div>

                {/* Passport Expiry Date */}
                <div>
                    <label className="block text-sm font-medium text-gray-700 mb-1">
                        Passport Expiry Date
                    </label>
                    <div className="relative">
                        <input
                            type="text"
                            readOnly
                            value={passportExpiryDate || ''}
                            onClick={() => setShowCalendar(!showCalendar)}
                            className="w-full p-2.5 border border-gray-200   rounded-lg bg-white     cursor-pointer"
                            placeholder="Select date"
                        />
                        <Calendar1 className="absolute right-3 top-1/2 -translate-y-1/2 w-4 h-4 text-gray-400  " />
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
                                {renderCalendarDays((date) => {
                                    const formatted = date.toLocaleDateString(); // Format as needed
                                    setFieldValue('passportExpiryDate', formatted);
                                    setShowCalendar(false);
                                })}
                            </div>
                        </div>
                    )}
                </div>

                {/* Visa Number */}
                <div>
                    <label className="block text-sm font-medium text-gray-700 mb-1">
                        Visa Number
                    </label>
                    <input
                        type="text"
                        className="w-full p-2.5 border border-gray-200 rounded-lg"
                        placeholder="V12345678"
                        {...register('firstName')}
                        onChange={onChange}
                    />
                </div>

                {/* Visa Issue Place */}
                <div>
                    <label className="block text-sm font-medium text-gray-700 mb-1">
                        Visa Issue Place
                    </label>
                    <input
                        type="text"
                        className="w-full p-2.5 border border-gray-200 rounded-lg"
                        placeholder="Mumbai"
                        {...register('firstName')}
                        onChange={onChange}
                    />
                </div>

                {/* Visa Issue Date */}
                <div>
                    <label className="block text-sm font-medium text-gray-700 mb-1">
                        Visa Issue Date
                    </label>
                    <div className="relative">
                        <input
                            type="text"
                            readOnly
                            value={visaIssueDate || ''}
                            onClick={() => setShowCalendar(!showCalendar)}
                            className="w-full p-2.5 border border-gray-200   rounded-lg bg-white     cursor-pointer"
                            placeholder="Select date"
                        />
                        <Calendar1 className="absolute right-3 top-1/2 -translate-y-1/2 w-4 h-4 text-gray-400  " />
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
                                {renderCalendarDays((date) => {
                                    const formatted = date.toLocaleDateString(); // Format as needed
                                    setFieldValue('visaIssueDate', formatted);
                                    setShowCalendar(false);
                                })}
                            </div>
                        </div>
                    )}
                </div>

                {/* Visa Expiry Date */}
                <div>
                    <label className="block text-sm font-medium text-gray-700 mb-1">
                        Visa Expiry Date
                    </label>
                    <div className="relative">
                        <input
                            type="text"
                            readOnly
                            value={visaExpiryDate || ''}
                            onClick={() => setShowCalendar(!showCalendar)}
                            className="w-full p-2.5 border border-gray-200   rounded-lg bg-white     cursor-pointer"
                            placeholder="Select date"
                        />
                        <Calendar1 className="absolute right-3 top-1/2 -translate-y-1/2 w-4 h-4 text-gray-400  " />
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
                                {renderCalendarDays((date) => {
                                    const formatted = date.toLocaleDateString(); // Format as needed
                                    setFieldValue('visaExpiryDate', formatted);
                                    setShowCalendar(false);
                                })}
                            </div>
                        </div>
                    )}
                </div>

            </div>
        </section>
    )
}

export default DocumentsForm