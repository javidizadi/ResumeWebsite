const Project = ({ projectName, owner, date, description }) => {
  return (
    <div className="timeline-card timeline-card-primary card shadow-sm">
      <div className="card-body">
        <div className="h5 mb-1">
          {projectName}
          <span className="text-muted h6"> {owner}</span>
        </div>
        <div className="text-muted text-small mb-2">{date}</div>
        <div>{description}</div>
      </div>
    </div>
  );
};
export default Project;
