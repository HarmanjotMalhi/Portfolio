import React from "react";
import Card from "react-bootstrap/Card";
import { ImPointRight } from "react-icons/im";

function AboutCard() {
  return (
    <Card className="quote-card-view">
      <Card.Body>
        <blockquote className="blockquote mb-0">
          <p style={{ textAlign: "left" }}>
            Hi Everyone, I am <span className="purple">Harmanjot Malhi </span>
            from <span className="purple"> Toronto, Canada.</span>
            <br />
            Computer Science (Software Engineering concentration) student <br/> at Brock University.
            <br />
            I am currently looking for Software Engineer new grad or intern oppourtunities.
            <br />
            <br />
            Apart from coding, some other activities that I love to do!
            <br/>
          </p>
          <ul>
            <li className="about-activity">
              <ImPointRight /> Learning New Technologies
            </li>
            <li className="about-activity">
              <ImPointRight /> Playing Basketball
            </li>
            <li className="about-activity">
              <ImPointRight /> Travelling
            </li>
          </ul>

          <p style={{ color: "rgb(155 126 172)" }}>
            "Make it work, make it right, make it fast"{" "}
          </p>
          <footer className="blockquote-footer">Kent beck</footer>
        </blockquote>
      </Card.Body>
    </Card>
  );
}

export default AboutCard;
