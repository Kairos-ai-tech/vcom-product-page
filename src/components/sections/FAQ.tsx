import type { Dict } from "@/i18n/types";

type Props = { dict: Dict["faq"] };

export function FAQ({ dict }: Props) {
  const [l1, l2, l3] = dict.headlineLines;
  return (
    <section
      id="faq"
      className="border-b-[var(--pixel)] border-[var(--panel-border)] bg-[var(--panel)]"
    >
      <div className="mx-auto grid max-w-6xl gap-10 px-6 py-20 lg:grid-cols-[1fr_2fr]">
        <div>
          <p className="eyebrow text-[var(--accent-pink)]">{dict.eyebrow}</p>
          <h2 className="font-display mt-3 text-2xl sm:text-3xl">
            {l1} <br /> {l2} <br /> {l3}
          </h2>
        </div>
        <ul className="grid gap-4">
          {dict.items.map((f, i) => (
            <li
              key={f.q}
              className={`pixel-panel pixel-hover-lift anim-pop-in delay-${(i % 6) + 1} bg-[var(--background)] p-5`}
            >
              <p className="text-sm">
                <span className="text-[var(--accent-red)]">{dict.qLabel}</span>{" "}
                {f.q}
              </p>
              <p className="font-body mt-3 text-base text-[var(--foreground)]/85">
                <span className="text-[var(--accent-green)]">{dict.aLabel}</span>{" "}
                {f.a}
              </p>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}
