import React from "react"
import { ChevronLeftIcon, ChevronRightIcon } from "@heroicons/react/outline"

interface PaginationProps {
  totalItems: number
  itemsPerPage: number
  currentPage: number
  paginate: (pageNumber: number) => void
}

export const Pagination: React.FC<PaginationProps> = ({
  itemsPerPage,
  totalItems,
  currentPage,
  paginate,
}) => {
  const pageNumbers = []
  let pageNumber = Math.ceil(totalItems / itemsPerPage)

  for (let i = 1; i <= pageNumber; i++) {
    pageNumbers.push(i)
  }

  return (
    <div className="bg-white px-4 py-3 flex items-center border-gray-200 sm:px-6">
      <div className="flex-1 flex justify-between sm:hidden">
        <a
          href="#"
          className="relative inline-flex items-center px-4 py-2 border border-gray-300 text-sm font-medium rounded-md text-gray-700 bg-white hover:bg-gray-50"
        >
          Previous
        </a>
        <a
          href="#"
          className="ml-3 relative inline-flex items-center px-4 py-2 border border-gray-300 text-sm font-medium rounded-md text-gray-700 bg-white hover:bg-gray-50"
        >
          Next
        </a>
      </div>
      <div className="hidden sm:flex-1 sm:flex sm:items-center sm:justify-between">
        <div>
          <nav
            className="relative z-0 inline-flex rounded-md shadow-sm -space-x-px"
            aria-label="Pagination"
          >
            <a
              href="#"
              onClick={() => {
                if (currentPage <= 1) return
                paginate(currentPage - 1)
              }}
              className="relative inline-flex items-center px-2 py-2 rounded-l-md border border-gray-300 bg-white text-sm font-medium text-gray-500 hover:bg-gray-50"
            >
              <span className="sr-only">Previous</span>
              <ChevronLeftIcon className="h-5 w-5" aria-hidden="true" />
            </a>
            {pageNumbers.map(pageNumber => (
              <a
                key={pageNumber}
                href="#"
                aria-current="page"
                className={`z-10 ${
                  pageNumber === currentPage
                    ? `bg-indigo-50 border-indigo-500 text-indigo-600`
                    : ""
                } relative inline-flex items-center px-4 py-2 border text-sm font-medium`}
                onClick={() => {
                  paginate(pageNumber)
                }}
              >
                {pageNumber}
              </a>
            ))}

            <a
              href="#"
              onClick={() => {
                if (currentPage >= pageNumber) return
                paginate(currentPage + 1)
              }}
              className="relative inline-flex items-center px-2 py-2 rounded-r-md border border-gray-300 bg-white text-sm font-medium text-gray-500 hover:bg-gray-50"
            >
              <span className="sr-only">Next</span>
              <ChevronRightIcon className="h-5 w-5" aria-hidden="true" />
            </a>
          </nav>
        </div>
      </div>
    </div>
  )
}
