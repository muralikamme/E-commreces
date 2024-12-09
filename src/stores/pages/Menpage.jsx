


import React from 'react';
import { menData } from '../data/men';
import Nava from '../componets/nav';
import { Link } from 'react-router-dom';
import { useState } from 'react';
import './Page.css'; // Import the CSS file for styles

const Menpage = () => {
  const [selectedCompanies, setSelectedCompanies] = useState([]);

  // Handle company filter logic
  const companyHandler = (brand) => {
    if (selectedCompanies.includes(brand)) {
      setSelectedCompanies(selectedCompanies.filter((item) => item !== brand));
    } else {
      setSelectedCompanies([...selectedCompanies, brand]);
    }
  };

  // Filter products based on selected companies
  const filteredComp = selectedCompanies.length
    ? menData.filter((item) => selectedCompanies.includes(item.brand))
    : menData;

  return (
    <>
      <Nava />
      <div className="fullpage">
        {/* Filter Section */}
        <div className="pro-select">
          <h3>Filter by Brand</h3>
          <div className="filter-options">
            {Array.from(new Set(menData.map((item) => item.brand))).map((brand) => (
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

        {/* Products Display Section */}
        <div className="PageSection">
          {filteredComp.length > 0 ? (
            filteredComp.map((item) => (
              <Link to={`/MenFashion/${item.id}`} key={item.id} className="PageLink">
                <div className="Pageimg">
                  <img src={item.image} alt={`${item.brand} ${item.model}`} className="product-image" />
                  <div className="promodel">
                    {item.company} {item.model}
                  </div>
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

export default Menpage;


