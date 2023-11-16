import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import { BsFillBagFill } from "react-icons/bs";
import { BsPower } from "react-icons/bs";
import './Nvb.css'


function BasicExample() {

  const logout = () => {
    localStorage.clear()
    window.location.href = "/"
  }

  return (
    <Navbar expand="lg" className="bg-primary fixed-top box1">
      <Container>
        <Navbar.Brand href="/home" className='fw-bold'>HOME</Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="me-auto">
          <Nav.Link href="/prodotti"className='fw-bold'>PRODOTTI</Nav.Link>
          </Nav>
          <Nav.Link href="/carrello" className="mx-6"><BsFillBagFill className="fs-5" /></Nav.Link>
          <Nav.Link onClick={() => logout()} className="mx-4">< BsPower className="fs-5" /></Nav.Link>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default BasicExample;