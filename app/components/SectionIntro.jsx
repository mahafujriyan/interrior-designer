export default function SectionIntro({ eyebrow, title, description }) {
  return (
    <div className="mb-8 max-w-2xl">
      {eyebrow ? <p className="text-sm uppercase tracking-[0.2em] text-[var(--accent-dark)]">{eyebrow}</p> : null}
      <h2 className="mt-2 text-3xl font-semibold md:text-4xl">{title}</h2>
      {description ? <p className="mt-3 text-[var(--muted)]">{description}</p> : null}
    </div>
  );
}
