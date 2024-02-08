import React from 'react';
import Education from './Education';

const Educations = (props) => {
	const {educations} = props;

	const {items, title} = educations;
	
	if (!items || items.length === 0) { return null; }

	return <section id="education">
			<h3>{title}</h3>

			<table cellSpacing="0">
				<tbody>
					{items.map((item, index) => {
						return <Education
							startDate={item.date_start}
							endDate={item.date_end}
							degrees={item.degrees}
							institution={item.institution}
							locationCity={item.location_city}
							achievements={item.achievements}
							key={index} />
					})}
				</tbody>
			</table>
		</section>;
}

export default Educations;