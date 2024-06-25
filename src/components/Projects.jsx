import { Col, Container, Row, Tab, Nav } from "react-bootstrap"
import { ProjectCard } from "./ProjectCard"
import colorSharp from '../assets/img/color-sharp.png'
import projImg1 from '../assets/img/project1.png'
import projImg2 from '../assets/img/project2.png'
import projImg3 from '../assets/img/project3.png'

export const Projects = () => {

  const projects = [
    {
      title: "Weathergram",
      description: "Real-time weather app with weather animation and data filters",
      imgURL: projImg1,
      projectURL: 'https://jeffreychucpa.github.io/Weathergram/'
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
        <Row className="overflow-hidden">
          <Col >
            <h2>Projects</h2>
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