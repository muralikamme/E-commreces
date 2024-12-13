import React from 'react'
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import { useParams } from 'react-router-dom';
import Nava from '../componets/nav';
import { speakerData } from '../data/speaker';
import {Usecart} from '../contex/Usecontex';


const Speakersingle = () => {

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

  //  let  {AddtoCart}=Usecart()
  //   console.log(id)

  //    //alert msg 
  //    const handleAddToCart = (item) => {
  //     AddtoCart(item); // Call the AddtoCart method to add the item
  //     alert(`${item.product} has been added to your cart!`); // Show alert after adding
  // };

  
    const cleanId = id.replace(":", "");
   
    
        let pro= speakerData.find((items)=>( items.id==cleanId))
      

  return (
    <>
   <Nava/>
       <div className='Singlepage'>
      <Card style={{ width: '18rem' }}>
      <Card.Img variant="buttom" src={pro.image}   />
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

export default Speakersingle
