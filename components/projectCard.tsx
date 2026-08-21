import Image from "next/image";

export default function ProjectCard({
  name,
  description,
  website,
  avatar_url,
}: {
  name: string;
  description: string;
  website: string;
  avatar_url: string;
}) {
  return (
    <div className="w-full bg-neutral-900 rounded-xl hover:brightness-125 transition duration-300">
      <a target="_blank" href={website}>
        <div className="h-36 border-b border-white/5 grid place-items-center rounded-t-xl">
          <Image
            src={avatar_url}
            alt={name}
            width={200}
            height={200}
            className="size-12"
          />
        </div>
        <div className="p-3 grid gap-1">
          <p className="text-neutral-100 text-sm">
            {name.replaceAll("-", " ")}
          </p>
          <p className="text-sm">{description}</p>
        </div>
      </a>
    </div>
  );
}
