import { Col, Container, Row } from "react-bootstrap";
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import meter1 from "../assets/img/meter1.svg";
import meter2 from "../assets/img/meter2.svg";
import meter3 from "../assets/img/meter3.svg";
import colorSharp from "../assets/img/color-sharp.png";
import profilePic from "../assets/img/profile-website.jpg";

export const Skills = () => {
  const responsive = {
    superLargeDesktop: {
      // the naming can be any, depends on you.
      breakpoint: { max: 4000, min: 3000 },
      items: 3
    },
    desktop: {
      breakpoint: { max: 3000, min: 1024 },
      items: 3
    },
    tablet: {
      breakpoint: { max: 1024, min: 464 },
      items: 2
    },
    mobile: {
      breakpoint: { max: 464, min: 0 },
      items: 1
    }
  };

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
