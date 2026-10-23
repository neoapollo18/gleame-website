import { SplitHeading } from "@/components/ui/Section";
import { AnalyticsMock } from "@/components/mocks/AnalyticsMock";

const facts = [
  { value: "2 min", label: "for AI to write the whole quiz from your catalog" },
  { value: "100%", label: "of recommendations are products you stock" },
  { value: "5", label: "templates, each restyled to match your theme" },
  { value: "0", label: "lines of code to install, edit or launch" },
];

export function AnalyticsBand() {
  return (
    <section id="analytics" className="relative overflow-hidden bg-ink text-white">
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-0"
        style={{
          background:
            "radial-gradient(55% 45% at 88% 0%, rgba(138,43,194,0.55), transparent 70%), radial-gradient(35% 30% at 100% 8%, rgba(255,138,115,0.22), transparent 70%), radial-gradient(50% 40% at 0% 100%, rgba(91,14,134,0.4), transparent 70%)",
        }}
      />
      <div className="dots-dark pointer-events-none absolute inset-0 opacity-60" aria-hidden="true" />

      <div className="frame relative sm:border-white/10">
        <div className="frame-pad pb-14 pt-20 sm:pt-24 lg:pb-16 lg:pt-28">
          <SplitHeading
            dark
            className="h-section max-w-[820px]"
            lead="Know what your quiz sells."
            rest="Every start, answer, match, cart and order, from the first shopper. See which answers buy and which products the quiz moves."
          />
          <AnalyticsMock className="mt-12 lg:mt-14" />
        </div>

        <div className="grid grid-cols-2 border-t border-white/10 lg:grid-cols-4">
          {facts.map((f, i) => (
            <div
              key={f.value}
              className={[
                "px-5 py-9 sm:px-8 lg:px-10 lg:py-12",
                i % 2 === 0 ? "border-r border-white/10" : "",
                i < 2 ? "border-b border-white/10 lg:border-b-0" : "",
                i === 1 ? "lg:border-r" : "",
                i === 2 ? "lg:border-r" : "",
              ].join(" ")}
            >
              <p className="text-[2.5rem] font-medium leading-none tracking-[-0.04em] tabular sm:text-[3.25rem]">
                {f.value}
              </p>
              <p className="mt-3 max-w-[220px] text-[14px] leading-snug text-white/55">{f.label}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
