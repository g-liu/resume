import React from 'react';
import {displayDate, linkify, fancifyNoun} from './helpers';

const Experience = (props) => {
	const {startDate, endDate, title, company, companyUrl, location, description, is_shown, displayShort} = props;
	const displayYears = displayDate(startDate, endDate, displayShort);
	const fancyCompanyName = linkify(fancifyNoun(company), companyUrl);
	const fancyLocation = fancifyNoun(location);

	if (is_shown === false) return null;

	return <tr className={displayShort && "previous"}>
				<td className="years">{displayYears}</td>
				<td className="job-details">
					<h4>{title}</h4>
					<span className="company-name">{fancyCompanyName}</span>
					{fancyLocation && <>,&nbsp;</>}
					<span className="location">{fancyLocation}</span>
				
					<p className="description">{description}</p>
				</td>
			</tr>
}

export default Experience;