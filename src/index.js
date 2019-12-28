import React from 'react';
import ReactDOM from 'react-dom';
import Header from './components/Header'
import SideList from './components/SideList'
import Contacts from './components/Contacts'
import Experiences from './components/Experiences'
import Educations from './components/Educations'
import Projects from './components/Projects'
import './normalize.css';
import './newstyle.css';
import resumeData from './resume_data';

class App extends React.Component {
  constructor(props) {
    super(props);

    this.state = { data: resumeData };
  }

  render() {
    const topData = this.state.data;
    if (!topData) { return null; }

    return [
      <Header name={this.state.data.meta.name} byline={this.state.data.meta.byline} key="header" />,
      <div id="main" key="main">
        <div id="left">
          <Contacts items={this.state.data.meta.contacts} />
          <SideList listId="skills" title="Skills" items={this.state.data.skills} />
          <SideList listId="coursework" title="Coursework" items={this.state.data.coursework} />
          <SideList listId="languages" title="Languages" items={this.state.data.languages} />
          <SideList listId="interests" title="Interests" items={this.state.data.interests} />
        </div>
        <div id="right">
          <Experiences items={this.state.data.experiences} />
          <Educations items={this.state.data.education} />
          <Projects projects={this.state.data.projects} />
        </div>
      </div>
    ];
  }
}

ReactDOM.render(<App />, document.getElementById("resume-container"));
