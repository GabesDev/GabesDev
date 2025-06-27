// @ts-nocheck
import IconBitbucket from "~icons/logos/bitbucket"
import IconBootstrap from "~icons/devicon/bootstrap"
import IconCSharp from "~icons/vscode-icons/file-type-csharp2"
import IconCSS from "~icons/vscode-icons/file-type-css"
import IconConfluence from "~icons/logos/confluence"
import IconDrupal from "~icons/logos/drupal-icon"
import IconGit from "~icons/logos/git-icon"
import IconGithub from "~icons/logos/github-icon"
import IconHTML from "~icons/vscode-icons/file-type-html"
import IconJira from "~icons/logos/jira"
import IconJQuery from "~icons/devicon/jquery-wordmark"
import IconJS from "~icons/vscode-icons/file-type-js-official"
import IconJson from "~icons/vscode-icons/file-type-json"
import IconMJML from "~icons/vscode-icons/file-type-mjml"
import IconNode from "~icons/vscode-icons/file-type-node"
import IconOptimizely from "~icons/logos/optimizely-icon"
import IconPwa from "~icons/logos/pwa"
import IconPHP from "~icons/vscode-icons/file-type-php"
import IconRazor from "~icons/vscode-icons/file-type-razor"
import IconReact from "~icons/vscode-icons/file-type-reactjs"
import IconSass from "~icons/vscode-icons/file-type-sass"
import IconSF from "~icons/logos/salesforce"
import IconSitecore from "~icons/simple-icons/sitecore"
import IconSQL from "~icons/vscode-icons/file-type-sql"
import IconSvelte from "~icons/vscode-icons/file-type-svelte"
import IconSVN from "~icons/vscode-icons/file-type-subversion"
import IconTS from "~icons/vscode-icons/file-type-typescript-official"
import IconVS from "~icons/logos/visual-studio"
import IconVue from "~icons/vscode-icons/file-type-vue"
import IconXML from "~icons/vscode-icons/file-type-xml"
import IconMeditation from "~icons/mdi/meditation"

import IconBrazil from "~icons/twemoji/flag-brazil"
import IconUSA from "~icons/twemoji/flag-united-states"
import IconFrance from "~icons/twemoji/flag-france"
import IconSpain from "~icons/twemoji/flag-spain"
import IconItaly from "~icons/twemoji/flag-italy"

export const languages = [
  {
    icon: IconBrazil,
    name: "Portuguese",
    level: "Native",
    description: "Well, it's my native language.",
  },
  {
    icon: IconUSA,
    name: "English",
    level: "C1",
    description:
      "Almost as comfortable as my native language. <br> I have been working on English-speaking teams for over 5 years, and I was an English teacher back in 2013.",
  },
  {
    icon: IconSpain,
    name: "Spanish",
    level: "B1",
    description:
      "As a Portuguese speaker, Spanish feels natural to me. <br> After working with a Spanish-speaking team, I noticed I could understand pretty much everything I heard (even though I'd fall back to English most of the time when I needed to speak).",
  },
  {
    icon: IconFrance,
    name: "French",
    level: "B1",
    description:
      "I can understand almost everything I hear, but I still have some difficulty speaking. I can work using this language on a French-speaking team.",
  },
  {
    icon: IconItaly,
    name: "Italian",
    level: "A2",
    description:
      "I understand most of what I hear in Italian, but I still can't express myself clearly. As a Portuguese speaker who understands Spanish and French, I believe I could work on an Italian-speaking team, especially if some team members are bilingual.",
  },
]

export const techCards = [
  {
    icon: IconHTML,
    name: "HTML",
    description: "Years of experience: 15+",
  },
  {
    icon: IconCSS,
    name: "CSS",
    description: "Years of experience: 15+",
  },
  {
    icon: IconJS,
    name: "JavaScript",
    description: "Years of experience: 10+",
  },
  {
    icon: IconNode,
    name: "NodeJS",
    description: "Years of experience: 5+",
  },
  {
    icon: IconXML,
    name: "SOAP / REST APIs",
    description: "Years of experience: 10+",
  },
  {
    icon: IconSass,
    name: "Sass",
    description: "Years of experience: 10+",
  },
  {
    icon: IconTS,
    name: "TypeScript",
    description: "Years of experience: 5+",
  },
  {
    icon: IconReact,
    name: "ReactJS/NextJS",
    description: "Years of experience: 5+",
  },
  {
    icon: IconSvelte,
    name: "Svelte",
    description: "Years of experience: 3+",
  },
  {
    icon: IconVue,
    name: "VueJS",
    description: "Years of experience: 3+",
  },
  {
    icon: IconPHP,
    name: "PHP",
    description: "Years of experience: 3+",
  },
  {
    icon: IconSQL,
    name: "SQL Databases",
    description: "Years of experience: 3+",
  },
  {
    icon: IconSF,
    name: "SFCC",
    description: "Years of experience: 6+",
  },
  {
    icon: IconSitecore,
    name: "Sitecore",
    description: "Years of experience: 4+",
    extraClass: "text-red-600",
  },
  {
    image: "/images/epi.jpeg",
    name: "Episerver",
    description: "Years of experience: 1+",
  },
  {
    icon: IconOptimizely,
    name: "Optimizely",
    description: "Years of experience: 1+",
  },
]

