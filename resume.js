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
      <div id="left" key="left">
        <Contacts items={this.state.data.meta.contacts} key="contacts" />
        <SideList listId="programming" title="Programming" items={this.state.data.programming_languages} />
        <SideList listId="coursework" title="Coursework" items={this.state.data.coursework} />
        <SideList listId="languages" title="Languages" items={this.state.data.languages} />
        <SideList listId="interests" title="Interests" items={this.state.data.interests} />
      </div>,
      <div id="right" key="right">
        <Experiences items={this.state.data.experiences} />
        <Educations items={this.state.data.education} />
        <Projects projects={this.state.data.projects} />
      </div>
    ];
  }
}

ReactDOM.render(<App />, document.getElementById("main"));
