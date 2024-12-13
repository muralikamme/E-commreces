


import React from "react";
import { speakerData } from "../data/speaker"; // Import speaker data
import Card from "react-bootstrap/Card";
import { FaIndianRupeeSign } from "react-icons/fa6";
import { useSearch } from "./SearchContext"; // Import SearchContext for search functionality
import "./componet.css"

function Speaker() {
  const { searchQuery } = useSearch(); // Access global search query

  var FirstFiveImg=speakerData.slice(0,5)


  // Filter speaker data based on the search query
  const filteredSpeakers = FirstFiveImg.filter((item) =>
    item.brand.toLowerCase().includes(searchQuery.toLowerCase()) ||
    item.description.toLowerCase().includes(searchQuery.toLowerCase())
  );

  return (
    <>
      <h2 className="ProTittle">Speakers</h2>

      <div className="ProSection">
        {filteredSpeakers.map((item, index) => (
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
                <strong>Price:</strong> <FaIndianRupeeSign />{item.price} 
              </Card.Text>
            </Card.Body>
          </Card>
        ))}

        {/* Fallback Message */}
        {filteredSpeakers.length === 0 && (
          <p style={{ textAlign: "center", color: "gray" }}>No speakers found.</p>
        )}
      </div>
    </>
  );
}

export default Speaker;

