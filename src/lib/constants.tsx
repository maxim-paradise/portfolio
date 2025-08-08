import { SVGProps } from "react";
import { ProjectType, PropsTech } from "./types";
import { Linkedin, Github, Instagram, Youtube } from "lucide-react";

export const Projects: ProjectType[] = [
  {
    id: "Paradise Production",
    title: "Paradise Production",
    description:
      "Create a powerful SaaS website builder with project management and dashboard capabilities using Next.js 14, Bun, Stripe Connect, Prisma, and MySQL. This platform allows users to construct complete web solutions, manage client projects, and create custom dashboards, all while leveraging the latest technology stack. Build websites and funnels with ease, integrate subdomains, and manage media storage for sub-accounts directly within the app.",
    features: [
      "Fully functional website and funnel builder with subdomain hosting, role-based access control, and Stripe Connect integration. Manage unlimited funnels and charge application fees per sale or subscription, ensuring a flexible and scalable monetization model.",
      "Advanced project management tools including a Kanban board, media storage, notifications, and funnel performance metrics. Sub-accounts allow for agency and client separation with distinct dashboards and billing systems.",
      "Stripe-powered subscription plans, add-on products, and custom checkout forms for funnels. Sync products directly from Stripe, handle recurring payments, and create advanced billing pages with ease, all while providing analytics through custom dashboards.",
    ],
    techStack: ["TypeScript", "Tailwand CSS", " MongoDb", "Zustand"],
    github: "https://github.com/maxim-paradise/paradise-production",
    link: "https://paradiseproduction.vercel.app",
    img: "/projects/paradise-production.png",
  },
  {
    id: "AI Job Scraper",
    title: "AI Job Scraper",
    description:
      "AI Vacancy Parser is a comprehensive platform for parsing and analyzing vacancy postings using artificial intelligence. It features seamless integration of AI with dual systems: a backend built with Flask (Python) and a frontend using Next.js.",
    features: [
      "AI-powered parsing of job postings for efficient data extraction.",
      "Supports data scraping from multiple job sites with customizable configurations.",
      "Integration of advanced AI models for classification and analysis.",
      "User-friendly interface for viewing, filtering, and exporting extracted data.",
      "Dual system architecture with a robust backend on Flask and a modern frontend on Next.js.",
    ],
    techStack: [
      "Python",
      "Flask",
      "Next.js",
      "TypeScript",
      "React",
      "Tailwind CSS",
      "LLM",
      "Supabase",
      "PostgreSql",
    ],
    github: "Private",
    link: "https://job-ai-scraper.vercel.app",
    img: "/projects/ai-vacancy-parser.png",
  },
  {
    id: "Code Editor",
    title: "Code Editor",
    description:
      "Code Editor is an advanced web-based code editing platform that supports real-time collaboration, syntax highlighting, and project management, empowering developers to write and manage code efficiently.",
    features: [
      "Real-time code editing with syntax highlighting.",
      "Support for multiple programming languages.",
      "Integration with external APIs for enhanced development workflows.",
      "Customizable themes and layouts.",
    ],
    techStack: [
      "TypeScript",
      "React",
      "Next.js",
      "Monaco Editor",
      "Tailwind CSS",
    ],
    github: "https://github.com/maxim-paradise/code-editor",
    link: "https://editor-monaco.vercel.app",
    img: "/projects/code-editor-snippets.png",
  },
  {
    id: "Portfolio",
    title: "Portfolio",
    description:
      "Portfolio Website is the earlier version of this site, showcasing the various projects I've developed, certifications I've earned, and the technologies I specialize in, including my skills in web development, programming, and software engineering.",
    features: [
      "Showcasing various projects I have completed with detailed information.",
      "Highlighting the technologies used in each project.",
    ],
    techStack: ["JavaScript", "React", "Vercel", "CSS"],
    github: "Private",
    link: "https://ebat-port.vercel.app",
    img: "/projects/white-portfolio.png",
  },
  {
    id: "3D Portfolio",
    title: "3D Portfolio",
    description:
      "Learn to build a stunning 3D portfolio website using React, Three.js, and modern JavaScript libraries. This project-based course teaches advanced techniques in interactive 3D design, smooth animations, and routing to create a personalized portfolio that stands out.",
    features: [
      "Immersive 3D visualizations and animations powered by Three.js, providing a highly engaging user experience.",
      "Dynamic page transitions and routing with React Router, along with customizable interactive components using Framer Motion and React Tilt.",
    ],
    techStack: [
      "JavaScript",
      "Three.js",
      "React",
      "Framer Motion",
      "React Router",
    ],
    github: "https://github.com/maxim-paradise/paradise-production",
    link: "https://3dportfoliosigma.vercel.app",
    img: "/projects/3d-portfolio.png",
  },
  {
    id: "Inferno",
    title: "Inferno",
    description:
      "Create powerful and fully customizable websites and applications with our advanced SaaS platform. This site offers everything you need to build feature-rich web solutions using cutting-edge tools like Clerk Authentication, Neon Tech, Uploadcare, Ngrok, Next.js 14, Stripe, and Bun. Whether you're automating workflows, managing users, or setting up subscription models, our platform provides the flexibility and scalability required to bring your ideas to life.",
    features: [
      "Comprehensive drag-and-drop automation builder that allows you to create intricate workflows and automation processes by visually connecting nodes, ensuring smooth integration of services like Google Drive, Slack, Notion, and Discord",
      "Advanced user management and authentication powered by Clerk, enabling seamless onboarding, secure login flows, and multi-factor authentication, combined with powerful database solutions through Neon Tech for high performance and scalability.",
      "Full Stripe integration for subscription-based billing, enabling monetization through credit-based payment models, recurring subscriptions, and detailed financial reporting directly within your application.",
    ],
    techStack: [
      "TypeScript",
      "Neon Tech",
      "Uploadcare",
      "Ngrok",
      "Stripe",
      "Bun",
      "Aceternity UI",
      "Prisma",
    ],
    github: "https://github.com/maxim-paradise/inferno",
    link: "https://inferno-ashes.vercel.app",
    img: "/projects/inferno.png",
  },
  {
    id: "Clone Google Drive",
    title: "Clone Google Drive",
    description:
      "Clone Google Drive is a feature-rich project built using React, Appwrite, and modern JavaScript tools to replicate the core functionality of Google Drive. This project allows you to manage files, create folders, and share documents with ease. Learn how to integrate Appwrite for backend services, handle file uploads, and implement real-time data synchronization. This project-based approach teaches best practices in creating scalable and secure web applications.",
    features: [
      "Appwrite Integration: Seamless backend integration with Appwrite for user authentication, file storage, and real-time database features.",
      "File Management: Upload, download, and manage files with drag-and-drop functionality, ensuring a smooth user experience.",
      "Cloud Storage: Store and retrieve files from Appwrite is cloud storage, with full access control for privacy and security.",
    ],
    techStack: [
      "Typescript",
      "Appwrite",
      "Zod",
      "React",
      "Recharts",
      "react-hook-form",
    ],
    github: "https://github.com/maxim-paradise/google-drive",
    link: "https://its-drive.vercel.app",
    img: "/projects/drive.png",
  },
  {
    id: "Paradise Pizza",
    title: "Paradise Pizza",
    description:
      "Learn to build a fully functional e-commerce platform for pizza delivery using Next.js 14, Prisma, PostgreSQL. This project-based course covers product filtering, user authentication, and online payments, providing hands-on experience with modern web development technologies.",
    features: [
      "Comprehensive product filtering system with server-side rendering and URI parameter storage, ensuring smooth navigation and a seamless user experience.",
      "User authentication and registration with email/password, GitHub, and Google sign-ins, as well as profile management and email-based account verification.",
    ],
    techStack: ["TypeScript", "Tailwand CSS", "Prisma", "PostgreSQL"],
    github: "https://github.com/maxim-paradise/paradise-production",
    link: "https://paradise-pizza.vercel.app",
    img: "/projects/pizza.png",
  },
  {
    id: "Scrape",
    title: "Scrape",
    description:
      "Scrape is a full-stack SaaS application built with Next.js, React, TypeScript, Prisma, and React-Flow, offering a comprehensive web scraping solution. This platform allows users to create, manage, and execute custom web scraping workflows with ease.",
    features: [
      "Workflow Builder: Create and customize web scraping workflows using an intuitive drag-and-drop interface with React-Flow, enabling seamless task creation and management.",
      "Real-Time Execution Tracking: View detailed logs and execution status in real-time, allowing users to monitor and debug scraping processes with full transparency.",
      "AI-Powered Data Extraction: Leverage AI to automatically extract relevant data from web pages, improving accuracy and reducing manual configuration for complex scraping tasks.",
    ],
    techStack: [
      "OpenAi",
      "TypeScript",
      "Prisma",
      "Neon Tech",
      "React-Flow",
      "ReactQuery",
      "Shadcn Ui",
      "Clerk",
    ],
    github: "https://github.com/maxim-paradise/scrape",
    link: "https://scrape-browser.vercel.app",
    img: "/projects/scrape.png",
  },
];

