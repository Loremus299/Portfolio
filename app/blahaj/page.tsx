import Image from "next/image";

const images = [
  "Suited up Haj",
  "I use Debian btw",
  "Wassup lady",
  "Don't talk to me until I've had coffee",
  "Time to chill",
  "Time to code",
  "Gamerhaj",
  "Gaming",
];

export default function Page() {
  return (
    <main className="w-full max-w-2xl grid gap-4 p-4 pt-36">
      <div className="text-neutral-100 tracking-tight">Blahaj</div>
      <div className="grid grid-cols-2 gap-4 portrait:grid-cols-1">
        {images.map((image) => (
          <div key={image} className="grid gap-2">
            <Image
              src={`/blahaj/${image}.jpg`}
              alt={image}
              width={1000}
              height={1000}
              className="rounded-xl"
            />
            <p className="text-sm">{image}.</p>
          </div>
        ))}
      </div>
    </main>
  );
}
