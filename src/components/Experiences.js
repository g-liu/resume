import React from 'react';
import Experience from './Experience';

const Experiences = (props) => {
	const {experiences} = props;

	const {items, title} = experiences
	
	if (!items || items.length === 0) { return null; }

	return <section id="experiences">
			<h3>{title}</h3>

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
							is_shown={item.is_shown}
							displayShort={item.display_short}
							key={index} />
					})}
				</tbody>
			</table>
		</section>;
}

export default Experiences;