import Project from "./Project";

const Projects = () => {
  return (
    <div>
      <h2 className="h3 mb-4">Projects</h2>
      <div className="timeline">
        <Project
          projectName="Smart Home"
          owner="for Kharazmi Festival"
          date="Feb, 2021 - Sep, 2021"
          description="It was a simple IoT project using Adafruit IO, ESP8266 and a
              cross-platform application written in C# and Xamarin forms
              framework. I simultaneously learned the Xamarin forms and
              developed the Mobile app."
        />
        <Project
          projectName="Adafruit IO Platform MQTT Client"
          owner="Open Source Project"
          date="Jul, 2021 - Now"
          description={[
            "Simple MQTT library for connecting to Adafruit IO written in .Net Standard Framework.",
            <br />,
            "Available on My ",
            <a href="https://github.com/javidizadi/Adafruit.MQTT.Client">
              GitHub
            </a>,
          ]}
        />
      </div>
    </div>
  );
};
export default Projects;
