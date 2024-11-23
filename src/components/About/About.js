import React from "react";
import { Container, Row, Col, Image } from "react-bootstrap";
import "./About.css"; // Optional for custom styles if needed

function About() {
  return (
    <Container fluid className="about-section bg-light py-5" id="about">
      <Container>
        <Row className="align-items-center">
          {/* Left Side: Image */}
          <Col md={5} className="text-center">
            <Image
              src="https://via.placeholder.com/300" // Replace with your image URL
              alt="About Me"
              className="about-image img-fluid rounded-circle shadow"
            />
          </Col>

          {/* Right Side: Text */}
          <Col md={7}>
            <h2 className="mb-4 display-4 text-primary">About Me</h2>
            <p className="lead">
              Hello, I'm <span className="highlight fw-bold">Sachi Choudhari</span>, a final year student at
              <span className="highlight fw-bold text-success"> Bajaj Institute of Technology</span>. 
            </p>
            <p className="text-muted">
              I am passionate about Web Development and have experience with
              technologies like <b>HTML, CSS, JavaScript, React, and Node.js</b>.
            </p>
            <p>
              I love building <span className="text-info fw-bold">interactive</span> and 
              <span className="text-info fw-bold"> user-friendly</span> web applications. My interests include 
              exploring the latest web technologies and constantly enhancing my coding skills.
            </p>
          </Col>
        </Row>
      </Container>
    </Container>
  );
}

export default About;
