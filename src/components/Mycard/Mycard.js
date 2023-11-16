import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import './Mycard.css'
import { Link } from 'react-router-dom';






function Mycard({nome, category, cover1, prezzo,id}) {


    return (
        <Card style={{ width: '18rem' }} className = "mx-3 mt-3" >
            <Card.Img variant ="top" src={cover1} className = "mt-2 border border-black cardimg"/>
            <Card.Body>
                <Card.Title>{nome}</Card.Title>
                <Card.Text>{category}</Card.Text>
                <Card.Text>{prezzo} $</Card.Text>
                <Link to={`/products/${id}`}><button className ="glow-on-hover mt-2">Dettagli</button></Link>
            </Card.Body>
        </Card>
    );
}

export default Mycard;