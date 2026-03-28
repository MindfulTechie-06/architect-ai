export const Footer = () => {
  return (
    <footer className="bg-[#0e0e0e] w-full border-t-4 border-white flex flex-col md:flex-row justify-between items-center px-6 md:px-12 py-10 md:py-16 gap-8 text-center md:text-left">
      <div className="flex flex-col gap-4 items-center md:items-start">
        <div className="text-2xl md:text-lg font-black md:font-bold text-white font-headline uppercase tracking-tighter">
          ARCHITECT
        </div>
        <p className="font-headline font-medium uppercase text-[10px] md:text-[12px] tracking-widest text-white/50 max-w-xs md:max-w-none">
          ©2024 ARCHITECT AI. ALL RIGHTS RESERVED. NO SOFTNESS.
        </p>
      </div>
      <div className="flex flex-wrap justify-center gap-6 md:gap-12 w-full md:w-auto mt-4 md:mt-0">
        <a className="font-headline font-medium uppercase text-[12px] tracking-widest text-white/50 hover:text-white transition-colors" href="#">
          TERMINAL
        </a>
        <a className="font-headline font-medium uppercase text-[12px] tracking-widest text-white/50 hover:text-white transition-colors underline decoration-[#f3ffca]" href="#">
          LOGS
        </a>
        <a className="font-headline font-medium uppercase text-[12px] tracking-widest text-white/50 hover:text-white transition-colors" href="#">
          ENCRYPT
        </a>
        <a className="font-headline font-medium uppercase text-[12px] tracking-widest text-white/50 hover:text-white transition-colors" href="#">
          STATUS
        </a>
      </div>
    </footer>
  );
};
