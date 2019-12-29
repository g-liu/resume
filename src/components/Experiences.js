import React from 'react';
import Experience from './Experience';

const Experiences = (props) => {
	const {items} = props;
	
	if (!items || items.length === 0) { return null; }

	return <section id="experiences">
			<h3>Work experience</h3>

			<table cellSpacing="0">
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
							displayShort={item.display_short}
							key={index} />
					})}
				</tbody>
			</table>
		</section>;
}

export default Experiences;