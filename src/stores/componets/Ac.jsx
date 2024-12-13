import React from "react";
import { acData } from "../data/ac"; // Import AC data
import Card from "react-bootstrap/Card";
import { FaIndianRupeeSign } from "react-icons/fa6";
// import "../../App.css"; // Assuming common styles are in App.css
import { useSearch } from "./SearchContext"; // Import SearchContext for search functionality
import "./componet.css"


const Ac = () => {
  const { searchQuery } = useSearch(); // Access global search query
  var FirstFiveImg = acData.slice(0, 5);
  // Filter AC data based on the search query
  const filteredAcData = FirstFiveImg.filter(
    (item) =>
      item.company.toLowerCase().includes(searchQuery.toLowerCase()) ||
      item.description.toLowerCase().includes(searchQuery.toLowerCase())
  );

  return (
    <>
      <h2 className="ProTittle">Air Conditioners</h2>

      <div className="ProSection">
      
          {filteredAcData.map((item, index) => (
           
              <Card
                style={{ width: "14rem" }}
                className="card card-spacing"
                key={index} // Key for list items
              >
                <Card.Img
                  variant="top"
                  src={item.image}
                  className="img"
                  alt={item.description} // Alt attribute for accessibility
                />
                <Card.Body>
                  <Card.Title>{item.company}</Card.Title>
                  <Card.Text>{item.description}</Card.Text>
                  <Card.Text>
                    <strong>Price:</strong> <FaIndianRupeeSign />{item.price} 
                  </Card.Text>
                </Card.Body>
              </Card>
           
          ))}
  

        {/* Show message if no data matches the search */}
        {filteredAcData.length === 0 && (
          <p style={{ textAlign: "center", color: "gray" }}>
            No products found.
          </p>
        )}
      </div>
    </>
  );
};

export default Ac;
