import React from 'react';
import moment from 'moment';
import {ArrayToList, linkify} from './helpers'

const Project = (props) => {
  const {title, isHidden, endDate, description, url, technologies} = props;

  if (isHidden) return null;

  const endDateMoment = moment(endDate, 'YYYY-MM-DD');
  const inProgress = endDate == null || (moment() < endDateMoment);

  if (!title) return null;

  return (<article className="project">
    <h4>{linkify(title, url)}</h4>
    <ArrayToList className="technologies" items={technologies} />
    <p className="description">{inProgress ? <span className="in-progress">(In progress)</span> : ''} {description}</p>
  </article>);
}

export default Project;