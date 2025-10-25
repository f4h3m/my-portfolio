import { Icons } from "@/components/icons";
import { HomeIcon, NotebookIcon } from "lucide-react";

export const DATA = {
  name: "Fahem Ahmed",
  initials: "FA",
  url: "https://dillion.io",
  location: "Dinajpur, Bangladesh",
  locationLink: "https://www.google.com/maps/place/dinajpur",
  description: "Love building things and helping people.",
  summary:
    "with 6+ years of expertise in crafting dynamic and user-friendly web applications. Proficient in a variety of modern frameworks, including React, Next.js, Vue, and Svelte, as well as WordPress. Skilled in delivering high-quality web solutions that meet client requirements and exceed expectations.",
  avatarUrl: "/me.jpg",
  skills: [
    "PHP",
    "React",
    "Next.js",
    "Svelte",
    "Typescript",
    "Node.js",
    "WordPress",
    "WooCommerce",
    "Elementor",
    "Tailwind",
  ],
  navbar: [
    { href: "/", icon: HomeIcon, label: "Home" },
    // { href: "/blog", icon: NotebookIcon, label: "Blog" },
  ],
  contact: {
    email: "hello@example.com",
    tel: "+123456789",
    social: {
      GitHub: {
        name: "GitHub",
        url: "https://github.com/f4h3m",
        icon: Icons.github,

        navbar: true,
      },
      LinkedIn: {
        name: "LinkedIn",
        url: "https://linkedin.com/in/f4h3m",
        icon: Icons.linkedin,

        navbar: true,
      },
      X: {
        name: "X",
        url: "https://x.com/fahemdnj",
        icon: Icons.x,

        navbar: true,
      },
      email: {
        name: "Send Email",
        url: "#",
        icon: Icons.email,
        navbar: true,
      },
    },
  },

  work: [
    {
      company: "Upwork",
      href: "#",
      badges: [],
      location: "Remote",
      title: "Freelance Web Developer",
      logoUrl: "/upwork.png",
      start: "October 2024",
      end: "Present",
      description: "",
    },
    {
      company: "WordSphere",
      href: "#",
      badges: [],
      location: "Remote",
      title: "Senior Web Developer",
      logoUrl: "/ws.jpeg",
      start: "May 2020",
      end: "October 2024",
      description: "",
    },
    {
      company: "Spondonit",
      badges: [],
      location: "Remote",
      href: "#",
      title: "Frontend Developer",
      logoUrl: "/sp.jpg",
      start: "September 2017",
      end: "June 2018",
      description: "",
    },
  ],
  education: [
    {
      school: "Daffodil International University",
      href: "#",
      degree: "BSc in Computer Science and Engineering",
      logoUrl: "/daffodil.jpg",
      start: "2013",
      end: "2017",
    },
  ],
  projects: [
    {
      title: "Chat Collect",
      href: "https://chatcollect.com",
      dates: "Jan 2024 - Feb 2024",
      active: true,
      description:
        "With the release of the [OpenAI GPT Store](https://openai.com/blog/introducing-the-gpt-store), I decided to build a SaaS which allows users to collect email addresses from their GPT users. This is a great way to build an audience and monetize your GPT API usage.",
      technologies: [
        "Next.js",
        "Typescript",
        "PostgreSQL",
        "Prisma",
        "TailwindCSS",
        "Stripe",
        "Shadcn UI",
        "Magic UI",
      ],
      links: [
        {
          type: "Website",
          href: "https://chatcollect.com",
          icon: <Icons.globe className="size-3" />,
        },
      ],
      image: "",
      video:
        "https://pub-83c5db439b40468498f97946200806f7.r2.dev/chat-collect.mp4",
    },
    {
      title: "Magic UI",
      href: "https://magicui.design",
      dates: "June 2023 - Present",
      active: true,
      description:
        "Designed, developed and sold animated UI components for developers.",
      technologies: [
        "Next.js",
        "Typescript",
        "PostgreSQL",
        "Prisma",
        "TailwindCSS",
        "Stripe",
        "Shadcn UI",
        "Magic UI",
      ],
      links: [
        {
          type: "Website",
          href: "https://magicui.design",
          icon: <Icons.globe className="size-3" />,
        },
        {
          type: "Source",
          href: "https://github.com/magicuidesign/magicui",
          icon: <Icons.github className="size-3" />,
        },
      ],
      image: "",
      video: "https://cdn.magicui.design/bento-grid.mp4",
    },
  ],
  hackathons: [
    {
      title: "Hack Western 5",
      dates: "November 23rd - 25th, 2018",
      location: "London, Ontario",
      description:
        "Developed a mobile application which delivered bedtime stories to children using augmented reality.",
      image:
        "https://pub-83c5db439b40468498f97946200806f7.r2.dev/hackline/hack-western.png",
      mlh: "https://s3.amazonaws.com/logged-assets/trust-badge/2019/mlh-trust-badge-2019-white.svg",
      links: [],
    },
    {
      title: "Hack The North",
      dates: "September 14th - 16th, 2018",
      location: "Waterloo, Ontario",
      description:
        "Developed a mobile application which delivers university campus wide events in real time to all students.",
      image:
        "https://pub-83c5db439b40468498f97946200806f7.r2.dev/hackline/hack-the-north.png",
      mlh: "https://s3.amazonaws.com/logged-assets/trust-badge/2019/mlh-trust-badge-2019-white.svg",
      links: [],
    },
  ],
} as const;
