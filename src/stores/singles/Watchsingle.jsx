import React from 'react'
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import { useParams } from 'react-router-dom';
import { watchData } from '../data/watch';
import Nava from '../componets/nav';
import {Usecart} from '../contex/Usecontex';

const Watchsingle = () => {
  var  {id}=useParams()
  
  const { AddtoCart, currentUser } = Usecart(); // Access cart and current user state

  const handleAddToCart = (item) => {
    if (!currentUser) {
      alert("Please login to add items to your cart.");
      navigate("/login"); // Redirect to login page if not logged in
    } else {
      AddtoCart(item); // Add to cart if user is logged in
      alert(`${item.product} has been added to your cart!`);
    }
  };

  
    const cleanId = id.replace(":", "");
    
        let pro=watchData.find((items)=>( items.id==cleanId))
        console.log(pro.image,"hii");


  return (
    <>
   <Nava/>
       <div className='Singlepage'>
      <Card style={{ width: '18rem' }}>
      <Card.Img variant="buttom" src={pro.image}  />
      <Card.Body>
        <Card.Title>{pro.company}</Card.Title>
        <Card.Text>
          {pro.description}
        </Card.Text>
        <Card.Footer>
         Price:₹{pro.price}

        </Card.Footer>
        <Button variant="primary" onClick={() => handleAddToCart(pro)}>
                          Add to Cart
                      </Button>
      </Card.Body>
    </Card>
    </div>
  
   </>
    
  )
  
}

export default Watchsingle
