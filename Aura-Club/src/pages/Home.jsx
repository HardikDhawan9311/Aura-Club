import Navbar from "../layout/Navbar";
import Hero from "../components/Hero";
import AboutSection from "../components/AboutSection";

export default function Home() {
  return (
    <div className="w-full bg-[#cfae97]">
      {/* <Navbar /> */}
      <Hero />
      <AboutSection />
    </div>
  );
}
