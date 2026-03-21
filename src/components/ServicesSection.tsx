export const ServicesSection = () => {
  return (
    <section className="py-32 bg-surface-container">
      <div className="px-8 grid grid-cols-1 md:grid-cols-12 gap-4">
        <div className="md:col-span-7 bg-neon-green p-12 min-h-[400px] flex flex-col justify-between">
          <h3 className="text-black font-headline font-black text-6xl uppercase leading-none">
            CUSTOM BOTS
          </h3>
          <p className="text-black font-headline font-bold text-xl uppercase max-w-sm">
            Tailored neural architectures built for your specific data stack.
          </p>
        </div>
        <div className="md:col-span-5 bg-surface p-12 min-h-[400px] flex flex-col justify-between border-t-8 border-neon-green">
          <h3 className="text-white font-headline font-black text-4xl uppercase">
            WORKFLOW AUTO
          </h3>
          <p className="text-white/70 font-headline font-bold uppercase">
            Zero-touch operations from lead to fulfillment.
          </p>
        </div>
        <div className="md:col-span-4 bg-neon-pink p-12 min-h-[400px] flex flex-col justify-between">
          <h3 className="text-black font-headline font-black text-4xl uppercase">
            AI TRAINING
          </h3>
          <p className="text-black font-headline font-bold uppercase">
            Up-skilling your core team for the post-human era.
          </p>
        </div>
        <div className="md:col-span-8 bg-white p-12 min-h-[400px] flex flex-col justify-between">
          <span className="text-black font-headline font-black text-9xl leading-none">03</span>
          <h3 className="text-black font-headline font-black text-5xl uppercase text-right">
            SYSTEM INTEGRATION
          </h3>
        </div>
      </div>
    </section>
  );
};
