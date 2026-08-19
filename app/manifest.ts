import { MetadataRoute } from "next";

export default function manifest(): MetadataRoute.Manifest {
  return {
    name: "LOOPX",
    short_name: "LOOPX",
    description: "Software from idea to production.",
    start_url: "/",
    display: "standalone",
    background_color: "#011810",
    theme_color: "#05714B",
  };
}
