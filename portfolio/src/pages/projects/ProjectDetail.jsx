import React from "react";
import { useParams } from "react-router-dom";
import data from "./data";

const ProjectDetail = () => {
  const { id } = useParams();

  const project = data.find((item) => item.id === parseInt(id));

  if (!project) {
    return <div>Project not found</div>;
  }

  const {
    imgPath,
    projectTitle,
    detailedDisc,
    githubLink,
    siteLink,
    category,
  } = project;

  return (
    <div className="card detailed">
      <div className="project-img">
        <img src={`../../${imgPath}`} alt="" />
      </div>
      <div className="project-detail flex">
        <div className="info">
          <p className="title">{projectTitle}</p>
          <p className="sub-title">{detailedDisc}</p>
        </div>
        <div className={`category ${category}`}>{category}</div>
        <div className="flex">
          <div className="btn-link">
            <a href={githubLink} target="_blank">
              <span className="icon-github"></span>
              github link
            </a>
          </div>
          <div className="btn-link">
            <a href={siteLink} target="_blank">
              <span className="icon-link"></span>
              site link
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProjectDetail;
