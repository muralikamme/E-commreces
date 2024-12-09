


import React from 'react'
import { womanData } from '../data/woman' // Import Women data
import Card from 'react-bootstrap/Card'
import { FaIndianRupeeSign } from "react-icons/fa6"
import { useSearch } from './SearchContext'// Import SearchContext for search functionality

const Women = () => {
  const { searchQuery } = useSearch() // Access global search query


  
  // Filter Women data based on the search query
  var FirstFiveImg=womanData.slice(0,5)
  const filteredWomen = FirstFiveImg.filter((item) =>
    item.brand.toLowerCase().includes(searchQuery.toLowerCase()) ||
    item.description.toLowerCase().includes(searchQuery.toLowerCase())
  )

  return (
    <>
      <h2 className="ProTittle">Women</h2>
      <div className="ProSection">
        {filteredWomen.map((item, index) => (
          <Card style={{ width: '16rem' }} className="card card-spacing" key={index}>
            <Card.Img 
              variant="top" 
              src={item.image} 
              className="img" 
              alt={item.description} // Alt text for accessibility
            />
            <Card.Body>
              <Card.Title>{item.brand}</Card.Title>
              <Card.Text>{item.description}</Card.Text>
              <Card.Text>
                <strong>Price:</strong> {item.price} <FaIndianRupeeSign />
              </Card.Text>
            </Card.Body>
          </Card>
        ))}

        {/* Fallback Message */}
        {filteredWomen.length === 0 && (
          <p style={{ textAlign: "center", color: "gray" }}>No women items found.</p>
        )}
      </div>
    </>
  )
}

export default Women
