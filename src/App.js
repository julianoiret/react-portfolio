import About from "./components/About";
import Banner from "./components/Banner";
import Contact from "./components/Contact";
import Education from "./components/Education";
import Experience from "./components/Experience";
import Interests from "./components/Interests";
import Projects from "./components/Projects";
import ResponsiveNav from "./components/ResponsiveNav";
import Sidebar from "./components/Sidebar";
import Skills from "./components/Skills";

function App() {

  return (
    <>
    <Sidebar></Sidebar>
    <ResponsiveNav></ResponsiveNav>
    <Banner></Banner>
    <About></About>
    <Projects></Projects>
    <Skills></Skills>
    <Education></Education>
    <Experience></Experience>
    <Interests></Interests>
    <Contact></Contact>
    </>
  );
}

export default App;
