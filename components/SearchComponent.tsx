import React from "react"
import { ListData } from "../interface/listdata"
import { SearchIcon } from "@heroicons/react/outline"
import { Pagination } from "./Pagination"

interface SearchComponentProps {
  handleChange: (text: string) => void
}

export const SearchComponent: React.FC<SearchComponentProps> = ({
  handleChange,
}) => {
  return (
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

  )
}
