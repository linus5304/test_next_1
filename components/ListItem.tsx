import React from "react"
import Image from "next/image"
import { ListData } from "../interface/listdata"

interface ListItemProps {
  data: ListData[]
}

export const ListItem: React.FC<ListItemProps> = ({ data }) => {
  return (
    <>
      <div className="divide-y divide-gray-200 overflow-y-auto">
        {data.map(d => (
          <div className="flex p-8" key={d.id}>
            <div className="p-2">
              <Image
                src={d.imageUrl}
                height={50}
                width={50}
                className="rounded-full"
              />
            </div>
            <div className="w-full">
              <div className="flex justify-between">
                <div className="text-2xl">{d.title}</div>
                <div className="text-xl">{d.time}</div>
              </div>

              <div>{d.description}</div>
            </div>
          </div>
        ))}
      </div>
    </>
  )
}
