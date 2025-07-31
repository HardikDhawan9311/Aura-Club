export default function AboutSection() {
  return (
    <section className="w-full bg-[#f8f5f0] py-16 px-6 md:px-12 lg:px-24 flex flex-col md:flex-row items-center justify-center">
      {/* Left Column - Heading */}
      <div className="md:w-1/2 w-full text-center md:text-left mb-8 md:mb-0 md:pr-12">
        <h2 className="text-5xl md:text-6xl font-extrabold font-cinzel text-[#5c3a2d]">
          Where Elegance <br /> Meets Everyday
        </h2>
      </div>

      {/* Right Column - Paragraph */}
      <div className="md:w-1/2 w-full text-center md:text-left">
        <p className="text-[#5c3a2d] text-lg leading-relaxed max-w-lg md:max-w-none mx-auto">
          At The Auraa Club, we believe jewellery isn't just an accessory – it's
          an extension of your personality. Our carefully curated collection of
          bracelets, rings, pendants, and earrings is designed for those who
          crave timeless elegance, modern style, and everyday durability.
        </p>
      </div>
    </section>
  );
}
