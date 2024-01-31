import React from 'react';
import Project from './Project';

const Projects = (props) => {
	const {projects} = props;

	if (!projects || projects.length === 0) {
      return null;
    }
    
    return <section id="projects">
	    	<h3 key="title">Projects</h3>

	    	<div>
			    {projects.map((project, index) => {
			      return <Project key={index} title={project.title} isShown={project.is_shown} inProgress={project.is_in_progress} description={project.description} />;
			    })}
		    </div>
	  	</section>;
}

export default Projects;