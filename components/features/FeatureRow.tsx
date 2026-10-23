import { cn } from "@/lib/utils";
import { Section, SplitHeading } from "@/components/ui/Section";

export function FeatureRow({
  id,
  lead,
  rest,
  points,
  visual,
  flip = false,
  tone = "white",
}: {
  id: string;
  lead: string;
  rest: string;
  points: string[];
  visual: React.ReactNode;
  flip?: boolean;
  tone?: "white" | "wash";
}) {
  return (
    <Section id={id} tone={tone} className="scroll-mt-28" frameClassName="!px-0">
      <div className={cn("grid lg:grid-cols-2", flip && "lg:[&>*:first-child]:order-2")}>
        <div className="frame-pad flex flex-col justify-center py-16 sm:py-20 lg:py-24">
          <SplitHeading as="h2" className="text-[1.625rem] font-medium leading-[1.14] tracking-[-0.026em] sm:text-[2rem]" lead={lead} rest={rest} />
          <ul className="mt-9 border-t border-line">
            {points.map((p) => (
              <li key={p} className="flex items-start gap-3 border-b border-line py-3.5 text-[15px] leading-snug text-ink-2">
                <span className="mt-[7px] h-[5px] w-[5px] shrink-0 bg-brand-pop" aria-hidden="true" />
                {p}
              </li>
            ))}
          </ul>
        </div>
        <div
          className={cn(
            "dots flex items-center justify-center border-t border-line px-5 py-12 sm:px-10 lg:border-t-0 lg:py-16",
            tone === "wash" ? "bg-white" : "bg-wash",
            flip ? "lg:border-r" : "lg:border-l"
          )}
        >
          {visual}
        </div>
      </div>
    </Section>
  );
}
