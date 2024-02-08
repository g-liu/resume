import React from 'react';
import {LastModifiedDate} from './helpers';

const Header = (props) => {
	const {name, byline} = props;

	return (
		<header>
			<LastModifiedDate />
			<h1>{name}</h1>
			<h2>{byline}</h2>
		</header>
	);
}

export default Header;