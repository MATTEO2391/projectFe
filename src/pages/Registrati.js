import React, { useState } from "react"
import { useNavigate } from "react-router-dom"
import Form from 'react-bootstrap/Form';
import Row from 'react-bootstrap/Row';
import Container from "react-bootstrap/esm/Container";
import './login.css'
import Alert from 'react-bootstrap/Alert'


const Registrati = () => {
    const [formData, setFormData] = useState({})
    const [show, setShow] = useState(false)

    const onSubmit = async (e) => {
        e.preventDefault()

        try {
            const response = await fetch(`${process.env.REACT_APP_URL}/utente/create`, {
                headers: {
                    "Content-Type": "application/json"
                },
                method: "POST",
                body: JSON.stringify(formData)
            })
            window.location.reload()
            setShow (!show)
            return response.json()
        } catch (error) {
            console.log(error);
        }
    }

    const navigate = useNavigate()

    const tornaLogin = () => {
        navigate('/')
    }

    return (
        <div className="ctn-form lgn">
            <Container className="pt-3 pb-5 d-flex flex-column align-items-center text-Black">
            <Alert show={show} variant="success" dismissible className="mt-5 pt-5 h-25 position absolute top-50 start-25 d-flex align-items-center">
                    <Alert.Heading className="fs-2">Registrazione effettuata con successo</Alert.Heading>
                </Alert>
                <h1 className="mb-3 fw-bold">COMIC BOOK CAVE</h1>
                <Form
                    onSubmit={onSubmit}
                    className="d-flex flex-column align-items-center w-50"
                >
                    <Row className="mb-3">
                        <Form.Group md="4" className="mt-3">
                            <Form.Label>Nome</Form.Label>
                            <Form.Control
                                className="frm"
                                required
                                type="text"
                                name="Nome"
                                onChange={(e) => setFormData({
                                    ...formData,
                                    nome: e.target.value
                                })}
                            />
                        </Form.Group>
                        <Form.Group md="4" className="mt-3">
                            <Form.Label>Cognome</Form.Label>
                            <Form.Control
                                className="frm"
                                required
                                type="text"
                                name="Cognome"
                                onChange={(e) => setFormData({
                                    ...formData,
                                    cognome: e.target.value
                                })}
                            />

                        </Form.Group>
                        <Form.Group md="4" className="mt-3">
                            <Form.Label>E-Mail</Form.Label>
                            <Form.Control
                                className="frm"
                                required
                                type="text"
                                name="E-Mail"
                                onChange={(e) => setFormData({
                                    ...formData,
                                    email: e.target.value
                                })}
                            />
                            <Form.Control.Feedback>Looks good!</Form.Control.Feedback>
                        </Form.Group>
                        <Form.Group md="4" className="mt-3">
                            <Form.Label>Password</Form.Label>
                            <Form.Control
                                className="frm"
                                required
                                type="password"
                                name="Password"
                                onChange={(e) => setFormData({
                                    ...formData,
                                    password: e.target.value
                                })}
                            />

                        </Form.Group>
                    </Row>
                    <button type="submit" className="glow-on-hover mt-3 frm">Registrati</button>
                    <button onClick={() => tornaLogin()} className="glow-on-hover mt-4 frm">Torna alla Login</button>
                </Form>
            </Container>
        </div>
    )
}

export default Registrati