
import React, { useState } from 'react';
import { acData } from '../data/ac';
import Nava from '../componets/nav';
import { Link } from 'react-router-dom';
import "./Page.css"

const Acpage = () => {
  const [selectedCompanies, setSelectedCompanies] = useState([]);

  const companyHandler = (company) => {
    if (selectedCompanies.includes(company)) {
      setSelectedCompanies(selectedCompanies.filter((item) => item !== company));
    } else {
      setSelectedCompanies([...selectedCompanies, company]);
    }
  };

  const filteredComp = selectedCompanies.length
    ? acData.filter((ac) => selectedCompanies.includes(ac.company))
    : acData;

  return (
    <>
      <Nava />
      <div className="fullpage">
        {/* Filter Section */}
        <div className="pro-select">
          <h3>Filter by Brand</h3>
          <div className="filter-options">
            {Array.from(new Set(acData.map((ac) => ac.company))).map((company) => (
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

        {/* AC Display Section */}
        <div className="PageSection">
          {filteredComp.length > 0 ? (
            filteredComp.map((item) => (
              <Link to={`/Ac/${item.id}`} key={item.id} className="Pageimg">
                <img src={item.image} alt={`${item.company} ${item.model}`} className="product-image" />
                <div className="promodel">{item.company} {item.model}</div>
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

export default Acpage;

