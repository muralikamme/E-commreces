
import React, { useState } from 'react';
import { fridgeData } from '../data/fridge';
import Nava from '../componets/nav';
import { Link } from 'react-router-dom';
import "./Page.css";

const Fridgepage = () => {
  const [selectedCompanies, setSelectedCompanies] = useState([]);

  // Handle company filter logic
  const companyHandler = (brand) => {
    if (selectedCompanies.includes(brand)) {
      setSelectedCompanies(selectedCompanies.filter((item) => item !== brand));
    } else {
      setSelectedCompanies([...selectedCompanies, brand]);
    }
  };

  // Filter fridges based on selected companies
  const filteredComp = selectedCompanies.length
    ? fridgeData.filter((fridge) => selectedCompanies.includes(fridge.brand))
    : fridgeData;

  return (
    <>
      <Nava />
      <div className="fullpage">
        {/* Filter Section */}
        <div className="pro-select">
          <h3>Filter by Brand</h3>
          <div className="filter-options">
            {Array.from(new Set(fridgeData.map((fridge) => fridge.brand))).map((brand) => (
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

        {/* Fridges Display Section */}
        <div className="PageSection">
          {filteredComp.length > 0 ? (
            filteredComp.map((item) => (
              <Link
                to={`/Fridges/${item.id}`}
                key={item.id}
                className="Pageimg"
                style={{ textDecoration: 'none' }}
              >
                <img
                  src={item.image}
                  alt={`${item.brand} ${item.model}`}
                  className="product-image"
                />
                <div className="promodel">
                  {item.brand} {item.model}
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
}

export default Fridgepage;


