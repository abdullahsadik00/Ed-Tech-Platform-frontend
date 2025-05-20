const FamilyInfoForm = ({ register,
  onChange,
  errors}: any) => {
  return (
    <section className="border-t border-gray-100   pt-8">
      <h3 className="text-lg font-medium text-gray-900    mb-6">
        Family Information
      </h3>
      <div className="grid grid-cols-1 md:grid-cols-2  gap-6">
        <div>
          <label className="block text-sm font-medium text-gray-700    mb-1">
            Father Name
          </label>
          <input
            type='text'
            className="w-full p-2.5 border border-gray-200   rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent    "
            placeholder="Abdul Razzak"
            {...register('fatherName')}
            onChange={onChange}
          />
          {errors.fatherName && (
            <p className="text-sm text-red-500 mt-1">{errors.fatherName.message}</p>
          )}
        </div>
        <div>
          <label className="block text-sm font-medium text-gray-700    mb-1">
            Father Occupation
          </label>
          <input
            type='text'
            className="w-full p-2.5 border border-gray-200   rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent    "
            placeholder="Software developer"
            {...register('fatherOccupation')}
            onChange={onChange}
          />
          {errors.fatherOccupation && (
            <p className="text-sm text-red-500 mt-1">{errors.fatherOccupation.message}</p>
          )}
        </div>
        <div>
          <label className="block text-sm font-medium text-gray-700    mb-1">
            Mother Name
          </label>
          <input
            type='text'
            className="w-full p-2.5 border border-gray-200   rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent    "
            placeholder="Abdul Razzak"
            {...register('motherName')}
            onChange={onChange}
          />                    {errors.motherName && (
            <p className="text-sm text-red-500 mt-1">{errors.motherName.message}</p>
          )}

        </div>
        <div>
          <label className="block text-sm font-medium text-gray-700    mb-1">
            Mother Occupation
          </label>
          <input
            type='text'
            className="w-full p-2.5 border border-gray-200   rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent    "
            placeholder="House wife"
            {...register('motherOccupation')}
            onChange={onChange}
          />
          {errors.motherOccupation && (
            <p className="text-sm text-red-500 mt-1">{errors.motherOccupation.message}</p>
          )}
        </div>
        <div>
          <label className="block text-sm font-medium text-gray-700    mb-1">
            Total Family Members
          </label>
          <input
            type="number"
            className="w-full p-2.5 border border-gray-200   rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent    "
            placeholder="5"
            {...register('totalFamilyMembers')}
            onChange={onChange}
          />
          {errors.totalFamilyMembers && (
            <p className="text-sm text-red-500 mt-1">{errors.totalFamilyMembers.message}</p>
          )}
        </div>
        <div>
          <label className="block text-sm font-medium text-gray-700    mb-1">
            Family Income
          </label>
          <input
            type="number"
            className="w-full p-2.5 border border-gray-200   rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent    "
            placeholder="100000"
            {...register('firstName')}
            onChange={onChange}
          />
          {errors.firstName && (
            <p className="text-sm text-red-500 mt-1">{errors.firstName.message}</p>
          )}
        </div>
      </div>
    </section>
  )
}

export default FamilyInfoForm