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

import {
  BrowserRouter as Router,
  Switch,
  Route,
  // Link
} from "react-router-dom";

export default function App() {
  return (
    <Router>
      <Switch>
        <Route path="/cover-letter">
          <CoverLetter />
        </Route>
        <Route path="/">
          <Resume />
        </Route>
      </Switch>
    </Router>
    )
}

const Resume = (props) => {
  if (!resumeData) { return null; }

  return (<div id="main">
      <Header name={resumeData.meta.name} byline={resumeData.meta.byline} />
      <div id="left">
        <Contacts items={resumeData.meta.contacts} />
        <SideList listId="languages" title="Languages" items={resumeData.languages} />
        <SideList listId="skills" title="Skills" items={resumeData.skills} />
        <SideList listId="interests" title="Interests" items={resumeData.interests} />
      </div>
      <div id="right">
        <Experiences items={resumeData.experiences} />
        <Educations items={resumeData.education} />
        <Projects projects={resumeData.projects} />
      </div>
    </div>);
}

const CoverLetter = (props) => {
  return (<div id="main">
      <Header name={resumeData.meta.name} byline={resumeData.meta.byline} />
      <div id="letter-content">
        
      </div>
      </div>)
}

ReactDOM.render(<App />, document.getElementById("resume-container"));
