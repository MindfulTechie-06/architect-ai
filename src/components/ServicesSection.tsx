export const ServicesSection = () => {
  return (
    <section className="py-16 md:py-32 bg-surface-container">
      <div className="px-4 md:px-8 grid grid-cols-1 md:grid-cols-12 gap-4">
        <div className="md:col-span-7 bg-neon-green p-6 md:p-12 min-h-[300px] md:min-h-[400px] flex flex-col justify-between hover:scale-[1.02] transition-transform duration-300">
          <h3 className="text-black font-headline font-black text-5xl md:text-6xl uppercase leading-none">
            CUSTOM BOTS
          </h3>
          <p className="text-black font-headline font-bold text-lg md:text-xl uppercase max-w-sm mt-8">
            Tailored neural architectures built for your specific data stack.
          </p>
        </div>
        <div className="md:col-span-5 bg-surface p-6 md:p-12 min-h-[300px] md:min-h-[400px] flex flex-col justify-between border-t-8 border-neon-green hover:scale-[1.02] transition-transform duration-300">
          <h3 className="text-white font-headline font-black text-3xl md:text-4xl uppercase">
            WORKFLOW AUTO
          </h3>
          <p className="text-white/70 font-headline font-bold uppercase mt-8">
            Zero-touch operations from lead to fulfillment.
          </p>
        </div>
        <div className="md:col-span-4 bg-neon-pink p-6 md:p-12 min-h-[300px] md:min-h-[400px] flex flex-col justify-between hover:scale-[1.02] transition-transform duration-300">
          <h3 className="text-black font-headline font-black text-3xl md:text-4xl uppercase">
            AI TRAINING
          </h3>
          <p className="text-black font-headline font-bold uppercase mt-8">
            Up-skilling your core team for the post-human era.
          </p>
        </div>
        <div className="md:col-span-8 bg-white p-6 md:p-12 min-h-[300px] md:min-h-[400px] flex flex-col justify-between hover:scale-[1.02] transition-transform duration-300">
          <span className="text-black font-headline font-black text-7xl md:text-9xl leading-none">03</span>
          <h3 className="text-black font-headline font-black text-4xl md:text-5xl uppercase text-right mt-8">
            SYSTEM INTEGRATION
          </h3>
        </div>
      </div>
    </section>
  );
};
