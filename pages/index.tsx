import type { NextPage } from "next"
import Head from "next/head"
import Image from "next/image"
import { useState } from "react"
import { ListItem } from "../components/ListItem"
import { SearchComponent } from "../components/SearchComponent"
import { ListData } from "../interface/listdata"
import styles from "../styles/Home.module.css"

const Home: NextPage = () => {
  const items: ListData[] = [
    {
      title: "McAfee pour XXX",
      description: "Protect your device",
      imageUrl: "/download.png",
      time: "08:31",
    },
    {
      title: "Office 365 pour XXX",
      description: "Protect your device",
      imageUrl: "/download.png",
      time: "08:31",
    },
    {
      title: "Karpesky XXX",
      description: "Protect your device",
      imageUrl: "/download.png",
      time: "08:31",
    },
    {
      title: "Avast XXX",
      description: "Protect your device",
      imageUrl: "/download.png",
      time: "08:31",
    },
  ]

  const [data, setData] = useState(items)

  function handleChange(text: string) {
    setData(data => {
      const newData = data.filter(d => d.title === text)
      return newData
    })
  }
  return (
    <div>
      <div className="bg-gray-200 p-4 mb-4 w-full">
        Derniers contrats enregistres
      </div>

      {/* search bar with icons */}
      <SearchComponent handleChange={handleChange}/>

      <div>
        <div className="divide-y divide-gray-200 overflow-y-auto">
          {data.map(item => (
            <ListItem
              title={item.title}
              description={item.description}
              imageUrl={item.imageUrl}
              time={item.time}
            />
          ))}
        </div>
      </div>
    </div>
  )
}

export default Home
