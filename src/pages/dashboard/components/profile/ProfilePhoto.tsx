import React, {useRef } from 'react'
import { User, Camera } from 'lucide-react';

interface ProfilePhotoProps{
  profileImageUrl:string | null,
    onImageUpload:(event:React.ChangeEvent<HTMLInputElement>) =>void;
}
const ProfilePhoto = ({profileImageUrl,onImageUpload}:ProfilePhotoProps) => {
    const fileInputRef= useRef<HTMLInputElement>(null)
  return (
    <div className="p-6 border-b border-gray-200">
    <div className="flex flex-col sm:flex-row items-center gap-6">
      <div className="relative">
        <div className="w-24 h-24 rounded-full bg-gray-100 overflow-hidden">
          {profileImageUrl ? (
            <img
              src={profileImageUrl}
              alt="User profile"
              className="w-full h-full object-cover"
              aria-hidden={!profileImageUrl}
            />
          ) : (
            <User 
              className="w-full h-full p-6 text-gray-400" 
              aria-label="Default profile icon"
            />
          )}
        </div>
        <button
          type="button"
          onClick={() => fileInputRef.current?.click()}
          className="absolute bottom-0 right-0 p-2 bg-white rounded-full shadow-sm border border-gray-200 hover:bg-gray-50 transition-colors"
          aria-label="Upload profile photo"
        >
          <Camera className="w-4 h-4 text-gray-600" />
        </button>
        <input
          type="file"
          ref={fileInputRef}
          onChange={onImageUpload}
          accept="image/*"
          className="hidden"
          aria-describedby="photoHelp"
        />
      </div>
      <div className="text-center sm:text-left">
        <h2 className="text-lg font-medium text-gray-900" id="photoLabel">
          Profile Photo
        </h2>
        <p className="text-sm text-gray-500 mt-1" id="photoHelp">
          Upload a new profile photo. Recommended size: 400x400px
        </p>
      </div>
    </div>
  </div>

  )
}

export default ProfilePhoto