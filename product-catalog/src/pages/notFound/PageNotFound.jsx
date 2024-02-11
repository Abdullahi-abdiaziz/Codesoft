import React from "react";
import { Link } from "react-router-dom";
import Home from "../home/Home";

const PageNotFound = () => {
  return (
    <main
      style={{
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        flexDirection: "column",
      }}
    >
      <h1>PageNotFound 404</h1>
      <Link to="/">
        <button
          style={{
            padding: ".25rem 1.5rem",
            border: "2px solid var(--color2)",
            alignSelf: "start",
          }}
        >
          Back to home
        </button>
      </Link>
    </main>
  );
};
export default PageNotFound;
