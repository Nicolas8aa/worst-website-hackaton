const faqQuestions = [
  "Is this safe?",
  "Will it replace my team?",
  "Is the IDE sentient?",
  "Does it ship on floppy?",
  "Can I cancel?",
  "Will support answer?",
];

export function FAQSection() {
  return (
    <section id="faq" className="section-block section-e py-10">
      <div className="mx-auto max-w-6xl px-4">
        <h2 className="text-[28px] text-[#ff00ff] shadow-loud sm:text-[32px] md:text-[36px]">
          FAQ
        </h2>
        <div className="mt-6 grid gap-4 md:grid-cols-3">
          {faqQuestions.map((question, index) => (
            <div
              key={question}
              className="section-card border-8 border-[#ff0000] bg-[#ffff00] p-4 text-black"
            >
              <h3 className="text-[18px] font-bold sm:text-[20px]">
                {question}
              </h3>
              <p className="mt-2 text-[16px] sm:text-[18px]">
                {index % 3 === 0 ? "Yes." : index % 3 === 1 ? "YES" : "Yes ✅"}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
