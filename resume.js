'use strict';

const e = React.createElement;

class App extends React.Component {
  constructor(props) {
    super(props);

    this.state = { data: null };
  }

  componentDidMount() {
    fetch('./resume_data.json', {cache: "no-store"})
      .then(results => {
        return results.json();
      }).then(data => {
        this.setState({data: data});
      });
  }

  render() {
    const topData = this.state.data;
    if (!topData) { return null; }

    return [
      <Contacts items={this.state.data.meta.contacts} key="contacts" />,
      <ProgrammingLanguages items={this.state.data.programming_languages} key="plangs" />,
      <Courseworks items={this.state.data.coursework} key="courseworks" />,
      <Projects projects={this.state.data.projects} key="projects" />
    ];
  }
}

ReactDOM.render(<App />, document.getElementById("main"));
