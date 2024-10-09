import { useState } from "react";
import axios from "axios";
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
    setButtonText("Sending...");

    // EmailJS credentials

    const servideId = process.env.REACT_APP_SERVICE_ID;
    const templateId = process.env.REACT_APP_TEMPLATE_ID;
    const publicKey = process.env.REACT_APP_PUBLIC_KEY;

    // Creating an object with my EmailJS credentials

    const data = {
      service_id: servideId,
      template_id: templateId,
      user_id: publicKey,
      template_params: {
        from_name: formDetails.firstName + " " + formDetails.lastName,
        from_email: formDetails.email,
        message: formDetails.message,
      },
    };

    // Sending the email using EmailJS REST API endpoint
    try {
      const response = await axios.post(
        " https://api.emailjs.com/api/v1.0/email/send",
        data
      );

      setButtonText("send");
      setFormDetails(userDetails);
      setStatus({ succes: true, message: "Message sent successfully" });
    } catch {
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
