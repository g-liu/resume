import React from 'react';

const Project = (props) => {
  const {title, inProgress, description} = props;

  return <article className="project">
    <h4>{title}</h4>
    <p>{inProgress ? <span className="in-progress">(In progress)</span> : ''} {description}</p>
  </article>;
}

export default Project;