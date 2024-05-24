import { Col, Container, Row } from "react-bootstrap";
import { ArrowRightCircle } from "react-bootstrap-icons";
import headerImg1 from "../assets/img/accounting-man.svg";
import headerImg2 from "../assets/img/programmer-man.svg";
import { useState, useEffect } from "react";

export const Banner = () => {
  const [loopNum, setLoopNum] = useState(0);
  const [isDeleting, setIsDeleting] = useState(false);
  const toRotate = [
    "Web Developer",
    "Web Designer",
    "Chartered Professional Accountant"
  ];
  const [text, setText] = useState("");
  const period = 800; //*set duration to wait between each phrase
  const [delta, setDelta] = useState(100); //*duration value used between each letter animation

  useEffect(() => {
    let ticker = setInterval(() => {
      tick();
    }, delta);

    return () => {
      clearInterval(ticker);
    };
  }, [text]);

  const tick = () => {
    let i = loopNum % toRotate.length;
    let fullText = toRotate[i];
    let updatedText = isDeleting
      ? fullText.substring(0, text.length - 1)
      : fullText.substring(0, text.length + 1);

    setText(updatedText);

    if (isDeleting) {
      setDelta(50);
    }

    if (!isDeleting && updatedText === fullText) {
      setIsDeleting(true);
      setDelta(period);
    } else if (isDeleting && updatedText === "") {
      setIsDeleting(false);
      setLoopNum(loopNum + 1);
      setDelta(100);
    }
  };

  return (
    <section className="banner" id="home">
      <Container>
        <Row className="align-items-center">
          <Col xs={12} md={6} xl={7}>
            <span className="tagline">Welcome to my Portfolio</span>
            <h1>
              {`Hi! I'm Jeffrey`}
              <br />a <span className="wrap">{text}</span>
            </h1>
            <p>
              I'm an aspiring <b>developer</b> transitioning from an{" "}
              <b>accounting and finance</b> background with a Chartered Professional
              Accountant (CPA) designation in Ontario, Canada. 
            </p>
            <button
              onClick={() => {
                const section = document.getElementById("connect");
                if (section) {
                  section.scrollIntoView({ behavior: "smooth" });
                }
              }}
            >
              Let's Connect <ArrowRightCircle size={25} />
            </button>
          </Col>
          <Col xs={12} md={6} xl={5}>
            <div className="img-container">
              <img src={headerImg2} alt="Header Image" className="pic" id='pic2'/>
              <img src={headerImg1} alt="Header Image" className="pic" id="pic1"/>
            </div>
          </Col>
        </Row>
      </Container>
    </section>
  );
};
