import { Col, Container, Row } from "react-bootstrap";
import logo from "../assets/img/logo.svg";
import navIcon1 from "../assets/img/nav-icon1.svg";
import navIcon2 from "../assets/img/nav-icon2.svg";
import navIcon3 from "../assets/img/nav-icon3.svg";

export default function Footer() {
  return (
    <footer className="footer">
      <Container>
        <Row className="align-item-center">
          <Col>
            <img src={logo} alt="Logo" />
          </Col>
          <Col sm={6} className="text-center text-sm-end">
            <div className="social-icon">
              <a href="https://www.linkedin.com/in/monya-kwene/" target="blank">
                <img src={navIcon1} alt="Icon" />
              </a>
              <a href="https://github.com/kwenealete" target="blank">
                <img src={navIcon2} alt="Icon" />
              </a>
              <a href="https://www.instagram.com/seanalete/" target="blank">
                <img src={navIcon3} alt="Icon" />
              </a>
            </div>
            <p>&copy; 2024. All Right Reserved</p>
          </Col>
        </Row>
      </Container>
    </footer>
  );
}