export const socialLinks = [
  {
    name: "LinkedIn",
    displayName: "Let's Connect",
    subText: "on LinkedIn",
    icon: Linkedin,
    url: "https://www.linkedin.com",
    color: "#0A66C2",
    gradient: "from-[#0A66C2] to-[#0077B5]",
    isPrimary: true,
  },
  {
    name: "Instagram",
    displayName: "Instagram",
    subText: "@maxim_raiskiy",
    icon: Instagram,
    url: "https://www.instagram.com/maxim_raiskiy",
    color: "#E4405F",
    gradient: "from-[#833AB4] via-[#E4405F] to-[#FCAF45]",
  },
  {
    name: "Telegram",
    displayName: "Telegram",
    subText: "@maxim_paradise",
    icon: ({ className, ...props }: SVGProps<SVGSVGElement>) => (
      <svg
        xmlns="http://www.w3.org/2000/svg"
        className="icon icon-tabler icon-tabler-brand-telegram"
        width="32"
        height="32"
        viewBox="0 0 24 24"
        stroke-width="1.5"
        stroke="#ffffff"
        fill="none"
        stroke-linecap="round"
        stroke-linejoin="round"
      >
        <path stroke="none" d="M0 0h24v24H0z" fill="none" />
        <path d="M15 10l-4 4l6 6l4 -16l-18 7l4 2l2 6l3 -4" />
      </svg>
    ),
    url: "https://t.me/@maxim_paradise",
    color: "#0A66C2",
    gradient: "from-[#0A66C2] to-[#0077B5]",
  },
  {
    name: "GitHub",
    displayName: "Github",
    subText: "@maxim-paradise",
    icon: Github,
    url: "https://github.com/maxim-paradise/",
    color: "#ffffff",
    gradient: "from-[#333] to-[#24292e]",
  },
  {
    name: "TikTok",
    displayName: "Tiktok",
    subText: "@deary_koto",
    icon: ({ className, ...props }: SVGProps<SVGSVGElement>) => (
      <svg
        width="24px"
        height="24px"
        viewBox="0 0 45 45"
        version="1.1"
        xmlns="http://www.w3.org/2000/svg"
        xmlnsXlink="http://www.w3.org/1999/xlink"
        {...props}
      >
        <title>Tiktok</title>
        <g
          id="Icon/Social/tiktok-color"
          stroke="none"
          strokeWidth="8"
          fill="none"
          fillRule="evenodd"
        >
          <g id="Group-7" transform="translate(8.000000, 6.000000)">
            <path
              d="M29.5248245,9.44576327 C28.0821306,9.0460898 26.7616408,8.29376327 25.6826204,7.25637551 C25.5109469,7.09719184 25.3493143,6.92821224 25.1928245,6.75433469 C23.9066204,5.27833469 23.209151,3.38037551 23.2336408,1.42290612 L17.3560898,1.42290612 L17.3560898,23.7086204 C17.3560898,27.7935184 15.1520082,29.9535184 12.416498,29.9535184 C11.694049,29.9611102 10.9789469,29.8107429 10.3213959,29.5124571 C9.6636,29.2144163 9.07951837,28.7758041 8.60955918,28.2272327 C8.1398449,27.6789061 7.79551837,27.0340898 7.60180408,26.3385796 C7.4078449,25.6430694 7.36890612,24.9132735 7.48743673,24.2008653 C7.60596735,23.4884571 7.87902857,22.8105796 8.28751837,22.2154776 C8.69625306,21.6198857 9.23037551,21.1212735 9.85241633,20.7546612 C10.474702,20.3878041 11.1694776,20.1617633 11.8882531,20.0924571 C12.6070286,20.023151 13.3324163,20.1122939 14.0129878,20.3535184 L14.0129878,14.3584163 C13.4889061,14.2430694 12.9530694,14.1862531 12.416498,14.1894367 L12.3917633,14.1894367 C10.2542939,14.1943347 8.16604898,14.8325388 6.39127347,16.0234776 C4.61649796,17.2149061 3.23429388,18.9051918 2.41976327,20.8812735 C1.60523265,22.8578449 1.39486531,25.0310694 1.8151102,27.1269061 C2.2351102,29.2227429 3.2671102,31.1469061 4.78033469,32.6564571 C6.29380408,34.1660082 8.22066122,35.1933551 10.3174776,35.6082122 C12.4142939,36.0230694 14.5870286,35.8073143 16.561151,34.9878857 C18.5355184,34.1682122 20.2226204,32.7820898 21.409151,31.0041306 C22.5959265,29.2264163 23.2289878,27.136702 23.228498,24.9992327 L23.228498,12.8155592 C25.5036,14.392702 28.2244163,15.134498 31.1289061,15.1886204 L31.1289061,9.68551837 C30.5869469,9.66568163 30.049151,9.5851102 29.5248245,9.44576327"
              id="Fill-1"
              fill="#FE2C55"
            ></path>
            <path
              d="M25.195102,6.75428571 C24.7946939,6.47510204 24.4148571,6.1675102 24.0587755,5.83346939 C22.8210612,4.66016327 22.0062857,3.11020408 21.7420408,1.42530612 C21.6622041,0.954367347 21.6220408,0.47755102 21.6220408,0 L15.7444898,0 L15.7444898,22.6408163 C15.7444898,27.5069388 13.5404082,28.5183673 10.804898,28.5183673 C10.0829388,28.5262041 9.36783673,28.3758367 8.71028571,28.0773061 C8.0524898,27.7792653 7.46791837,27.3406531 6.99820408,26.7920816 C6.5282449,26.2437551 6.18440816,25.5989388 5.99044898,24.9034286 C5.7964898,24.2079184 5.75755102,23.4781224 5.87583673,22.7657143 C5.99461224,22.053551 6.26767347,21.3756735 6.67640816,20.7800816 C7.08489796,20.1847347 7.61902041,19.6861224 8.24106122,19.3195102 C8.86334694,18.952898 9.55787755,18.7266122 10.276898,18.6573061 C10.9959184,18.588 11.7208163,18.6773878 12.4016327,18.9183673 L12.4016327,12.9328163 C5.40489796,11.8236735 0,17.4783673 0,23.5760816 C0.00465306122,26.4426122 1.14514286,29.1898776 3.17191837,31.216898 C5.19869388,33.2434286 7.94595918,34.3839184 10.8124898,34.3885714 C16.7730612,34.3885714 21.6220408,30.7444898 21.6220408,23.5760816 L21.6220408,11.3924082 C23.8995918,12.9795918 26.6204082,13.7142857 29.524898,13.7632653 L29.524898,8.26040816 C27.9658776,8.18914286 26.4617143,7.66604082 25.195102,6.75428571"
              id="Fill-3"
              fill="#25F4EE"
            ></path>
            <path
              d="M21.6220653,23.5764245 L21.6220653,11.392751 C23.8996163,12.9794449 26.6204327,13.7141388 29.5251673,13.7633633 L29.5251673,9.44581224 C28.0822286,9.04613878 26.7617388,8.29381224 25.6824735,7.25617959 C25.5110449,7.09724082 25.3494122,6.92826122 25.1926776,6.75438367 C24.7922694,6.4752 24.4126776,6.16736327 24.056351,5.83356735 C22.8186367,4.66026122 22.0041061,3.11030204 21.7396163,1.42540408 L17.3730857,1.42540408 L17.3730857,23.7111184 C17.3730857,27.7957714 15.1690041,29.9560163 12.4334939,29.9560163 C11.6569224,29.9538122 10.8918612,29.7681796 10.2005143,29.414302 C9.50941224,29.0601796 8.91186122,28.5476082 8.45635102,27.9182204 C7.49071837,27.3946286 6.72712653,26.5636898 6.2865551,25.5571592 C5.84573878,24.5508735 5.75341224,23.4260571 6.02377959,22.3609959 C6.29390204,21.2959347 6.91177959,20.3516082 7.77896327,19.6771592 C8.64639184,19.0027102 9.71365714,18.6365878 10.8122694,18.6365878 C11.3564327,18.6412408 11.8961878,18.7362612 12.4090041,18.9182204 L12.4090041,14.1894857 C10.304351,14.1921796 8.24647347,14.8093224 6.48786122,15.9657306 C4.72924898,17.1221388 3.3470449,18.7666286 2.51047347,20.6978939 C1.67390204,22.6291592 1.41969796,24.7627102 1.77896327,26.8362612 C2.13822857,28.9098122 3.09553469,30.8334857 4.53308571,32.3704653 C6.36271837,33.6848327 8.55945306,34.3906286 10.8122694,34.3884296 C16.7730857,34.3884296 21.6220653,30.7445878 21.6220653,23.5764245"
              id="Fill-5"
              fill="#000000"
            ></path>
          </g>
        </g>
      </svg>
    ),
    url: "https://tiktok.com/@deary_koto",
    color: "black",
    gradient: "from-[#000000] via-[#25F4EE] to-[#FE2C55]",
  },
];

