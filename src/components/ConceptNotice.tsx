import { CONCEPT_NOTICE } from "@/lib/site";

export function ConceptNotice() {
  return (
    <div role="note" className="bg-ink text-[12.5px] leading-[1.4] tracking-[0.01em] text-paper">
      <div className="shell flex items-center gap-2.5 py-[9px]">
        <span aria-hidden="true" className="size-2 flex-none bg-orange" />
        <span>{CONCEPT_NOTICE}</span>
      </div>
    </div>
  );
}
