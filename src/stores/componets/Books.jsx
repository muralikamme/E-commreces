


import React from "react";
import { booksData } from "../data/books"; // Import book data
import Card from "react-bootstrap/Card";
import { FaIndianRupeeSign } from "react-icons/fa6";
import { useSearch } from "./SearchContext"; // Import SearchContext for global search functionality
// import "../../App.css"
import "./componet.css"

const Books = () => {
  const { searchQuery } = useSearch(); // Access the global search query
  var FirstFiveImg= booksData.slice(0,5)
  // Filter books based on the search query
  const filteredBooks = FirstFiveImg.filter((item) =>
    item.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
    item.description.toLowerCase().includes(searchQuery.toLowerCase())
  );

  return (
    // mjddh
    <>
      <h2 className="ProTittle">Books</h2>

      <div className="ProSection">
        {filteredBooks.map((item, index) => (
          <Card style={{ width: "14rem" }} className="card card-spacing" key={index}>
            <Card.Img variant="top" src={item.image} className="img" alt={item.description} />
            <Card.Body>
              <Card.Title>{item.title}</Card.Title>
              <Card.Text>{item.description}</Card.Text>
              <Card.Text>
                <strong>Price:</strong> <FaIndianRupeeSign />{item.price} 
              </Card.Text>
            </Card.Body>
          </Card>
        ))}

        {/* Fallback Message */}
        {filteredBooks.length === 0 && (
          <p style={{ textAlign: "center", color: "gray" }}>No books found.</p>
        )}
      </div>
    </>
  );
};

export default Books;

