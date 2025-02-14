import React from 'react';
import { useSortable } from '@dnd-kit/sortable';
import { CSS } from '@dnd-kit/utilities';

const SortableItem = ({ item, onEdit, contentTypes }) => {
  const {
    attributes,
    listeners,
    setNodeRef,
    transform,
    transition,
    isDragging,
  } = useSortable({ id: item.id });

  const style = {
    transform: CSS.Transform.toString(transform),
    transition,
    opacity: isDragging ? 0.5 : 1,
  };

  return (
    <div
      ref={setNodeRef}
      style={style}
      className="border rounded-lg p-4 mb-4 bg-white cursor-move touch-none"
      {...attributes}
      {...listeners}
    >
      <div className="flex items-start gap-4 sortableItem">
        <div className="bg-orange-100 p-2 rounded hover:scale-110 active:scale-90 transition-transform">
          {contentTypes.find((t) => t.type === item.type)?.icon || '📄'}
        </div>
        <div className="flex-1">
          <div className="flex items-center justify-between">
            <h3 className="font-semibold">{item.title}</h3>
            <span
              className={`text-sm ${
                item.status === 'Published'
                  ? 'text-green-600'
                  : 'text-yellow-600'
              }`}
            >
              {item.status}
            </span>
          </div>
          <div className="text-sm text-gray-600 mt-1">
            {item.chapters} Chapter • Updated {item.lastUpdated}
          </div>
          <p className="text-gray-600 mt-2">{item.description}</p>
        </div>
        <button
          onClick={() => onEdit(item)}
          className="text-blue-600 hover:scale-105 active:scale-95 transition-transform"
        >
          Edit
        </button>
      </div>
    </div>
  );
};

export default SortableItem;
