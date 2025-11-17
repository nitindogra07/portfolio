import { FaBehance, FaDribbble, FaLinkedinIn, FaInstagram } from "react-icons/fa";

export default function Socials() {
  return (
    <div className="min-h-[30vw] bg-[#111111] flex items-center justify-center px-[2vw] pb-[5vw] max-sm:pb-[20vw] font-sans">
      <div className="flex flex-col md:flex-row gap-[7vw] w-full max-w-5xl">
        <div className="flex flex-col justify-center items-center bg-[#1a1a1a] rounded-[3vw] max-sm:rounded-[10vw] flex-1 py-12 px-8 text-center shadow-lg">
          <p className="text-white text-sm tracking-widest mb-4">EMAIL ME</p>
          <p className="text-white text-[4vw] max-sm:text-[6vw] md:text-3xl font-light underline decoration-gray-500 underline-offset-4">
            dogranitin579@gmail.com
          </p>
        </div>

        {/* Social Links Card */}
        <div className="flex flex-col justify-center items-center bg-[#1a1a1a] rounded-[3vw] max-sm:rounded-[10vw] flex-1 py-12 px-8 text-center shadow-lg">
          <p className="text-white text-sm tracking-widest mb-6">FIND ME</p>
          <div className="flex gap-5">
            <a href="#" className="bg-[#7AE444] p-4 rounded-full hover:scale-110 transition-transform">
              <FaBehance className="text-black text-xl" />
            </a>
            <a href="#" className="bg-[#7AE444] p-4 rounded-full hover:scale-110 transition-transform">
              <FaDribbble className="text-black text-xl" />
            </a>
            <a href="#" className="bg-[#7AE444] p-4 rounded-full hover:scale-110 transition-transform">
              <FaLinkedinIn className="text-black text-xl" />
            </a>
            <a href="#" className="bg-[#7AE444] p-4 rounded-full hover:scale-110 transition-transform">
              <FaInstagram className="text-black text-xl" />
            </a>
          </div>
        </div>

      </div>
    </div>
  );
}
