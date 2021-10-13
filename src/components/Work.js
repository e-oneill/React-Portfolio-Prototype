import {React, Component} from "react";
import {
  CardDeck,
  Button,
  ButtonToolbar,
  ButtonGroup,
  InputGroup,
  FormControl
} from "react-bootstrap";
import ProjectCard from "./ProjectCard";
import { projectList } from "./projectlist";

const workList = projectList;
function compare(a, b) {
  if (a.ProjectTitle < b.ProjectTitle) {
    return -1;
  }
  if (a.ProjectTitle > b.ProjectTitle) {
    return 1;
  }
  return 0;
}

workList.sort(compare);
class Work extends Component {
  constructor(props)
  {
    super(props);
    this.state = {tech: "", search: ""};
    this.filterProjectsbyTech = this.filterProjectsbyTech.bind(this);
    this.handleTechPress = this.handleTechPress.bind(this);
    this.filterProjectsBySearch = this.filterProjectsBySearch.bind(this);
    this.handleSearchChange = this.handleSearchChange.bind(this);
  }

  handleTechPress(event)
  {
    this.setState({tech: event.target.value})
  }

  handleSearchChange(event)
  {
    this.setState({search: event.target.value})
  }

  filterProjectsbyTech(tech) {
    return function (project) {
      if (tech !== "" || tech.length > 0)
      {
        return project.ProjectTechs.includes(tech);
      }
      else
      {
        return project.ProjectTitle !== "";
      }
    };
  }

  filterProjectsBySearch(search){
    return function (project) {
      if (search !== "" || search.length > 0)
      {
        return project.ProjectTitle.toLowerCase().includes(search.toLowerCase());
      }
      else
      {
        return project.ProjectTitle !== "";
      }
    };
  }
  render() {
  

  return (
    <div className="work-container">
      <div className="row">
      <h1>My projects</h1>
      </div>
      <div className="row">
      <ButtonToolbar>
        <ButtonGroup className="me-2 d-flex flex-wrap">
          {/* <Button className="work-button" variant="outline-success" onClick={this.handleTechPress} value="HTML">HTML</Button> */}
          <Button className="work-button" variant="outline-success" onClick={this.handleTechPress} value="Javascript">JavaScript</Button>
          <Button className="work-button" variant="outline-success" onClick={this.handleTechPress} value="CSS">CSS</Button>
          <Button className="work-button" variant="outline-success" onClick={this.handleTechPress} value="React">React</Button>
        </ButtonGroup>
        <ButtonGroup className="me-2">
          <Button className="work-button" variant="outline-success" onClick={this.handleTechPress} value="PHP">PHP</Button>
          <Button className="work-button" variant="outline-success" onClick={this.handleTechPress} value="SQL">SQL</Button>
        </ButtonGroup>
        <ButtonGroup className="me-2">
          <Button className="work-button" variant="outline-success" onClick={this.handleTechPress} value="Java">Java</Button>
        </ButtonGroup>
        <ButtonGroup className="me-2">
          <Button className="work-button" variant="outline-success" onClick={this.handleTechPress} value="">Show All</Button>
        </ButtonGroup>
        <InputGroup className="work-search">
          <InputGroup.Text className="work-search-text" id="workSearch">Search</InputGroup.Text>
          <FormControl
            className="work-search-bar"
            type="text"
            placeholder="Enter Project Name"
            aria-label="Search Group"
            aria-describedby="workSearch"
            onChange={this.handleSearchChange}
          />
        </InputGroup>
      </ButtonToolbar>
      </div>
      <CardDeck>
        {workList.filter(this.filterProjectsbyTech(this.state.tech)).filter(this.filterProjectsBySearch(this.state.search)).map((proj) => {
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
          );
        })}
      </CardDeck>
    </div>
  );
};
}
export default Work;
