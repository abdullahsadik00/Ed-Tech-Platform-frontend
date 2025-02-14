import { useState } from 'react';
import { MoreHorizontal, Download } from 'lucide-react';
import DataTable from '../../../uiElements/DataTable';

const MOCK_DATA = [
  {
    id: 1,
    name: 'Test 1',
    status: 'Completed',
    date: '2023-10-26',
  },
  {
    id: 2,
    name: 'Test 2',
    status: 'Pending',
    date: '2023-10-27',
  },
];

const columns = [
  {
    Header: 'Name',
    accessor: 'name',
  },
  {
    Header: 'Status',
    accessor: 'status',
  },
  {
    Header: 'Date',
    accessor: 'date',
  },
];

const tableActions = (row) => {
  return (
    <div className="flex items-center gap-2">
      <MoreHorizontal className="h-5 w-5 text-gray-500 hover:text-gray-700 dark:hover:text-gray-300 cursor-pointer" />
      <Download className="h-5 w-5 text-gray-500 hover:text-gray-700 dark:hover:text-gray-300 cursor-pointer" />
    </div>
  );
};

const SubmittedTestsCard = () => {
  const [showDropdown, setShowDropdown] = useState(false);

  return (
    <div className="rounded-xl bg-white p-6 shadow-lg dark:bg-primary-dark">
      <DataTable
        data={MOCK_DATA}
        columns={columns}
        itemsPerPage={2}
        title="Submitted Tests"
        actions={tableActions}
      />
    </div>
  );
};

export default SubmittedTestsCard;
