import AboutMe from "./components/AboutMe/AboutMe";
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
      </div>
    </div>
  );
}

export default App;
