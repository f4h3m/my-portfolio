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
    "with 7+ years of expertise in crafting dynamic and user-friendly web applications. Proficient in a variety of modern frameworks, including React, Next.js, Vue, and Svelte, as well as WordPress. Skilled in delivering high-quality web solutions that meet client requirements and exceed expectations.",
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
      title: "InvoZen | Free Invoice Generator",
      href: "https://invo-zen.vercel.app/",
      active: true,
      description:
        "Free, simple invoice generator. It provides a user-friendly interface to quickly create, customize, and print professional invoices directly in the browser.",
      technologies: [
        "Next.js",
        "Typescript",
        "TailwindCSS",
        "Shadcn UI",
      ],
      links: [
        {
          type: "Website",
          href: "https://invo-zen.vercel.app/",
          icon: <Icons.globe className="size-3" />,
        },
      ],
      image: "/invozen.jpeg",
      video:
        "",
    },
    {
      title: "Img OG",
      href: "https://text-behind-img.vercel.app/",
      active: true,
      description:
        "Specialized online tool for image editing, primarily focused on creative text placement. It allows users to upload an image and then place text so that it appears behind the visual content.",
      technologies: [
        "Next.js",
        "Typescript",
        "TailwindCSS",
        "Shadcn UI",
      ],
      links: [
        {
          type: "Website",
          href: "https://text-behind-img.vercel.app/",
          icon: <Icons.globe className="size-3" />,
        }
      ],
      image: "/image-og.jpg",
      video: "",
    },
  ],
} as const;
