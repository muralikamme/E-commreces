


import React from "react";
import { furnitureData } from "../data/furniture"; // Import furniture data
import Card from "react-bootstrap/Card";
import { FaIndianRupeeSign } from "react-icons/fa6";
import { useSearch } from "./SearchContext";// Import SearchContext for search functionality

function Furniture() {
  const { searchQuery } = useSearch(); // Access global search query


  var FirstFiveImg=furnitureData.slice(0,5)

  // Filter furniture data based on the search query
  const filteredFurniture = FirstFiveImg.filter((item) =>
    item.brand.toLowerCase().includes(searchQuery.toLowerCase()) ||
    item.description.toLowerCase().includes(searchQuery.toLowerCase())
  );

  return (
    <>
      <h2 className="ProTittle">Furniture</h2>

      <div className="ProSection">
        {filteredFurniture.map((item, index) => (
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
        {filteredFurniture.length === 0 && (
          <p style={{ textAlign: "center", color: "gray" }}>No furniture found.</p>
        )}
      </div>
    </>
  );
}

export default Furniture;

