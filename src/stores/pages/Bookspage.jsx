import React, { useState } from 'react';
import { booksData } from '../data/books';
import Nava from "../componets/nav";
import { Link } from 'react-router-dom';
import "./Page.css";

const Bookspage = () => {
  const [selectedAuthors, setSelectedAuthors] = useState([]);

  // Handle author filter logic
  const authorHandler = (author) => {
    if (selectedAuthors.includes(author)) {
      setSelectedAuthors(selectedAuthors.filter((item) => item !== author));
    } else {
      setSelectedAuthors([...selectedAuthors, author]);
    }
  };

  // Filter books based on selected authors
  const filteredBooks = selectedAuthors.length
    ? booksData.filter((book) => selectedAuthors.includes(book.author))
    : booksData;

  return (
    <>
      <Nava />
      <div className="fullpage">
        {/* Filter Section */}
        <div className="pro-select">
          <h3>Filter by Author</h3>
          <div className="filter-options">
            {Array.from(new Set(booksData.map((book) => book.author))).map((author) => (
              <label key={author} className="filter-label">
                <input
                  type="checkbox"
                  checked={selectedAuthors.includes(author)}
                  onChange={() => authorHandler(author)}
                />
                {author}
              </label>
            ))}
          </div>
        </div>

        {/* Books Display Section */}
        <div className="PageSection">
          {filteredBooks.length > 0 ? (
            filteredBooks.map((item) => (
              <Link to={`/Books/${item.id}`} key={item.id} className="Pageimg">
                <img
                  src={item.image}
                  alt={`${item.author} ${item.title}`}
                  className="product-image"
                />
                <div className="promodel">
                  <strong>{item.author}</strong> - {item.title}
                </div>
              </Link>
            ))
          ) : (
            <p className="no-products">No products match the selected filters.</p>
          )}
        </div>
      </div>
    </>
  );
};

export default Bookspage;
