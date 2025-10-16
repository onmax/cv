export const RESUME_DATA = {
  name: "Máximo García",
  initials: "MG",
  location: "Lund, Sweden",
  locationLink: "https://www.google.com/maps/place/Lund",
  about: "Fullstack Developer passionate about creating innovative web applications.",
  summary: "Fullstack Developer with 7 years of experience building innovative web applications. Specialized in Vue ecosystem and modern frontend frameworks. Proven track record in blockchain, SSI, and data science projects. Passionate about solving complex challenges with creative and efficient solutions.",
  avatarUrl: "/maxi.jpg",
  personalWebsiteUrl: "https://onmax.dev",
  contact: {
    email: "maximogarciamtnez@gmail.com",
    tel: "+34 652 957 762",
    social: [
      {
        name: "GitHub",
        url: "https://github.com/onmax",
        icon: "github" as const,
      },
      {
        name: "LinkedIn",
        url: "https://www.linkedin.com/in/onmax/",
        icon: "linkedin" as const,
      },
      {
        name: "X",
        url: "https://x.com/onmax",
        icon: "x" as const,
      },
    ],
  },
  education: [
    {
      school: "Universidad Politécnica de Madrid (UPM)",
      degree: "Bachelor's Degree in Computer Science Engineering",
      start: "2016",
      end: "2021",
    },
    {
      school: "Uppsala University",
      degree: "Erasmus Exchange Program",
      start: "2019",
      end: "2020",
    },
  ],
  work: [
    {
      company: "Nimiq",
      link: "https://nimiq.com",
      badges: ["Remote", "Vue 3", "TypeScript", "Blockchain", "Web3"],
      title: "Frontend Developer",
      start: "2022",
      end: null as null | string,
      description: "Designed and implemented intuitive user experiences in Vue 3 for a cutting-edge crypto project. Drove new features in a fast-paced startup environment, solving complex problems with high-quality deliverables. Shared knowledge through technical articles and collaborations with design initiatives. Led development of multiple projects including Crypto Map, Nimiq Wallet, and design system libraries.",
    },
    {
      company: "Inetum (LACChain & Alastria)",
      link: "https://www.inetum.com",
      badges: ["Hybrid", "TypeScript", "Java", "Spring Boot", "Blockchain", "SSI"],
      title: "SSI Researcher & Fullstack Developer",
      start: "2020",
      end: "2021",
      description: "Ensured GDPR compliance and interoperability between blockchain networks, addressing W3C VC data model challenges and minimizing private data exposure risks. Contributed to Alastria Core & Architecture Team by specifying and improving Alastria ID. Led junior frontend developers, ensuring quality through PR reviews and deploying applications with Docker and nginx. Developed Java libraries for blockchain communication and JWT management.",
    },
    {
      company: "Freelancer",
      link: "",
      badges: ["Remote", "Vue", "Angular", "Django", "Shopify"],
      title: "Freelance Developer",
      start: "2017",
      end: "2021",
      description: "Built online stores for expanding clothing brands using Shopify. Developed websites for UPM's DIGA Department and Astronomical Observatory using Vanilla JS and Angular. Led projects for the Student Union association, coordinating teams on initiatives like Try IT! congress using Vue, Angular 2+, AngularJS, and Django 2.",
    },
  ],
  skills: [
    "Vue 3/Nuxt",
    "TypeScript/JavaScript",
    "React/Angular/Svelte",
    "Tailwind CSS/UnoCSS",
    "Node.js",
    "Spring Boot/Django",
    "Docker/Git/Bash",
    "MongoDB/PostgreSQL",
    "Blockchain/SSI",
    "Web3",
  ],
  projects: [
    {
      title: "Crypto Map",
      techStack: ["Vue 3", "Supabase", "Google Maps API", "Slack SDK"],
      description: "Interactive world map to explore businesses accepting cryptocurrencies. Built with Supabase and Database Functions, creating scripts to fetch, clean, and group data from multiple sources. Frontend prioritizes fast map rendering. Developed a Slack bot as control panel for managing user suggestions and reports. Open source.",
      link: {
        label: "map.nimiq.com",
        href: "https://map.nimiq.com",
      },
    },
    {
      title: "Radix Vue",
      techStack: ["Vue 3", "TypeScript", "Headless UI"],
      description: "Designed the foundation for Radix library for Vue, adding components like accordions, tabs, popovers and numerous refactored composables. Collaborated with @zernonia to achieve a stable v1 covering gaps in existing headless libraries. Currently a pillar in my projects.",
      link: {
        label: "radix-vue.com",
        href: "https://radix-vue.com",
      },
    },
    {
      title: "Nimiq Wallet",
      techStack: ["Vue 2", "USDC Polygon", "OpenGSN", "Uniswap"],
      description: "Led USDC support integration, creating a gasless transaction sending system via OpenGSN and Uniswap. Implemented guided tour system improving user onboarding, describing key wallet features.",
      link: {
        label: "wallet.nimiq.com",
        href: "https://wallet.nimiq.com",
      },
    },
    {
      title: "Nimiq Design System",
      techStack: ["TypeScript", "Tailwind CSS", "Figma", "Iconify"],
      description: "Suite of libraries to standardize design across Nimiq and community. Includes Tailwind CSS configuration with reusable classes, framework exporting icons from Figma to Iconify, and typography package inspired by Tailwind Typography adapted to Nimiq's identity.",
      link: {
        label: "developer.nimiq.com",
        href: "https://developer.nimiq.com",
      },
    },
    {
      title: "Albatross RPC Client",
      techStack: ["TypeScript", "Nimiq", "RPC"],
      description: "Fully typed Nimiq RPC client for TypeScript. Provides seamless integration with Nimiq blockchain for TypeScript applications.",
      link: {
        label: "github.com",
        href: "https://github.com/onmax/albatross-rpc-client-ts",
      },
    },
  ],
  publications: [
    {
      title: "LACChain Framework for Permissioned Public Blockchain Networks: From Blockchain Technology to Blockchain Networks",
      publisher: "Inter-American Development Bank (IDB)",
      city: "Washington, D.C.",
      year: "2020",
      url: "https://publications.iadb.org/publications/english/document/LACChain-Framework-for-Permissioned-Public-Blockchain-Networks-From-Blockchain-Technology-to-Blockchain-Networks.pdf",
      description: "Technical framework publication for LACChain permissioned blockchain networks. Served as the technical liaison between Alastria (Spain/Europe) and LACChain (Latin America), contributing to the architecture design, security specifications, and cross-organizational collaboration.",
    },
  ],
} as const;
