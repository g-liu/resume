import React from 'react';
import Project from './Project';

const Projects = (props) => {
	const {projects} = props;

	if (!projects || projects.length === 0) {
      return null;
    }
    
    return [<h3 key="title">Projects</h3>,
	    projects.map((project, index) => {
	      return <Project key={index} title={project.title} inProgress={project.is_in_progress} description={project.description} />;
	    })];
}

export default Projects;