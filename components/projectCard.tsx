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
  return <div>{name}</div>;
}
