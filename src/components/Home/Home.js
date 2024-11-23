import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import Contact from "../Contact/Contact";
import About from "../About/About";
function Home() {
  return (
    <>

      <section className="home-section" id="home">
        <Container>
          <Row className="justify-content-center align-items-center text-center">
            <Col md={8}>
              <h1 className="heading">Cloud Computing CA2 Activity</h1>
              <p className="subheading">
                Final Year Student at Bajaj Institute of Technology
              </p>
            </Col>
          </Row>
        </Container>
        
      </section>
      <About/>
      {/* Contact Form Section */}
      <Contact />
    </>
  );
}

export default Home;
