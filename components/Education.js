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

/* makes fancy the "OF" and "AND" words of a proper noun */
function fancifyNoun(noun) {
	return noun.split(' ').map((token, index, tokens) => {
		const isLastToken = index === tokens.length - 1;
		if (token.toUpperCase() === 'OF' || token.toUpperCase() === 'AND') {
			return [<span key="heuoatohuheo" className="sm-caps">{token}</span>, !isLastToken ? ' ' : ''];
		}

		return token + (!isLastToken ? ' ' : '');
	});
}

const Education = (props) => {
	const {startDate, endDate, degrees, institution, locationCity, achievements, description} = props;

	const degreesEarned = degrees.join('; ');
	const displayYears = displayDate(startDate, endDate, false);
	const fancyInstitutionName = fancifyNoun(institution);

	return [<tr key="eeh">
				<td className="years" rowSpan="3">{displayYears}</td>
				<td className="job-title"><h4>{degreesEarned}</h4></td>
			</tr>,
			<tr key="eeh2">
				<td className="employer" colSpan="2">{fancyInstitutionName}, <span className="location">{locationCity}</span></td>
			</tr>,
			<tr key="eeh3">
				<td className="job-description" colSpan="2">
					{achievements && achievements.length > 0 ?
						<ul className="bulleted">
							{achievements.map((achievement, index) => {
								return <li key={index}>{achievement}</li>
							})}
						</ul>
					 : null}
				</td>
			</tr>];
}