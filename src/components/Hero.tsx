export const Hero = () => {
  return (
    <section className="min-h-screen flex flex-col justify-end pt-32 pb-16 px-8 bg-surface">
      <div className="relative">
        <h1 className="font-headline font-extrabold uppercase text-bleed -ml-4 mb-12 select-none">
          YOUR<br />AI TEAM.
        </h1>
        <div className="flex flex-col md:flex-row items-start md:items-end justify-between gap-8">
          <p className="max-w-xl font-headline text-2xl uppercase font-bold text-on-surface-variant leading-tight">
            We build high-frequency automation systems for teams that demand absolute operational dominance.
          </p>
          <button className="bg-primary-container text-on-primary-container px-10 py-6 text-xl font-headline font-black uppercase tracking-widest kinetic-border hover:bg-white hover:text-black transition-colors">
            INITIALIZE PROTOCOL
          </button>
        </div>
      </div>
    </section>
  );
};
