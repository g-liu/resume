import React from 'react';
import {displayDate, fancifyNoun} from './helpers';

const Education = (props) => {
	const {startDate, endDate, degrees, institution, locationCity, achievements} = props;

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

export default Education;