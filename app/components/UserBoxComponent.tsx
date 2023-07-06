"use client"
import { UserBoxProfileComponent } from "./UserBoxProfileComponent"
import { UserBoxCategory } from "./UserBoxCategory"
import data from '../data/data.json'
import { useState } from "react"


export const UserBoxComponent = () => {
  const [filter, setFilter] = useState("daily");

  const setActiveFilter = (filter: string) => {
    setFilter(filter);
  }

  return (
    <div className="c-user-box">
      <div className="c-user-box__container">
        <UserBoxProfileComponent
          onChangeFilter={setActiveFilter}
          activeFilter={filter} />

        <div className="c-user-box-category">

          {
            data?.map((activity, i): any => (
              <UserBoxCategory
                key={i}
                data={activity}
                activeFilter={filter} />
            ))
          }
        </div>
      </div>
    </div>

  )
}
