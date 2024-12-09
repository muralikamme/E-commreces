

import React from 'react';
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import { useParams } from 'react-router-dom';
import Nava from '../componets/nav';
import { menData } from '../data/men';
import { Usecart } from '../contex/Usecontex';

const Mensingle = () => {
    const { id } = useParams();
    const { AddtoCart } = Usecart();

    const cleanId = id.replace(":", "");

    let pro = menData.find((items) => items.id == cleanId);
    console.log(pro);

    const handleAddToCart = (item) => {
        AddtoCart(item); // Call the AddtoCart method to add the item
        alert(`${item.product} has been added to your cart!`); // Show alert after adding
    };

    return (
        <>
            <Nava />
            <div className='Singlepage'>
                <Card style={{ width: '18rem' }}>
                    <Card.Img variant="bottom" src={pro.image} className='singleimg' />
                    <Card.Body>
                        <Card.Title>{pro.company}</Card.Title>
                        <Card.Text>
                            {pro.description}
                        </Card.Text>
                        <Card.Footer>
                            Price: {pro.price}$
                        </Card.Footer>
                        <Button variant="primary" onClick={() => handleAddToCart(pro)}>
                            Add to Cart
                        </Button>
                    </Card.Body>
                </Card>
            </div>
        </>
    );
};

export default Mensingle;

