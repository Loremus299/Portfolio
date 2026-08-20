export default function BigBadge({
  children,
  target,
}: {
  children: React.ReactNode;
  target: string;
}) {
  return (
    <a
      href={target}
      target="_blank"
      className="inline-flex items-center bg-neutral-800 gap-1 rounded-sm border p-2 border-white/25"
    >
      {children}
    </a>
  );
}
