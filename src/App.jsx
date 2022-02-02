import AboutMe from "./components/AboutMe/AboutMe";
import Contact from "./components/Contact/Contact";
import Projects from "./components/Projects/Projects";
import Skills from "./components/Skills/Skills";
import Title from "./components/Title/Title";

function App() {
  return (
    <div className="container">
      <div className="cover shadow-lg bg-white">
        <div className="cover-bg p-3 p-lg-4 text-white">
          <Title />
        </div>
        <div className="about-section pt-4 px-3 px-lg-4 mt-1">
          <AboutMe />
        </div>
        <hr className="d-print-none" />
        <div className="skills-section px-3 px-lg-4">
          <Skills />
        </div>
        <hr className="d-print-none" />
        <div class="work-experience-section px-3 px-lg-4">
          <Projects />
        </div>
        <hr class="d-print-none" />
        <div class="contant-section px-3 px-lg-4 pb-4" id="contact">
          <Contact
            email="javid.izadi1384@gmail.com"
            phone="+989031556890"
            sendMailLink="https://formspree.io/f/xzbyqvgn"
          />
        </div>
      </div>
    </div>
  );
}

export default App;
