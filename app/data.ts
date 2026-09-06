type Project = {
  name: string;
  description: string;
  website: string;
  avatar_url: string;
};

export const projects: Project[] = [
  {
    name: "Better Together",
    description: "The habit tracker for love birds.",
    avatar_url: "/projects/bt.png",
    website: "https://better-together.loremus.gay",
  },
  {
    name: "Astronomy Template",
    description:
      "Animated astrophysics focused portfolio & blogging template with a CMS.",
    avatar_url: "/projects/astrophysics.ico",
    website: "https://archive.astronomy.loremus.gay/",
  },
  {
    name: "My Maps",
    description: "Locally managed mindmapping app.",
    avatar_url: "/projects/maps.png",
    website: "https://archive.astronomy.loremus.gay/",
  },
  {
    name: "Myflix",
    description: "Your personal movie tracker.",
    avatar_url: "/projects/flix.png",
    website: "https://archive.astronomy.loremus.gay/",
  },
];
