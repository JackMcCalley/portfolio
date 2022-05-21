import React from "react";
import "../themes/Header.css";
import "../themes/Navbar.css";
import "../themes/Projects.css";
import { Container, Row, Col } from "react-bootstrap";
import ButtonAppBar from "./TopBar";
import Projects from './Projects'

function Home() {

  return (
    <div>
      <Container className="container">
        <ButtonAppBar />
        <Row className="Header">
          <Col>
            <Row className="fade-in-text">
              <div className="colorhover">Hello, I'm Jack.</div>
            </Row>
            <Row className="fade-in-nav">
              <Col>
                <a className="colorhover" href="/#">
                  Projects
                </a>
              </Col>
              <Col>
                <a className="colorhover" href="/#">
                  About
                </a>
              </Col>
              <Col>
                <a className="colorhover" href="/#">
                  Code Demos
                </a>
              </Col>
            </Row>
          </Col>
        </Row>
      </Container>
      <Projects/>
    </div>
  );
}

export default Home;
