import { Section, SplitHeading } from "@/components/ui/Section";
import { TextLink } from "@/components/ui/Button";
import { StudioMock } from "@/components/mocks/StudioMock";

const modes = [
  {
    title: "Build",
    body: "Edit every screen, style and line of copy with a live preview of your store. Or ask Gleame and watch the quiz change.",
  },
  {
    title: "Check matches",
    body: "See exactly which products every answer leads to. Anything that can't be matched to your catalog is flagged before you publish.",
  },
  {
    title: "Live",
    body: "Publish to a page on your store when you're ready. Earlier versions stay one click away.",
  },
];

export function StudioSection() {
  return (
    <Section id="studio" className="overflow-hidden">
      <div className="pt-20 sm:pt-24 lg:pt-28">
        <div className="flex flex-col gap-6 lg:flex-row lg:items-end lg:justify-between">
          <SplitHeading
            className="h-section max-w-[780px]"
            lead="One Studio to build, check and launch."
            rest="Change anything by hand or by asking. Every edit shows up in a live preview of your store, and every edit has an Undo."
          />
          <TextLink href="/features#studio" className="shrink-0 text-[15px]">
            Explore the Studio
          </TextLink>
        </div>
        <p className="mt-6 text-[13px] text-muted lg:hidden">Tap Build, Check matches or Live to switch views.</p>
      </div>

      <div className="relative mt-8 sm:mt-12">
        <StudioMock />
        <p className="mt-3 hidden text-right text-[12.5px] text-muted lg:block">
          Try it: switch modes, open Build with AI, or fix the flagged answer.
        </p>
      </div>

      <div className="-mx-5 mt-14 grid border-t border-line sm:-mx-8 md:grid-cols-3 lg:-mx-14">
        {modes.map((m, i) => (
          <div
            key={m.title}
            className="border-b border-line px-5 py-8 last:border-b-0 sm:px-8 md:border-b-0 md:border-r md:last:border-r-0 lg:px-10 lg:py-10"
          >
            <p className="font-mono text-[12px] text-brand-pop">0{i + 1}</p>
            <h3 className="mt-3 text-[17px] font-medium tracking-[-0.015em]">{m.title}</h3>
            <p className="mt-2 text-[14.5px] leading-relaxed text-muted">{m.body}</p>
          </div>
        ))}
      </div>
    </Section>
  );
}
