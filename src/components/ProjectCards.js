import React from "react";
import { CardDeck } from "react-bootstrap";
import ProjectCard from "./ProjectCard";
import {projectList} from './projectlist';
const ProjectCards = () => {
  function filterTopProjects()
  {
    return function (project) {
      return project.TopProject === true;
    }
  }
  var projectTechs = ["HTML", "CSS", "PHP"];
  return (
    <CardDeck>
      {
        projectList.filter(filterTopProjects()).map((proj)=> {
        return (
          <ProjectCard
            ProjectImg={proj.ProjectImg}
            ProjectTitle={proj.ProjectTitle}
            ProjectDesc={proj.ProjectDesc}
            ProjectURL={proj.ProjectURL}
            ProjectGit={proj.ProjectGit}
            ProjectDesigns={proj.ProjectDesigns}
            ProjectTechs={proj.ProjectTechs}
            />
        )
        })
      }
    </CardDeck>
  );
};

export default ProjectCards;
