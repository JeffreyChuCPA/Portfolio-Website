import { Col, Container, Row } from "react-bootstrap";
import "react-multi-carousel/lib/styles.css";
import colorSharp from "../assets/img/color-sharp.png";
import profilePic from "../assets/img/profile-website.jpg";
import { aboutMeText_1, aboutMeText_2, aboutMeText_3 } from '../constants/text'

export const Skills = () => {

  return (
    <section className="skill" id="about me">
      <Container>
        <Row>
          <Col>
            <div>
              <h2>About Me</h2>
              <div className="profile-container">
                <img src={profilePic} className="profile-pic"></img>
                <p className="profile-text">
                  {aboutMeText_1}
                  <br></br>
                  <br></br>
                  {aboutMeText_2}
                  <br></br>
                  <br></br>
                  {aboutMeText_3}
                </p>
              </div>
            </div>
          </Col>
        </Row>
      </Container>
      <img className="background-image-left" src={colorSharp} />
    </section>
  );
};
