export const CaseStudies = () => {
  return (
    <section className="py-32 bg-surface-container-low">
      <div className="px-8 flex flex-col gap-24">
        <div className="flex flex-col md:flex-row gap-8 items-baseline">
          <h3 className="font-headline font-black text-[12rem] leading-none text-primary">60%</h3>
          <div className="max-w-md">
            <p className="font-headline font-extrabold text-4xl uppercase">
              OPERATIONAL COST CUT
            </p>
            <p className="text-on-surface-variant font-body mt-4">
              For a Series B Fintech firm via autonomous customer reconciliation agents.
            </p>
          </div>
        </div>
        
        <div className="flex flex-col md:flex-row-reverse gap-8 items-baseline">
          <h3 className="font-headline font-black text-[12rem] leading-none text-white">20 HRS</h3>
          <div className="max-w-md md:text-right">
            <p className="font-headline font-extrabold text-4xl uppercase">WEEKLY SAVED</p>
            <p className="text-on-surface-variant font-body mt-4">
              Per account manager through automated report synthesis and drafting.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};
