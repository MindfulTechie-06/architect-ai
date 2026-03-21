export const ProblemSection = () => {
  return (
    <section className="py-32 px-8 bg-transparent">
      <div className="grid grid-cols-1 md:grid-cols-12 gap-12">
        <div className="md:col-span-4">
          <span className="text-neon-green font-headline font-bold uppercase tracking-widest text-sm">
            [ SYSTEM_ERROR ]
          </span>
        </div>
        <div className="md:col-span-8 flex flex-col gap-16">
          <div className="border-l-8 border-white pl-8">
            <h2 className="font-headline text-7xl md:text-9xl font-extrabold uppercase tracking-tighter">
              TIME IS BURNING
            </h2>
          </div>
          <div className="border-l-8 border-white pl-8">
            <h2 className="font-headline text-7xl md:text-9xl font-extrabold uppercase tracking-tighter">
              HIRING IS SLOW
            </h2>
          </div>
          <div className="border-l-8 border-white pl-8">
            <h2 className="font-headline text-7xl md:text-9xl font-extrabold uppercase tracking-tighter">
              AI IS CHAOS
            </h2>
          </div>
        </div>
      </div>
    </section>
  );
};
