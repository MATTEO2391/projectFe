import Navbar from '../components/Navbar/Nvb'
import MyFooter from '../components/Footer/MyFooter'
import Container from 'react-bootstrap/Container'
import Row from 'react-bootstrap/esm/Row'
import Col from 'react-bootstrap/esm/Col'
import './home.css'
import { Link } from 'react-router-dom'




const Home = () => {

    return (
        <>
            <Navbar />
            <Container>
                <Row>
                    <div className='text-primary d-flex justify-content-center align-self-center titolo'>
                        <h1 className='fw-bold mt-1'>WELCOME TO THE COMIC BOOK CAVE</h1>
                    </div>
                </Row>

                <Row className='mt-5'>
                    <Col >
                        <Link to={'/manga'} className='linkhome'>
                            <div className='divhome bg-succes d-flex flex-column align-items-center mb-4 bg-dark text-white rounded'>
                                <div>
                                    <h2 className='fw-bold mt-2'>MANGA</h2>
                                </div>
                                <div className='d-flex align-items-center p-2'>
                                    <p className='fs-2 mx-4 '> Buy Manga online from a wide selection of Comics, Comic Strips, Drawing Styles and Techniques and much more at low prices.</p>
                                    <img className='w-50 mt-2 mb-2 mx-2 border border-black rounded' src="https://imagecdn.spazioweb.it/5a/0c/5a0c45f0-cc04-4a04-add2-5e4895678e7c.jpg" />
                                </div>
                            </div>
                        </Link>
                    </Col>
                </Row>
                <Row className='mt-5'>
                    <Col>
                        <Link to={'/statues'} className='linkhome'>
                            <div className='bg-succes d-flex flex-column align-items-center mb-4 bg-dark text-white rounded'>
                                <div>
                                    <h2 className='fw-bold mt-2'>STATUES</h2>
                                </div>
                                <div className='d-flex align-items-center p-2'>
                                    <p className='fs-2 mx-4'>Collectible statues with official licenses, depicting cult characters from the world of animation, manga, cinema and video games.</p>
                                    <img className='w-50 mt-2 mb-2 mx-2 border border-black rounded' src="https://www.waifuwatch.com/wp-content/uploads/2018/05/Tsume-Art-Preview-01.jpg" />
                                </div>
                            </div>
                        </Link>
                    </Col>
                </Row>
                <Row className='mt-5'>
                    <Col>
                        <Link to={'/cosplay'} className='linkhome'>
                            <div className='bg-succes d-flex flex-column align-items-center mb-4 bg-dark text-white rounded'>
                                <div>
                                    <h2 className='fw-bold mt-2'>COSPLAY</h2>
                                </div>
                                <div className='d-flex align-items-center p-2'>
                                    <p className='fs-2 mx-4'>Everything you need to become your favorite Anime character while keeping an eye on the quality of the products.</p>
                                    <img className='w-50 mt-2 mb-2 mx-2 border border-black rounded' src="https://sociologicamente.it/wp-content/uploads/2017/06/tumblr_inline_np9f9m2Vi81ql1wa0_500.jpg" />
                                </div>
                            </div>
                        </Link>
                    </Col>
                </Row>

            </Container>
            <MyFooter />
        </>
    )
}

export default Home




