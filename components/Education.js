class Education extends React.Component {
	constructor(props) {
		super(props);
		this.state = {startDate: props.startDate,
			endDate: props.endDate,
			degrees: props.degrees,
			institution: props.institution,
			locationCity: props.locationCity,
			achievements: props.achievements,
			description: props.description};
	}

	render() {
		const degreesEarned = this.state.degrees.join('; ');

		return [<tr key="eeh">
					<td className="years" rowSpan="3"><span className="months">Jun-Aug</span> 2015</td>
					<td className="job-title"><h4>{degreesEarned}</h4></td>
				</tr>,
				<tr key="eeh2">
					<td className="employer" colSpan="2">{this.state.institution}, {this.state.locationCity}</td>
				</tr>,
				<tr key="eeh3">
					<td className="job-description" colSpan="2">
						{this.state.achievements && this.state.achievements.length > 0 ?
							<ul className="bulleted">
								{this.state.achievements.map((achievement, index) => {
									return <li key={index}>{achievement}</li>
								})}
							</ul>
						 : null}
					</td>
				</tr>];
	}
}