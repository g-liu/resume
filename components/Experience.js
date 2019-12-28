class Experience extends React.Component {
	constructor(props) {
		super(props);
		this.state = {startDate: props.startDate,
			endDate: props.endDate,
			title: props.title,
			company: props.company,
			companyUrl: props.companyUrl,
			location: props.location,
			description: props.description};
	}

	render() {
		return [<tr key="heh">
					<td className="years" rowSpan="3"><span className="months">Jun-Aug</span> 2015</td>
					<td className="job-title"><h4>{this.state.title}</h4></td>
				</tr>,
				<tr key="heh2">
					<td className="employer" colSpan="2"><a href={this.state.companyUrl}>{this.state.company}</a></td>
				</tr>,
				<tr key="heh3">
					<td className="job-description" colSpan="2">
						<p>{this.state.description}</p>
					</td>
				</tr>];
	}
}