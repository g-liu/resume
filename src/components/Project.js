import React from 'react';
import moment from 'moment';
import {ArrayToList} from './helpers'

const Project = (props) => {
  const {title, startDate, endDate, displayShort, description, technologies} = props;

  const endDateMoment = moment(endDate, 'YYYY-MM-DD');
  const inProgress = endDate == null || (moment() < endDateMoment);

  if (!title) return null;

  return (<article className="project">
    <h4>{title}</h4>
    <p>{inProgress ? <span className="in-progress">(In progress)</span> : ''} {description}</p>
    {displayShort ? <ArrayToList items={technologies} /> : ''}
  </article>);
}

export default Project;