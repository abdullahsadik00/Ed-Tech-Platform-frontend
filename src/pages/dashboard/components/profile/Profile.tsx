import  { useRef, useState } from 'react';
import {
  User,
  Camera
} from 'lucide-react';
import { motion } from 'framer-motion';
import { useProfileForm } from './hooks/useProfileForm';
import PersonalInfoForm from './PersonalInfoForm';
import ContactInfoForm from './ContactInfoForm';
import FamilyInfoForm from './FamilyInfoForm';
import DocumentsForm from './DocumentsForm';
import FormActions from './FormActions';

const Profile = () => {

  const {
    errors,
    handleChange,
    handleSubmit,
    isSubmitting,
    setFieldValue,
    handleImageUpload,
    register,
    control,
    watch
  } = useProfileForm();
  const [profileImage, setProfileImage] = useState<string | null>(null);
  const fileInputRef = useRef<HTMLInputElement>(null);
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

        <form className="p-6 space-y-8" onSubmit={handleSubmit}>

          <PersonalInfoForm
            register={register}
            onChange={handleChange}
            errors={errors}
            control={control}
            setFieldValue={setFieldValue}
            watch={watch}

          />

          <ContactInfoForm
            register={register}
            onChange={handleChange}
            errors={errors}
            control={control}
            setFieldValue={setFieldValue}
            watch={watch}
          />

          <FamilyInfoForm
            register={register}
            onChange={handleChange}
            errors={errors}
            control={control}
            setFieldValue={setFieldValue}
            watch={watch}
          />

          <DocumentsForm
            register={register}
            onChange={handleChange}
            errors={errors}
            control={control}
            setFieldValue={setFieldValue}
            watch={watch}
          />

          <FormActions
            isSubmitting={isSubmitting} />

        </form>
      </motion.div>
    </motion.div>
  );
};

export default Profile;