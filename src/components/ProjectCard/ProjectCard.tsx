import './ProjectCard.css';
import React from 'react';
interface ProjectCardsProps {
    projectImage: string;
    name: string;
    description: string;
    githubUrl:string;

  }
const ProjectCard: React.FC<ProjectCardsProps> = ({ projectImage, name, description, githubUrl }) =>{    
    return (
        <div className='project_container'>
            <img src= {projectImage} className='project_photo'>
            </img>
            <p className='project_name'>{name}</p>
            <center><p className='project_description'>{description}</p></center>
            <a href= {githubUrl} className='project_action_button'>See Repo</a>
        </div>
    );
}

export default ProjectCard;