import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import ProjectCard from "./ProjectCards";
import Particle from "../Particle";
import chat from "../../Assets/Projects/chat-backend.jpg";
import recipica from "../../Assets/Projects/recipe-app.webp";
import traffic_simulator from "../../Assets/Projects/traffic-simulator.gif";
import dns_filtering from "../../Assets/Projects/dns-filtering.png";
import festify from "../../Assets/Projects/festifyLogo.png";

function Projects() {
  return (
    <Container fluid className="project-section">
      <Particle />
      <Container>
        <h1 className="project-heading">
          My Recent <strong className="purple">Works </strong>
        </h1>
        <p style={{ color: "white" }}>
          Here are a few projects I've worked on recently.
        </p>
        <Row style={{ justifyContent: "center", paddingBottom: "10px" }}>
          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={traffic_simulator}
              title="Traffic Simulator"
              description="Developed a Traffic Simulator using advanced object-oriented programming in Java, featuring realistic vehicle behaviors, traffic signals, and multi-threaded communication with UDP protocol, ensuring dynamic simulations, reduced latency, and a scalable, efficient system architecture"
              ghLink="https://github.com/HarmanjotMalhi/trafficSimulation"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={festify}
              title="Festify[In-Progress]"
              description="Developed a scalable ticketing platform using React, Node.js, and Firebase, featuring real-time availability, secure payments, and pro analytics. Served as Scrum Master, enhancing sprint efficiency by 40% and reducing delivery time by 20%."
              ghLink="https://github.com/Gautam4036/COSC4P02_Festify/blob/main/Festify/images/festifyLogo.png"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={recipica}
              title="Recipica"
              description="Developed “Recipica,” an Android app using Spoonacular API, showcasing 500+ recipes with detailed instructions and similar suggestions. Optimized UI with Recycler View, SearchView, and Picasso, reducing load times by 30% for seamless browsing"
              ghLink="https://github.com/HarmanjotMalhi/Recipica"           
            />
          </Col>

          <h1 className="project-heading">
          Networking <strong className="purple">Pet Projects </strong>
        </h1>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={dns_filtering}
              title="DNS Filter"
              description="Developed a DNS filter that intercepts DNS queries, checks resolved IPs against a blacklist, and replaces blacklisted addresses with a specified IP before responding, enhancing network security and content control."
              ghLink="https://github.com/HarmanjotMalhi/DNS_filter"
              // demoLink="https://www.youtube.com/watch?v=dQw4w9WgXcQ&ab_channel=RickAstley" <--------Please include a demo link here
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={chat}
              title="Chat on Terminal"
              description="Developed a terminal-based chat room using client-server programs with base64-encoded encryption, text shortcuts, and multi-user support, enabling secure and efficient communication across different machines."
              ghLink="https://github.com/HarmanjotMalhi/chat_app_backend"/>
          </Col>
        </Row>
      </Container>
    </Container>
  );
}

export default Projects;
