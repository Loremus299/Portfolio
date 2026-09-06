"use client";

export default function Name() {
  const origin = window.origin;

  if (origin.includes("loremus.gay") || origin.includes("localhost:3000")) {
    return (
      <h1 className="text-md font-bold tracking-tight text-neutral-100">
        Nidhi.
      </h1>
    );
  }

  return (
    <h1 className="text-md font-bold tracking-tight text-neutral-100">
      Nidhish Dharmadhikari.
    </h1>
  );
}
