import { Label } from '@/components/ui/label';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import { Calendar1, ChevronDown, ChevronLeft, ChevronRight } from 'lucide-react';
import { useState } from 'react'
import { Controller } from 'react-hook-form';

const PersonalInfoForm = ({ register,
    onChange,
    errors,
    control, setFieldValue, watch }: any) => {
    const dateOfBirth = watch('dateOfBirth');
    const [dropdownMaritalStatusOpen, setDropdownMaritalStatusOpen] = useState<boolean>(false);
    const [currentDate, setCurrentDate] = useState<Date>(new Date());
    const [showCalendar, setShowCalendar] = useState<boolean>(false);
    const [selectedMaritalStatus, setSelectedMaritalStatus] = useState('Select Marital Status');

    const [selectedBloodGroup, setSelectedBloodGroup] = useState('Select Blood Group');
    const [dropdownBloodGroupOpen, setDropdownBloodGroupOpen] = useState<boolean>(false);
    const handleMartialStatusSelect = (maritalStatus: string) => {
        setSelectedMaritalStatus(maritalStatus);
        setDropdownMaritalStatusOpen(false);
        console.log("Calling gender")
    }; const handleBloodGroupSelect = (bloodGroup: string) => {
        setSelectedBloodGroup(bloodGroup);
        setDropdownBloodGroupOpen(false);
        console.log("Calling gender")
    };

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
        <section className=''>
            <h3 className="text-lg font-medium text-gray-900 mb-6">
                Basic Information
            </h3>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                <div>
                    <label className="block text-sm font-medium text-gray-700    mb-1">
                        First Name
                    </label>
                    <input
                        type="text"
                        id="firstName"
                        className="w-full p-2.5 border border-gray-200 rounded-lg    "
                        placeholder="John"
                        {...register('firstName')}
                        onChange={onChange}
                    />
                    {errors.firstName && (
                        <p className="text-sm text-red-500 mt-1">{errors.firstName.message}</p>
                    )}
                </div>
                <div>
                    <label className="block text-sm font-medium text-gray-700    mb-1">
                        Middle Name
                    </label>
                    <input
                        type="text"
                        className="w-full p-2.5 border border-gray-200   rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent    "
                        placeholder="William"
                        {...register('middleName')}
                        onChange={onChange}
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
                        {...register('lastName')}
                        onChange={onChange}
                    />
                    {errors.lastName && (
                        <p className="text-sm text-red-500 mt-1">{errors.lastName.message}</p>
                    )}
                </div>
                <div>
                    <label className="block text-sm font-medium text-gray-700 mb-1">
                        Gender
                    </label>
                    <Controller
                        name="gender"
                        control={control}
                        render={({ field }) => (
                            <Select onValueChange={field.onChange}
                                value={field.value === '' ? undefined : field.value}
                            >
                                <SelectTrigger className="w-full p-2.5 text-base	">
                                    <SelectValue placeholder="Select Gender" />
                                </SelectTrigger>
                                <SelectContent className='z-10 bg-white '>
                                    <SelectItem value="male" className='hover:bg-gray-50 first:rounded-t-lg last:rounded-b-lg'>Male</SelectItem>
                                    <SelectItem value="female" className='hover:bg-gray-50 first:rounded-t-lg last:rounded-b-lg'>Female</SelectItem>
                                    <SelectItem value="other" className='hover:bg-gray-50 first:rounded-t-lg last:rounded-b-lg'>Other</SelectItem>
                                </SelectContent>
                            </Select>
                        )}
                    />
                    {errors.gender && (
                        <p className="text-sm text-red-500 mt-1">{errors.gender.message}</p>
                    )}
                </div>
                <div className="relative">
                    <Label htmlFor='maritalStatus' className='text-gray-700 mb-1.5'>Marital Status</Label>
                    <button type='button'
                        onClick={() => setDropdownMaritalStatusOpen(!dropdownMaritalStatusOpen)}
                        className="w-full flex items-center justify-between p-2.5 border border-gray-200 rounded-lg bg-white">
                        <span>{selectedMaritalStatus}</span><ChevronDown className="w-4 h-4 text-gray-400" />
                    </button>
                    {
                        dropdownMaritalStatusOpen && (
                            <div className='absolute z-10 mt-1 w-full rounded-lg bg-white shadow-lg border border-gray-100'>
                                {['Maried', 'Un Maried', 'Divorced'].map((status) => (
                                    <button
                                        key={status}
                                        type="button"
                                        onClick={() => handleMartialStatusSelect(status)}
                                        className="block w-full px-4 py-2 text-left hover:bg-gray-50   first:rounded-t-lg last:rounded-b-lg  "
                                    >
                                        {status}
                                    </button>
                                ))}
                            </div>
                        )
                    }
                    {errors.gender && (
                        <p className="text-sm text-red-500 mt-1">{errors.gender.message}</p>
                    )}
                </div>
                <div className="relative">
                    <label className="block text-sm font-medium text-gray-700    mb-1">
                        Date of Birth
                    </label>
                    <div className="relative">
                        <input
                            type="text"
                            readOnly
                            value={dateOfBirth || ''}
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
                                    setFieldValue('dateOfBirth', formatted);
                                    setShowCalendar(false);
                                })}
                            </div>
                        </div>
                    )}
                    {errors.dateOfBirth && (
                        <p className="text-sm text-red-500 mt-1">{errors.dateOfBirth.message}</p>
                    )}
                </div>
                <div>
                    <label className="block text-sm font-medium text-gray-700    mb-1">
                        Place of Birth
                    </label>
                    <input
                        type="text"
                        className="w-full p-2.5 border border-gray-200 rounded-lg    "
                        placeholder="Pune"
                        {...register('placeOfBirth')}
                        onChange={onChange}

                    />
                    {errors.placeOfBirth && (
                        <p className="text-sm text-red-500 mt-1">{errors.placeOfBirth.message}</p>
                    )}
                </div>
                <div>
                    <label className="block text-sm font-medium text-gray-700    mb-1">
                        Mother Tongue
                    </label>
                    <input
                        type="text"
                        className="w-full p-2.5 border border-gray-200 rounded-lg    "
                        placeholder="Urdu"
                        {...register('motherTongue')}
                        onChange={onChange}

                    />
                    {errors.motherTongue && (
                        <p className="text-sm text-red-500 mt-1">{errors.motherTongue.message}</p>
                    )}
                </div>
                <div className="relative">
                    <Label htmlFor='maritalStatus' className='text-gray-700 mb-1.5'>Blood Group</Label>
                    <button type='button'
                        onClick={() => setDropdownBloodGroupOpen(!dropdownBloodGroupOpen)}
                        className="w-full flex items-center justify-between p-2.5 border border-gray-200 rounded-lg bg-white">
                        <span>{selectedBloodGroup}</span><ChevronDown className="w-4 h-4 text-gray-400" />
                    </button>
                    {
                        dropdownBloodGroupOpen && (
                            <div className='absolute z-10 mt-1 w-full rounded-lg bg-white shadow-lg border border-gray-100'>
                                {["A+", "A-", "B+", "B-", "AB+", "AB-", "O+", "O-"].map((status) => (
                                    <button
                                        key={status}
                                        type="button"
                                        onClick={() => {
                                            handleBloodGroupSelect(status)
                                            setFieldValue('bloodGroup', status);
                                        }}
                                        className="block w-full px-4 py-2 text-left hover:bg-gray-50   first:rounded-t-lg last:rounded-b-lg  "
                                    >
                                        {status}
                                    </button>
                                ))}
                            </div>
                        )
                    }
                    {errors.bloodGroup && (
                        <p className="text-sm text-red-500 mt-1">{errors.bloodGroup.message}</p>
                    )}
                </div>

                <div>
                    <label className="block text-sm font-medium text-gray-700    mb-1">
                        Religion
                    </label>
                    <input
                        type="text"
                        className="w-full p-2.5 border border-gray-200 rounded-lg    "
                        placeholder="Muslim"
                        {...register('religion')}
                        onChange={onChange}
                    />
                    {errors.religion && (
                        <p className="text-sm text-red-500 mt-1">{errors.religion.message}</p>
                    )}
                </div>
                <div>
                    <label className="block text-sm font-medium text-gray-700    mb-1">
                        Caste Category
                    </label>
                    <input
                        type="text"
                        className="w-full p-2.5 border border-gray-200 rounded-lg    "
                        placeholder="Muslim"
                        {...register('firstName')}
                        onChange={onChange}
                    />
                </div>
                <div>
                    <label className="block text-sm font-medium text-gray-700    mb-1">
                        Sub Caste
                    </label>
                    <input
                        type="text"
                        className="w-full p-2.5 border border-gray-200 rounded-lg    "
                        placeholder="Muslim"
                        {...register('firstName')}
                        onChange={onChange}
                    />
                </div>
                <div>
                    <label className="block text-sm font-medium text-gray-700    mb-1">
                        Nationality
                    </label>
                    <input
                        type="text"
                        className="w-full p-2.5 border border-gray-200 rounded-lg    "
                        placeholder="Indian"
                        {...register('nationality')}
                        onChange={onChange}
                    />
                    {errors.nationality && (
                        <p className="text-sm text-red-500 mt-1">{errors.nationality.message}</p>
                    )}
                </div>
            </div>
        </section>
    )
}

export default PersonalInfoForm