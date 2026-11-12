import Starfield from "./components/Starfield";
import CustomCursor from "./components/CustomCursor";
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import About from "./components/About";
import TechStack from "./components/TechStack";
import Projects from "./components/Projects";
import EducationExperience from "./components/EducationExperience";
import Contact from "./components/Contact";
import Footer from "./components/Footer";

export default function App() {
  return (
    <div className="relative min-h-screen bg-[#090611] text-[#F5F3FF] selection:bg-[#8B5CF6]/30 selection:text-[#C4B5FD] overflow-hidden">
      {/* Background Cosmic Starfield Canvas */}
      <Starfield />

      {/* Futuristic Desktop Cursor */}
      <CustomCursor />

      {/* Navigation */}
      <Navbar />

      {/* Main Content Sections */}
      <main className="relative z-10 flex flex-col">
        <Hero />
        <About />
        <TechStack />
        <Projects />
        <EducationExperience />
        <Contact />
      </main>

      {/* Footer */}
      <Footer />
    </div>
  );
}
