import React from 'react';
import Project from './Project';

const Projects = (props) => {
	const {projects} = props;

	if (!projects) { return null; }

	const {items, heading, display_short} = projects

	if (!items || items.length === 0) {
      return null;
    }
    
    return <section id="projects" className={display_short ? "short" : "long"}>
	    	<h3 key="title">{heading}</h3>

	    	<>
			    {items.map((project, index) => {
			      return <Project key={index} isHidden={project.is_hidden} title={project.title} url={project.project_url} startDate={project.start_date} endDate={project.end_date} description={project.description} technologies={project.technologies} />;
			    })}
		    </>
	  	</section>;
}

export default Projects;