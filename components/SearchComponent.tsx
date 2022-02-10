import React from "react"
import { ListData } from "../interface/listdata"
import {SearchIcon} from '@heroicons/react/outline'

interface SearchComponentProps {
  handleChange: (text: string) => void
}

export const SearchComponent: React.FC<SearchComponentProps> = ({
  handleChange,
}) => {
  return (
    <div className="flex justify-center space-x-4 items-center">
      <div className="relative">
        <input
          className="border-2 w-80 rounded-md pl-8 p-1"
          onChange={event => handleChange(event.target.value.toLowerCase())}
        />
        <div className="absolute top-2 pl-2 text-gray-500">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="h-6 w-6"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
            />
          </svg>
        </div>
      </div>

      <div className="">
        <button className="border-2 rounded-l-md p-1">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="h-6 w-6"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M15 19l-7-7 7-7"
            />
          </svg>
        </button>
        <button className="border-2 rounded-r-md p-1">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="h-6 w-6"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M9 5l7 7-7 7"
            />
          </svg>
        </button>
      </div>
    </div>
  )
}
