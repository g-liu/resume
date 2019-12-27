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

class Coursework extends React.Component {
  constructor(props) {
    super(props);
    this.state = { title: props.title };
  }

  render() {
    return (<li>{this.state.title}</li>);
  }
}

class ContactInfo extends React.Component {
  constructor(props) {
    super(props);
    this.state = { contactType: props.contactType,
      contactId: props.contactId };
  }

  contactUri() {
    switch(this.state.contactType) {
      case 'GITHUB':
        return "https://github.com/${this.state.contactId}";
        break;
      case 'LINKEDIN':
        return "https://linkedin.com/in/${this.state.contactId}";
        break;
      case 'FACEBOOK':
        return "https://facebook.com/${this.state.contactId}";
        break;
      case 'TWITTER':
        return "https://twitter.com/${this.state.contactId}";
        break;
      default:
        return this.state.contactId;
        break;
    }
  }

  render() {
    return (<li>
      <a href="{contactUri()}" target="_BLANK">
        {this.state.contactId}
      </a>
      </li>
    );
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

    if (!topData) {
      return null;
    }
    return topData.projects.map((project, index) => {
      return <Project key={index} title={project.title} description={project.description} />;
    });
  }
}

ReactDOM.render(<App />, document.getElementById("resume_container"));
