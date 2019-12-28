import React from 'react';
import ReactDOM from 'react-dom';
import Header from './components/Header'
import SideList from './components/SideList'
import Contacts from './components/Contacts'
import Experiences from './components/Experiences'
import Educations from './components/Educations'
import Projects from './components/Projects'
import 'normalize.css/normalize.css';
import './style.scss';
import resumeData from './resume_data';

const App = (props) => {
  if (!resumeData) { return null; }

  return [
    <Header name={resumeData.meta.name} byline={resumeData.meta.byline} key="header" />,
    <div id="main" key="main">
      <div id="left">
        <Contacts items={resumeData.meta.contacts} />
        <SideList listId="skills" title="Skills" items={resumeData.skills} />
        <SideList listId="coursework" title="Coursework" items={resumeData.coursework} />
        <SideList listId="languages" title="Languages" items={resumeData.languages} />
        <SideList listId="interests" title="Interests" items={resumeData.interests} />
      </div>
      <div id="right">
        <Experiences items={resumeData.experiences} />
        <Educations items={resumeData.education} />
        <Projects projects={resumeData.projects} />
      </div>
    </div>
  ];
}

ReactDOM.render(<App />, document.getElementById("resume-container"));
