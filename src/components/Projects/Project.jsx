const Project = ({ projectName, owner, date, description }) => {
  return (
    <div class="timeline-card timeline-card-primary card shadow-sm">
      <div class="card-body">
        <div class="h5 mb-1">
          {projectName}
          <span class="text-muted h6"> {owner}</span>
        </div>
        <div class="text-muted text-small mb-2">{date}</div>
        <div>{description}</div>
      </div>
    </div>
  );
};
export default Project;
