



import React, { useState } from 'react';
import { mobileData } from '../data/mobiles';
import Nava from '../componets/nav';
import { Link } from 'react-router-dom';
import "./Page.css"

const Mobilepage = () => {
  const [selectedCompanies, setSelectedCompanies] = useState([]);

  const companyHandler = (company) => {
    if (selectedCompanies.includes(company)) {
      setSelectedCompanies(selectedCompanies.filter((item) => item !== company));
    } else {
      setSelectedCompanies([...selectedCompanies, company]);
    }
  };

  const filteredMobiles = selectedCompanies.length
    ? mobileData.filter((mobile) => selectedCompanies.includes(mobile.company))
    : mobileData;

  return (
    <>
      <Nava />
      <div className="fullpage">
        {/* Filter Section */}
        <div className="pro-select">
          <h3>Filter by Brand</h3>
          <div className="filter-options">
            {Array.from(new Set(mobileData.map((phone) => phone.company))).map((company) => (
              <label key={company} className="filter-label">
                <input
                  type="checkbox"
                  checked={selectedCompanies.includes(company)}
                  onChange={() => companyHandler(company)}
                />
                {company}
              </label>
            ))}
          </div>
        </div>

        {/* Mobiles Display Section */}
        <div className="PageSection">
          {filteredMobiles.length > 0 ? (
            filteredMobiles.map((item) => (
              <Link to={`/Mobiles/:${item.id}`} key={item.id} className="Pageimg">
                <img src={item.image} alt={`${item.company} ${item.model}`} className="product-image"  />
                <div className="promodel" >{item.company} {item.model}</div>
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

export default Mobilepage;



