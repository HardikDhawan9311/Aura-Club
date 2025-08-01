import Navbar from "../layout/Navbar";
import Hero from "../components/Hero";
import AboutSection from "../components/AboutSection";
import Footer from "../layout/Footer";

export default function Home() {
  return (
    <div className="w-full bg-[#cfae97]">
      <Navbar />
      <Hero />
      <AboutSection />
      <Footer/>
    </div>
  );
}
