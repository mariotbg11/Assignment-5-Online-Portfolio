import Hero from "./components/Hero";
import Navbar from "./components/Navbar";
import Project from "./pages/Project";
import AboutMe from "./pages/AboutMe";
import AwardCertification from "./pages/AwardCertification";
import Experience from "./pages/Experience";
import Interest from "./pages/Interest";
import Skills from "./pages/Skills";
import Footer from "./components/Footer";

function App() {
  return (
    <>
      <Navbar />
      {/* <Hero /> */}
      {/* <AboutMe /> */}
      {/* <Experience /> */}
      {/* <Skills /> */}
      {/* <Interest /> */}
      {/* <AwardCertification /> */}
      <Project />
      <Footer />
    </>
  );
}

export default App;
