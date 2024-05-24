import { Col, Container, Row } from "react-bootstrap";
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import meter1 from "../assets/img/meter1.svg";
import meter2 from "../assets/img/meter2.svg";
import meter3 from "../assets/img/meter3.svg";
import colorSharp from "../assets/img/color-sharp.png";

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
              <p>
                With an undergraduate and master's degrees in accounting and
                finance, I kickstarted my career path in a public accounting
                firm, gaining professional experience working with clients
                across various industries. From that experience, I realized my
                passion was more towards creating tangible solutions that people
                can interact with, which inspired me to transition into web and
                software development.
                {/* My decision to make the transition to becoming a
                developer started when I realized my passion was more towards
                building tangible solutions that people can interact with. */}
                <br></br>
                <br></br> My accounting background has equipped me with strong
                analytical skills, attention to detail, and problem-solving
                abilities—all of which are essential for software and web
                development. Additionally, my experience in understanding
                fundamental business operations and managing client relations
                enables me to develop software solutions that are both effective
                and user-friendly.
                <br></br>
                <br></br>I am excited to leverage my accounting expertise and my
                enthusiasm for technology to build innovative applications that
                make a real impact.
              </p>
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
