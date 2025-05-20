const ContactInfoForm = ({ register,
    onChange,
    errors }: any) => {
    return (
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
                        {...register('phoneNumber')}
                        onChange={onChange}
                    />
                    {errors.phoneNumber && (
                        <p className="text-sm text-red-500 mt-1">{errors.phoneNumber.message}</p>
                    )}
                </div>
                <div>
                    <label className="block text-sm font-medium text-gray-700    mb-1">
                        Email
                    </label>
                    <input
                        type="email"
                        className="w-full p-2.5 border border-gray-200   rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent    "
                        placeholder="john@example.com"
                        {...register('email')}
                        onChange={onChange}
                    />
                    {errors.email && (
                        <p className="text-sm text-red-500 mt-1">{errors.email.message}</p>
                    )}
                </div>
                <div>
                    <label className="block text-sm font-medium text-gray-700    mb-1">
                        Parent Phone Number
                    </label>
                    <input
                        type="tel"
                        className="w-full p-2.5 border border-gray-200   rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent    "
                        placeholder="+1 (555) 000-0000"
                        {...register('parentPhoneNumber')}
                        onChange={onChange}
                    />
                </div>
                <div>
                    <label className="block text-sm font-medium text-gray-700    mb-1">
                        Parent Email
                    </label>
                    <input
                        type="email"
                        className="w-full p-2.5 border border-gray-200   rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent    "
                        placeholder="john@example.com"
                        {...register('parentEmail')}
                        onChange={onChange}
                    />
                </div>
            </div>
        </section >
    )
}

export default ContactInfoForm