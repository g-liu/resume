import React from 'react';

const Header = (props) => {
	const {name, byline} = props;

	return (
		<header>
			<h1>{name}</h1>
			<h2>{byline}</h2>
		</header>
	);
}

export default Header;