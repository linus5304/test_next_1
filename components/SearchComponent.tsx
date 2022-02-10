import React from "react"
import { ListData } from "../interface/listdata"

interface SearchComponentProps {
    handleChange: (text: string) => void
}

export const SearchComponent: React.FC<SearchComponentProps> = ({handleChange}) => {
    
  return (
    <div className="flex flex-none justify-center space-x-4">
        <div className="left-4">
        <input className="border-2 w-80 rounded-md"  onChange={(event) => handleChange(event.target.value)}/>
    <div className="absolute">
    {/* <svg
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
      </svg> */}
    </div>
        
        </div>
      

      <div>
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
