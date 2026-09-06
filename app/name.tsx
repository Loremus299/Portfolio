/* eslint-disable react-hooks/set-state-in-effect */
"use client";

import { useEffect, useState } from "react";

export default function Name() {
  const [name, setName] = useState("");

  useEffect(() => {
    if (window.origin.includes("loremus.gay")) {
      setName("Nidhi");
    } else {
      setName("Nidhish Dharmadhikari");
    }
  }, []);

  return (
    <h1 className="text-md font-bold tracking-tight text-neutral-100">
      {name}
    </h1>
  );
}
