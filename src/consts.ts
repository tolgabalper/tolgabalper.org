import type { Site, Metadata, Socials } from "@types";

export const SITE: Site = {
  NAME: "Tolga Boran Alper",
  EMAIL: "",
  NUM_POSTS_ON_HOMEPAGE: 3,
  NUM_WORKS_ON_HOMEPAGE: 2,
  NUM_PROJECTS_ON_HOMEPAGE: 3,
};

export const HOME: Metadata = {
  TITLE: "Home",
  DESCRIPTION: "Tolga Boran Alper's portfolio.",
};

export const BLOG: Metadata = {
  TITLE: "Blog",
  DESCRIPTION: "A collection of articles on topics I am passionate about and what I did in one week.",
};

export const WORK: Metadata = {
  TITLE: "Experiences",
  DESCRIPTION: "Where I worked or be part of an organization",
};

export const PROJECTS: Metadata = {
  TITLE: "Projects",
  DESCRIPTION: "A collection of my projects, with links to repositories and demos.",
};

export const SOCIALS: Socials = [
  { 
    NAME: "github",
    HREF: "https://github.com/tolgabalper"
  },
  { 
    NAME: "linkedin",
    HREF: "https://www.linkedin.com/in/tolga-boran-alper",
  },
  {
    NAME: "Contact Me",
    HREF: "https://forms.gle/dV45mFAH2CdbdBwV6",
  }
];
