import React from 'react';
import { ChevronLeft, ChevronRight } from 'lucide-react';

const Pagination = ({ currentPage, totalPages, onPageChange }) => {
  return (
    <div className="flex items-center justify-between px-2 py-4">
      <button
        onClick={() => onPageChange(currentPage - 1)}
        disabled={currentPage === 1}
        className="flex items-center gap-1 px-3 py-1 text-sm rounded-md 
          disabled:opacity-50 disabled:cursor-not-allowed
          text-muted-foreground hover:text-white dark:hover:text-white
          hover:bg-primary-300 dark:hover:bg-primary-300 dark:text-secondary-900"
      >
        <ChevronLeft className="h-4 w-4" />
        Previous
      </button>

      <span className="text-sm text-muted-foreground">
        Page {currentPage} of {totalPages}
      </span>

      <button
        onClick={() => onPageChange(currentPage + 1)}
        disabled={currentPage === totalPages}
        className="flex items-center gap-1 px-3 py-1 text-sm rounded-md 
          disabled:opacity-50 disabled:cursor-not-allowed
          text-muted-foreground hover:text-white dark:hover:text-slate-800
          hover:bg-primary-300 dark:hover:bg-primary-300 dark:text-secondary-900"
      >
        Next
        <ChevronRight className="h-4 w-4" />
      </button>
    </div>
  );
};

export default Pagination;
