import Card from 'react-bootstrap/Card';
import React, { useContext } from "react";
import ListGroup from 'react-bootstrap/ListGroup';
import './CartComp.css'
import { CarContext } from "../../App";


const CartComponent = ({ nome, prezzo, cover1 }) => {
    const { carItems, setCarItems } = useContext(CarContext)

    return (
        <>
            <Card style={{ width: '18rem' }} className='mt-2 mx-3 mb-4 bg-black text-white card'>
                <Card.Img variant="top" src={cover1} className='cardimg' />
                <Card.Body>
                    <Card.Title>{nome}</Card.Title>
                </Card.Body>
                <ListGroup className="list-group-flush border-white">
                    <ListGroup.Item className='bg-black text-white'>{prezzo}$</ListGroup.Item>
                </ListGroup>
            </Card>
        </>
    )
}

export default CartComponent