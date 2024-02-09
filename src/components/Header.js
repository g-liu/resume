import React from 'react';
import {LastModifiedDate} from './helpers';

const Header = (props) => {
	const {data} = props;

	if (!data) { return null; }

	const {name, byline} = data;

	return (
		<header>
			<LastModifiedDate />
			<h1>{name}</h1>
			<h2>{byline}</h2>
		</header>
	);
}

export default Header;