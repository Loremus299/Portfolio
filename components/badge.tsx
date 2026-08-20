export default function Badge({
  children,
  name,
  target,
}: {
  children: React.ReactNode;
  name: string;
  target: string;
}) {
  return (
    <a
      href={target}
      target="_blank"
      className="inline-flex items-center bg-neutral-800 gap-1 rounded-sm border pl-1 pr-1 pt-0.5 pb-0.5 border-white/25"
    >
      {children}{" "}
      <span className="text-sm text-neutral-100 whitespace-nowrap">{name}</span>
    </a>
  );
}
