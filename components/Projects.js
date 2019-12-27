class Projects extends React.Component {
	constructor(props) {
		super(props);

		this.state = { projects: props.projects };
	}

	render() {
		if (!this.state.projects || this.state.projects.length == 0) {
	      return null;
	    }
	    return [<h3 key="title">Projects</h3>,
        this.state.projects.map((project, index) => {
	      return <Project key={index} title={project.title} description={project.description} />;
	    })];
	}
}