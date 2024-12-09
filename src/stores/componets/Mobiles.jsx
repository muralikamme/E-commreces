


import React from "react";
import { mobileData } from "../data/mobiles";
import Card from "react-bootstrap/Card";
import { FaIndianRupeeSign } from "react-icons/fa6";
import "../../App.css";
import { useSearch } from "./SearchContext"; // Import SearchContext

function Mobiles() {
  const { searchQuery } = useSearch(); // Access global search query


  var FirstFiveImg=mobileData.slice(0,5)
  // Filter mobiles based on search query
  const filteredMobiles = FirstFiveImg.filter((item) =>
    item.company.toLowerCase().includes(searchQuery.toLowerCase()) ||
    item.description.toLowerCase().includes(searchQuery.toLowerCase())
  );

  return (
    <>
      <h2 className="ProTittle"> Mobiles</h2>
      <div className="ProSection">
        {filteredMobiles.map((item, index) => (
          <Card
            style={{ width: "16rem" }}
            className="card card-spacing"
            key={index}
          >
            <Card.Img variant="top" src={item.image} className="img" />
            <Card.Body>
              <Card.Title>{item.company}</Card.Title>
              <Card.Text>{item.description}</Card.Text>
              <Card.Text>
                <strong>Price:</strong>
                {item.price} <FaIndianRupeeSign />
              </Card.Text>
            </Card.Body>
          </Card>
        ))}

        {/* Show a message if no products match the search */}
        {filteredMobiles.length === 0 && (
          <p style={{ textAlign: "center", color: "gray" }}>No products found.</p>
        )}
      </div>
    </>
  );
}

export default Mobiles;



