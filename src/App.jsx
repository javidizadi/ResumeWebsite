import AboutMe from "./components/AboutMe/AboutMe";
import Contact from "./components/Contact/Contact";
import Projects from "./components/Projects/Projects";
import Skills from "./components/Skills/Skills";
import Title from "./components/Title/Title";

function App() {
  let name = "Javid izadi";
  let email = "javid.izadi1384@gmail.com";
  let phone = "+989031556890";
  return (
    <div className="container">
      <div className="cover shadow-lg bg-white">
        <div className="cover-bg p-3 p-lg-4 text-white">
          <Title name={name} position="Full Stack Developer"/>
        </div>
        <div className="about-section pt-4 px-3 px-lg-4 mt-1">
          <AboutMe
            aboutMe="Living in Isfahan.I start Learning Flutter and also still Learning about .Net and Linux. Interested in teamwork."
            email={email}
            phone={phone}
          />
        </div>
        <hr className="d-print-none" />
        <div className="skills-section px-3 px-lg-4">
          <Skills />
        </div>
        <hr className="d-print-none" />
        <div className="work-experience-section px-3 px-lg-4">
          <Projects />
        </div>
        <hr className="d-print-none" />
        <div className="contant-section px-3 px-lg-4 pb-4" id="contact">
          <Contact
            email={email}
            phone={phone}
            sendMailLink="https://formspree.io/f/xzbyqvgn"
          />
        </div>
      </div>
    </div>
  );
}

export default App;
