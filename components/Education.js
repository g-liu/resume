/* startDateString, endDateString are in YYYY-MM-DD format */
function displayDate(startDateString, endDateString, collapseCenturies=true) {
	const startDate = moment(startDateString, 'YYYY-MM-DD');

	if (endDateString == null) {
		return (
			<span>since<br /><span className="months">{startDate.format('MMM')}</span> {startDate.format('YYYY')}</span>
		);
	}

	const endDate = moment(endDateString, 'YYYY-MM-DD');

	if (startDate.isSame(endDate, 'year')) {
		return (
			<span><span className="months">{startDate.format('MMM')}-{endDate.format('MMM')}</span> {startDate.format('YYYY')}</span>
		);
	}

	if (collapseCenturies) {
		return (
			<span>{startDate.format('YYYY')}-{endDate.format('YY')}</span>
		)
	}

	return (
		<span>{startDate.format('YYYY')} <span className="sm-caps" style={{position: 'relative', top: '-1px'}}>to</span> {endDate.format('YYYY')}</span>
	);
}

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
		const displayYears = displayDate(this.state.startDate, this.state.endDate, false);

		return [<tr key="eeh">
					<td className="years" rowSpan="3">{displayYears}</td>
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