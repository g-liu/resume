import React from 'react';
import SideListItem from './SideListItem';
import 'font-awesome/css/font-awesome.min.css';

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
    case 'YOUTUBE':
      return 'fa fa-youtube-play';
    case 'FLICKR':
      return 'fa fa-flickr';
    case 'BEHANCE':
      return 'fa fa-behance-square';
    case 'DRIBBBLE':
      return 'fa fa-dribbble';
    case 'INSTAGRAM':
      return 'fa fa-instagram';
    case 'CODEPEN':
      return 'fa fa-codepen';
    case 'DEVIANTART':
      return 'fa fa-deviantart';
    case 'FACEBOOK':
      return 'fa fa-facebook-square';
    case 'SKYPE':
      return 'fa fa-skype';
    case 'PHONE':
      return 'fa fa-phone';
    case 'ODNOKLASSNIKI':
      return 'fa fa-odnoklassniki-square';
    case 'PINTEREST':
      return 'fa fa-pinterest-square';
    case 'REDDIT':
      return 'fa fa-reddit';
    case 'VIMEO':
      return 'fa fa-vimeo-square';
    case 'WHATSAPP':
      return 'fa fa-whatsapp';
    case 'SOUNDCLOUD':
      return 'fa fa-soundcloud';
    case 'ADDRESS':
      return 'fa fa-home';
    default:
      return null;
  }
}

class ContactItem extends SideListItem {
  render() {
    const icon = contactIcon(this.state.data.type);
    const url = this.state.data.url;
    const prefix = this.state.data.prefix;
    const displayName = this.state.data.display_name;

    if (!displayName) return null;

    return (<li>
        {prefix ? `${prefix}:\u00A0` : ""}
        {url ? <a href={url} target="_BLANK" rel="noopener noreferrer">{displayName}</a> : displayName}
        {icon ? <>&nbsp;<span className={icon}></span></> : ''}
      </li>
    );
  }
}

export default ContactItem;