import React, { useState } from 'react';
import { MoreHorizontal, Download } from 'lucide-react';
import DataTable from '../../../uiElements/DataTable';

const MOCK_DATA = [
  {
    id: 1,
    name: 'Alex Shatov',
    avatar:
      'https://images.unsplash.com/photo-1535713875002-d1d0cf377fde?w=80&h=80&fit=crop',
    date: 'Dec 17, 2024',
    status: 'active',
    country: '🇺🇸',
  },
  {
    id: 2,
    name: 'Beth Wilson',
    avatar:
      'https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=80&h=80&fit=crop',
    date: 'Dec 16, 2024',
    status: 'pending',
    country: '🇬🇧',
  },
  {
    id: 3,
    name: 'Carl Thompson',
    avatar:
      'https://images.unsplash.com/photo-1599566150163-29194dcaad36?w=80&h=80&fit=crop',
    date: 'Dec 15, 2024',
    status: 'active',
    country: '🇨🇦',
  },
];

const SubmittedTestsCard = () => {
  const [showDropdown, setShowDropdown] = useState(false);

  const columns = [
    {
      key: 'name',
      header: 'Student',
      className: 'pl-6',
      render: (_, row) => (
        <div className="flex items-center gap-3">
          <img
            src={row.avatar}
            alt={row.name}
            className="h-8 w-8 rounded-full object-cover"
          />
          <span className="font-medium">{row.name}</span>
        </div>
      ),
    },
    {
      key: 'date',
      header: 'Submitted',
      render: (value) => (
        <span className="text-sm text-muted-foreground">{value}</span>
      ),
    },
    {
      key: 'status',
      header: 'Status',
      render: (value) => (
        <span
          className={`inline-flex items-center rounded-full px-2 py-1 text-xs font-medium
            ${
              value === 'active'
                ? 'bg-green-100 text-green-700 dark:bg-green-900/30 dark:text-green-400'
                : 'bg-yellow-100 text-yellow-700 dark:bg-yellow-900/30 dark:text-yellow-400'
            }`}
        >
          {value}
        </span>
      ),
    },
    {
      key: 'country',
      header: 'Country',
      align: 'center',
    },
  ];

  const tableActions = (
    <div className="relative">
      <button
        onClick={() => setShowDropdown(!showDropdown)}
        className="p-2 hover:bg-primary rounded-full"
      >
        <MoreHorizontal className="h-4 w-4" />
      </button>

      {showDropdown && (
        <div className="absolute right-0 mt-2 w-48 rounded-md border border-border bg-white shadow-md">
          <button
            className="w-full px-4 py-2 text-left text-sm hover:bg-primary flex items-center"
            onClick={() => setShowDropdown(false)}
          >
            <Download className="mr-2 h-4 w-4" />
            Download Report
          </button>
        </div>
      )}
    </div>
  );

  return (
    <DataTable
      data={MOCK_DATA}
      columns={columns}
      itemsPerPage={2}
      title="Submitted Tests"
      actions={tableActions}
    />
  );
};

export default SubmittedTestsCard;
