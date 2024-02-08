import React from 'react';
import moment from 'moment';

function ArrayToList({className, items}) {
	if (!items || items.length === 0) {
		return null;
	}

	return (
		<ul className={className}>
			{items.map((item, index) => (
				<li key={index}>{item}</li>
			))}
		</ul>);
}

/* startDateString, endDateString are in YYYY-MM-DD format */
function displayDate(startDateString, endDateString, displayShort=false, collapseCenturies=true) {
	const startDate = moment(startDateString, 'YYYY-MM-DD');

	if (endDateString == null) {
		return (
			<span><span className="date-modifier">since</span><br /><span className="months">{startDate.format('MMM')}</span> {startDate.format('YYYY')}</span>
		);
	}

	const endDate = moment(endDateString, 'YYYY-MM-DD');

	if (startDate.isSame(endDate, 'year')) {
		if (displayShort) {
			// only display year, no months
			return (
				<span>{startDate.format('YYYY')}</span>
			);
		}
		return (
			<span><span className="months">{startDate.format('MMM')}-{endDate.format('MMM')}</span> {startDate.format('YYYY')}</span>
		);
	}

	const isSameCentury = areDatesInSameCentury(startDate, endDate);

	if (isSameCentury && collapseCenturies) {
		return (
			<span>{startDate.format('YYYY')}-{endDate.format('YY')}</span>
		)
	}

	return (
		<span>{startDate.format('YYYY')} <span className="sm-caps" style={{position: 'relative', top: '-1px'}}>to</span> {endDate.format('YYYY')}</span>
	);
}

// Function to check if two moment dates are in the same century
function areDatesInSameCentury(date1, date2) {
  // Get the century of each date
  const century1 = Math.ceil(date1.year() / 100);
  const century2 = Math.ceil(date2.year() / 100);

  // Check if the centuries are equal
  return century1 === century2;
}

class LastModifiedDate extends React.Component {
  render() {
    const formattedDate = moment().format('MMM. YYYY');

    return (
      <div className="last-modified">Last updated {formattedDate}</div>
    );
  }
}

/* makes fancy the "OF" and "AND" words of a proper noun, also any mention of remote, to be greyed */
function fancifyNoun(noun) {
	if (noun === null || noun.length === 0) { return noun; }

	return noun.split(' ').map((token, index, tokens) => {
		const isLastToken = index === tokens.length - 1;
		if (token.toUpperCase() === 'OF' || token.toUpperCase() === 'AND') {
			return [<span key="heuoatohuheo" className="sm-caps">{token}</span>, !isLastToken ? ' ' : ''];
		} else if (token.toUpperCase().includes('REMOTE')) {
			return [<span key="whatever123" className="sm">{token}</span>];
		}

		return token + (!isLastToken ? ' ' : '');
	});
}

/* Wraps the given string in a url, or returns the string verbatim if url is empty or null */
function linkify(word, url) {
	if (!url || url.length === 0) { return word; }

	return <a href={url}>{word}</a>
}

export {ArrayToList, displayDate, fancifyNoun, LastModifiedDate, linkify};