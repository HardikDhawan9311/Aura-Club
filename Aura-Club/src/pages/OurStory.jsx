import React from "react";
import jewelryImage from "../assets/image1.png"; // First section image
import logo from "../assets/logo.png";          // Logo image
import aboutImage from "../assets/image1.png";  // About Us image
import Footer from "../layout/Footer";
import Navbar from "../layout/Navbar";

const OurStory = () => {
  return (
    <>
      <Navbar />
      
      <div className="w-full">
        {/* -------------------- OUR STORY Section -------------------- */}
        <section className="w-full min-h-screen bg-[#d6a98c] flex flex-col md:flex-row items-center justify-between px-6 md:px-20 py-12 font-serif">
          <div className="md:w-1/2 w-full flex flex-col items-start justify-center space-y-6 text-black">
            <div className="mb-4">
              <img src={logo} alt="Auraa Club Logo" className="w-24 h-24" />
              <h1 className="text-2xl font-semibold tracking-widest mt-4">THE AURAA CLUB</h1>
            </div>

            <h2 className="text-4xl md:text-5xl font-bold leading-snug font-serif italic">
              A fusion of<br />
              your aura &<br />
              your style
            </h2>

            <p className="text-md font-medium">
              Celebrate with ease – tangle-free,<br />
              damage-free, worry-free.
            </p>
          </div>

          <div className="md:w-1/2 w-full mt-10 md:mt-0 flex items-center justify-center">
            <img
              src={jewelryImage}
              alt="Jewelry display"
              className="w-full max-w-md rounded-md shadow-xl"
            />
          </div>
        </section>

        {/* -------------------- ABOUT US Section -------------------- */}
        <section className="w-full min-h-screen bg-white px-6 md:px-20 py-16 font-sans text-[#333]">
          <div className="flex flex-col md:flex-row items-start justify-between gap-10">
            <div className="md:w-1/2 w-full">
              <h2 className="text-4xl font-semibold mb-6">About Us</h2>
              <img
                src={aboutImage}
                alt="About Jewelry"
                className="rounded-md shadow-lg w-full max-w-md"
              />
            </div>

            <div className="md:w-1/2 w-full text-justify text-[16px] leading-relaxed">
  <p className="mb-4">
    <span className="font-medium text-lg">Welcome to The Auraa Club! ✨</span> We're so thrilled you're here.
  </p>
  <p className="mb-4">
    At The Auraa Club, we believe your jewelry should be as unique and sparkling as you are!
    We know how important it is to find those perfect pieces that truly match your style and make you feel absolutely radiant.
    That's why we meticulously curate a collection of jewellery that not only adorns you but also genuinely reflects your personality
    and enhances your inner glow. We believe every piece you wear should be a little whisper of who you are,
    a tiny spark that boosts your confidence and lets your true self shine through.
  </p>
  <p className="mb-4">
    We started The Auraa Club because we wanted to create a space where everyone could discover jewelry that feels like it was made just for them.
    Forget one-size-fits-all – we're all about celebrating individuality and helping you find the pieces that resonate with your one-of-a-kind aura.
    Our dream is to make finding your perfect match an exciting and joyful adventure!
  </p>
  <p>
    So go ahead, explore our collections, and let's find the jewelry that tells your beautiful story!
  </p>
</div>

          </div>
        </section>
        
        <Footer />
      </div>
    </>
  );
};

export default OurStory;
