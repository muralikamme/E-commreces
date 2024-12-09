
import React, { useState } from 'react';
import { computerData } from "../data/computers";
import Nava from '../componets/nav';
import { Link } from 'react-router-dom';
import "./Page.css";

const Computerpage = () => {
  const [selectedCompanies, setSelectedCompanies] = useState([]);

  // Handle company filter logic
  const companyHandler = (company) => {
    if (selectedCompanies.includes(company)) {
      setSelectedCompanies(selectedCompanies.filter((item) => item !== company));
    } else {
      setSelectedCompanies([...selectedCompanies, company]);
    }
  };

  // Filter computers based on selected companies
  const filteredComp = selectedCompanies.length
    ? computerData.filter((computer) => selectedCompanies.includes(computer.company))
    : computerData;

  return (
    <>
      <Nava />
      <div className="fullpage">
        {/* Filter Section */}
        <div className="pro-select">
          <h3>Filter by Brand</h3>
          <div className="filter-options">
            {Array.from(new Set(computerData.map((computer) => computer.company))).map((company) => (
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

        {/* Computers Display Section */}
        <div className="PageSection">
          {filteredComp.length > 0 ? (
            filteredComp.map((item) => (
              <Link
                to={`/Computers/${item.id}`}
                key={item.id}
                className="Pageimg"
                style={{ textDecoration: 'none' }}
              >
                <img
                  src={item.image}
                  alt={`${item.company} ${item.model}`}
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

export default Computerpage;

