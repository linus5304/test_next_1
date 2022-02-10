import type { NextPage } from "next"
import { useEffect, useState } from "react"
import { ListItem } from "../components/ListItem"
import { Pagination } from "../components/Pagination"
import { SearchComponent } from "../components/SearchComponent"
import { ListData } from "../interface/listdata"

const Home: NextPage = () => {
  const items: ListData[] = [
    {
      id: 1,
      title: "McAfee pour XXX",
      description: "Protect your device",
      imageUrl: "/download.png",
      time: "08:31",
    },
    {
      id: 2,
      title: "Office 365 pour XXX",
      description: "Protect your device",
      imageUrl: "/download.png",
      time: "08:31",
    },
    {
      id: 3,
      title: "Karpesky XXX",
      description: "Protect your device",
      imageUrl: "/download.png",
      time: "08:31",
    },
    {
      id: 4,
      title: "Avast XXX",
      description: "Protect your device",
      imageUrl: "/download.png",
      time: "08:31",
    },
    {
      id: 5,
      title: "Avast XXX",
      description: "Protect your device",
      imageUrl: "/download.png",
      time: "08:31",
    },
    {
      id: 6,
      title: "Avast XXX",
      description: "Protect your device",
      imageUrl: "/download.png",
      time: "08:31",
    },
    {
      id: 7,
      title: "Norton XXX",
      description: "Protect your device",
      imageUrl: "/download.png",
      time: "08:31",
    },
  ]

  const [data, setData] = useState<ListData[]>([])
  const [itemsPerPage, setItemsPerPage] = useState<number>(3)
  const [currentPage, setCurrentPage] = useState<number>(1)

  const indexOfLastItem = currentPage * itemsPerPage
  const indexOfFirstItem = indexOfLastItem - itemsPerPage
  const currentItems = items.slice(indexOfFirstItem, indexOfLastItem)

  useEffect(() => {
    setData(currentItems)
  }, [currentPage])


  const paginate = (pageNumber: number) => setCurrentPage(pageNumber)

  function handleChange(text: string) {
    if (text !== "") {
      const newData = currentItems.filter(d => {
        return Object.values(d)
          .join("")
          .toLowerCase()
          .includes(text.toLowerCase())
      })
      setData(newData)
    } else {
      setData(currentItems)
    }
  }

  return (
    <div>
      <div className="bg-gray-200 p-4 mb-4 w-full">
        Derniers contrats enregistres
      </div>

      {/* search bar with icons */}
      <div className="flex justify-center space-x-4 items-center">
        <SearchComponent handleChange={handleChange} />
        <Pagination totalItems={items.length} itemsPerPage={itemsPerPage} currentPage={currentPage} paginate={paginate}/>
      </div>

      <div>
        <ListItem data={data} />
      </div>
    </div>
  )
}

export default Home