export const softSkills = [
  {
    name: "Accountable",
  },
  {
    name: "Approachable",
  },
  {
    name: "Communicative",
  },
  {
    name: "Friendly",
  },
  {
    name: "Good with time management",
  },
  {
    name: "Helpful",
  },
  {
    name: "Patient",
  },
  {
    name: "Resilient",
  },
  {
    name: "Responsive",
  },
  {
    name: "Self-aware",
  },
  {
    name: "Self-learner",
  },
  {
    name: "Works well under pressure",
  },
]

export const labs = [
  {
    name: "Jokenpo [Multiplayer Game]",
    description: [
      "Own project ",
      "Written to get familiar with SvelteKit, state management, sockets, and servers.",
    ],
    image: "jokenpo.png",
    tech: "SvelteKit, Socket.Io, Node.js",
    code: "https://github.com/GabesDev/sveltekit-jokenpo/",
    address: "https://jokenpo.gabes.dev/",
  },
  {
    name: "Matching Game [Game]",
    description: [
      "Tutorial project ",
      "Written to understand how SvelteKit manages state and reactivity.",
    ],
    image: "memory.png",
    tech: "SvelteKit",
    code: "https://github.com/GabesDev/svelte-memoria",
    address: "https://memory.gabes.dev/",
  },
  {
    name: "JSX Renderer [Code]",
    description: [
      "Tutorial Project ",
      "Built a JSX renderer to better understand React's inner workings.",
    ],
    image: "code.png",
    tech: "JavaScript",
    code: "https://github.com/GabesDev/jsx-renderer",
  },
  {
    name: "Food Recipes [App]",
    description: [
      "Tutorial Project ",
      "Fully functional app using free APIs and animations.",
    ],
    image: "foodrecipe.png",
    tech: "React Native, NativeWind, Expo, Reanimate, REST API",
    code: "https://github.com/GabesDev/react-native-recipe-app",
  },
  {
    name: "Expensify [App]",
    description: [
      "Tutorial Project ",
      "Fully functional app to study the Back-End integration, authentication (log-in/sign-up) and React Native UI development",
    ],
    image: "expensify.png",
    tech: "React Native, Firebase",
    code: "https://github.com/GabesDev/react-native-expensify/",
  },
  {
    name: "AppStore UI [App]",
    description: [
      "Tutorial Project ",
      "UI-focused app, using NativeWind (Tailwind for React Native) and other libraries",
    ],
    image: "appstore.png",
    tech: "React Native, NativeWind, Expo",
    code: "https://github.com/GabesDev/react-native-storeUi",
  },
  {
    name: "Animated Login UI [App]",
    description: [
      "Tutorial Project ",
      "UI-focused app, using NativeWind (Tailwind for React Native) and animation libraries",
    ],
    image: "login-animated.png",
    tech: "React Native, NativeWind, Expo, React Native Animated",
    code: "https://github.com/GabesDev/react-native-animated-loginUi",
  },
  {
    name: "Login UI [App]",
    description: [
      "Tutorial Project ",
      "UI-focused APP, using nativewind (Tailwind for react native) and some other libraries.",
    ],
    image: "loginui.png",
    tech: "React Native, NativeWind, Expo",
    code: "https://github.com/GabesDev/react-native-loginUi/",
  },
]

