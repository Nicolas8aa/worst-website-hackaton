const pricingTiers = [
  { title: "Free", desc: "Includes 1 IDE crash/day" },
  { title: "Pro", desc: "Unlimited crashes (priority queue)" },
  { title: "Enterprise", desc: "We crash in enterprise colors" },
];

export function PricingSection() {
  return (
    <section id="pricing" className="section-block section-d py-10">
      <div className="mx-auto max-w-6xl px-4">
        <h2 className="text-[28px] text-[#ff00ff] shadow-loud sm:text-[32px] md:text-[36px]">
          Pricing
        </h2>
        <div className="mt-6 grid gap-4 md:grid-cols-3">
          {pricingTiers.map((tier) => (
            <div
              key={tier.title}
              className="section-card border-8 border-[#ff0000] bg-[#00ffff] p-5 text-black shadow-[6px_6px_0_#ff00ff]"
            >
              <div className="flex items-center justify-between">
                <h3 className="text-[22px] font-bold text-[#ff00ff] sm:text-[26px]">
                  {tier.title}
                </h3>
                <span className="border-4 border-[#ff0000] bg-[#ffff00] px-2 py-1 text-[14px] font-bold sm:text-[16px]">
                  Best Value
                </span>
              </div>
              <p className="mt-3 text-[14px] sm:text-[16px]">{tier.desc}</p>
              <button
                type="button"
                className="mt-4 w-full border-4 border-[#ff0000] bg-[#00ffff] px-3 py-2 text-[14px] text-black sm:text-[16px]"
              >
                Start regretting now
              </button>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
