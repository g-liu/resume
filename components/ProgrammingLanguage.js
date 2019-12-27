class ProgrammingLanguage extends React.Component {
  constructor(props) {
    super(props);
    this.state = { name: props.name };
  }

  render() {
    return (<li>{this.state.name}</li>);
  }
}