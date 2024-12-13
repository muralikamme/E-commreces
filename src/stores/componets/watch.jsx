
import React from "react";
import { watchData } from "../data/watch"; // Import Watch data
import Card from "react-bootstrap/Card";
import { FaIndianRupeeSign } from "react-icons/fa6";
import { useSearch } from "./SearchContext"; // Import SearchContext for search functionality
import "./componet.css"

const Watch = () => {
  const { searchQuery } = useSearch(); // Access global search query

  var FirstFiveImg=watchData.slice(0,5)


  // Filter Watch data based on the search query
  const filteredWatches =  FirstFiveImg.filter((item) =>
    item.brand.toLowerCase().includes(searchQuery.toLowerCase()) ||
    item.description.toLowerCase().includes(searchQuery.toLowerCase())
  );

  return (
    <>
      <h2 className="ProTittle">Watches</h2>

      <div className="ProSection">
        {filteredWatches.map((item, index) => (
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
        {filteredWatches.length === 0 && (
          <p style={{ textAlign: "center", color: "gray" }}>No watches found.</p>
        )}
      </div>
    </>
  );
};

export default Watch;

