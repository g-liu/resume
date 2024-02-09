import SideList from './SideList';
import ContactItem from './ContactItem';

class Contacts extends SideList {
	constructor(props) {
		super(props);
		this.state.itemComponent = ContactItem;
	}
}

export default Contacts;