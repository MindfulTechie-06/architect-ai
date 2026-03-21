export const Pricing = () => {
  return (
    <section className="py-32 bg-transparent">
      <div className="px-8 grid grid-cols-1 md:grid-cols-3 gap-12">
        
        <div className="bg-white text-black p-8 font-headline border-b-8 border-neon-green">
          <div className="text-center border-b-2 border-black border-dashed pb-4 mb-8">
            <p className="font-black text-xl uppercase">BRUTALIST / LITE</p>
            <p className="text-xs">ID: 4423-ARCH</p>
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
            <p className="text-5xl font-black">$4,999</p>
          </div>
          <button className="w-full bg-black text-white py-4 font-black uppercase hover:bg-neon-green hover:text-black transition-colors">
            SELECT PROTOCOL
          </button>
        </div>

        <div className="bg-neon-green text-black p-8 font-headline border-b-8 border-black transform md:-translate-y-8 scale-105">
          <div className="text-center border-b-2 border-black border-dashed pb-4 mb-8">
            <p className="font-black text-xl uppercase">ARCHITECT / PRO</p>
            <p className="text-xs">RECOMMENDED SYSTEM</p>
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
            <p className="text-6xl font-black">$12,500</p>
          </div>
          <button className="w-full bg-black text-white py-4 font-black uppercase hover:bg-white hover:text-black transition-colors">
            INITIATE SYSTEM
          </button>
        </div>

        <div className="bg-white text-black p-8 font-headline border-b-8 border-neon-pink">
          <div className="text-center border-b-2 border-black border-dashed pb-4 mb-8">
            <p className="font-black text-xl uppercase">ENTERPRISE / VOID</p>
            <p className="text-xs">UNLIMITED CAPACITY</p>
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
            <p className="text-5xl font-black">QUOTE</p>
          </div>
          <button className="w-full bg-black text-white py-4 font-black uppercase hover:bg-neon-pink hover:text-black transition-colors">
            CONTACT ARCHITECT
          </button>
        </div>
      </div>
    </section>
  );
};
