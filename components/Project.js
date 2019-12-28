class Project extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      title: props.title,
      inProgress: props.inProgress,
      description: props.description
    }
  }

  render() {
    return (<section className="project">
      <h4>{this.state.title}</h4>
      <p>{this.state.inProgress ? <span className="in-progress">(In progress)</span> : ''} {this.state.description}</p>
    </section>);
  }
}
