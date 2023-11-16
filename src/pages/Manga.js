import React, { useEffect, useState } from "react";
import MyFooter from '../components/Footer/MyFooter'
import Navbar from '../components/Navbar/Nvb'
import Row from "react-bootstrap/esm/Row";
import "./home.css"
import Container from "react-bootstrap/esm/Container";
import { nanoid } from "nanoid"
import axios from "axios"
import 'react-responsive-pagination/themes/classic.css';
import Mycard from "../components/Mycard/Mycard";



const Manga = () => {

    const [product, setProduct] = useState([])
    console.log(product);
   
    const [filteredProduct, setFilteredProduct] = useState(product)

    const getProduct = async () => {
        try {
            const response = await axios.get(`${process.env.REACT_APP_URL}/products`)
            const data = response.data.products            
            setProduct(data.filter((data) => data.category.toLowerCase().includes('manga')))
            setFilteredProduct(data.filter((data) => data.category.toLowerCase().includes('manga')))
        } catch (error) {
            console.log(error);
        }
    }

    useEffect(() => {
        getProduct()
    }, [])

    return (
        <div className='sfondo2 sfondo'>
            <div className='sfondo'>
                <Navbar />
                <Container className="sfdctn pt-5">
                    <Row className="pt-5 d-flex justify-content-center mb-5">
                        {filteredProduct.map((p) =>
                        (<Mycard
                            key={nanoid()}
                            cover1={p.cover1}
                            nome={p.nome}
                            category={p.category}
                            prezzo={p.prezzo}
                            id={p._id}
                        />)
                        )
                        }


                    </Row>
                </Container>

                <MyFooter />
            </div>
        </div>
    )
}

export default Manga