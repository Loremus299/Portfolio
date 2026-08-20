import Image from "next/image";

export default function S3() {
  return (
    <Image
      src="/s3.png"
      alt="monster logo"
      width={50}
      height={50}
      className="size-4"
    />
  );
}
