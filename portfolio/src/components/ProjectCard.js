import { Col } from "react-bootstrap";

export const ProjectCard = ({ title, description, imgUrl, webLink }) => {

  console.log(webLink)
  return (
    <Col size={12} sm={6} md={4}>
      <div className="proj-imgbx">
        <img src={imgUrl} />
        <div className="proj-txtx">
          <h4>{title}</h4>
          <span>{description}</span>
          <br></br>
          <button type="submit"><a href={webLink}>Demo</a></button>
        </div>
      </div>
    </Col>
  )
}
