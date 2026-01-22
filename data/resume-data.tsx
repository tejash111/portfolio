import {
  Github,
  Linkedin,
  Twitter,
  Instagram,
} from "lucide-react";

export const RESUME_DATA = {
  name: "Tejash Rajput",
  location: "Based in India IN",
  locationLink: "https://www.google.com/maps/place/Delhi",
  about: "I build AI and Full Stack stuff",
  
  avatarUrl: "/avatar.png",
  personalWebsiteUrl: "https://tejashrajput.vercel.app/",
  contact: {
    email: "tejashsinghrajput@gmail.com",
    social: [
      {
        name: "LinkedIn",
        url: "https://www.linkedin.com/in/tejashrajput/",
        icon: Linkedin,
      },
      {
        name: "X",
        url: "https://x.com/tejashrajput11",
        icon: Twitter,
      },
      {
        name: "GitHub",
        url: "https://github.com/tejash111",
        icon: Github,
      },
      {
        name: "Instagram",
        url: "https://www.instagram.com/tejashrajput_",
        icon: Instagram,
      },
    ],
  },
  education: [
    {
      school: "Kiet Group of institutions",
      degree: "Bachelors Degree in Computer Science",
      start: "2024",
      end: "2028",
    },
  ],
  
  work: [
      {
      company: "Redstring",
      link: "#",
      logo: "/redstring.png",
      badges: ["Remote", "Frontend"],
      title: "Full Stack Developer",
      start: "2025 October",
      end: "Present",
      bulletPoints: [
        {
          text: "Developing responsive and interactive frontend applications using React, Framer Motion, LangChain, and Langgraph.",
        },
        {
          text: "Collaborated with backend developers working in Django to deliver end-to-end solutions, focusing on seamless integration and user experience.",
        },
      ],
    },
    {
      company: "/Stealth Startup",
      link: "#",
      logo: "/stealth.jpeg",
      badges: ["Remote", "Frontend"],
      title: "Founding Frontend developer",
      start: "2025 September",
      end: "Present",
      bulletPoints: [
        {
          text: "Developing responsive and interactive frontend applications using React, Framer Motion, LangChain, and Langgraph.",
        },
        {
          text: "Collaborated with backend developers working in Django to deliver end-to-end solutions, focusing on seamless integration and user experience.",
        },
      ],
    },
    {
      company: "Tensorik",
      link: "#",
      logo: "/tensorik.png",
      badges: ["Remote", "Full stack"],
      title: "Full stack developer",
      start: "2025 August",
      end: "2025 October",
      bulletPoints: [
        {
          text: "Built dynamic and responsive web applications using React for the frontend and node.js for the backend.",
        },
        {
          text: "Integrated Razorpay payment gateway to enable secure and seamless online transactions within the platform.",
        },
      ],
    },
    {
      company: "FOSSCU",
      link: "https://fosscu.org/",
      logo: "/foss.jpeg",
      badges: ["Remote", "Full-Time"],
      title: "Full Stack developer",
      start: "2024 September",
      end: "Present",
      bulletPoints: [
        {
          text: "Developed full-stack apps using JavaScript, TypeScript ,Next.js ,React, Express ,MongoDb and Postgresql.",
        },
        {
          text: "Collaborated with clients and teams to deliver 4+ full-stack freelance projects, overseeing end-to-end development and deployment.",
        },
      ],
    },
    {
      company: "GSSOC",
      link: "https://fosscu.org/",
      logo: "/gssoc.png",
      badges: ["Remote", "Part-Time"],
      title: "Full Stack developer",
      start: "2025 July",
      end: "Present",
      bulletPoints: [
        {
          text: "Mentor at GirlScript Summer of Code 2025 – Led contributors in implementing scalable features, optimizing codebases, and resolving real-world GitHub issues",
        },
        {
          text: "Conducted technical reviews, enforced best practices in Git/GitHub workflows, and guided contributors on full-stack development using modern tech stacks.",
        },
      ],
    },
  ],
  skills: [
    "HTML/CSS/Javascript",
    "TypeScript",
    "React/Next.js",
    "Tailwind CSS",
    "PostgreSQL",
    "Node.js",
    "Python",
    "Docker",
    "Docker Compose",
    "CI/CD Actions",
    "REST API",
    "GraphQL",
    "Full Stack Development",
    "AI Development",
    "Cloudinary",
    "Better-Auth",
  ],
  projects: [
    {
      title: "Loopex",
      techStack: ["Next.js", "Node.js", "TypeScript","Motion", "MongoDB", "Langgraph","socket.io"],
      description: "Ai based Hireing platform",
      image: "/loopex.png",
     
      github: "https://github.com/tejash111/loopex/",
      live: "https://loopex.vercel.app/auth",
    },
    {
      title: "TruelyCoded",
      techStack: ["React.js","TypeScript", "Motion"],
      description: "Agency website",
      image: "/truely.png",
      
      github: "https://github.com/tejash111/trulycoded-90424",
      live: "https://www.trulycoded.agency/",
    },
     {
      title: "SYNCFLIX",
      techStack: ["Next.js", "Node.js", "TypeScript", "Socket.io", "Motion"],
      description: "Watch Movies with friends remotely",
      image: "/movie.png",
      
      github: "https://github.com/tejash111/syncflix",
      live: "https://syncflix-six.vercel.app/",
    },
     {
      title: "AI Resume Builder",
      techStack: ["React.js", "Node.js", "TypeScript", "MongoDB", "Langchain"],
      description: "Ai based resume Builder",
      image: "/res.png",
     
      github: "https://github.com/tejash111/Resumae/",
      live: "https://www.resumae.in/",
    },
    {
      title: "DonkeyType",
      techStack: ["React.js", "Node.js", "TypeScript", "Socket.io"],
      description: "Multiplayer Monkeytype",
      image: "/type.png",
      
      github: "https://github.com/tejash111/donkeytype/",
      live: "https://donkeytype-alpha.vercel.app/",
    },
   {
      title: "Twiggle",
      techStack: ["React.js", "django.js", "TypeScript", "Postgressql", "Langchain"],
      description: "Traveliing webiste ",
      image: "/twiggle.png",
      link: {
        label: "github.com",
        href: "https://github.com/tejash111/traveller",
      },
      github: "https://github.com/tejash111/resumae/",
      live: "https://www.twiggle.co.in/",
    },
   
    {
      title: "Rental App",
      techStack: [
        "Next.js",
        "Node.js",
        "typescript",
        "Postgres",
        "drizzle-orm",
        "cloudinary",
        "Better-auth",
        "Paypal",
      ],
      description: "A rental app where someone",
      image: "/noknok.png",
      link: {
        label: "github.com",
        href: "https://github.com/tejash111/rentalapp/",
      },
      github: "https://github.com/tejash111/rentalapp/",
      live: "https://nok-nok-phi.vercel.app/",
    },
  ],
 
} as const;
