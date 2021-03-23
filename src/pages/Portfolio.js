import React from "react";
import AutoMind from "../Assets/autoMind.jpg";
import EatDaBurger from "../Assets/eatDaBurger.jpg";
import ReadMeGen from "../Assets/readMeGen.PNG";
import BudgetTracker from "../Assets/BudgetTracker.png";
import ProjectTitle from "../components/ProjectTitle";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Container from "react-bootstrap/Container";
import ProjectLink from "../components/ProjectLink";

function Portfolio() {
  return (
    <Container>
      <Row>
        <Col md={6}>
          <ProjectTitle> AutoMind</ProjectTitle>
          <img src={AutoMind} alt="AutoMind" height={150} width={400} />
          <ProjectLink>
            {" "}
            <Row>
              <a href="https://github.com/jannverduzco/AutoMind">
                AutoMind on GitHub
              </a>
            </Row>
            <Row>
              <a href="https://auto-mind.herokuapp.com/">AutoMind on Heroku</a>
            </Row>
          </ProjectLink>
        </Col>
        <Col md={6}>
          <ProjectTitle>Eat-Da-Burger</ProjectTitle>
          <img src={EatDaBurger} alt="EatDaBurger" height={150} width={400} />
          <ProjectLink>
            {" "}
            <Row>
              <a href="https://github.com/jannverduzco/Eat-Da-Burger">
                Eat-Da-Burger on GitHub
              </a>
            </Row>
            <Row>
              <a href="https://eat-da-brg.herokuapp.com/">Eat-Da-Burger on Heroku</a>
            </Row>
          </ProjectLink>
        </Col>
      </Row>
      <Row>
        <Col md={6}>
          <ProjectTitle> Professional README.md Generator </ProjectTitle>
          <img src={ReadMeGen} alt="ProfReadMeGen" height={150} width={400} />
          <ProjectLink>
            {" "}
            <Row>
              <a href="https://github.com/jannverduzco/09-Node.js-Homework-Professional-README-Generator">
              Professional README.md Generator on GitHub
              </a>
            </Row>
            <Row>
              <a href="https://auto-mind.herokuapp.com/">AutoMind on Heroku</a>
            </Row>
          </ProjectLink>
        </Col>
        <Col md={6}>
          <ProjectTitle>Budget Tracker</ProjectTitle>
          <img src={BudgetTracker} alt="budgetTracker" height={150} width={400} />
          <ProjectLink>
            {" "}
            <Row>
              <a href="https://github.com/jannverduzco/Budget-Tracker">
                Budget Tracker on GitHub
              </a>
            </Row>
            <Row>
              <a href="https://bdg-tracker.herokuapp.com/">Budget Tracker on Heroku</a>
            </Row>
          </ProjectLink>
        </Col>
      </Row>
    </Container>
  );
}
export default Portfolio;
