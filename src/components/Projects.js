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
			      return <Project key={index} title={project.title} url={project.project_url} startDate={project.start_date} endDate={project.end_date} description={project.description} technologies={project.technologies} />;
			    })}
		    </div>
	  	</section>;
}

export default Projects;