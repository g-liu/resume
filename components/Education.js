class Education extends React.Component {
	constructor(props) {
		super(props);
		this.state = {startDate: props.startDate,
			endDate: props.endDate,
			degrees: props.degrees,
			institution: props.institution,
			loctaionCity: props.loctaionCity,
			achievements: props.achievements,
			description: props.description};
	}

	render() {
		return [<tr key="eeh">
					<td className="years" rowSpan="3"><span className="months">Jun-Aug</span> 2015</td>
					<td className="job-title"><h4>{this.state.degrees[0].title}</h4></td>
				</tr>,
				<tr key="eeh2">
					<td className="employer" colSpan="2">{this.state.institution}</td>
				</tr>,
				<tr key="eeh3">
					<td className="job-description" colSpan="2">
						<p>{this.state.achievements[0]}</p>
					</td>
				</tr>];
	}
}