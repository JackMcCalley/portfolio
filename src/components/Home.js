import React from "react";
import '../themes/Header.css'
import '../themes/Navbar.css'
import '../themes/Projects.css'
import { Container, Row, Col, Grid } from "react-bootstrap";
import Paper from '@mui/material/Paper'
import Box from '@mui/material/Box'
import ButtonAppBar from "./TopBar";
import examplephoto128 from '../images/examplephoto128.png'
import { createTheme, ThemeProvider, styled } from '@mui/material/styles';

function Home() {

    const darkTheme = createTheme({ palette: { mode: 'dark' } });

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
                            <Col><a className="colorhover" href="/#">Projects</a></Col>
                            <Col><a className="colorhover" href="/#">About</a></Col>
                            <Col><a className="colorhover" href="/#">Code Demos</a></Col>
                        </Row>
                    </Col>
                </Row>
            </Container>
            <Row className="projectsBody">
                <Box sx={{
                    width: '20rem', height: '10rem', 
                    backgroundColor: 'primary.dark',
                    // '&:hover': {
                    //     backgroundColor: 'primary.main',
                    //     opacity: [0.9, 0.8, 0.7]
                    // }
                    }}>
                    <Paper className="papers" elevation={3}>
                        <Container fluid="md" style={{width: '100%'}}>
                            <Row>
                                <Col>
                                    <img src={examplephoto128}/>
                                </Col>
                                <Col>
                                    This is a description of 128 Productions
                                </Col>
                            </Row>   
                        </Container>           
                    </Paper>    
                </Box>
            </Row>
            </div>
    )
}

export default Home