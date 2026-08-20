import Image from "next/image";

export default function Monster() {
  return (
    <Image
      src="/monster.png"
      alt="monster logo"
      width={50}
      height={50}
      className="size-4"
    />
  );
}
