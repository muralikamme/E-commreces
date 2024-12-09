

import React, { useState } from 'react';
import { tvData } from '../data/tv';
import Nava from '../componets/nav';
import { Link } from 'react-router-dom';
import "./Page.css";

const Tvpage = () => {
  const [selectedCompanies, setSelectedCompanies] = useState([]);

  // Handle company filter logic
  const companyHandler = (brand) => {
    if (selectedCompanies.includes(brand)) {
      setSelectedCompanies(selectedCompanies.filter((item) => item !== brand));
    } else {
      setSelectedCompanies([...selectedCompanies, brand]);
    }
  };

  // Filter TVs based on selected companies
  const filteredComp = selectedCompanies.length
    ? tvData.filter((tv) => selectedCompanies.includes(tv.brand))
    : tvData;

  return (
    <>
      <Nava />
      <div className="fullpage">
        {/* Filter Section */}
        <div className="pro-select">
          <h3>Filter by Brand</h3>
          <div className="filter-options">
            {Array.from(new Set(tvData.map((tv) => tv.brand))).map((brand) => (
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

        {/* TVs Display Section */}
        <div className="PageSection">
          {filteredComp.length > 0 ? (
            filteredComp.map((item) => (
              <Link
                to={`/Tv/${item.id}`}
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
};

export default Tvpage;

