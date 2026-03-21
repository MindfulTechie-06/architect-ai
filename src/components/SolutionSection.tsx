export const SolutionSection = () => {
  return (
    <section className="py-32 px-8 bg-transparent">
      <div className="mb-24">
        <h2 className="font-headline text-5xl md:text-7xl font-extrabold uppercase mb-4">
          WE TURN CHAOS INTO SYSTEMS.
        </h2>
        <div className="w-24 h-4 bg-neon-green"></div>
      </div>
      
      <div className="relative border-4 border-white p-12 overflow-x-auto">
        <div className="flex flex-col md:flex-row items-center justify-between gap-12 min-w-[800px]">
          <div className="p-8 border-4 border-[#ff4a8d] text-[#ff4a8d] font-headline font-black uppercase text-2xl">
            RAW DATA CHAOS
          </div>
          <span className="material-symbols-outlined text-white text-5xl">trending_flat</span>
          
          <div className="p-8 border-4 border-neon-green text-neon-green font-headline font-black uppercase text-2xl">
            ARCHITECT ENGINE
          </div>
          <span className="material-symbols-outlined text-white text-5xl">trending_flat</span>
          
          <div className="flex flex-col gap-4">
            <div className="p-4 bg-white text-black font-headline font-black uppercase">
              AUTONOMOUS WORKFLOWS
            </div>
            <div className="p-4 bg-white text-black font-headline font-black uppercase">
              PREDICTIVE INSIGHTS
            </div>
            <div className="p-4 bg-white text-black font-headline font-black uppercase">
              24/7 AGENT OPS
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
