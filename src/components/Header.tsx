export const Header = () => {
  return (
    <nav className="fixed top-0 w-full z-50 bg-[#0e0e0e]/80 backdrop-blur-md flex justify-between items-center px-8 py-6">
      <div className="text-2xl font-black tracking-tighter text-white font-headline uppercase">
        ARCHITECT
      </div>
      <div className="hidden md:flex gap-12 items-center">
        <a className="font-['Space_Grotesk'] font-extrabold uppercase tracking-tighter text-white/70 hover:text-[#f3ffca] transition-none" href="#">
          PROTOCOL
        </a>
        <a className="font-['Space_Grotesk'] font-extrabold uppercase tracking-tighter text-white/70 hover:text-[#f3ffca] transition-none" href="#">
          SYSTEMS
        </a>
        <a className="font-['Space_Grotesk'] font-extrabold uppercase tracking-tighter text-white/70 hover:text-[#f3ffca] transition-none" href="#">
          SERVICES
        </a>
        <a className="font-['Space_Grotesk'] font-extrabold uppercase tracking-tighter text-white/70 hover:text-[#f3ffca] transition-none" href="#">
          PRICING
        </a>
      </div>
      <button className="bg-primary-container text-on-primary-container px-6 py-2 font-headline font-extrabold uppercase tracking-tighter active:scale-95 transition-transform">
        INITIALIZE
      </button>
    </nav>
  );
};
