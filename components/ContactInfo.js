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