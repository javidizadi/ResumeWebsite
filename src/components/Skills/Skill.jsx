const Skill = ({ skillName, percent, isGreen }) => {
  let color = isGreen ? "bg-success" : "bg-primary";
  return (
    <div>
      <span>{skillName}</span>
      <div className="progress my-1">
        <div
          className={`progress-bar ${color} aos-init aos-animate`}
          role="progressbar"
          data-aos="zoom-in-right"
          data-aos-delay="100"
          data-aos-anchor=".skills-section"
          style={{ width: percent }}
          aria-valuenow="90"
          aria-valuemin="0"
          aria-valuemax="100"
        ></div>
      </div>
    </div>
  );
};
export default Skill;
