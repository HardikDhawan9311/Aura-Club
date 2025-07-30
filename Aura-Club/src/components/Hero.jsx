import heroImg from '../assets/image1.png';
import logo from '../assets/logo.png';


export default function Hero() {
  return (
    <section className="w-full min-h-screen bg-[#cfae97] flex flex-col md:flex-row items-center justify-center">
      {/* Left - Image */}
      <div className="md:w-1/2 w-full flex items-center justify-start pl-0 md:pl-8">
  <img
    src={heroImg}
    alt="Jewelry Hero"
    className="w-[750px] h-[550px] object-cover rounded -mt-10 ml-0 md:-ml-28 animate-breathe"
  />
</div>


      {/* Right - Text */}
      <div className="md:w-1/2 w-full flex flex-col justify-center items-center text-center p-6">
        <div className="text-[#5c3a2d]">
         <img
            src={logo}
            alt="Auraa Club Logo"
            className="w-[350px] h-[300px] mb-4 mx-auto"
        />


        <h1 className="text-4xl md:text-6xl font-extrabold mb-3 font-cinzel">
             THE AURAA CLUB
        </h1>

        <p className="font-bold text-base tracking-wide mb-6 font-cinzel">
        A FUSION OF YOUR AURA & YOUR STYLE
        </p>

          <button className="border-2 border-[#5c3a2d] px-16 py-3 text-[#5c3a2d] font-bold text-lg leading-tight tracking-wide uppercase font-cinzel
  transition duration-300 ease-in-out transform hover:scale-105 hover:-translate-y-1 hover:bg-[#5c3a2d] hover:text-white">
  SHOP<br />NOW
</button>


        </div>
      </div>
    </section>
  );
}
