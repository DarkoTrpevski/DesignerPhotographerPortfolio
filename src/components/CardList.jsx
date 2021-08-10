import React from "react"
import Card from "./card"

const CardList = ({ cardItems }) => {
  // return Array.from({ length: 3 }, (_, i) => <Card key={i} item={i} />)
  return (
    <div className="CardList" style={{ width: "100%", height: "100%", minHeight: "100vh" }}>
      {
        cardItems.map((item) => (
          <Card key={item.id} item={item} />
        ))
      }
    </div>
  )
}

export default CardList