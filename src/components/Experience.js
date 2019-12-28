import React from 'react';
import {displayDate, fancifyNoun} from './helpers';

const Experience = (props) => {
	const {startDate, endDate, title, company, companyUrl, location, description} = props;
	const displayYears = displayDate(startDate, endDate);
	const fancyCompanyName = fancifyNoun(company);

	return [<tr key="heh">
				<td className="years" rowSpan="3">{displayYears}</td>
				<td className="job-title"><h4>{title}</h4></td>
			</tr>,
			<tr key="heh2">
				<td className="employer" colSpan="2">
					<a href={companyUrl}>{fancyCompanyName}</a>,&nbsp;
					<span className="location">{location}</span>
				</td>
			</tr>,
			<tr key="heh3">
				<td className="job-description" colSpan="2">
					<p>{description}</p>
				</td>
			</tr>];
}

export default Experience;