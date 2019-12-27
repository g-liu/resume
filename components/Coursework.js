class Coursework extends React.Component {
  constructor(props) {
    super(props);
    this.state = { title: props.title };
  }

  render() {
    return (<li>{this.state.title}</li>);
  }
}