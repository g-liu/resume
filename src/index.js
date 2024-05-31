import React from 'react';
import ReactDOM from 'react-dom';
import Header from './components/Header'
import SideList from './components/SideList'
import Contacts from './components/Contacts'
import Experiences from './components/Experiences'
import Educations from './components/Educations'
import Projects from './components/Projects'
import Plug from './components/Plug'
import 'normalize.css/normalize.css';
import './style.scss';
import resumeData from './resume_data/data';

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
  if (!resumeData || !resumeData.meta) { return <p id="start-warning">Edit the file <code>src/resume_data.js</code> to get started!</p>; }

  return (<div id="main">
      <Header data={resumeData.meta} />
      <div id="left">
        <Contacts listId="contacts" data={resumeData.meta.contacts} />
        <SideList listId="skills" data={resumeData.skills} />
        <SideList listId="languages" data={resumeData.languages} />
        <SideList listId="interests" data={resumeData.interests} />

      </div>
      <div id="right">
        <Experiences experiences={resumeData.experiences} />
        <Educations educations={resumeData.education} />
        <Projects projects={resumeData.projects} />
      </div>
    </div>);
}

const CoverLetter = (props) => {
  return (<div id="main">
      <Header data={resumeData.meta} />
      <div id="letter-content">
        
      </div>
      </div>)
}

ReactDOM.render(<App />, document.getElementById("resume-container"));
