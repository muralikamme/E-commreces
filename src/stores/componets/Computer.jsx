

import React from "react";
import { computerData } from "../data/computers"; // Import computer data
import Card from "react-bootstrap/Card";
import { FaIndianRupeeSign } from "react-icons/fa6";
import { useSearch } from "./SearchContext"; // Import SearchContext for search functionality

function Computer() {
  const { searchQuery } = useSearch(); // Access global search query
  var FirstFiveImg=computerData.slice(0,5)
  // Filter computer data based on the search query
  const filteredComputers = FirstFiveImg.filter((item) =>
    item.company.toLowerCase().includes(searchQuery.toLowerCase()) ||
    item.description.toLowerCase().includes(searchQuery.toLowerCase())
  );

  return (
    <>
      <h2 className="ProTittle">Computers</h2>

      <div className="ProSection">
        {filteredComputers.map((item, index) => (
          <Card style={{ width: "16rem" }} className="card card-spacing" key={index}>
            <Card.Img
              variant="top"
              src={item.image}
              className="img"
              alt={item.description} // Alt text for accessibility
            />
            <Card.Body>
              <Card.Title>{item.company}</Card.Title>
              <Card.Text>{item.description}</Card.Text>
              <Card.Text>
                <strong>Price:</strong> {item.price} <FaIndianRupeeSign />
              </Card.Text>
            </Card.Body>
          </Card>
        ))}

        {/* Fallback Message */}
        {filteredComputers.length === 0 && (
          <p style={{ textAlign: "center", color: "gray" }}>No computers found.</p>
        )}
      </div>
    </>
  );
}

export default Computer;

