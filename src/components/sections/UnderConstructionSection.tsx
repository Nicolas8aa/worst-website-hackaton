export function UnderConstructionSection() {
  return (
    <section
      id="under-construction"
      className="section-block section-e py-10"
    >
      <div className="mx-auto max-w-6xl px-4">
        <div className="section-card border-8 border-[#ff0000] bg-[#ffff00] p-6 text-black">
          <h2 className="text-[28px] text-[#ff00ff] shadow-loud sm:text-[32px] md:text-[34px]">
            Under Construction
          </h2>
          <pre className="mt-4 overflow-auto text-[13px] font-mono sm:text-[16px]">
{`   _._     _,-'""\`-._
   (,-.\`._,'(       |\`-/|
       \`-.-' \ )-\`( , o o)
             \`-    \`_\`"'- `}
          </pre>
          <p className="mt-2 text-[14px] sm:text-[16px]">
            If this section ever ships, we&apos;ll celebrate by adding more AI.
          </p>
        </div>
      </div>
    </section>
  );
}
