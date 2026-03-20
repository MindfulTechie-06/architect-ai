export const HowItWorks = () => {
  return (
    <section className="py-32 px-8 bg-surface">
      <h2 className="font-headline text-8xl font-black uppercase mb-24 tracking-tighter">
        THE PROTOCOL
      </h2>
      <div className="grid grid-cols-1 md:grid-cols-4 gap-0 border-4 border-white">
        <div className="p-12 border-b-4 md:border-b-0 md:border-r-4 border-white hover:bg-primary hover:text-black transition-colors group">
          <span className="font-headline font-black text-2xl mb-8 block">01 / AUDIT</span>
          <p className="font-headline font-bold uppercase text-on-surface-variant group-hover:text-black">
            Deep forensic analysis of current bottlenecks.
          </p>
        </div>
        <div className="p-12 border-b-4 md:border-b-0 md:border-r-4 border-white hover:bg-primary hover:text-black transition-colors group">
          <span className="font-headline font-black text-2xl mb-8 block">02 / DESIGN</span>
          <p className="font-headline font-bold uppercase text-on-surface-variant group-hover:text-black">
            Blueprinting the autonomous future.
          </p>
        </div>
        <div className="p-12 border-b-4 md:border-b-0 md:border-r-4 border-white hover:bg-primary hover:text-black transition-colors group">
          <span className="font-headline font-black text-2xl mb-8 block">03 / BUILD</span>
          <p className="font-headline font-bold uppercase text-on-surface-variant group-hover:text-black">
            Engineering the engine room.
          </p>
        </div>
        <div className="p-12 hover:bg-primary hover:text-black transition-colors group">
          <span className="font-headline font-black text-2xl mb-8 block">04 / OPTIMIZE</span>
          <p className="font-headline font-bold uppercase text-on-surface-variant group-hover:text-black">
            Iterative hardening of all systems.
          </p>
        </div>
      </div>
    </section>
  );
};
