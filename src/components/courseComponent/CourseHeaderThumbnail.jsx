import React, { useState } from 'react';
const solidColors = [
  { id: 'gray', color: '#8E9196' },
  { id: 'orange', color: '#F97316' },
  { id: 'yellow', color: '#FEF7CD' },
  { id: 'green', color: '#10B981' },
  { id: 'teal', color: '#14B8A6' },
  { id: 'blue', color: '#0EA5E9' },
  { id: 'indigo', color: '#8B5CF6' },
  { id: 'pink', color: '#D946EF' },
  { id: 'rose', color: '#FFDEE2' },
  { id: 'slate', color: '#1A1F2C' },
];
const illustrations = [
  '/lovable-uploads/31d297af-ada1-4c8d-a0cf-1e454a6ea472.png',
  // Add more illustration paths as needed
];

const CourseHeaderThumbnail = ({ onSelect, onClose }) => {
  const [activeTab, setActiveTab] = useState('gallery');
  const [selectedColor, setSelectedColor] = useState(null);
  const handleColorSelect = (color) => {
    setSelectedColor(color);
    onSelect(color);
  };

  return (
    <div className="fixed inset-0 bg-black/50 flex items-center justify-center z-50">
      <div className="bg-white rounded-xl w-full max-w-2xl p-6 max-h-[90vh] overflow-y-auto">
        <div className="flex justify-between items-center mb-6">
          <h2 className="text-xl font-semibold">Update thumbnail</h2>
          <button
            onClick={onClose}
            className="text-gray-500 hover:text-gray-700"
          >
            ✕
          </button>
        </div>
        <div className="flex gap-4 mb-6 border-b">
          <button
            className={`px-4 py-2 ${
              activeTab === 'gallery'
                ? 'text-primary border-b-2 border-primary'
                : 'text-gray-500'
            }`}
            onClick={() => setActiveTab('gallery')}
          >
            Gallery
          </button>
          <button
            className={`px-4 py-2 ${
              activeTab === 'upload'
                ? 'text-primary border-b-2 border-primary'
                : 'text-gray-500'
            }`}
            onClick={() => setActiveTab('upload')}
          >
            Upload
          </button>
          <button
            className={`px-4 py-2 ${
              activeTab === 'unsplash'
                ? 'text-primary border-b-2 border-primary'
                : 'text-gray-500'
            }`}
            onClick={() => setActiveTab('unsplash')}
          >
            Unsplash
          </button>
        </div>
        <div className="space-y-6">
          <div>
            <h3 className="text-sm font-medium mb-4">Solid Color</h3>
            <div className="grid grid-cols-5 gap-3">
              {solidColors.map((color) => (
                <button
                  key={color.id}
                  onClick={() => handleColorSelect(color.color)}
                  className={`w-full aspect-square rounded-lg transition-transform hover:scale-105 ${
                    selectedColor === color.color
                      ? 'ring-2 ring-primary ring-offset-2'
                      : ''
                  }`}
                  style={{ backgroundColor: color.color }}
                />
              ))}
            </div>
          </div>
          <div>
            <h3 className="text-sm font-medium mb-4">Simple illustration</h3>
            <div className="grid grid-cols-4 gap-4">
              {illustrations.map((illustration, index) => (
                <button
                  key={index}
                  onClick={() => onSelect(illustration)}
                  className="aspect-video bg-gray-100 rounded-lg overflow-hidden hover:ring-2 hover:ring-primary transition-all"
                >
                  <img
                    src={illustration}
                    alt={`Illustration ${index + 1}`}
                    className="w-full h-full object-cover"
                  />
                </button>
              ))}
            </div>
          </div>
        </div>
        <div className="flex justify-end gap-3 mt-6 pt-4 border-t">
          <button
            onClick={onClose}
            className="px-4 py-2 text-sm font-medium text-gray-700 hover:bg-gray-100 rounded-lg"
          >
            Cancel
          </button>
          <button
            onClick={onClose}
            className="px-4 py-2 text-sm font-medium text-white bg-primary hover:bg-primary-light rounded-lg"
          >
            Save
          </button>
        </div>
      </div>
    </div>
  );
};

export default CourseHeaderThumbnail;
