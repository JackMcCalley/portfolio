import React from "react";
import '../themes/Header.css'
import '../themes/Navbar.css'
import '../themes/Projects.css'
import { Container, Row, Col } from "react-bootstrap";
import wetfire from '../images/wetfire.png'
import ButtonAppBar from "./TopBar";

function Home() {

    return(
        <div>
            
            <Container className="container">
                <ButtonAppBar/>
                <Row className="Header">
                    <Col>
                        <Row className='fade-in-text'>
                            <div className='colorhover'>Hello, I'm Jack.</div>
                        </Row>
                        <Row className='fade-in-nav'>
                            <Col><a className="colorhover" href="/#">Home</a></Col>
                            <Col><a className="colorhover" href="/#">Projects</a></Col>
                            <Col><a className="colorhover" href="/#">About</a></Col>
                        </Row>
                    </Col>
                    {/* <Col style={{height: '20rem'}}>
                    <img alt='wetfire' height='320rem' src={wetfire} />
                    <p style={{color: 'white'}}>Placeholder image</p>
                    </Col>  */}
                </Row>
                <Row className="projectsBody">
                    Home
                </Row>
            </Container>
            </div>
    )
}

export default Home