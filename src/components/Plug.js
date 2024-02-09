import React from 'react';

const Plug = (props) => {
	const {data} = props;

	if (!data) { return null; }

	const {content} = data;

	if (!content || content.length === 0) { return null; }

	return (
		<section id="plug">
			<p>{content}</p>
		</section>
	);
}

export default Plug;