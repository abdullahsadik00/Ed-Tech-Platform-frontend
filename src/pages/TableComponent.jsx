import React, { useState } from 'react';
import DataTable from '../components/uiElements/DataTable';
import { Download, MoreHorizontal } from 'lucide-react';

const TableComponent = () => {
  const [searchTerm, setSearchTerm] = useState('');
  const [dropdown1, setDropdown1] = useState('');
  const [dropdown2, setDropdown2] = useState('');

  // Sample data for demonstration purposes
  const data = [
    {
      name: 'John Doe',
      profession: 'Teacher',
      subject: 'Math',
      email: 'john@example.com',
      phone: '123-456-7890',
      birthday: '1990-01-01',
    },
    {
      name: 'Jane Smith',
      profession: 'Teacher',
      subject: 'Science',
      email: 'jane@example.com',
      phone: '987-654-3210',
      birthday: '1985-05-15',
    },
    // Add more sample data as needed
  ];

  // Filter data based on search term
  const filteredData = data.filter((item) =>
    item.name.toLowerCase().includes(searchTerm.toLowerCase())
  );
  const [showDropdown, setShowDropdown] = useState(false);

  const columns = [
    {
      key: 'name',
      header: 'Name',
      className: 'pl-6',
      render: (_, row) => (
        <div className="flex items-center gap-3">
          <span className="font-medium">{row.name}</span>
        </div>
      ),
    },
    {
      key: 'profession',
      header: 'Class',
      render: (value) => <span className="">{value}</span>,
    },
    {
      key: 'phone',
      header: 'Phone',
      render: (value) => <span className="">{value}</span>,
    },
    {
      key: 'email',
      header: 'email',
      render: (value) => <span>{value}</span>,
    },
    {
      key: 'birthday',
      header: 'Birthday',
      render: (value) => <span>{value}</span>,
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
    <div className="p-4">
      <DataTable
        data={data}
        columns={columns}
        itemsPerPage={1}
        title="Submitted Tests"
        actions={tableActions}
      />
      {/* <div className="flex justify-between items-center mb-4">
        <input
          type="text"
          placeholder="Search..."
          className="border rounded-md p-2 w-1/3"
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
        />
        <div className="flex space-x-4">
          <select
            className="border rounded-md p-2"
            value={dropdown1}
            onChange={(e) => setDropdown1(e.target.value)}
          >
            <option value="">Dropdown 1</option>
            <option value="option1">Option 1</option>
            <option value="option2">Option 2</option>
          </select>
          <select
            className="border rounded-md p-2"
            value={dropdown2}
            onChange={(e) => setDropdown2(e.target.value)}
          >
            <option value="">Dropdown 2</option>
            <option value="option1">Option 1</option>
            <option value="option2">Option 2</option>
          </select>
        </div>
      </div>
      <table className="min-w-full bg-white border border-gray-200">
        <thead>
          <tr>
            <th className="py-2 px-4 border-b">Name</th>
            <th className="py-2 px-4 border-b">Profession</th>
            <th className="py-2 px-4 border-b">Subject</th>
            <th className="py-2 px-4 border-b">Email</th>
            <th className="py-2 px-4 border-b">Phone</th>
            <th className="py-2 px-4 border-b">Birthday</th>
          </tr>
        </thead>
        <tbody>
          {filteredData.map((item, index) => (
            <tr key={index} className="hover:bg-gray-100">
              <td className="py-2 px-4 border-b">{item.name}</td>
              <td className="py-2 px-4 border-b">{item.profession}</td>
              <td className="py-2 px-4 border-b">{item.subject}</td>
              <td className="py-2 px-4 border-b">{item.email}</td>
              <td className="py-2 px-4 border-b">{item.phone}</td>
              <td className="py-2 px-4 border-b">{item.birthday}</td>
            </tr>
          ))}
        </tbody>
      </table> */}
    </div>
  );
};

export default TableComponent;
