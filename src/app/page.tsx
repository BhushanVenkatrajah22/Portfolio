import Hero from "@/components/hero";
import About from "@/components/about";
import Skills from "@/components/skills";
import Projects from "@/components/projects";
import Experience from "@/components/experience";
import Education from "@/components/education";
import Research from "@/components/research";
import Achievements from "@/components/achievements";
import Certifications from "@/components/certifications";
import Resume from "@/components/resume";
import Contact from "@/components/contact";
import AdditionalInfo from "@/components/additional-info";

export default function Home() {
  return (
    <div className="flex flex-col w-full">
      {/* Hero Section */}
      <Hero />

      {/* About Section */}
      <About />

      {/* Skills Section */}
      <Skills />

      {/* Projects Section */}
      <Projects />

      {/* Experience Section */}
      <Experience />

      {/* Education Section */}
      <Education />

      {/* Research & Publications Section */}
      <Research />

      {/* Achievements Section */}
      <Achievements />

      {/* Certifications Section */}
      <Certifications />

      {/* Additional Details Section */}
      <AdditionalInfo />

      {/* Resume Section */}
      <Resume />

      {/* Contact Section */}
      <Contact />
    </div>
  );
}
