function contactIcon(type) {
  switch (type.toUpperCase()) {
    case 'GITHUB':
      return 'fa fa-github-alt';
      break;
    case 'WEBSITE':
      return 'fa fa-globe';
      break;
    case 'TWITTER':
      return 'fa fa-twitter';
      break;
    case 'EMAIL':
      return 'fa fa-envelope-o';
      break;
    case 'LINKEDIN':
      return 'fa fa-linkedin';
      break;
    default:
      return null;
      break;
  }
}

function displayName(name, type) {
  switch (type.toUpperCase()) {
    case 'TWITTER':
      return <span>
          Twitter: <a href={`https://twitter.com/${name}`}>@{name}</a>
        </span>;
      break;
    case 'LINKEDIN':
      return <span>
          LinkedIn: <a href={`https://linkedin.com/in/${name}`}>/{name}</a>
        </span>;
      break;
    case 'WEBSITE':
      return <a href={`https://${name}`} target="_BLANK">https://{name}</a>;
      break;
    case 'GITHUB':
      return <span>
          GitHub: <a href={`https://github.com/${name}`}>{name}</a>
        </span>;
    case 'EMAIL':
      return <a href={`mailto:${name}`}>{name}</a>;
    default:
      return name;
      break;
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