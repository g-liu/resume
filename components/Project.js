class Project extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      title: props.title,
      description: props.description
    }
  }

  render() {
    return (<section className="project">
      <h4>{this.state.title}</h4>
      <p>{this.state.description}</p>
    </section>);
  }
}
