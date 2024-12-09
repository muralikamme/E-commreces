


import React from 'react';
import { mobileData } from "../data/mobiles";
import { useParams } from 'react-router-dom';
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import Nava from "../componets/nav.jsx"
import { Usecart } from '../contex/Usecontex.jsx';

const Mobilesingle = () => {
  const { id } = useParams();
  const { AddtoCart } = Usecart();


  const handleAddToCart = (item) => {
    AddtoCart(item); // Call the AddtoCart method to add the item
    alert(`${item.product} has been added to your cart!`); // Show alert after adding
};

  const cleanId = id.replace(":", "");
  const pro = mobileData.find((items) => items.id == cleanId);

  if (!pro) {
      console.error("Product not found!");
      return <p>Product not found</p>;
  }

  return (
      <>
          <Nava />
          <div className="Singlepage">
              <Card style={{ width: "18rem" }}>
                  <Card.Img
                      variant="bottom"
                      src={pro.image}
                      
                      className="singleimg"
                  />
                  <Card.Body>
                      <Card.Title>{pro.company}</Card.Title>
                      <Card.Text>{pro.description}</Card.Text>
                      <Card.Footer>Price: {pro.price}$</Card.Footer>
                      <Button variant="primary" onClick={() => handleAddToCart(pro)}>
                          Add to Cart
                      </Button>
                  </Card.Body>
              </Card>
          </div>
      </>
  );
};
export default Mobilesingle;



