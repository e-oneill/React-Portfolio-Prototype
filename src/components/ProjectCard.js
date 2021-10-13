import React from 'react'
import {Card, Button, ListGroup, ListGroupItem} from 'react-bootstrap'
import {faDatabase} from '@fortawesome/free-solid-svg-icons'
import {faHtml5, faCss3, faJsSquare, faPhp, faReact, faYoutube, faJava } from '@fortawesome/free-brands-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

const ProjectCard = ({ProjectImg, ProjectTitle, ProjectDesc, ProjectURL, ProjectGit, ProjectTechs, ProjectDesigns}) => {
    const techs = {ProjectTechs};
    const hasDesigns = false;
    
    return (
        
        <div className="card_container">
                <Card>
                    <Card.Img className="card-image" variant="top" src={`img/${ProjectImg}`} />
                    <Card.Body>
                    <Card.Title><h3>{ProjectTitle}</h3></Card.Title>
                    <Card.Text>
                        {ProjectDesc}
                    </Card.Text>
                    </Card.Body>
                    <ListGroup className="list-group-flush">
                            {ProjectTechs.map((tech, index)  => {
                                if (tech === 'HTML') {
                                    return (
                                        <ListGroupItem><small className="text-muted"> 
                                        <FontAwesomeIcon icon={faHtml5} /> {tech}
                                        </small></ListGroupItem>
                                    );
                                }
                                if (tech === 'CSS') {
                                    return (
                                        <ListGroupItem><small className="text-muted"> 
                                        <FontAwesomeIcon icon={faCss3} /> {tech}
                                        </small></ListGroupItem>
                                    );
                                }
                                if (tech === 'Javascript') {
                                    return (
                                        <ListGroupItem><small className="text-muted"> 
                                        <FontAwesomeIcon icon={faJsSquare} /> {tech}
                                        </small></ListGroupItem>
                                    );
                                }
                                if (tech === 'SQL' || tech == 'MongoDB') {
                                    return (
                                        <ListGroupItem><small className="text-muted"> 
                                        <FontAwesomeIcon icon={faDatabase} /> {tech}
                                        </small></ListGroupItem>
                                    );
                                }
                                if (tech === 'PHP') {
                                    return (
                                        <ListGroupItem><small className="text-muted"> 
                                        <FontAwesomeIcon icon={faPhp} /> {tech}
                                        </small></ListGroupItem>
                                    );
                                }
                                if (tech === 'React'){
                                    return (
                                        <ListGroupItem><small className="text-muted"> 
                                        <FontAwesomeIcon icon={faReact} /> {tech}
                                        </small></ListGroupItem>
                                    );
                                }
                                if (tech === 'Youtube API'){
                                    return (
                                        <ListGroupItem><small className="text-muted"> 
                                        <FontAwesomeIcon icon={faYoutube} /> {tech}
                                        </small></ListGroupItem>
                                    );
                                }
                                if (tech === 'Java'){
                                    return (
                                        <ListGroupItem><small className="text-muted"> 
                                        <FontAwesomeIcon icon={faJava} /> {tech}
                                        </small></ListGroupItem>
                                    );
                                }
                            })}
                        </ListGroup>
                    <Card.Footer>
                    <div className="card_btns_container">
                    <Button variant="success" size="sm" className="card-btn" href={ProjectURL} target="_blank">Website</Button>
                    <Button variant="outline-success" size="sm" className="card-btn" href={ProjectGit} target="_blank">Code</Button>
                    {ProjectDesigns.length > 0 &&
                    <Button variant="dark" size="sm" className="card-btn" href={ProjectDesigns} target="_blank">Designs</Button>
                    }
                    </div>
                    </Card.Footer>
                </Card>
        </div>
    )
}

{/* <ListGroupItem><small className="text-muted"><FontAwesomeIcon icon={faHtml5} /> HTML</small></ListGroupItem>
<ListGroupItem><small className="text-muted"><FontAwesomeIcon icon={faCss3} /> CSS</small></ListGroupItem>
<ListGroupItem><small className="text-muted"><FontAwesomeIcon icon={faJsSquare} /> Javascript</small></ListGroupItem>
<ListGroupItem><small className="text-muted"><FontAwesomeIcon icon={faDatabase} /> SQL</small></ListGroupItem>
<ListGroupItem><small className="text-muted"><FontAwesomeIcon icon={faPhp} /> PHP</small></ListGroupItem> */}

ProjectCard.defaultProps = {
    ProjectImg: 'retainers-preview.jpg',
    ProjectTitle: 'Retainers and Warfare',
    ProjectDesc: 'A database-driven website for running Dungeons and Dragons Characters as well as creating and managing retainers and armies.',
    ProjectURL:"https://retainers.monkehh.com",
    ProjectGit:"https://github.com/e-oneill/Warfare-and-Retainers",
    ProjectDesigns:"https://www.figma.com/file/wZMED6nyX2FWqsvBUaEZWP/Retainers-and-Warfare",
    ProjectTechs:[
        'HTML','CSS','JS'
        ]
}

export default ProjectCard
