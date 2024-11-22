import { Col, Container, Row, Tab, Nav } from "react-bootstrap"
import { ProjectCard } from "./ProjectCard"
import Carousel from "react-multi-carousel"
import 'react-multi-carousel/lib/styles.css'
import colorSharp from '../assets/img/color-sharp.png'
import { responsive, projects } from "../constants/data"

export const Projects = () => {

  return (
    <>
      {/* <section className="project" id="projects">
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
            </Col>
          </Row>
        </Container>
        <img className="background-image-right" src={colorSharp}/>
      </section> */}

      <section className="project" id="projects">
        <Container>
          <Row>
            <Col>
                <div className="proj-bx">
                  <h2>Projects</h2>
                  <Carousel responsive={responsive} infinite={true} swipeable={true} autoPlay={true} autoPlaySpeed={1500} className="skill-slider" itemClass="carouselItem" containerClass="react-multi-carousel-list">
                    {
                      projects.map((project, index) => {
                        return (
                          <ProjectCard key={index} {...project} />
                        )
                      })
                    }
                  </Carousel>
                </div>
            </Col>
          </Row>
        </Container>
        {/* <img className="background-image-right" src={colorSharp}/> */}
      </section>
    </>
  )
}