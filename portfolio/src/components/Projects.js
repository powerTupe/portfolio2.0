import { Container, Row, Col, Tab, Nav } from "react-bootstrap";
import { ProjectCard } from "./ProjectCard";
import projImg1 from "../assets/img/portfoliofriend.png";
import projImg2 from "../assets/img/space.png";
import projImg3 from "../assets/img/universe.png";
import projImg4 from "../assets/img/shivastyle.png";
import projImg5 from "../assets/img/ecommerce.png";
import projImg6 from "../assets/img/carrental.png";
import projImg7 from "../assets/img/bankmgnmt.png";
import colorSharp2 from "../assets/img/color-sharp2.png";
import "animate.css";
import TrackVisibility from "react-on-screen";

export const Projects = () => {
  const projects = [
    {
      title: "Friends Portfolio",
      description: "Design & Development",
      imgUrl: projImg1,
      webLink: "https://powertupe.github.io/ankushThakur/",
    },
    {
      title: "Lost in Space",
      description: "Design & Development",
      imgUrl: projImg2,
      webLink: "https://powertupe.github.io/two-astronauts/",
    },
    {
      title: "Universe",
      description: "Design & Development",
      imgUrl: projImg3,
      webLink: "https://powertupe.github.io/Universe/html/index",
    },
    {
      title: "Music Play Shiva Style",
      description: "Design & Development",
      imgUrl: projImg4,
      webLink: "https://powertupe.github.io/musicWeb",
    },
    {
      title: "E Commerce Website",
      description: "Design & Development",
      imgUrl: projImg5,
      webLink: "https://powertupe.github.io/ECweb/html/index.html",
    },
    {
      title: "Car Rentel",
      description: "Design & Development",
      imgUrl: projImg6,
      webLink: "https://powertupe.github.io/car-rental/html/index.html",
    },
    {
      title: "Bank Mangement",
      description: "Design & Development",
      imgUrl: projImg7,
      webLink: "https://powertupe.github.io/car-rental/html/index.html",
    },
  ];

  return (
    <section className="project" id="projects">
      <Container>
        <Row>
          <Col size={12}>
            <TrackVisibility>
              {({ isVisible }) => (
                <div
                  className={
                    isVisible ? "animate__animated animate__fadeIn" : ""
                  }
                >
                  <h2>Projects</h2>
                  <p>
                    These all are my academics projects which I devloped during
                    my academics days, you can have a look into this design Projects.
                    The project which i am working now will be update in second tab soon
                  </p>
                  <Tab.Container id="projects-tabs" defaultActiveKey="first">
                    <Nav
                      variant="pills"
                      className="nav-pills mb-5 justify-content-center align-items-center"
                      id="pills-tab"
                    >
                      <Nav.Item>
                        <Nav.Link eventKey="first">Tab 1</Nav.Link>
                      </Nav.Item>
                      <Nav.Item>
                        <Nav.Link eventKey="second">Tab 2</Nav.Link>
                      </Nav.Item>
                    </Nav>
                    <Tab.Content
                      id="slideInUp"
                      className={
                        isVisible ? "animate__animated animate__slideInUp" : ""
                      }
                    >
                      <Tab.Pane eventKey="first">
                        <Row>
                          {projects.map((project, index) => {
                            return <ProjectCard key={index} {...project} />;
                          })}
                        </Row>
                      </Tab.Pane>
                      <Tab.Pane eventKey="second">
                        <Row>
                          <ProjectCard {...projects[projects.length - 1]} />
                        </Row>
                      </Tab.Pane>
                    </Tab.Content>
                  </Tab.Container>
                </div>
              )}
            </TrackVisibility>
          </Col>
        </Row>
      </Container>
      <img className="background-image-right" src={colorSharp2}></img>
    </section>
  );
};
