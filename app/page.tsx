import Badge from "@/components/badge";
import { Docker } from "@/components/icons/docker";
import { DrizzleORM } from "@/components/icons/drizzle";
import { Figma } from "@/components/icons/figma";
import Monster from "@/components/icons/monster";
import { Nextjs } from "@/components/icons/next";
import { PostgreSQL } from "@/components/icons/postgres";
import { AmazonWebServices } from "@/components/icons/s3";
import { Shadcnui } from "@/components/icons/shadcn";
import { TailwindCSS } from "@/components/icons/tailwind";
import { TanStack } from "@/components/icons/tanstack";
import Image from "next/image";

export default function Page() {
  return (
    <main className="w-full max-w-2xl grid gap-4 p-4 pt-32">
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
          <AmazonWebServices className="size-4" />
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
    </main>
  );
}