export const techStacks: PropsTech[] = [
  { icon: "html.svg", language: "HTML" },
  { icon: "css.svg", language: "CSS" },
  { icon: "typescript.png", language: "TypeScript" },
  { icon: "javascript.svg", language: "JavaScript" },
  { icon: "tailwind.svg", language: "Tailwind CSS" },
  { icon: "reactjs.svg", language: "ReactJS" },
  { icon: "postgresql.png", language: "PostgreSQL" },
  { icon: "vite.svg", language: "Vite" },
  { icon: "nodejs.svg", language: "Node JS" },
  { icon: "mongodb.svg", language: "MongoDB" },
  { icon: "zustand.svg", language: "Zustand" },
  { icon: "threejs.png", language: "Three.js" },
  { icon: "ngrok.jpeg", language: "Ngrok" },
  { icon: "framermotion.svg", language: "Framer Motion" },
  { icon: "shadcnui.png", language: "Shadcn UI" },
  { icon: "neon.png", language: "Neon Tech" },
  { icon: "vercel.svg", language: "Vercel" },
  { icon: "aceternityui.png", language: "Aceternity UI" },
  { icon: "openai.png", language: "OpenAI" },
  { icon: "reactquery.png", language: "React Query" },
  { icon: "prisma.svg", language: "Prisma" },
  { icon: "stripe.svg", language: "Stripe" },
  { icon: "bootstrap.svg", language: "Bootstrap" },
  { icon: "firebase.svg", language: "Firebase" },
  { icon: "MUI.svg", language: "Material UI" },
  { icon: "SweetAlert.svg", language: "SweetAlert2" },
];
