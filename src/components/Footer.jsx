import { Col, Container, Row } from "react-bootstrap"
import logo from '../assets/img/logo.png'
import navIcon1 from '../assets/img/nav-icon1.svg';
import navIcon2 from '../assets/img/github-mark-white.svg';
import navIcon3 from '../assets/img/nav-icon3.svg';

export const Footer = () => {
  return (
    <footer className="footer">
      <Container>
        <Row className="align-items-center">
          <Col sm={6} className="footer-logo">
            <a href="#home" className="footer-img-wrapper">
              <img src={logo} alt="Logo"/>
            </a>
          </Col>
          <Col sm={6} className="text-center text-sm-end">
            <div className="social-icon">
              <a href="https://www.linkedin.com/in/jchu2/"><img src={navIcon1}/></a>
              <a href="https://github.com/JeffreyChuCPA"><img src={navIcon2}/></a>
              <a href="https://www.instagram.com/chuchu.pdf/"><img src={navIcon3}/></a>
            </div>
            <p>Copyright 2024. All Right Reserved</p>
          </Col>
        </Row>
      </Container>
    </footer>
  )
}