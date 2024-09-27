import { Col } from "react-bootstrap";

export default function ProjectCard({ title, description, imgUrl, srcCode, tools }) {
  return (
    <Col sm={6} md={4}>
      <a href={srcCode} target='_blank' rel="noreferrer">
        <div className="proj-imgbx">
          <img src={imgUrl} />
          <div className="proj-txtx">
            <h4>{title}</h4>
            <span>{description}</span>
            <h5>{tools}</h5>
          </div>
        </div>
      </a>
    </Col>
  );
}
