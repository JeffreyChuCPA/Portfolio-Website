import { Col, Container, Row, Tab, Nav } from "react-bootstrap"
import { ProjectCard } from "./ProjectCard"
import colorSharp from '../assets/img/color-sharp.png'
import projImg1 from '../assets/img/project-img1.png'
import projImg2 from '../assets/img/project-img2.png'
import projImg3 from '../assets/img/project-img3.png'

export const Projects = () => {

  const projects = [
    {
      title: "Weathergram",
      description: "Real-time weather app with weather animation and data filters",
      imgURL: projImg1,
      projectURL: 'https://github.com/JeffreyChuCPA/Weathergram'
    },
    {
      title: "Risk of Rain 2 Multishop Terminal Simulator",
      description: "Interactive simulator replicating the Multishop Terminal feature from the game Risk of Rain 2",
      imgURL: projImg2,
      projectURL: 'https://risk-of-rain-2-multishop-simulator-sage.vercel.app/'
    },
    {
      title: "Polaris",
      description: "Personal investment portfolio tracker for stocks and options",
      imgURL: projImg3,
      projectURL: 'https://github.com/goldspanlabs/polaris'
    },
  ]

  return (
    <section className="project" id="projects">
      <Container>
        <Row>
          <Col>
            <h2>Projects</h2>
            {/* <p>Lorem Ipsum is simply dummy text of the printing and typesetting
              industry. Lorem Ipsum has been the industry standard dummy text
              ever since the 1500s, when an unknown printer took a galley of
              type and scrambled it to make a type specimen book.</p> */}
            {/* <Tab.Container id="projects-tabs" defaultActiveKey="first">
              <Nav variant="pills" className="nav-pills mb-5 " id="pills-tab" >
                <Nav.Item>
                  <Nav.Link eventKey="first">Tab One</Nav.Link>
                </Nav.Item>
                <Nav.Item>
                  <Nav.Link eventKey="second">Tab Two</Nav.Link>
                </Nav.Item>
                <Nav.Item>
                  <Nav.Link eventKey="third">
                    Tab Three
                  </Nav.Link>
                </Nav.Item>
              </Nav>
              <Tab.Content>
                <Tab.Pane eventKey="first"> */}
                  <Row>
                    {
                      projects.map((project, index) => {
                        return (
                          <ProjectCard key={index} {...project} />
                        )
                      })
                    }
                  </Row>
                {/* </Tab.Pane>
                <Tab.Pane eventKey='second'>WIP</Tab.Pane>
                <Tab.Pane eventKey='third'>WIP</Tab.Pane>
              </Tab.Content>
            </Tab.Container> */}
          </Col>
        </Row>
      </Container>
      <img className="background-image-right" src={colorSharp}/>
    </section>
  )
}