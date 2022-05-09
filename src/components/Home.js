import React from "react";
import '../themes/Header.css'
import '../themes/Navbar.css'
import '../themes/Projects.css'
import { Container, Row, Col, Grid } from "react-bootstrap";
import Paper from '@mui/material/Paper'
import Box from '@mui/material/Box'
import ButtonAppBar from "./TopBar";
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography'
import examplephoto128 from '../images/examplephoto128.png'
import { createTheme, ThemeProvider, useTheme } from '@mui/material/styles';
import useMediaQuery from "@mui/material/useMediaQuery";

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
            <Container className="projectsBody">
                <ThemeProvider theme={darkTheme}>
                <Box sx={{
                    width: '60rem', 
                    height: '10rem', 
                    backgroundColor: 'primary.dark',
                    }}
                >
                    <Card sx={{ display: 'flex', flexWrap: 'wrap' }}>
                    <CardMedia
                        component="img"
                        sx={{width: '40rem'}}
                        image={examplephoto128}
                    />
                    <Box sx={{ display: 'flex', width: '20rem', flexDirection: 'column' }}>
                        <CardContent sx={{ flex: '1 0 auto' }}>
                        <Typography component="div" variant="h5">
                        <a className="colorhover" href="https://www.128productions.com" target="_blank">128productions.com</a>
                        </Typography>
                        <Typography variant="subtitle1" color="text.secondary" component="div">
                            <br/>128 Productions is an events coordination company located in Denver, CO. Written in
                            React.js, styled in Bootstrap. Incorporated Contentful CMS for event
                            management and photo galleries. Displays a developed and
                            advanced understanding of React Hooks and headless content
                            management systems.
                        </Typography>
                        </CardContent>
                    </Box>
                    
                    </Card>  
                </Box>
                </ThemeProvider>
            </Container>
            </div>
    )
}

export default Home