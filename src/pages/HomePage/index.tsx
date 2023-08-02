import Navbar from "../../components/Navbar"
import AboutSection from "../../parts/HomePage/AboutSection"
import HeroSection from "../../parts/HomePage/HeroSection"
import TechStacksSection from "../../parts/HomePage/TechStacksSection"

function HomePage() {
  return (
    <div className=" bg-bgBlack">
     <Navbar />
     <HeroSection />
     <AboutSection />
     <TechStacksSection />
    </div>
  )
}

export default HomePage