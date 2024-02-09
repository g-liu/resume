import React from 'react';
import SideList from './SideList';
import ContactItem from './ContactItem';

class Contacts extends SideList {
	constructor(props) {
		super(props);
		this.state.itemComponent = ContactItem;
	}

	ListHeader = () => {
		return (<p><em>Additional contact details<br />available upon request</em></p>);
	}
}

export default Contacts;