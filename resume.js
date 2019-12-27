'use strict';

const e = React.createElement;

var ContactType = {
  GITHUB: 1,
  LINKEDIN: 2,
  FACEBOOK: 3,
  EMAIL: 4,
  TWITTER: 5,
  WEBSITE: 6,
  properties: {
    1: {icon: "fa-github-alt"},
    2: {icon: ""},
    3: {icon: "fa-facebook"},
    4: {icon: "fa-envelope-o"},
    5: {icon: "fa-twitter"},
    6: {icon: "fa-globe"},
  }
}

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
      <ProgrammingLanguages languages={this.state.data.programming_languages} key="plangs"/>,
      <Courseworks courses={this.state.data.coursework} key="courseworks" />,
      <Projects projects={this.state.data.projects} key="projects" />
    ];
  }
}

ReactDOM.render(<App />, document.getElementById("resume_container"));
