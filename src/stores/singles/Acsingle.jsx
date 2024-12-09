import React from 'react'
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import { useParams } from 'react-router-dom';
import Nava from '../componets/nav';
import { acData } from '../data/ac';
import {Usecart} from '../contex/Usecontex';


const Acsingle = () => {

  
    var  {id}=useParams()
  let   {AddtoCart}=Usecart()


  const handleAddToCart = (item) => {
    AddtoCart(item); // Call the AddtoCart method to add the item
    alert(`${item.product} has been added to your cart!`); // Show alert after adding
};
  
    const cleanId = id.replace(":", "");
    
        let pro=acData.find((items)=>( items.id==cleanId))
        console.log(pro);

  return (
    <>
   <Nava/>
       <div className='Singlepage'>
      <Card style={{ width: '18rem' }}>
      <Card.Img variant="buttom" src={pro.image}   className='singleimg'/>
      <Card.Body>
        <Card.Title>{pro.company}</Card.Title>
        <Card.Text>
          {pro.description}
        </Card.Text>
        <Card.Footer>
         Price:{pro.price}$

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

export default Acsingle

