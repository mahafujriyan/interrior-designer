import { projects } from "@/lib/site-content";

const baseUrl = "https://www.ateliernoor.com";

export default function sitemap() {
  const staticRoutes = [
    "",
    "/about",
    "/projects",
    "/services",
    "/gallery",
    "/testimonials",
    "/blog",
    "/contact",
    "/book-consultation",
  ];

  const staticEntries = staticRoutes.map((route) => ({
    url: `${baseUrl}${route}`,
    lastModified: new Date(),
    changeFrequency: "monthly",
    priority: route === "" ? 1 : 0.7,
  }));

  const projectEntries = projects.map((project) => ({
    url: `${baseUrl}/projects/${project.slug}`,
    lastModified: new Date(),
    changeFrequency: "monthly",
    priority: 0.8,
  }));

  return [...staticEntries, ...projectEntries];
}
