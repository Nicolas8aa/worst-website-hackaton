export default function Home() {
  return (
    <main className="min-h-screen bg-[#ff00ff] text-[#00ff00]">
      <div className="p-2">
        <h1 className="text-[52px] uppercase underline tracking-[12px]">
          How Ai Is Used Nowadays!!!
        </h1>
        <p className="mt-1 text-[11px]">
          Welcome to the WORST website ever. It is intentionally confusing, loud,
          and overbuilt. You asked for it.
        </p>
      </div>

      <section className="mt-6 border-8 border-dashed border-yellow-300 bg-[#00ffff] p-3">
        <h2 className="text-[28px] italic">What people do with AI (too much)</h2>
        <ul className="ml-9 list-[square] text-[15px]">
          <li>
            Auto-generate a shopping list… then ask a separate AI to summarize the
            list… then ask a third AI to reorder it alphabetically.
          </li>
          <li>
            Use AI to rename files, then use AI to explain the names it just made up.
          </li>
          <li>
            Build a 20-step prompt pipeline to say “Hello”.
          </li>
        </ul>
      </section>

      <section className="mt-6 bg-black p-4 text-white">
        <h2 className="text-[22px]">Overbuilt vs. Simpler (spoiler: simpler wins)</h2>
        <div className="mt-2 grid gap-2 md:grid-cols-2">
          <div className="border-4 border-pink-500 p-2">
            <h3 className="text-[18px]">Overbuilt</h3>
            <p className="text-[12px]">
              A microservice that calls 4 AIs to decide if you should drink water.
              The final answer: “maybe”.
            </p>
          </div>
          <div className="border-4 border-lime-400 p-2">
            <h3 className="text-[18px]">Simpler</h3>
            <p className="text-[12px]">Feel thirsty? Drink water.</p>
          </div>
        </div>
      </section>

      <section className="mt-6 p-4">
        <h2 className="text-[30px]">Fun Examples of Overkill</h2>
        <ol className="ml-8 list-decimal text-[13px]">
          <li>AI decides which AI to ask.</li>
          <li>AI writes a meeting invite to discuss if a meeting is needed.</li>
          <li>AI draws a flowchart to explain why a flowchart is required.</li>
          <li>AI generates a shortcut for a task you only do once.</li>
        </ol>
        <marquee className="mt-4 bg-red-600 text-white">
          AI is everywhere. Sometimes too everywhere.
        </marquee>
      </section>

      <footer className="mt-10 bg-[#222] p-3 text-[10px] text-white">
        <p>Broken layout? Yes. Ugly colors? Yes. Too many words? Also yes.</p>
        <p>Design score: 0/10. Mission accomplished.</p>
      </footer>
    </main>
  );
}
