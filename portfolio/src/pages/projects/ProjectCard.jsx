import "./projects.css";
import { Link } from "react-router-dom";

function Card({ item }) {
  const { imgPath, projectTitle, description, siteLink, githubLink, id } = item;
  return (
    <div className="card">
      <img width={250} height={150} src={imgPath} alt="" />
      <div style={{ width: "250px" }} className="box">
        <h1 className="title">{projectTitle}</h1>
        <p className="subtitle">{description}</p>
        <div className="flex links">
          <div className="flex">
            <a className="icon-link" href={siteLink} target="_blank"></a>
            <a className="icon-github" href={githubLink} target="_blank"></a>
          </div>
          <Link to={`/projects/${id}`} className="link flex">
            more
            <span
              style={{ alignSelf: "end" }}
              className="icon-arrow-thin-right"
            ></span>
          </Link>
        </div>
      </div>
    </div>
  );
}

export default Card;
