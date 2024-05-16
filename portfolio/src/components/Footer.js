import { Container, Row, Col } from "react-bootstrap";
import { MailchimpForm } from "./MailchimpForm";
import logo from "../assets/img/logo.svg";
import navIcon1 from "../assets/img/nav-icon1.svg";
import navIcon2 from "../assets/img/nav-icon2.svg";
import navIcon3 from "../assets/img/nav-icon3.svg";

export const Footer = () => {
  return (
    <footer className="footer">
      <Container>
        <Row className="align-items-center">
          <MailchimpForm />
          <Col size={12} sm={6}>
            <h3 className="logo">Prasad</h3>
          </Col>
          <Col size={12} sm={6} className="text-center text-sm-end">
            <div className="social-icon">
              <a href="https://www.linkedin.com/in/prasad-tupe-50b700217/?lipi=urn%3Ali%3Apage%3Ad_flagship3_feed%3Bm4hol3hYRNacxyi5c0UGIA%3D%3D"><img src={navIcon1} alt="Icon" /></a>
              <a href="https://www.facebook.com/prasad.tupe.507"><img src={navIcon2} alt="Icon" /></a>
              <a href="https://www.instagram.com/prasadtupe0405/"><img src={navIcon3} alt="Icon" /></a>
            </div>
            <p>Copyright 2022. All Rights Reserved</p>
          </Col>
        </Row>
      </Container>
    </footer>
  )
}
