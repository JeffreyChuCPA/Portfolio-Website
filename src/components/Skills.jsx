import { Col, Container, Row } from "react-bootstrap";
import "react-multi-carousel/lib/styles.css";
import colorSharp from "../assets/img/color-sharp.png";
import profilePic from "../assets/img/profile-website.jpg";

export const Skills = () => {

  return (
    <section className="skill" id="about me">
      <Container>
        <Row>
          <Col>
            <div className="skill-bx">
              <h2>About Me</h2>
              <div className="profile-container">
                <img src={profilePic} className="profile-pic"></img>
                <p className="profile-text">
                  Back in 2023, I decided to transition from my professional
                  background in accounting and finance to the world of coding
                  and web development. As a self-taught programmer, I discovered
                  my passion for building web applications with a keen focus on
                  UI/UX design.
                  <br></br>
                  <br></br>
                  These days, my primary focus is on learning the complexities
                  of front-end development and creating projects that make a
                  real impact for users. I enjoy delving into the inner workings
                  of technology to understand how things function and designing
                  aesthetically pleasing and user-friendly interfaces.
                  <br></br>
                  <br></br>
                  When I'm not at my computer, you can find me playing
                  volleyball, badminton, or jamming away on my guitar.
                </p>
              </div>
              {/* <Carousel
                responsive={responsive}
                infinite={true}
                className="skill-slider"
              >
                <div className="item">
                  <img src={meter1} alt="Image" />
                  <h5>Web Development</h5>
                </div>
                <div className="item">
                  <img src={meter2} alt="Image" />
                  <h5>Brand Identity</h5>
                </div>
                <div className="item">
                  <img src={meter3} alt="Image" />
                  <h5>Logo Design</h5>
                </div>
                <div className="item">
                  <img src={meter1} alt="Image" />
                  <h5>Web Development</h5>
                </div>
              </Carousel> */}
            </div>
          </Col>
        </Row>
      </Container>
      <img className="background-image-left" src={colorSharp} />
    </section>
  );
};
