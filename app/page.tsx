import Badge from "@/components/badge";
import BigBadge from "@/components/bigBadge";
import { Docker } from "@/components/icons/docker";
import { DrizzleORM } from "@/components/icons/drizzle";
import { Figma } from "@/components/icons/figma";
import { Git } from "@/components/icons/git";
import { GitHub } from "@/components/icons/github";
import Monster from "@/components/icons/monster";
import { Nextjs } from "@/components/icons/next";
import { PostgreSQL } from "@/components/icons/postgres";
import { Gmail } from "@/components/icons/proton";
import S3 from "@/components/icons/s3";
import { Shadcnui } from "@/components/icons/shadcn";
import { TailwindCSS } from "@/components/icons/tailwind";
import { TanStack } from "@/components/icons/tanstack";
import Image from "next/image";
import { projects } from "./data";
import ProjectCard from "@/components/projectCard";
import Work from "@/components/work";

type Project = {
  name: string;
  description: string;
  website: string;
  avatar_url: string;
};
export default async function Page() {
  const projectArr: Project[] = await Promise.all(
    projects.map(async (projectName) => {
      const response = await fetch(
        `https://git.loremus.gay/api/v1/repos/Loremus/${projectName}`,
        {
          cache: "force-cache",
        },
      );

      return response.json();
    }),
  );

  return (
    <main className="w-full max-w-2xl grid gap-4 p-4 pt-36">
      <div className="flex gap-2 items-center">
        <Image
          src={"/pfp.jpg"}
          alt="profile"
          width={100}
          height={100}
          className="size-12 rounded-md"
        />
        <div className="leading-6">
          <h1 className="text-md font-bold tracking-tight text-neutral-100">
            Nidhish Dharmadhikari
          </h1>
          <p className="text-neutral-500 text-xs">@Loremus</p>
        </div>
      </div>

      <p>
        I&apos;m Nidhish, a 21 year old{" "}
        <span className="font-semibold text-neutral-100">
          Fullstack NextJS developer{" "}
        </span>
        living in India. Spending more time thinking about UI than implementing
        it.
      </p>
      <p className="leading-8">
        I build my apps in{" "}
        <Badge name="Next.js" target="https://nextjs.org/">
          <Nextjs className="size-4" />
        </Badge>{" "}
        with backend powered by{" "}
        <Badge name="PostgreSQL" target="https://www.postgresql.org/">
          <PostgreSQL className="size-4" />
        </Badge>{" "}
        <Badge name="Drizzle" target="https://orm.drizzle.team/">
          <DrizzleORM className="size-4" />
        </Badge>{" "}
        <Badge name="S3" target="https://orm.drizzle.team/">
          <S3 />
        </Badge>{" "}
        <Badge name="Docker" target="https://www.docker.com/">
          <Docker className="size-4" />
        </Badge>{" "}
        and UI powered by{" "}
        <Badge name="Tailwind css" target="https://tailwindcss.com/">
          <TailwindCSS className="size-4" />
        </Badge>{" "}
        <Badge name="Shadcn" target="https://ui.shadcn.com/">
          <Shadcnui className="size-4" />
        </Badge>{" "}
        <Badge name="React Query" target="https://tanstack.com/">
          <TanStack className="size-4" />
        </Badge>{" "}
        <Badge name="Figma" target="https://www.figma.com/">
          <Figma className="size-4" />
        </Badge>{" "}
        fuelled by{" "}
        <Badge name="Monster" target="https://www.monsterenergy.com/">
          <Monster />
        </Badge>
      </p>
      <p className="flex gap-2 items-center text-neutral-100 tracking-tight">
        <span className="text-green-400">•</span> Available for new
        opportunities
      </p>
      <div className="flex gap-2">
        <BigBadge target="mailto:nidhish.dha@gmail.com">
          <Gmail className="size-5" />
        </BigBadge>
        <BigBadge target="https://github.com/Loremus299">
          <GitHub className="size-5" />
        </BigBadge>
        <BigBadge target="https://git.loremus.gay/Loremus">
          <Git className="size-5" />
        </BigBadge>
      </div>
      <p className="text-neutral-100 font-semibold mt-8">Past work</p>
      <div>
        <Work
          company="Ideanomic"
          website="https://ideanomic.com/"
          project="Syndesic"
          date="April 2026 - May 2026"
          description="an internal tool to streamline project management, invoice handling and time tracking for clients and employees."
        />
      </div>
      <p className="text-neutral-100 font-semibold mt-8">Projects</p>
      <div className="grid grid-cols-2 gap-4">
        {projectArr.map((project) => (
          <ProjectCard
            key={project.name}
            name={project.name}
            avatar_url={project.avatar_url}
            description={project.description}
            website={project.website}
          />
        ))}
      </div>
    </main>
  );
}
