function contactUri(id, type) {
  switch (type.toUpperCase()) {
    case 'GITHUB':
      return `https://github.com/${id}`;
      break;
    case 'LINKEDIN':
      return `https://linkedin.com/in/${id}`;
      break;
    case 'FACEBOOK':
      return `https://facebook.com/${id}`;
      break;
    case 'TWITTER':
      return `https://twitter.com/${id}`;
      break;
    case 'WEBSITE':
      return `https://${id}`;
      break;
    case 'EMAIL':
      return `mailto:${id}`;
      break;
    default:
      return id;
      break;
  }
}

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

class ContactItem extends SideListItem {
  constructor(props) {
    super(props);
    this.state.type = props.type;
  }

  render() {
    const uri = contactUri(this.state.name, this.state.type);
    const icon = contactIcon(this.state.type);

    return (<li>
        <a href={uri} target="_BLANK">
          {this.state.name}
        </a>
        <span className={icon}></span>
      </li>
    );
  }
}