import React from 'react';
import Education from './Education';

const Educations = (props) => {
	const {items} = props
	
	if (!items || items.length === 0) { return null; }

	return <section id="education">
			<h3>Education</h3>

			<table>
				<thead></thead>
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
				<tfoot></tfoot>
			</table>
		</section>;
}

export default Educations;