import React from 'react';
import SideListItem from './SideListItem';

function contactIcon(type) {
  switch (type.toUpperCase()) {
    case 'GITHUB':
      return 'fa fa-github-alt';
    case 'WEBSITE':
      return 'fa fa-globe';
    case 'TWITTER':
      return 'fa fa-twitter';
    case 'EMAIL':
      return 'fa fa-envelope-o';
    case 'LINKEDIN':
      return 'fa fa-linkedin';
    default:
      return null;
  }
}

function displayName(name, type) {
  switch (type.toUpperCase()) {
    case 'TWITTER':
      return <span>
          Twitter: <a href={`https://twitter.com/${name}`}>@{name}</a>
        </span>;
    case 'LINKEDIN':
      return <span>
          LinkedIn: <a href={`https://linkedin.com/in/${name}`}>/{name}</a>
        </span>;
    case 'WEBSITE':
      return <a href={`https://${name}`}>https://{name}</a>;
    case 'GITHUB':
      return <span>
          GitHub: <a href={`https://github.com/${name}`}>{name}</a>
        </span>;
    case 'EMAIL':
      return <a href={`mailto:${name}`}>{name}</a>;
    default:
      return name;
  }
}

class ContactItem extends SideListItem {
  constructor(props) {
    super(props);
    this.state.type = props.type;
  }

  render() {
    const icon = contactIcon(this.state.type);
    const name = displayName(this.state.name, this.state.type);

    return (<li>
        {name}
        {'\u00A0'}
        <span className={icon}></span>
      </li>
    );
  }
}

export default ContactItem;