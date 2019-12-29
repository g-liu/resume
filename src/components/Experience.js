import React from 'react';
import {displayDate, fancifyNoun} from './helpers';

const Experience = (props) => {
	const {startDate, endDate, title, company, companyUrl, location, description, displayShort} = props;
	const displayYears = displayDate(startDate, endDate);
	const fancyCompanyName = fancifyNoun(company);

	return <tr className={displayShort && "previous"}>
				<td className="years">{displayYears}</td>
				<td className="job-details">
					<h4>{title}</h4>
					<span className="company-name"><a href={companyUrl}>{fancyCompanyName}</a></span>,&nbsp;
					<span className="location">{location}</span>
				
					{!displayShort && <p>{description}</p>}
				</td>
			</tr>
}

export default Experience;