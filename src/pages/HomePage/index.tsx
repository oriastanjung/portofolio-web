import Footer from "../../components/Footer";
import Navbar from "../../components/Navbar";
import AboutSection from "../../parts/HomePage/AboutSection";
import AchievementsSection from "../../parts/HomePage/AchievementsSection";
import ContactSection from "../../parts/HomePage/ContactSection";
import ExperienceSection from "../../parts/HomePage/ExperienceSection";
import HeroSection from "../../parts/HomePage/HeroSection";
import PortofolioSection from "../../parts/HomePage/PortofolioSection";
import ProjectsSection from "../../parts/HomePage/ProjectsSection";
import TechStacksSection from "../../parts/HomePage/TechStacksSection";

function HomePage() {
  return (
    <div className=" bg-bgBlack">
      <Navbar />
      <main>
        <HeroSection />
        <AboutSection />
        <TechStacksSection />
        <ExperienceSection />
        <PortofolioSection />
        <ProjectsSection />
        <AchievementsSection />
        <ContactSection />
      </main>
      <Footer/>
    </div>
  );
}

export default HomePage;
