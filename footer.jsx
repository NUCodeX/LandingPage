import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import './footer.css';

const Footer = ({logo}) => {
  return (
    <footer className="footer bg-dark-blue text-white py-5">
      <Container>
        <Row>
          {/* Brand Info - Left Side */}
          <Col md={6} className="mb-4 mb-md-0">
            <div className="d-flex align-items-center mb-3">
              {logo && (
                <a className="navbar-brand me-2" href="#">
                  <img 
                    src={logo} 
                    alt="PiliPinas Logo" 
                    style={{ height: "30px" }}
                  />
                </a>
              )}
            </div>
            <p>
              Your trusted source for election information and voter education in the Philippines.
            </p>
            <div className="social-icons">
              <a href="#" className="text-white me-3">
                <i className="bi bi-facebook"></i>
              </a>
              <a href="#" className="text-white me-3">
                <i className="bi bi-twitter"></i>
              </a>
              <a href="#" className="text-white me-3">
                <i className="bi bi-instagram"></i>
              </a>
            </div>
          </Col>
          
          {/* Links - Right Side */}
          <Col md={6}>
            <Row>
              <Col sm={6} className="mb-4 mb-sm-0">
                <h5 className="text-uppercase mb-4">Quick Links</h5>
                <ul className="list-unstyled">
                  <li className="mb-2"><a href="#" className="text-white">Home</a></li>
                  <li className="mb-2"><a href="#" className="text-white">Voter's Info</a></li>
                  <li className="mb-2"><a href="#" className="text-white">Candidates</a></li>
                  <li className="mb-2"><a href="#" className="text-white">News</a></li>
                </ul>
              </Col>
              
              <Col sm={6}>
                <h5 className="text-uppercase mb-4">Resources</h5>
                <ul className="list-unstyled">
                  <li className="mb-2"><a href="#" className="text-white">FAQs</a></li>
                  <li className="mb-2"><a href="#" className="text-white">About Us</a></li>
                  <li className="mb-2"><a href="#" className="text-white">Contact</a></li>
                  <li className="mb-2"><a href="#" className="text-white">Privacy Policy</a></li>
                </ul>
              </Col>
            </Row>
          </Col>
        </Row>
        
        <hr className="my-4 bg-light" />
        
        <Row>
          <Col className="text-center">
            <p className="mb-0">
              &copy; {new Date().getFullYear()} PiliPinas. All rights reserved.
            </p>
          </Col>
        </Row>
      </Container>
    </footer>
  );
};

export default Footer;