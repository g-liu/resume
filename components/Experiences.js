class Experiences extends React.Component {
	constructor(props) {
		super(props);
		this.state = {items: props.items};
	}

	render() {
		if (!this.state.items || this.state.items.length == 0) { return null; }

		return [
			<h3 key="weh">Work Experience</h3>,

			<table key="wet">
				<thead></thead>
				<tbody>
					{this.state.items.map((item, index) => {
						return <Experience
							startDate={item.date_start}
							endDate={item.date_end}
							title={item.title}
							company={item.company}
							company_url={item.company_url}
							location={item.location}
							description={item.description}
							key={index} />
					})}
				</tbody>
				<tfoot></tfoot>
			</table>
		]
	}
}