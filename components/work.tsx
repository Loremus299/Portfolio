export default function Work({
  company,
  project,
  date,
  website,
  description,
}: {
  company: string;
  project: string;
  date: string;
  website: string;
  description: string;
}) {
  return (
    <div className="grid gap-2">
      <div>
        <p className="tracking-tight text-neutral-100">{project}</p>
        <div className="flex justify-between">
          <p className="tracking-tight text-sm">
            <a target="_blank" href={website}>
              {company}
            </a>
          </p>
          <p className="tracking-tight text-sm">{date}</p>
        </div>
      </div>
      <p>{description}</p>
    </div>
  );
}
