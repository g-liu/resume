import React from 'react';

const Plug = (props) => {
	const {content} = props;

	if (!content || content.length === 0) { return null; }

	return (
		<section id="plug">
			<p>{content}</p>
		</section>
	);
}

export default Plug;