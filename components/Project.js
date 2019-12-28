const Project = (props) => {
  const {title, inProgress, description} = props;

  return <section className="project">
    <h4>{title}</h4>
    <p>{inProgress ? <span className="in-progress">(In progress)</span> : ''} {description}</p>
  </section>;
}
