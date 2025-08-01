import { FaInstagram, FaFacebook } from 'react-icons/fa';

const Footer = () => {
  return (
    <footer className="bg-[#c29e86] text-black px-6 md:px-16 py-10 font-serif">
      <div className="border-t border-black pt-8 grid grid-cols-1 md:grid-cols-2 gap-8">
        {/* Left Section */}
        <div>
          <h3 className="italic font-semibold text-lg mb-2">Stay in Touch</h3>
          <p className="italic text-base leading-relaxed">
            Follow us on Instagram for styling tips, new launches, and exclusive offers!<br />
            @_theauraaclub_
          </p>
          <div className="mt-6 flex items-center gap-2">
            <span role="img" aria-label="email">📧</span>
            <span className="italic">Subscribe for 10% off your first order!</span>
          </div>
        </div>

        {/* Right Section */}
        <div className="flex flex-col gap-4 text-sm md:text-base">
          <div>
            <strong className="block">Phone</strong>
            <p>8130643324, 9540290564</p>
          </div>
          <div>
            <strong className="block">Email</strong>
            <p>hello@theauraaclub.in</p>
          </div>
          <div>
            <strong className="block">Socials</strong>
            <div className="flex items-center gap-4 mt-1">
              <div className="flex items-center gap-1">
                <FaInstagram className="text-pink-600 text-xl" />
                <span className="text-sm">.theauraaclub_</span>
              </div>
              <div className="flex items-center gap-1">
                <FaFacebook className="text-blue-600 text-xl" />
                <span className="text-sm">THE AURAA CLUB</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
