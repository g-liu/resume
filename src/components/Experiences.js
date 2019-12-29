import React from 'react';
import Experience from './Experience';

const Experiences = (props) => {
	const {items} = props;
	
	if (!items || items.length === 0) { return null; }

	return [
		<h3 key="weh">Work experience</h3>,

		<table key="wet">
			<thead></thead>
			<tbody>
				{items.map((item, index) => {
					return <Experience
						startDate={item.date_start}
						endDate={item.date_end}
						title={item.title}
						company={item.company}
						companyUrl={item.company_url}
						location={item.location}
						description={item.description}
						key={index} />
				})}
			</tbody>
			<tfoot></tfoot>
		</table>
	];
}

export default Experiences;