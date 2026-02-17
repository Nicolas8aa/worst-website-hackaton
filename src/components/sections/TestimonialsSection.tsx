const testimonials = [
  {
    quote: "It broke prod in record time. 10/10 would panic again.",
    name: "Dr. Crashina Stacktrace",
    role: "Chief Outage Officer",
  },
  {
    quote: "It replaced our team with a dashboard and a prayer.",
    name: "Vibe McDeploy",
    role: "Human-in-the-Loop (retired)",
  },
  {
    quote: "The AI did our standup. We got promoted to silence.",
    name: "Sally Standupotron",
    role: "Meeting Avoidance Lead",
  },
];

export function TestimonialsSection() {
  return (
    <section id="testimonials" className="section-block section-b py-10">
      <div className="mx-auto max-w-6xl px-4">
        <h2 className="text-[36px] text-[#ff00ff] shadow-loud">Testimonials</h2>
        <div className="mt-6 grid gap-4 md:grid-cols-3">
          {testimonials.map((item) => (
            <figure
              key={item.name}
              className="border-8 border-[#ff0000] bg-[#ffff00] p-4 text-black"
            >
              <blockquote className="text-[16px]">&quot;{item.quote}&quot;</blockquote>
              <figcaption className="mt-3 text-[16px]">
                <strong>{item.name}</strong> — {item.role}
              </figcaption>
              <p className="mt-2 text-[18px]">
                ⭐⭐⭐⭐⭐ (terrible but addictive)
              </p>
            </figure>
          ))}
        </div>
      </div>
    </section>
  );
}
