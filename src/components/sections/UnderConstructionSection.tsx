export function UnderConstructionSection() {
  return (
    <section
      id="under-construction"
      className="section-block section-e py-10"
    >
      <div className="mx-auto max-w-6xl px-4">
        <div className="border-8 border-[#ff0000] bg-[#ffff00] p-6 text-black">
          <h2 className="text-[34px] text-[#ff00ff] shadow-loud">
            Under Construction
          </h2>
          <pre className="mt-4 overflow-auto text-[16px] font-mono">
{`   _._     _,-'""\`-._
   (,-.\`._,'(       |\`-/|
       \`-.-' \ )-\`( , o o)
             \`-    \`_\`"'- `}
          </pre>
          <p className="mt-2 text-[16px]">
            If this section ever ships, we&apos;ll celebrate by adding more AI.
          </p>
        </div>
      </div>
    </section>
  );
}
