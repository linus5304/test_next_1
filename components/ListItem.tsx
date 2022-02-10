import React from "react"
import Image from "next/image"

interface ListItemProps {
  title: string
  time: string
  description: string
  imageUrl: string
}

export const ListItem: React.FC<ListItemProps> = ({
  description,
  time,
  title,
  imageUrl,
}) => {
  return (
    <div className="flex p-8">
      <div className="p-2">
        <Image src={imageUrl} height={50} width={50} className="rounded-full" />
      </div>
      <div className="w-full">
        <div className="flex justify-between">
          <div className="text-2xl">{title}</div>
          <div className="text-xl">{time}</div>
        </div>

        <div>{description}</div>
      </div>
    </div>
  )
}
