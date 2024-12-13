



import React from "react";
import { menData } from "../data/men"; // Import men clothing data
import Card from "react-bootstrap/Card";
import { FaIndianRupeeSign } from "react-icons/fa6";
import { useSearch } from "./SearchContext"; // Import SearchContext for search functionality
import "./componet.css"

function Men() {
  const { searchQuery } = useSearch(); // Access global search query


  var FirstFiveImg=menData.slice(0,5)

  // Filter men clothing data based on the search query
  const filteredMen =  FirstFiveImg.filter((item) =>
    item.brand.toLowerCase().includes(searchQuery.toLowerCase()) ||
    item.description.toLowerCase().includes(searchQuery.toLowerCase())
  );

  return (
    <>
      <h2 className="ProTittle">Mens Clothing</h2>

      <div className="ProSection">
        {filteredMen.map((item, index) => (
          <Card style={{ width: "14rem" }} className="card card-spacing" key={index}>
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
                <strong>Price:</strong><FaIndianRupeeSign /> {item.price} 
              </Card.Text>
            </Card.Body>
          </Card>
        ))}

        {/* Fallback Message */}
        {filteredMen.length === 0 && (
          <p style={{ textAlign: "center", color: "gray" }}>No men's clothing found.</p>
        )}
      </div>
    </>
  );
}

export default Men;