export let projects = [
  {
    name: "IskayPet",
    position: "Senior Front-end Engineer",
    logo: "/portfolio/iskaypet/logo.png",
    company: "Contractor | Intersoftware",
    date: "2024",
    content: {
      about: [
        "One of the best teams of people I've worked with.",
        "It is a Salesforce Commerce Cloud-based project with a great and multi-national team.",
        "There are three separate stores under the same umbrella: Kiwoko, Tiendanimal, and Animalis, available in Spanish, Portuguese, and French.",
        "Part of the front-end team focused on growth. Worked on checkout unification and initial planning for PDP unification.",
      ],
      responsibilities: [
        "Refactoring code",
        "Creation of complex front-end components",
        "Local inventory management (debugging)",
        "Changes on ISML templates",
        "Post-deploy support",
        "Technical investigation and risk analysis",
        "General best practices (Clean Code, GDPR, ADA, etc.)",
        "Peer review on a daily basis",
        "Agile environment",
      ],
      images: [
        {
          url: "/portfolio/iskaypet/screenshot.png",
          title: "Animalis View",
        },
        {
          url: "/portfolio/iskaypet/screenshot2.png",
          title: "Kiwoko View",
        },
        {
          url: "/portfolio/iskaypet/screenshot3.png",
          title: "Tiendanimal View",
        },
      ],
      tech: [
        {
          icon: IconSF,
          name: "Salesforce Commerce Cloud",
        },
        {
          icon: IconXML,
          name: "ISML, XML",
        },
        {
          icon: IconCSS,
          name: "CSS",
        },
        {
          icon: IconSass,
          name: "SASS",
        },
        {
          icon: IconJS,
          name: "JavaScript",
        },
        {
          icon: IconJson,
          name: "RESTful APIs",
        },
        {
          icon: IconJira,
          name: "Jira",
        },
        {
          icon: IconConfluence,
          name: "Confluence",
        },
        {
          icon: IconGit,
          name: "Git",
        },
        {
          icon: IconGithub,
          name: "GitHub",
          extraClass: "dark:[&>path]:fill-white",
        },
      ],
      links: [
        {
          href: "https://animalis.com/",
          name: "Animalis.com [FR]",
        },
        {
          href: "https://tiendanimal.com/",
          name: "Tiendanimal.com [ES]",
        },
        {
          href: "https://kiwoko.com/",
          name: "Kiwoko.com [ES]",
        },
      ],
    },
  },
  {
    name: "the Walt Disney Company",
    position: "Senior Front-end Engineer",
    logo: "/portfolio/disney/logo.png",
    company: "Contractor | Adapt Talent",
    date: "2022 - 2023",
    content: {
      about: [
        "One of the most interesting projects I've worked on.",
        "It was a Salesforce Commerce Cloud-based project with a huge team of engineers.",
        "I was part of the front-end team focused on the Web.",
        "Over time, my development responsibilities evolved to include proofs of concept in new stacks, PWAs using OCAPI, experimental technologies, highly cached content, investigation and documentation, knowledge transfers and training, and even rebranding.",
        "Most of the third-party services had to be investigated for the rebranding project, so I frequently had to have conversations with external teams.",
      ],
      responsibilities: [
        "Content asset creation",
        "Content slots and Custom objects management",
        "Complex components creation",
        "Local inventory management (debugging)",
        "Changes on ISML templates",
        "Post-deploy support",
        "Technical investigation and risk analysis",
        "Development of proofs of concept in experimental stacks",
        "Development of PWAs (using OCAPI) and highly cached pages for the Disney+ Shop project",
        "General best practices (Clean Code, GDPR, ADA, etc.)",
        "Investigation and debugging of third-party services",
        "Review, discussion, and refinement of usability and accessibility in components",
        "Peer review on a daily basis",
        "Creation of functional, technical, and training documentation",
        "Agile environment",
      ],
      images: [
        {
          url: "/portfolio/disney/screenshot.png",
          title: "shopDisney Desktop View",
        },
        {
          url: "/portfolio/disney/screenshot3.png",
          title: "Disney+ Integration",
        },
        {
          url: "/portfolio/disney/screenshot2.png",
          title: "shopDisney Mobile View",
          mobile: true,
        },
      ],
      tech: [
        {
          icon: IconSF,
          name: "Salesforce Commerce Cloud",
        },
        {
          icon: IconXML,
          name: "ISML, XML",
        },
        {
          icon: IconCSS,
          name: "CSS",
        },
        {
          icon: IconSass,
          name: "SASS",
        },
        {
          icon: IconJS,
          name: "JavaScript",
        },
        {
          icon: IconJson,
          name: "RESTful APIs",
        },
        {
          icon: IconJira,
          name: "Jira",
        },
        {
          icon: IconConfluence,
          name: "Confluence",
        },
        {
          icon: IconGit,
          name: "Git",
        },
        {
          icon: IconGithub,
          name: "GitHub",
          extraClass: "dark:[&>path]:fill-white",
        },
        {
          icon: IconPwa,
          name: "Progressive Web Apps",
        },
      ],
      links: [
        {
          href: "https://shopdisney.com/",
          name: "ShopDisney.com",
        },
      ],
    },
  },
  {
    name: "Saks OFF 5th",
    position: "Senior Full-stack Engineer",
    logo: "/portfolio/saks/logo.png",
    company: "Contractor | Stott and May",
    date: "2021",
    content: {
      about: [
        "It was a Salesforce Commerce Cloud-based project with a big team of developers.",
        "I was part of the team focused on maintenance and development.",
        "In this project, I worked as a full-stack engineer.",
        "In this specific project, developers and QA had to work closer than usual. That gave me the chance to improve my testing.",
      ],
      responsibilities: [
        "Post-deploy support",
        "Technical investigation and risk analysis",
        "Solving issues in both the front-end and back-end",
        "Working closely with the QA team",
        "Knowledge-sharing and support for new team members",
        "General best practices (Clean Code, GDPR, ADA, etc.)",
        "Review, discussion, and refinement of usability and accessibility in components",
        "Peer review on a daily basis",
        "Creation of functional, technical, and training documentation",
        "Agile environment",
      ],
      images: [
        {
          url: "/portfolio/saks/screenshot.png",
          title: "Saks OFF 5th",
        },
      ],
      tech: [
        {
          icon: IconSF,
          name: "Salesforce Commerce Cloud",
        },
        {
          icon: IconXML,
          name: "ISML, XML",
        },
        {
          icon: IconCSS,
          name: "CSS",
        },
        {
          icon: IconSass,
          name: "SASS",
        },
        {
          icon: IconJS,
          name: "JavaScript",
        },
        {
          icon: IconJira,
          name: "Jira",
        },
        {
          icon: IconConfluence,
          name: "Confluence",
        },
        {
          icon: IconBitbucket,
          name: "Bitbucket",
        },
        {
          icon: IconGit,
          name: "Git",
        },
      ],
      links: [
        {
          href: "https://www.saksoff5th.com/",
          name: "SaksOFF5th.com",
        },
      ],
    },
  },
  {
    name: "Yeti",
    position: "Senior Front-end Engineer",
    logo: "/portfolio/yeti/logo.png",
    company: "Contractor | Stott and May",
    date: "2021",
    content: {
      about: [
        "It was a Salesforce Commerce Cloud-based project with a small team of developers.",
        "I was part of the team focused on maintenance and post-deploy support.",
        "This project had many front-end issues in both JavaScript and CSS.",
        "Although I worked as a front-end engineer, I also resolved back-end bugs.",
      ],
      responsibilities: [
        "Post-deploy support",
        "Investigation and debugging",
        "Refactoring",
        "General good practices (Clean Code, GDPR, ADA, etc)",
        "Agile environment",
      ],
      images: [
        {
          url: "/portfolio/yeti/screenshot.png",
          title: "Yeti",
        },
      ],
      tech: [
        {
          icon: IconSF,
          name: "Salesforce Commerce Cloud",
        },
        {
          icon: IconXML,
          name: "ISML, XML",
        },
        {
          icon: IconCSS,
          name: "CSS",
        },
        {
          icon: IconSass,
          name: "SASS",
        },
        {
          icon: IconJS,
          name: "JavaScript",
        },
        {
          icon: IconJira,
          name: "Jira",
        },
        {
          icon: IconConfluence,
          name: "Confluence",
        },
        {
          icon: IconBitbucket,
          name: "Bitbucket",
        },
        {
          icon: IconGit,
          name: "Git",
        },
      ],
      links: [
        {
          href: "https://www.yeti.com/",
          name: "Yeti.com",
        },
      ],
    },
  },
  {
    name: "Deciem Projects",
    position: "Front-end Engineer",
    logo: "/portfolio/deciem/logo.png",
    company: "Valtech",
    date: "2020 - 2021",
    content: {
      about: [
        "The Deciem project was one of my favorite projects to work on.",
        "The team consisted of a small but highly efficient group, and the creativity involved in both the designs and functionality created the perfect balance between challenging and fun.",
        "There were 4 separate stores under the same umbrella: Deciem, Niod, the Ordinary, and Hylamide.",
        "Each store featured unique designs and specifications.",
        "I was part of the team from the beginning, and we built the stores from scratch on SFCC. That means all the components, functionalities, data, and configuration were made by us.",
      ],
      responsibilities: [
        "Content asset creation",
        "Content slots and Custom objects management",
        "Local inventory management (debugging)",
        "Complex components creation",
        "Changes on ISML templates",
        "Post-deploy support",
        "Technical investigation and risk analysis",
        "General good practices (Clean Code, GDPR, ADA, etc)",
        "Investigation and debugging of third-party services",
        "Review, discussion, and refinement of usability and accessibility in components",
        "Peer review on a daily basis",
        "Creation of functional, technical, and training documentation",
        "Agile environment",
      ],
      images: [
        {
          url: "/portfolio/deciem/screenshot.png",
          title: "Deciem",
        },
        {
          url: "/portfolio/deciem/screenshot-niod.png",
          title: "Niod",
        },
        {
          url: "/portfolio/deciem/screenshot-theOrdinary.png",
          title: "The Ordinary",
        },
      ],
      tech: [
        {
          icon: IconSF,
          name: "Salesforce Commerce Cloud",
        },
        {
          icon: IconXML,
          name: "ISML, XML",
        },
        {
          icon: IconCSS,
          name: "CSS",
        },
        {
          icon: IconSass,
          name: "SASS",
        },
        {
          icon: IconJS,
          name: "JavaScript",
        },
        {
          icon: IconJson,
          name: "RESTful APIs",
        },
        {
          icon: IconJira,
          name: "Jira",
        },
        {
          icon: IconConfluence,
          name: "Confluence",
        },
        {
          icon: IconGit,
          name: "Git",
        },
        {
          icon: IconBitbucket,
          name: "Bitbucket",
        },
      ],
      links: [
        {
          href: "https://deciem.com/",
          name: "Deciem.com",
        },
        {
          href: "https://Niod.com/",
          name: "Niod.com",
        },
        {
          href: "https://theordinary.com/",
          name: "theOrdinary.com",
        },
      ],
    },
  },
  {
    name: "Champion Projects",
    position: "Front-end Engineer",
    logo: "/portfolio/champion/logo-orijen.png",
    company: "Valtech",
    date: "2019 - 2020",
    content: {
      about: [
        "The Champion Petfoods project was my first SFCC project.",
        "The team consisted of a small but highly efficient group (the same team present on the Deciem/theOrdinary Projects).",
        "It was a great learning experience.",
        "There were 3 separate stores under the same umbrella: Champion Petfoods, Orijen Petfoods, and Acana Petfoods.",
        "Each store featured unique designs and specifications.",
        "I was part of the team from the start, and we built the stores from scratch on SFCC.",
        "That means all the components, functionalities, data, and configuration were made by us.",
      ],
      responsibilities: [
        "Content asset creation",
        "Content entry",
        "Content slots and Custom objects management",
        "Complex components creation",
        "Changes on ISML templates",
        "General best practices (Clean Code, GDPR, ADA, etc.)",
        "Review, discussion, and refinement of usability and accessibility in components",
        "Peer review on a daily basis",
        "Agile environment",
      ],
      images: [
        {
          url: "/portfolio/champion/screenshot.png",
          title: "Champion Petfoods",
        },
        {
          url: "/portfolio/champion/screenshot-acana.png",
          title: "Acana petfoods",
        },
        {
          url: "/portfolio/champion/screenshot-orijen.png",
          title: "Orijen",
        },
      ],
      tech: [
        {
          icon: IconSF,
          name: "Salesforce Commerce Cloud",
        },
        {
          icon: IconXML,
          name: "ISML, XML",
        },
        {
          icon: IconCSS,
          name: "CSS",
        },
        {
          icon: IconSass,
          name: "SASS",
        },
        {
          icon: IconJS,
          name: "JavaScript",
        },
        {
          icon: IconJson,
          name: "RESTful APIs",
        },
        {
          icon: IconJira,
          name: "Jira",
        },
        {
          icon: IconConfluence,
          name: "Confluence",
        },
        {
          icon: IconGit,
          name: "Git",
        },
        {
          icon: IconBitbucket,
          name: "Bitbucket",
        },
      ],
      links: [
        {
          href: "https://championpetfoods.com/",
          name: "ChampionPetfoods.com",
        },
        {
          href: "https://acana.com/",
          name: "Acana.com",
        },
        {
          href: "https://orijenpetfoods.com/",
          name: "OrijenPetfoods.com",
        },
      ],
    },
  },
  {
    name: "Raid Vietnam",
    position: "Front-end Engineer",
    logo: "/portfolio/raid/logo.png",
    company: "Valtech",
    date: "2019",
    content: {
      about: [
        "This was one of the weirdest projects I've worked on. The team was very small, we weren't using Git, and ramping up felt like a lonely walk in the dark.",
        "It was a challenge: not only did I not understand a single word of what was in production, but the code was incredibly old and messy.",
        "This project had many front-end issues, primarily in CSS — a MASSIVE 30,000+ LINE FILE.",
        "In addition to that, the fonts they wanted were incompatible with the Vietnamese alphabet.",
      ],
      responsibilities: [
        "Constant bug fixing",
        "Improving and refactoring legacy code",
        "Dealing with different languages, internationalization, and writing systems",
      ],
      images: [
        {
          url: "/portfolio/raid/screenshot.png",
          title: "Raid Vietnam",
        },
      ],
      tech: [
        {
          icon: IconSitecore,
          name: "Sitecore",
          extraClass: "text-red-600",
        },
        {
          icon: IconCSharp,
          name: "C# / ASP.NET",
        },
        {
          icon: IconRazor,
          name: "Razor",
        },
        {
          icon: IconVS,
          name: "Visual Studio IDE",
        },
        {
          icon: IconCSS,
          name: "CSS",
        },
        {
          icon: IconJS,
          name: "JavaScript",
        },
        {
          icon: IconSVN,
          name: "SVN",
        },
      ],
      links: [
        {
          href: "https://www.raid.vn/vi-vn",
          name: "Raid.vn/vi-vn",
        },
      ],
    },
  },
  {
    name: "SCJohnson",
    position: "Front-end Engineer",
    logo: "/portfolio/scjohnson/logo.png",
    company: "Valtech",
    date: "2019",
    content: {
      about: [
        "Almost the same situation as the Raid project.",
        "The code on this project was wild. It felt like at least a hundred engineers had started refactoring it, only to stop after losing their minds.",
        "Debugging and fixing the Arabic version of the website added to the challenge — at least I learned a new alphabet!",
        "Did you know that in addition to writing from right to left, icons must also be repositioned to the opposite side of the screen?",
        "Now imagine having to adjust everything manually because there are no universal rules. Yep, that was crazy.",
      ],
      responsibilities: [
        "Constant bug fixing",
        "Improving and refactoring legacy code",
        "Dealing with different languages, internationalization, and writing systems",
        "Component development and documentation",
        "Implementing third-party services",
      ],
      images: [
        {
          url: "/portfolio/scjohnson/screenshot.png",
          title: "SCJohnson",
        },
      ],
      tech: [
        {
          icon: IconSitecore,
          name: "Sitecore",
          extraClass: "text-red-600",
        },
        {
          icon: IconCSharp,
          name: "C# / ASP.NET",
        },
        {
          icon: IconRazor,
          name: "Razor",
        },
        {
          icon: IconVS,
          name: "Visual Studio IDE",
        },
        {
          icon: IconCSS,
          name: "CSS",
        },
        {
          icon: IconJS,
          name: "JavaScript",
        },
        {
          icon: IconSVN,
          name: "SVN",
        },
      ],
      links: [
        {
          href: "https://www.scjohnson.com/en/",
          name: "SCJohnson.com",
        },
      ],
    },
  },
  {
    name: "Advisian",
    position: "Front-end Engineer",
    logo: "/portfolio/advisian/logo.png",
    company: "Valtech",
    date: "2019",
    content: {
      about: [
        "Even though I spent little time on this project (a few months only), it was a fun one to work on.",
        "Advisian was going through a redesign, so the changes were focused on the front-end.",
      ],
      responsibilities: [
        "Redesign the website",
        "Component development and documentation",
        "General best practices (Clean Code, GDPR, ADA, etc.)",
        "Review, discussion, and refinement of usability and accessibility in components",
        "Agile environment",
      ],
      images: [
        {
          url: "/portfolio/advisian/screenshot.png",
          title: "Advisian",
        },
      ],
      tech: [
        {
          icon: IconSitecore,
          name: "Sitecore",
          extraClass: "text-red-600",
        },
        {
          icon: IconCSharp,
          name: "C# / ASP.NET",
        },
        {
          icon: IconRazor,
          name: "Razor",
        },
        {
          icon: IconVS,
          name: "Visual Studio IDE",
        },
        {
          icon: IconCSS,
          name: "CSS",
        },
        {
          icon: IconSass,
          name: "SASS",
        },
        {
          icon: IconJS,
          name: "JavaScript",
        },
        {
          icon: IconGit,
          name: "Git",
        },
        {
          icon: IconJira,
          name: "Jira",
        },
        {
          icon: IconConfluence,
          name: "Confluence",
        },
        {
          icon: IconBitbucket,
          name: "Bitbucket",
        },
      ],
      links: [
        {
          href: "https://www.advisian.com/",
          name: "Advisian.com",
        },
      ],
    },
  },
  {
    name: "BLG",
    position: "Front-end Engineer",
    logo: "/portfolio/blg/logo.png",
    company: "Valtech",
    date: "2018 - 2019",
    content: {
      about: [
        "The most challenging project I've ever worked on (so far).",
        "Something went wrong in the planning and design phase of this project. Long story short - development started completely delayed, and it was up to the final development team to deliver on an acceptable deadline.",
        "The client frequently requested changes, and we had to learn their third-party services on the fly during development.",
        "A lot of screen sharing happened while live-coding (on devTools) for non-tech people, to see if they were happy about the looks of a component, or the functionality of a menu.",
        "Their search service returned a black-box markup, requiring all styling to be done using predefined classes and structures. And their final design was completely different from what we got out-of-the-box. Functionality included (!)",
        "Toward the end of the project, 12-hour shifts became the norm. Fortunately, we were able to successfully deliver it.",
        "To this day, I still have nightmares about this project.",
      ],
      responsibilities: [
        "Constantly under pressure, as the deadline wasn't properly set and the scope would suffer drastic changes every week",
        "Component development and documentation",
        "Live coding with clients",
        "Discussions directly with the clients, to explain technical limitations (as support for IE6 in 2018) and try to limit the scope changes",
        "Implementing third-party services",
        "General good practices (Clean Code, GDPR, ADA, etc)",
        "Review, discussion, and refinement of usability and accessibility in components",
        "A less-than-agile environment",
      ],
      images: [
        {
          url: "/portfolio/blg/screenshot.png",
          title: "BLG",
        },
      ],
      tech: [
        {
          icon: IconSitecore,
          name: "Sitecore",
          extraClass: "text-red-600",
        },
        {
          icon: IconCSharp,
          name: "C# / ASP.NET",
        },
        {
          icon: IconRazor,
          name: "Razor",
        },
        {
          icon: IconVS,
          name: "Visual Studio IDE",
        },
        {
          icon: IconCSS,
          name: "CSS",
        },
        {
          icon: IconSass,
          name: "SASS",
        },
        {
          icon: IconJS,
          name: "JavaScript",
        },
        {
          icon: IconGit,
          name: "Git",
        },
        {
          icon: IconJira,
          name: "Jira",
        },
        {
          icon: IconJQuery,
          name: "jQuery",
          extraClass: "bg-white",
        },
        {
          icon: IconBootstrap,
          name: "Bootstrap",
        },
        {
          icon: IconMeditation,
          name: "Self-Control",
          extraClass: "text-blue-400",
        },
      ],
      links: [
        {
          href: "https://www.blg.com/en",
          name: "BLG.com",
        },
      ],
    },
  },
  {
    name: "General Mills",
    position: "Front-end Engineer",
    logo: "/portfolio/generalmills/logo.png",
    company: "Valtech",
    date: "2018",
    content: {
      about: [
        "Legacy code — handled by numerous agencies yet never refactored.",
        "Full of front-end bugs: nothing rendered correctly, and old techniques were mixed with new ones. Float + Flex? Why not?",
        "It was a pretty big challenge to make things appear as they should.",
        "Took me a few days to wrap my head around it. Great learning experience.",
      ],
      responsibilities: [
        "Constant bug fixing",
        "Improving and refactoring legacy code",
        "Development of new components",
      ],
      images: [
        {
          url: "/portfolio/generalmills/screenshot.png",
          title: "General Mills",
        },
      ],
      tech: [
        {
          icon: IconSitecore,
          name: "Sitecore",
          extraClass: "text-red-600",
        },
        {
          icon: IconCSharp,
          name: "C# / ASP.NET",
        },
        {
          icon: IconRazor,
          name: "Razor",
        },
        {
          icon: IconVS,
          name: "Visual Studio IDE",
        },
        {
          icon: IconCSS,
          name: "CSS",
        },
        {
          icon: IconSass,
          name: "Sass",
        },
        {
          icon: IconJS,
          name: "JavaScript",
        },
        {
          icon: IconJQuery,
          name: "jQuery",
          extraClass: "bg-white",
        },
        {
          icon: IconBootstrap,
          name: "Bootstrap",
        },
      ],
      links: [
        {
          href: "https://generalmills.com/",
          name: "GeneralMills.com",
        },
      ],
    },
  },
  {
    name: "Amica Senior Lifestyles",
    position: "Front-end Engineer",
    logo: "/portfolio/amica/logo.png",
    company: "Valtech",
    date: "2018",
    content: {
      about: [
        "This was the first project I worked on from the start of development to deployment.",
        "I worked with a small team of developers and wrote most of the components myself.",
        "At one point, due to my lack of experience at the time, I had to rewrite some container and component integrations to fix mismatched paddings and margins.",
        "Since it was a large CMS, authors needed the flexibility to use any component anywhere. This project was an incredible learning experience.",
      ],
      responsibilities: [
        "Pixel-perfect design development",
        "Component development and documentation",
        "General best practices (Clean Code, GDPR, ADA, etc.)",
        "Review, discussion, and refinement of usability and accessibility in components",
        "Agile environment",
      ],
      images: [
        {
          url: "/portfolio/amica/screenshot.png",
          title: "Advisian",
        },
      ],
      tech: [
        {
          icon: IconSitecore,
          name: "Sitecore",
          extraClass: "text-red-600",
        },
        {
          icon: IconCSharp,
          name: "C# / ASP.NET",
        },
        {
          icon: IconRazor,
          name: "Razor",
        },
        {
          icon: IconVS,
          name: "Visual Studio IDE",
        },
        {
          icon: IconCSS,
          name: "CSS",
        },
        {
          icon: IconSass,
          name: "SASS",
        },
        {
          icon: IconJS,
          name: "JavaScript",
        },
        {
          icon: IconJQuery,
          name: "jQuery",
          extraClass: "bg-white",
        },
        {
          icon: IconBootstrap,
          name: "Bootstrap",
        },
        {
          icon: IconGit,
          name: "Git",
        },
      ],
      links: [
        {
          href: "https://www.amica.ca/",
          name: "Amica.ca",
        },
      ],
    },
  },
  {
    name: "Navico",
    position: "Front-end Engineer",
    logo: "/portfolio/navico/logo.png",
    company: "Valtech",
    date: "2018",
    content: {
      about: [
        "An EpiServer project. This one was an internal Customer Portal.",
        "It was a small team of developers.",
      ],
      responsibilities: [
        "Pixel-perfect design development",
        "Component development and documentation",
        "General best practices (Clean Code, GDPR, ADA, etc.)",
        "Agile environment",
      ],
      images: [
        {
          url: "/portfolio/navico/screenshot.png",
          title: "Navico",
        },
      ],
      tech: [
        {
          image: "/images/epi.jpeg",
          name: "Episerver",
        },
        {
          icon: IconCSharp,
          name: "C# / ASP.NET",
        },
        {
          icon: IconRazor,
          name: "Razor",
        },
        {
          icon: IconVS,
          name: "Visual Studio IDE",
        },
        {
          icon: IconCSS,
          name: "CSS",
        },
        {
          icon: IconSass,
          name: "SASS",
        },
        {
          icon: IconJS,
          name: "JavaScript",
        },
        {
          icon: IconJQuery,
          name: "jQuery",
          extraClass: "bg-white",
        },
        {
          icon: IconBootstrap,
          name: "Bootstrap",
        },
      ],
      links: [
        {
          href: "https://navico.com/",
          name: "Navico.com",
        },
      ],
    },
  },
  {
    name: "YahSat",
    position: "Front-end Engineer",
    logo: "/portfolio/yahsat/logo.png",
    company: "Valtech",
    date: "2017",
    content: {
      about: [
        "My first project using Sitecore.",
        "I didn't stay long on this project, as the company reallocated developers and assigned me to another one.",
      ],
      responsibilities: [
        "Part of the initial sprints",
        "Component development and documentation",
        "General best practices (Clean Code, GDPR, ADA, etc.)",
      ],
      images: [
        {
          url: "/portfolio/yahsat/screenshot.png",
          title: "YahSat",
        },
      ],
      tech: [
        {
          icon: IconSitecore,
          name: "Sitecore",
          extraClass: "text-red-600",
        },
        {
          icon: IconCSharp,
          name: "C# / ASP.NET",
        },
        {
          icon: IconRazor,
          name: "Razor",
        },
        {
          icon: IconVS,
          name: "Visual Studio IDE",
        },
        {
          icon: IconCSS,
          name: "CSS",
        },
        {
          icon: IconSass,
          name: "SASS",
        },
        {
          icon: IconJS,
          name: "JavaScript",
        },
        {
          icon: IconJQuery,
          name: "jQuery",
          extraClass: "bg-white",
        },
        {
          icon: IconBootstrap,
          name: "Bootstrap",
        },
      ],
      links: [
        {
          href: "https://yahsat.com/",
          name: "YahSat.com",
        },
      ],
    },
  },
  {
    name: "Brookfield",
    position: "Jr. Front-end Developer",
    logo: "/portfolio/brookfield/logo.png",
    company: "Valtech",
    date: "2017",
    content: {
      about: [
        "My first international project.",
        "It was more of a learning experience.",
        "The company needed someone to do some late change requests and I was allocated as an evaluation, to see if I was ready to face some more complex tasks.",
        "I believe it went well, as I have consistently worked on international projects ever since.",
      ],
      responsibilities: [
        "Late change requests",
        "Front-end debugging",
        "General good practices",
      ],
      images: [
        {
          url: "/portfolio/brookfield/screenshot.png",
          title: "Brookfield",
        },
      ],
      tech: [
        {
          icon: IconDrupal,
          name: "Drupal",
        },
        {
          icon: IconHTML,
          name: "HTML",
        },
        {
          icon: IconCSS,
          name: "CSS",
        },
        {
          icon: IconSass,
          name: "SASS",
        },
        {
          icon: IconJS,
          name: "JavaScript",
        },
        {
          icon: IconJQuery,
          name: "jQuery",
          extraClass: "bg-white",
        },
        {
          icon: IconBootstrap,
          name: "Bootstrap",
        },
        {
          icon: IconVS,
          name: "Visual Studio IDE",
        },
      ],
      links: [
        {
          href: "https://brookfield.com/",
          name: "Brookfield.com",
        },
      ],
    },
  },
  {
    name: "Bayer Brazil",
    position: "Jr. Front-end Developer",
    logo: "/portfolio/bayer/logo.png",
    company: "Valtech",
    date: "2017",
    content: {
      about: [
        "In this project, Bayer required a redesign of their internal system.",
        "I was mentored throughout most of the project while learning documentation, standards and UI guidelines.",
      ],
      responsibilities: ["Writing the UI style guide", "Front-end development"],
      images: [
        {
          url: "/portfolio/bayer/screenshot.png",
          title: "Bayer",
        },
      ],
      tech: [
        {
          icon: IconDrupal,
          name: "Drupal",
        },
        {
          icon: IconHTML,
          name: "HTML",
        },
        {
          icon: IconCSS,
          name: "CSS",
        },
        {
          icon: IconSass,
          name: "SASS",
        },
        {
          icon: IconJS,
          name: "JavaScript",
        },
        {
          icon: IconJQuery,
          name: "jQuery",
          extraClass: "bg-white",
        },
        {
          icon: IconBootstrap,
          name: "Bootstrap",
        },
      ],
      links: [
        {
          href: "https://bayer.com.br/",
          name: "Bayer.com.br",
        },
      ],
    },
  },
  {
    name: "Samsung Brazil",
    position: "Intern Developer",
    logo: "/portfolio/samsung/logo.png",
    company: "Valtech",
    date: "2016",
    content: {
      about: [
        "This was a digital marketing campaign where I developed and dispatched email marketing materials, along with other related tasks.",
        "The best part was the freedom to choose the technologies I used for these deliverables.",
      ],
      responsibilities: [
        "Developing and deploying landing pages",
        "Developing and sending email marketing campaigns",
        "Integrating landing pages with email databases",
        "Managing segmentation, reporting, analytics, data configuration, and automation within Salesforce Marketing Cloud",
      ],
      images: [
        {
          url: "/portfolio/samsung/screenshot.png",
          title: "Samsung",
        },
      ],
      tech: [
        {
          icon: IconSF,
          name: "Salesforce Marketing Cloud",
        },
        {
          icon: IconMJML,
          name: "MJML",
        },
        {
          icon: IconHTML,
          name: "HTML",
        },
        {
          icon: IconCSS,
          name: "CSS",
        },
        {
          icon: IconSass,
          name: "SASS",
        },
        {
          icon: IconJS,
          name: "JavaScript",
        },
        {
          icon: IconJQuery,
          name: "jQuery",
          extraClass: "bg-white",
        },
        {
          icon: IconBootstrap,
          name: "Bootstrap",
        },
      ],
    },
  },
  {
    name: "Walmart Brazil",
    position: "Intern Developer",
    logo: "/portfolio/walmart/logo.png",
    company: "Valtech",
    date: "2016",
    content: {
      about: [
        "This was a digital marketing campaign where I developed and dispatched email marketing materials, along with other tasks.",
        "The best part was the freedom to choose the technologies for these deliverables.",
      ],
      responsibilities: [
        "Developing and deploying landing pages",
        "Developing and sending email marketing campaigns",
        "Integrating landing pages with email",
        "Managing segmentation, reporting, analytics, data configuration, and automation within Salesforce Marketing Cloud",
      ],
      images: [
        {
          url: "/portfolio/walmart/logo.png",
          title: "Walmart",
        },
      ],
      tech: [
        {
          icon: IconSF,
          name: "Salesforce Marketing Cloud",
        },
        {
          icon: IconMJML,
          name: "MJML",
        },
        {
          icon: IconHTML,
          name: "HTML",
        },
        {
          icon: IconCSS,
          name: "CSS",
        },
        {
          icon: IconSass,
          name: "SASS",
        },
        {
          icon: IconJS,
          name: "JavaScript",
        },
        {
          icon: IconJQuery,
          name: "jQuery",
          extraClass: "bg-white",
        },
        {
          icon: IconBootstrap,
          name: "Bootstrap",
        },
      ],
    },
  },
  {
    name: "SamsClub Brazil",
    position: "Intern Developer",
    logo: "/portfolio/samsclub/logo.png",
    company: "Valtech",
    date: "2016",
    content: {
      about: [
        "At the time, this was the company's largest client. We managed not only marketing campaigns but also the website, internal tools, landing pages, and more.",
        "We were responsible for the entire digital infrastructure of Sam's Club Brazil.",
        "As it had some late requests (as e-mails with segmented promotions), I developed some internal tools to make things easier for the team.",
        "Initially, I created them for myself, but they ended up being useful to the entire digital marketing department.",
        "Some of them were: ",
        "The Super Mail Maker 3000: Drag and drop pieces of the email for faster development and changes",
        "Digital Papyro: A on-the-fly information gatherer with keywords to find specific information on the clubs",
        "Automation scripts: Used for numerous boring tasks, such as images renaming, resizing, and cutting, manipulation of emails in big CSV files, and more",
      ],
      responsibilities: [
        "Developing and deploying landing pages",
        "Maintenance and updates on the main website",
        "Developing and dispatching e-mail marketing campaigns",
        "Integration between landing pages and e-mail databases",
        "Managing segmentation, reporting, analytics, data configuration, and automation within Salesforce Marketing Cloud",
      ],
      images: [
        {
          url: "/portfolio/samsclub/screenshot.png",
          title: "SamsClub",
        },
      ],
      tech: [
        {
          icon: IconSF,
          name: "Salesforce Marketing Cloud",
        },
        {
          icon: IconMJML,
          name: "MJML",
        },
        {
          icon: IconHTML,
          name: "HTML",
        },
        {
          icon: IconCSS,
          name: "CSS",
        },
        {
          icon: IconSass,
          name: "SASS",
        },
        {
          icon: IconJS,
          name: "JavaScript",
        },
        {
          icon: IconJQuery,
          name: "jQuery",
          extraClass: "bg-white",
        },
        {
          icon: IconBootstrap,
          name: "Bootstrap",
        },
        {
          icon: IconCSharp,
          name: "C# / ASP.NET",
        },
        {
          icon: IconRazor,
          name: "Razor",
        },
      ],
      links: [
        {
          href: "https://samsclub.com.br/",
          name: "SamsClub.com.br",
        },
      ],
    },
  },
]
