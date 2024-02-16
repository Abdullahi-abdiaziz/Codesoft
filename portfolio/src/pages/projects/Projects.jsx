import React, { useState } from "react";
import Card from "./ProjectCard";
import data from "./data";
import "./projects.css";

const Projects = () => {
  const [active, setActive] = useState("all");
  const filteredArray = data.slice(0, 6);
  const [array, setArray] = useState(filteredArray);
  const [allArray, setAllArray] = useState(data);

  const handleClick = (buttonCategory) => {
    setActive(buttonCategory);

    const newArray = data.filter((item) => {
      return item.category === buttonCategory;
    });

    setArray(newArray);
  };

  return (
    <main id="projects" className="flex">
      <section className="project-filter flex">
        <button
          onClick={() => {
            setActive("all");
            const newArray = data.filter((item) => {
              return (
                item.category === "javascript" || "react" || "tailwind" || "css"
              );
            });

            setArray(newArray);
          }}
          className={active === "all" ? "active" : null}
        >
          All Projects
        </button>
        <button
          onClick={() => {
            handleClick("css");
          }}
          className={active === "css" ? "active" : null}
        >
          HTML & CSS
        </button>
        <button
          onClick={() => {
            handleClick("javascript");
          }}
          className={active === "javascript" ? "active" : null}
        >
          JavaScript
        </button>
        <button
          onClick={() => {
            handleClick("react");
          }}
          className={active === "react" ? "active" : null}
        >
          React
        </button>
        <button
          onClick={() => {
            handleClick("tailwind");
          }}
          className={active === "tailwind" ? "active" : null}
        >
          Tailwind
        </button>
      </section>
      <section className="projects flex">
        {array.map((item) => {
          return <Card key={item.id} item={item} />;
        })}
      </section>
    </main>
  );
};

export default Projects;
