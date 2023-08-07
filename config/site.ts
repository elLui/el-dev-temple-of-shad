import generateUniqueId from "@/lib/generate-unique-id"

export type SiteConfig = typeof siteConfig

export const siteConfig = {
  name: "elluis.codes",
  description: "elluis.codes, a blog about web development and other stuff",
  mainNav: [
    {
      id: generateUniqueId(),
      title: "Home",
      href: "/",
    },
    {
      id: generateUniqueId(),
      title: "About",
      href: "/about",
    },
    {
      id: generateUniqueId(),
      title: "Blog",
      href: "/blog",
    },
    {
      id: generateUniqueId(),
      title: "Projects",
      href: "/projects",
    },
    {
      id: generateUniqueId(),
      title: "Contact",
      href: "/about/contact",
    },
  ],
  links: {
    twitter: "https://twitter.com/elluis_codes",
    github: "https://github.com/elLui",
    docs: "https://ui.shadcn.com",
  },
}
