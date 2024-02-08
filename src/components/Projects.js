import React from 'react';
import Project from './Project';

const Projects = (props) => {
	const {projects, displayShort} = props;

	if (!projects || projects.length === 0) {
      return null;
    }
    
    return <section id="projects" className={displayShort ? "short" : "long"}>
	    	<h3 key="title">Projects</h3>

	    	<>
			    {projects.map((project, index) => {
			      return <Project key={index} isHidden={project.is_hidden} title={project.title} url={project.project_url} startDate={project.start_date} endDate={project.end_date} description={project.description} technologies={project.technologies} />;
			    })}
		    </>
	  	</section>;
}

export default Projects;