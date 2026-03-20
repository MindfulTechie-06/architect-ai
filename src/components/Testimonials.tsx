export const Testimonials = () => {
  return (
    <section className="py-32 px-8 bg-surface">
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
        <div className="bg-surface-container-highest p-12 border-l-4 border-primary">
          <span className="material-symbols-outlined text-primary mb-8">format_quote</span>
          <p className="font-headline font-bold text-2xl uppercase italic mb-12">
            "ARCHITECT didn't just give us a tool; they gave us a whole new operating system. Brutal efficiency."
          </p>
          <span className="block font-headline font-black uppercase text-sm">CTO, NEXUS CORP</span>
        </div>
        
        <div className="bg-surface-container-highest p-12 border-l-4 border-white">
          <span className="material-symbols-outlined text-white mb-8">format_quote</span>
          <p className="font-headline font-bold text-2xl uppercase italic mb-12">
            "The time we saved is immeasurable. The AI agents they built are now our top performers."
          </p>
          <span className="block font-headline font-black uppercase text-sm">FOUNDER, VOID LABS</span>
        </div>
        
        <div className="bg-surface-container-highest p-12 border-l-4 border-tertiary">
          <span className="material-symbols-outlined text-tertiary mb-8">format_quote</span>
          <p className="font-headline font-bold text-2xl uppercase italic mb-12">
            "Stark, honest, and incredibly fast. This is how agency services should feel in 2024."
          </p>
          <span className="block font-headline font-black uppercase text-sm">COO, KINETIC</span>
        </div>
      </div>
    </section>
  );
};
