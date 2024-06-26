import { Nav, Container, Navbar } from "react-bootstrap";
import { useState, useEffect } from "react";
import logo from "../assets/img/logo.png";
import navIcon1 from "../assets/img/nav-icon1.svg";
import navIcon2 from "../assets/img/github-mark-white.svg";
import navIcon3 from "../assets/img/nav-icon3.svg";
import { ToastMessage } from "./ToastMessage";

export const NavBar = ({ status, setStatus }) => {
  const [activeLink, setActiveLink] = useState("home");
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => {
      if (window.scrollY > 50) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    };

    window.addEventListener("scroll", onScroll);

    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const onUpdateActiveLink = (value) => {
    setActiveLink(value);
  };

  return (
    <Navbar expand="lg" className={scrolled ? "scrolled" : ""}>
      <Container>
        <Navbar.Brand href="#home">
          <img className="logo" src={logo} alt="Logo" />
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav">
          <span className="navbar-toggler-icon"></span>
        </Navbar.Toggle>
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="me-auto">
            <Nav.Link
              href="#home"
              className={
                activeLink === "home" ? "active navbar-link" : "navbar-link"
              }
              onClick={() => onUpdateActiveLink("home")}
            >
              Home
            </Nav.Link>
            <Nav.Link
              href="#about me"
              className={
                activeLink === "about me" ? "active navbar-link" : "navbar-link"
              }
              onClick={() => onUpdateActiveLink("about me")}
            >
              About Me
            </Nav.Link>
            <Nav.Link
              href="#projects"
              className={
                activeLink === "projects" ? "active navbar-link" : "navbar-link"
              }
              onClick={() => onUpdateActiveLink("projects")}
            >
              Projects
            </Nav.Link>
          </Nav>
          <div className="navbar-text">
            <div className="social-icon">
              <a href="https://www.linkedin.com/in/jchu2/">
                <img src={navIcon1} alt="" />
              </a>
              <a href="https://github.com/JeffreyChuCPA">
                <img src={navIcon2} alt="" />
              </a>
              <a href="https://www.instagram.com/chuchu.pdf/">
                <img src={navIcon3} alt="" />
              </a>
            </div>
            <button
              className="vvd"
              onClick={() => {
                const section = document.getElementById("connect");
                if (section) {
                  section.scrollIntoView({ behavior: "smooth" });
                }
              }}
            >
              <span>Let's Connect</span>
            </button>
          </div>
        </Navbar.Collapse>
      </Container>
      {status.message && <ToastMessage message={status.message} setStatus={setStatus} />}
    </Navbar>
  );
};
