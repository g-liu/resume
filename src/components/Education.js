import React from 'react';
import {displayDate, fancifyNoun} from './helpers';

const Education = (props) => {
	const {startDate, endDate, degrees, institution, locationCity, description, achievements} = props;

	const displayYears = displayDate(startDate, endDate, false);
	const fancyInstitutionName = fancifyNoun(institution);

	return <tr>
				<td className="years" rowSpan="3">{displayYears}</td>
				<td className="job-details">
					<h4>{degrees}</h4>
					<span className="company-name">{fancyInstitutionName}</span>, <span className="location">{locationCity}</span>

					{description && <p className="description">{description}</p>}

					{achievements && achievements.length > 0 ?
						<ul className="bulleted">
							{achievements.map((achievement, index) => {
								return <li key={index}>{achievement}</li>
							})}
						</ul>
					 : null}
				</td>
			</tr>;
}

export default Education;