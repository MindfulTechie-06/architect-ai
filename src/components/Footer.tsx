export const Footer = () => {
  return (
    <footer className="bg-[#0e0e0e] w-full border-t-4 border-white flex flex-col md:flex-row justify-between items-center px-12 py-16 gap-8">
      <div className="flex flex-col gap-4 items-center md:items-start">
        <div className="text-lg font-bold text-white font-headline uppercase tracking-tighter">
          ARCHITECT
        </div>
        <p className="font-headline font-medium uppercase text-[12px] tracking-widest text-white/50">
          ©2024 ARCHITECT AI. ALL RIGHTS RESERVED. NO SOFTNESS.
        </p>
      </div>
      <div className="flex gap-12">
        <a className="font-headline font-medium uppercase text-[12px] tracking-widest text-white/50 hover:text-white transition-none" href="#">
          TERMINAL
        </a>
        <a className="font-headline font-medium uppercase text-[12px] tracking-widest text-white/50 hover:text-white transition-none underline decoration-[#f3ffca]" href="#">
          LOGS
        </a>
        <a className="font-headline font-medium uppercase text-[12px] tracking-widest text-white/50 hover:text-white transition-none" href="#">
          ENCRYPT
        </a>
        <a className="font-headline font-medium uppercase text-[12px] tracking-widest text-white/50 hover:text-white transition-none" href="#">
          STATUS
        </a>
      </div>
    </footer>
  );
};
