import { Container } from "@/components/layout/Container";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { PROCESS_STEPS } from "@/features/home/components/process/data";
import { ProcessCard } from "./ProcessCard";
import { div } from "framer-motion/client";

/**
 * "Check the Process" section.
 * - Server component: only each ProcessCard is a client component.
 * - Cards are mapped from PROCESS_STEPS data.
 */
export function Process() {
  return (
    <div className="w-full bg-cream-50">
      <Container as="section" id="process" className="py-14 sm:py-20" aria-labelledby="process-heading">
        <SectionHeading className="mb-8 sm:mb-12" tone="red">
          <span id="process-heading">Check the Process</span>
        </SectionHeading>

        <ul className="grid grid-cols-2 gap-4 sm:gap-6 lg:grid-cols-4">
          {PROCESS_STEPS.map((step, index) => (
            <ProcessCard key={step.id} step={step} index={index} />
          ))}
        </ul>
      </Container>
    </div>
  );
}