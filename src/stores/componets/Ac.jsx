import React from "react";
import {SearchData} from "../data/Search"

import Card from "react-bootstrap/Card";
import { FaIndianRupeeSign } from "react-icons/fa6";
// import "../../App.css"; // Assuming common styles are in App.css
import { useSearch } from "./SearchContext"; // Import SearchContext for search functionality
import "./componet.css"
import {useNavigate} from "react-router-dom";


const Ac = () => {
  let navigate=useNavigate()
  const { searchQuery } = useSearch(); // Access global search query
  // var FirstFiveImg = acData.slice(0, 5);
  // Filter AC data based on the search query
  const filteredAcData = SearchData.filter(
    (item) =>

      (item.company &&item.company.toLowerCase().includes(searchQuery.toLowerCase()) )||
     
     (item.category&&  item.category.toLowerCase().includes(searchQuery.toLowerCase()))||
    ( item.product &&   item.product.toLowerCase().includes(searchQuery.toLowerCase()))
  );


  let matching=(product)=>{
    switch(product){
      case "books":
        navigate("/Books")
        break;
      case "mobile" :
        navigate("/Mobiles") 
        break;
      case "computer":
        navigate("/Computers")
        break;
      case "refrigerator" :
        navigate("/Fridges") 
        break;
      case "furniture"  :
        navigate("/Furniture")
        break;
      case "kitchen":
        navigate("/Kitchen") 
        break;
      case "menswear"  :
        navigate("/MenFashion") 
        break;
      case "speaker" :
        navigate("/Speakers") 
        break;
      case "tv":
        navigate("/Tv's")  
        break;
      case "watch"  :
        navigate("/Watchs")
        break;
      case "woman wear"  :
        navigate("/WomenFashion")
        break;
      case "air conditioner"  :
        navigate("/Ac's")
        break;
      default:
        navigate("/")  



    }

  }

  return (
    <>
      <h2 className="ProTittle">Products</h2>

      <div className="ProSection">
      
          {filteredAcData.map((item, index) => (
           
              <Card
                style={{ width: "14rem" }}
                className="card card-spacing"
                key={index} // Key for list items
               onClick={ ()=>{

                 matching(item.product.toLowerCase())
                 console.log(item.product,"lll");
               }
               }>
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
