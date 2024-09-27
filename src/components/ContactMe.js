import { useState } from "react";
import { Col, Container, Row } from "react-bootstrap";
import contactImage from "../assets/img/contact-img.svg";

export default function ContactMe() {
  const userDetails = {
    firstName: "",
    lastName: "",
    email: "",
    phone: "",
    message: "",
  };

  const [formDetails, setFormDetails] = useState(userDetails);
  const [buttonText, setButtonText] = useState("send");
  const [status, setStatus] = useState({});

  function onFormUpdate(category, value) {
    setFormDetails({
      ...formDetails,
      [category]: value,
    });
  }

  async function handleSubmit(e) {
    e.preventDefault();
    setButtonText("sending...");
    let response = await fetch("http://localhost:5000/contact", {
      method: "POST",
      headers: {
        "Content-Type": "application/json;charset=utf-8",
      },
      body: JSON.stringify(formDetails),
    });

    let result = await response.json();
    setButtonText("send");
    setFormDetails(userDetails);
    if (result.code == 200) {
      setStatus({ succes: true, message: "Message sent successfully" });
    } else {
      setStatus({
        succes: false,
        message: "Something went wrong, please try again later.",
      });
    }
  }

  return (
    <section className="contact" id="connect">
      <Container>
        <Row className="align-items-center">
          <Col md={6}>
            <img src={contactImage} alt="contact Me" />
          </Col>
          <Col md={6}>
            <h2>Get In Touch</h2>
            <p>
              A project in mind, or perhaps just want to reach out, then feel
              free to shoot me a message.
            </p>
            <form onSubmit={handleSubmit}>
              <Row>
                <Col sm={6} className="px-1">
                  <input
                    required
                    type="text"
                    value={formDetails.firstName}
                    placeholder="First Name"
                    onChange={(e) => onFormUpdate("firstName", e.target.value)}
                  />
                </Col>
                <Col sm={6} className="px-1">
                  <input
                    required
                    type="text"
                    value={formDetails.lastName}
                    placeholder="Last Name"
                    onChange={(e) => onFormUpdate("lastName", e.target.value)}
                  />
                </Col>
                <Col sm={6} className="px-1">
                  <input
                    required
                    type="email"
                    value={formDetails.email}
                    placeholder="Email Address"
                    onChange={(e) => onFormUpdate("email", e.target.value)}
                  />
                </Col>
                <Col sm={6} className="px-1">
                  <input
                    type="tel"
                    value={formDetails.phone}
                    placeholder="Phone Number"
                    onChange={(e) => onFormUpdate("phone", e.target.value)}
                  />
                </Col>
                <Col sm={6} className="px-1">
                  <textarea
                    required
                    rows="6"
                    value={formDetails.message}
                    placeholder="Message"
                    onChange={(e) => onFormUpdate("message", e.target.value)}
                  />
                  <button type="submit">
                    <span>{buttonText}</span>
                  </button>
                </Col>
                {status.message && (
                  <Col>
                    <p
                      className={
                        status.success === false ? "danger" : "success"
                      }
                    >
                      {status.message}
                    </p>
                  </Col>
                )}
              </Row>
            </form>
          </Col>
        </Row>
      </Container>
    </section>
  );
}
