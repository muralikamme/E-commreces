


import React, { useState } from 'react';
import { furnitureData } from '../data/furniture';
import Nava from '../componets/nav';
import { Link } from 'react-router-dom';
import "./Page.css";

const Furniturepage = () => {
  const [selectedCompanies, setSelectedCompanies] = useState([]);

  // Handle company filter logic
  const companyHandler = (brand) => {
    if (selectedCompanies.includes(brand)) {
      setSelectedCompanies(selectedCompanies.filter((item) => item !== brand));
    } else {
      setSelectedCompanies([...selectedCompanies, brand]);
    }
  };

  // Filter furniture based on selected companies
  const filteredComp = selectedCompanies.length
    ? furnitureData.filter((furniture) => selectedCompanies.includes(furniture.brand))
    : furnitureData;

  return (
    <>
      <Nava />
      <div className="fullpage">
        {/* Filter Section */}
        <div className="pro-select">
          <h3>Filter by Brand</h3>
          <div className="filter-options">
            {Array.from(new Set(furnitureData.map((furniture) => furniture.brand))).map((brand) => (
              <label key={brand} className="filter-label">
                <input
                  type="checkbox"
                  checked={selectedCompanies.includes(brand)}
                  onChange={() => companyHandler(brand)}
                />
                {brand}
              </label>
            ))}
          </div>
        </div>

        {/* Furniture Display Section */}
        <div className="PageSection">
          {filteredComp.length > 0 ? (
            filteredComp.map((item) => (
              <Link
                to={`/Furniture/${item.id}`}
                key={item.id}
                className="Pageimg"
              >
                <img
                  src={item.image}
                  alt={`${item.brand} ${item.model}`}
                  className="product-image"
                />
                <div className="promodel">
                  {item.company} {item.model}
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

export default Furniturepage;

