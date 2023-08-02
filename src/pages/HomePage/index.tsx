import Navbar from "../../components/Navbar"
import AboutSection from "../../parts/HomePage/AboutSection"
import HeroSection from "../../parts/HomePage/HeroSection"

function HomePage() {
  return (
    <div className=" bg-bgBlack">
     <Navbar />
     <HeroSection />
     <AboutSection />
    </div>
  )
}

export default HomePage