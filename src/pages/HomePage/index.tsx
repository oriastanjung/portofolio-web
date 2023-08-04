import Navbar from "../../components/Navbar"
import AboutSection from "../../parts/HomePage/AboutSection"
import ExperienceSection from "../../parts/HomePage/ExperienceSection"
import HeroSection from "../../parts/HomePage/HeroSection"
import PortofolioSection from "../../parts/HomePage/PortofolioSection"
import ProjectsSection from "../../parts/HomePage/ProjectsSection"
import TechStacksSection from "../../parts/HomePage/TechStacksSection"

function HomePage() {
  return (
    <div className=" bg-bgBlack">
     <Navbar />
     <HeroSection />
     <AboutSection />
     <TechStacksSection />
     <ExperienceSection />
     <PortofolioSection />
     <ProjectsSection />
    </div>
  )
}

export default HomePage