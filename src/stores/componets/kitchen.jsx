


import React from "react";
import { kitchenData } from "../data/kitchen"; // Import kitchen data
import Card from "react-bootstrap/Card";
import { FaIndianRupeeSign } from "react-icons/fa6";
import { useSearch } from "./SearchContext";// Import SearchContext for search functionality

function Kitchen() {
  const { searchQuery } = useSearch(); // Access global search query


  var FirstFiveImg=kitchenData.slice(0,5)


  // Filter kitchen data based on the search query
  const filteredKitchen = FirstFiveImg.filter((item) =>
    item.brand.toLowerCase().includes(searchQuery.toLowerCase()) ||
    item.description.toLowerCase().includes(searchQuery.toLowerCase())
  );

  return (
    <>
      <h2 className="ProTittle">Kitchen</h2>

      <div className="ProSection">
        {filteredKitchen.map((item, index) => (
          <Card style={{ width: "16rem" }} className="card card-spacing" key={index}>
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
        {filteredKitchen.length === 0 && (
          <p style={{ textAlign: "center", color: "gray" }}>No kitchen items found.</p>
        )}
      </div>
    </>
  );
}

export default Kitchen;

