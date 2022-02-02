import Skill from "./Skill";

const Skills = () => {
  return (
    <div>
      <h2 className="h3 mb-3">Professional Skills</h2>
      <div className="row">
        <div className="col-md-6">
          <div className="mb-2">
            <Skill skillName="C#" percent="90%" isGreen={false} />
          </div>
          <div className="mb-2">
            <Skill skillName="Asp .Net Core" percent="50%" isGreen={false} />
          </div>
          <div className="mb-2">
            <Skill skillName="Asp .Net Web API" percent="70%" isGreen={false} />
          </div>
          <div className="mb-2">
            <Skill skillName=".Net MAUI" percent="30%" isGreen={false} />
          </div>
          <div className="mb-2">
            <Skill skillName="Xamarin Forms" percent="60%" isGreen={false} />
          </div>
          <div className="mb-2">
            <Skill skillName="WPF" percent="60%" isGreen={false} />
          </div>
        </div>

        <div className="col-md-6">
          <div className="mb-2">
            <Skill skillName="HTML & CSS" percent="70%" isGreen={true} />
          </div>
          <div className="mb-2">
            <Skill skillName="Python" percent="80%" isGreen={true} />
          </div>
          <div className="mb-2">
            <Skill skillName="C" percent="60%" isGreen={true} />
          </div>
          <div className="mb-2">
            <Skill skillName="Git" percent="30%" isGreen={true} />
          </div>
          <div className="mb-2">
            <Skill skillName="Linux" percent="30%" isGreen={true} />
          </div>
        </div>
      </div>
    </div>
  );
};
export default Skills;
