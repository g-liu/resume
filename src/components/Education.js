import React from 'react';
import {displayDate, fancifyNoun} from './helpers';

const Education = (props) => {
	const {startDate, endDate, degrees, institution, locationCity, description, achievements} = props;

	const achievementsList = achievements.items;

	const displayYears = displayDate(startDate, endDate, false);
	const fancyInstitutionName = fancifyNoun(institution);

	return <tr>
				<td className="years" rowSpan="3">{displayYears}</td>
				<td className="job-details">
					<h4>{degrees}</h4>
					<span className="company-name">{fancyInstitutionName}</span>, <span className="location">{locationCity}</span>

					{description && <p className="description">{description}</p>}

					{achievementsList && achievementsList.length > 0 ?
						<ul className="bulleted achievements">
							{achievementsList.map((achievement, index) => {
								return <Achievement key={index} data={achievement} />
							})}
						</ul>
					 : null}
				</td>
			</tr>;
}

const Achievement = (props) => {
	const {data} = props;

	if (!data) return null;

	const {title, year} = data;

	if (!title) return null;

	return (<li>
			<span>{title}</span>
			{year && <>,&nbsp;<span className="year">{year}</span></>}
		</li>);
}

export default Education;