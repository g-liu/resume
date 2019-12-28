class Contacts extends SideList {
	constructor(props) {
		super(props);

		this.state.id = "about";
		this.state.title = "Contact info";
	}

	render() {
		if (!this.state.items || this.state.items.length == 0) { return null; }
		return (
			<aside id="about">
				<h3>{this.state.title}</h3>
				<p><em>Contact details<br />available upon request</em></p>

				<ul>
					{this.state.items.map((item, index) => {
						return <ContactItem name={item.id} type={item.type} key={index} />
					})}
				</ul>
			</aside>
		);
	}
}