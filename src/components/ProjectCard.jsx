import { Col } from "react-bootstrap"

export const ProjectCard = ({title, description, imgURL, projectURL}) => {
  return (
    <Col>
      <a href={projectURL}>
        <div className="proj-imgbx" onMouseOver={() => console.log('hovered')}>
          <img src={imgURL}/>
          <div className="proj-txtx">
            <h4>{title}</h4>
            <span>{description}</span>
          </div>
        </div>
      </a>
    </Col>
  )
}