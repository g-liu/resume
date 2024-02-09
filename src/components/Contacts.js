import React from 'react';
import SideList from './SideList';
import ContactItem from './ContactItem';

class Contacts extends SideList {
	render() {
		if (!this.state.items || this.state.items.length === 0) { return null; }
		return (
			<aside id="about">
				<h3>{this.state.title}</h3>
				<p><em>Additional contact details<br />available upon request</em></p>

				<ul>
					{this.state.items.map((item, index) => {
						return <ContactItem name={item.id} type={item.type} key={index} />
					})}
				</ul>
			</aside>
		);
	}
}

export default Contacts;