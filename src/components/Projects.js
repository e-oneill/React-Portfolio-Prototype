import React from "react";
import ProjectCards from "./ProjectCards";
import { Container } from "react-bootstrap";

const Projects = () => {
  return (
    <div className="projects_container">
        <h1>Top Projects</h1>
        <ProjectCards />
    </div>
  );
};

export default Projects;
