import React, { useContext, useEffect, useState } from "react";
import Navbar from '../components/Navbar/Nvb'
import MyFooter from '../components/Footer/MyFooter'
import './home.css'
import { useParams } from "react-router-dom";
import Container from "react-bootstrap/esm/Container";
import Row from "react-bootstrap/esm/Row";
import Col from "react-bootstrap/esm/Col";
import axios from "axios";
import { CarContext } from "../App";




const Dettagli = () => {
    const [product, setProduct] = useState(null)
    

    const { productId } = useParams()
    

    const getProduct = async () => {
        try {
            const response = await axios.get(`${process.env.REACT_APP_URL}/products/${productId}`)
            setProduct(response.data.products)
        } catch (error) {
            console.log(error);
        }
    }

    useEffect(() => {
        getProduct()
    }, [productId])


    const { carItems, setCarItems } = useContext(CarContext)
    console.log(carItems);
    

    const addToCart = async () => {

        setCarItems(
            [
                ...carItems,
                {
                    id: product._id,
                    nome: product.nome,
                    cover1: product.cover1,
                    prezzo: product.prezzo,
                    quantity: 1
                }
            ]
        )
    }



    return (
        <div className='sfondo sfondo2'>
            <Navbar />
            <Container className="mt-5 py-5 my-5">
                <Row>
                    <Col xxl="6" xl="6" lg="6" md="6" sm="6">
                        {product &&
                            <img src={product.cover1}
                                className="w-75 border border-black" />}
                    </Col>

                    <Col xxl="6" xl="6" lg="6" md="6" sm="6">
                        {product &&
                            <h2>{product.nome}</h2>}
                        {product &&
                            <p className="mt-5">{product.description}</p>}
                        {product &&
                            <p className="fs-3 mt-4">{product.prezzo} $</p>}
                        <button className="glow-on-hover mt-5" onClick={addToCart}>Aggiungi al Carrello</button>

                    </Col>
                </Row>
            </Container>
            <MyFooter />
        </div>
    )
}

export default Dettagli

