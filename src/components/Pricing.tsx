export const Pricing = () => {
  return (
    <section className="py-16 md:py-32 bg-transparent">
      <div className="px-4 md:px-8 grid grid-cols-1 md:grid-cols-3 gap-8 md:gap-12">
        
        <div className="bg-white text-black p-6 md:p-8 font-headline border-b-8 border-neon-green hover:-translate-y-2 transition-transform duration-300">
          <div className="text-center border-b-2 border-black border-dashed pb-4 mb-8">
            <p className="font-black text-xl uppercase">BRUTALIST / LITE</p>
            <p className="text-xs mt-2">ID: 4423-ARCH</p>
          </div>
          <ul className="flex flex-col gap-4 mb-12">
            <li className="flex justify-between border-b border-black/10 pb-2">
              <span>1X AI AGENT</span><span>$4,999</span>
            </li>
            <li className="flex justify-between border-b border-black/10 pb-2">
              <span>BASIC AUDIT</span><span>INCL</span>
            </li>
            <li className="flex justify-between border-b border-black/10 pb-2">
              <span>7D BUILD</span><span>INCL</span>
            </li>
          </ul>
          <div className="text-right mb-8">
            <p className="text-sm font-bold uppercase">TOTAL MONTHLY</p>
            <p className="text-4xl md:text-5xl font-black mt-1">$4,999</p>
          </div>
          <button className="w-full bg-black text-white py-4 font-black uppercase hover:bg-neon-green hover:text-black transition-colors active:scale-95">
            SELECT PROTOCOL
          </button>
        </div>

        <div className="bg-neon-green text-black p-6 md:p-8 font-headline border-b-8 border-black transform md:-translate-y-8 md:scale-105 shadow-[0_0_40px_rgba(223,255,0,0.15)] relative z-10">
          <div className="text-center border-b-2 border-black border-dashed pb-4 mb-8">
            <p className="font-black text-xl md:text-2xl uppercase">ARCHITECT / PRO</p>
            <p className="text-xs font-bold mt-2">RECOMMENDED SYSTEM</p>
          </div>
          <ul className="flex flex-col gap-4 mb-12 font-bold">
            <li className="flex justify-between border-b border-black/20 pb-2">
              <span>3X AI AGENTS</span><span>$12,500</span>
            </li>
            <li className="flex justify-between border-b border-black/20 pb-2">
              <span>FULL WORKFLOW</span><span>INCL</span>
            </li>
            <li className="flex justify-between border-b border-black/20 pb-2">
              <span>CUSTOM ENGINE</span><span>INCL</span>
            </li>
            <li className="flex justify-between border-b border-black/20 pb-2">
              <span>PRIORITY OPS</span><span>INCL</span>
            </li>
          </ul>
          <div className="text-right mb-8">
            <p className="text-sm font-bold uppercase">TOTAL MONTHLY</p>
            <p className="text-5xl md:text-6xl font-black mt-1">$12,500</p>
          </div>
          <button className="w-full bg-black text-white py-4 font-black uppercase hover:bg-white hover:text-black transition-colors active:scale-95 shadow-lg">
            INITIATE SYSTEM
          </button>
        </div>

        <div className="bg-white text-black p-6 md:p-8 font-headline border-b-8 border-neon-pink hover:-translate-y-2 transition-transform duration-300 md:translate-y-0">
          <div className="text-center border-b-2 border-black border-dashed pb-4 mb-8">
            <p className="font-black text-xl uppercase">ENTERPRISE / VOID</p>
            <p className="text-xs mt-2">UNLIMITED CAPACITY</p>
          </div>
          <ul className="flex flex-col gap-4 mb-12">
            <li className="flex justify-between border-b border-black/10 pb-2">
              <span>UNLIMITED AGENTS</span><span>CALC</span>
            </li>
            <li className="flex justify-between border-b border-black/10 pb-2">
              <span>ON-PREM DEPLOY</span><span>CALC</span>
            </li>
            <li className="flex justify-between border-b border-black/10 pb-2">
              <span>24/7 GUARDING</span><span>CALC</span>
            </li>
          </ul>
          <div className="text-right mb-8">
            <p className="text-sm font-bold uppercase">TOTAL MONTHLY</p>
            <p className="text-4xl md:text-5xl font-black mt-1">QUOTE</p>
          </div>
          <button className="w-full bg-black text-white py-4 font-black uppercase hover:bg-neon-pink hover:text-black transition-colors active:scale-95">
            CONTACT ARCHITECT
          </button>
        </div>
      </div>
    </section>
  );
};
