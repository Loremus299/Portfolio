import { codeToHtml } from "shiki";

export default async function Codeblock({
  children,
  lang,
}: {
  children: string;
  lang: string;
}) {
  const html = await codeToHtml(children, {
    lang,
    theme: "dark-plus",
  });
  return (
    <div className="overflow-x-scroll rounded-md border border-white/10 bg-[#1e1e1e]">
      <div
        className="[&_pre]:m-0 [&_pre]:p-2 [&_pre]:pt-1 [&_pre]:pb-1 [&_pre]:text-sm"
        dangerouslySetInnerHTML={{ __html: html }}
      />
    </div>
  );
}
