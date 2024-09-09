import { Container, Row, Col } from "react-bootstrap";
import { ArrowRightCircle } from "react-bootstrap-icons";
import headerImg from "../assets/img/header-img.svg";
import { useEffect, useState } from "react";
import "animate.css";
import TrackVisibility from "react-on-screen";

export default function Banner() {
  const [loopNum, setLoopNum] = useState(0);
  const [isDeleting, setIsDeleting] = useState(false);
  const toRotate = [
    "Hi I'm a Full-Stack,",
    "DevOps and",
    "Cloud Engineer Enthusiast",
  ];
  const [text, setText] = useState("");
  const [delta, setDelta] = useState(300 - Math.random() * 100);
  const period = 1000;

  useEffect(() => {
    let ticker = setInterval(() => {
      tick();
    }, delta);

    return () => {
      clearInterval(ticker);
    };
  }, [text]);

  function tick() {
    let i = loopNum % toRotate.length;
    let fullText = toRotate[i];
    let updatedText = isDeleting
      ? fullText.substring(0, text.length - 1)
      : fullText.substring(0, text.length + 1);

    setText(updatedText);

    if (isDeleting) {
      setDelta((prevDelta) => prevDelta / 2);
    }

    if (!isDeleting && updatedText === fullText) {
      setIsDeleting(true);
      setDelta(period);
    } else if (isDeleting && updatedText === "") {
      setIsDeleting(false);
      setLoopNum(loopNum + 1);
      setDelta(500);
    }
  }

  return (
    <section className="banner" id="home">
      <Container>
        <Row className="align-items-center">
          <Col xs={12} md={6} xl={7}>
            <TrackVisibility>
              {({ isVisible }) => (
                <div
                  className={
                    isVisible ? "animate__animated animate__fadeIn" : ""
                  }
                >
                  <span className="tagline">Welcome to my Portfolio</span>
                  <h1>
                    {` `}
                    <span className="wrap">{text}</span>
                  </h1>
                  <p>
                    My name is <a href="https://github.com/kwenealete">Monya</a>
                    , and I am a dedicated Software Engineer with a
                    comprehensive skill set that spans frontend developement,
                    backend developement, and cloud technologies. I hold an MSc
                    in Information Technology from{" "}
                    <a href="https://www.cardiffmet.ac.uk/Pages/default.aspx">
                      Cardiff Metropolitan University (CMU)
                    </a>
                    , UK Where I developed a strong foundation in computing and
                    software engineering principles.
                  </p>
                  <p>
                    I thrive on transforming complex problems into elegant,
                    efficient code and take pride in writing clean,
                    maintainable, and saclable software. In order to level up
                    myself, I have developed applications from inception to
                    deployment to deliver high quality products and works.
                  </p>
                  <p>
                    I am seeking an opportunity to join an exciting industry
                    where I will not only be able to contribute to its growth
                    but also challenge myself and grow further in my career
                    through exciting projects.
                  </p>
                  <p>
                    Aside being passionate about programming and its ecosystem,
                    I love listening to music of all genre, playing and watching
                    football, doing movie and commedy marathons, a lover of news
                    and informative shows.
                  </p>
                  <a href="#connect">
                    <button>
                      Let's connect <ArrowRightCircle size={25} />
                    </button>
                  </a>
                </div>
              )}
            </TrackVisibility>
          </Col>
          <Col xs={12} md={6} xl={5}>
            <TrackVisibility>
              {({ isVisible }) => (
                <div
                  className={
                    isVisible ? "animate__animated animate__zoomIn" : ""
                  }
                >
                  <img src={headerImg} alt="Header Img" />
                </div>
              )}
            </TrackVisibility>
          </Col>
        </Row>
      </Container>
    </section>
  );
}
