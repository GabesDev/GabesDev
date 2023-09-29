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
    level: "B2",
    description:
      "As a Portuguese speaker, Spanish comes with ease. <br> After traveling to Argentina and practicing the language, I feel comfortable to work on a Spanish-speaking team (even though I'd fallback to Portuñol sometimes).",
  },
  {
    icon: IconFrance,
    name: "French",
    level: "B1",
    description:
      "I can understand almost everything I hear, but I still face some issues when talking. I can work using this language on a French-speaking team.",
  },
  {
    icon: IconItaly,
    name: "Italian",
    level: "A2",
    description:
      "I understand most of what I hear in Italian, but I still can't express myself clearly. As a Portuguese speaker who understands Spanish and French, I could say I'd be able to work on an Italian-speaking team with some bilingual team members.",
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
    name: "Javascript",
    description: "Years of experience: 7+",
  },
  {
    icon: IconNode,
    name: "NodeJS",
    description: "Years of experience: 5+",
  },
  {
    icon: IconXML,
    name: "SOAP / REST APIs",
    description: "Years of experience: 7+",
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
    name: "ReactJS / React Native",
    description: "Years of experience: 2+",
  },
  {
    icon: IconSvelte,
    name: "Svelte",
    description: "Years of experience: 2+",
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
    description: "Years of experience: 4+",
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
    description: "Years of experience: 2+",
  },
  {
    icon: IconOptimizely,
    name: "Optimizely",
    description: "Years of experience: 4+",
  },
]

export const softSkills = [
  {
    name: "Accountable",
  },
  {
    name: "Available",
  },
  {
    name: "Can cope well with pressure",
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
    name: "Self-aware",
  },
  {
    name: "Self-learner",
  },
]

export const labs = [
  {
    name: "Jokenpo [Multiplayer Game]",
    description: [
      "Own project",
      "Written to get used to the sveltekit, state, sockets, and servers.",
    ],
    image: "jokenpo.png",
    tech: "SvelteKit, Socket.Io, Node.js",
    code: "https://github.com/GabesDev/sveltekit-jokenpo/",
    address: "https://jokenpo.gabes.dev/",
  },
  {
    name: "Matching Game [Game]",
    description: [
      "Tutorial project",
      "Written to get used to the sveltekit way of managing state and reactivity.",
    ],
    image: "memory.png",
    tech: "SvelteKit",
    code: "https://github.com/GabesDev/svelte-memoria",
    address: "https://memory.gabes.dev/",
  },
  {
    name: "JSX Rederer [Code]",
    description: [
      "Tutorial Project",
      "Wrote a JSX renderer to understand the inner functionality of React.",
    ],
    image: "code.png",
    tech: "Javascript",
    code: "https://github.com/GabesDev/jsx-renderer",
  },
  {
    name: "Food Recipes [App]",
    description: [
      "Tutorial Project",
      "Fully functional app using free APIs and animations.",
    ],
    image: "foodrecipe.png",
    tech: "React Native, NativeWind, Expo, Reanimate, REST API",
    code: "https://github.com/GabesDev/react-native-recipe-app",
  },
  {
    name: "Expensify [App]",
    description: [
      "Tutorial Project",
      "Fully functional app to study the Back-End integration, auth (log-in/sign-up) and React Native UI development",
    ],
    image: "expensify.png",
    tech: "React Native, Firebase",
    code: "https://github.com/GabesDev/react-native-expensify/",
  },
  {
    name: "AppStore UI [App]",
    description: [
      "Tutorial Project",
      "UI-focused APP, using nativewind (Tailwind for react native) and some other libraries.",
    ],
    image: "appstore.png",
    tech: "React Native, NativeWind, Expo",
    code: "https://github.com/GabesDev/react-native-storeUi",
  },
  {
    name: "Animated Login UI [App]",
    description: [
      "Tutorial Project",
      "UI-focused APP, using nativewind (Tailwind for react native) and animation libraries.",
    ],
    image: "login-animated.png",
    tech: "React Native, NativeWind, Expo, React Native Animated",
    code: "https://github.com/GabesDev/react-native-animated-loginUi",
  },
  {
    name: "Login UI [App]",
    description: [
      "Tutorial Project",
      "UI-focused APP, using nativewind (Tailwind for react native) and some other libraries.",
    ],
    image: "loginui.png",
    tech: "React Native, NativeWind, Expo",
    code: "https://github.com/GabesDev/react-native-loginUi/",
  },
]

export let projects = [
  {
    name: "the Walt Disney Company",
    position: "Senior Front-end Engineer",
    logo: "/portfolio/disney/logo.png",
    date: "2022 - 2023",
    content: {
      about: [
        "One of the most interesting projects I've worked on.",
        "It was a Salesforce Commerce Cloud-based project with a huge team of engineers.",
        "I was part of the front-end team focused on the Web.",
        "As time went by, different objectives were part of my development routine - such as proofs of concepts in new stacks, PWAs using OCAPI, experimental technologies, highly cached content, investigation and documentation, knowledge transfers and training, and even rebranding.",
        "Most of the third-party services had to be investigated for the rebranding project, so I frequently had to have conversations with external teams.",
      ],
      responsibilities: [
        "Content-assets creation",
        "Content slots and Custom objects management",
        "Complex components creation",
        "Local inventory management (debugging)",
        "Changes on ISML templates",
        "Post-deploy support",
        "Technical investigation and risk analysis",
        "Development of PoC in experimental stacks",
        "Development of PWA (with OCAPI) and High Cached Pages for the Disney+ shop project",
        "General good practices (Clean Code, GPDR, ADA, etc.)",
        "Investigation and Debugging of third-party services",
        "Review, discussion, and correction of usability and accessibility on components",
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
          name: "Javascript",
        },
        {
          icon: IconJson,
          name: "Restful APIs",
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
          extraClass: "[&>path]:fill-white",
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
        "Solving issues in both Front and Backend",
        "Working close to the QA team",
        "Knowledge-sharing and support for new team members",
        "General good practices (Clean Code, GPDR, ADA, etc.)",
        "Review, discussion, and correction of usability and accessibility on components",
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
          name: "Javascript",
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
    date: "2021",
    content: {
      about: [
        "It was a Salesforce Commerce Cloud-based project with a small team of developers.",
        "I was part of the team focused on maintenance and post-deploy support.",
        "This project had many front-end issues in both Javascript and CSS.",
        "Even though I worked as a front-end engineer, there were backend bugs solved by me.",
      ],
      responsibilities: [
        "Post-deploy support",
        "Investigation and Debugging",
        "Refactoring",
        "General good practices (Clean Code, GPDR, ADA, etc)",
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
          name: "Javascript",
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
    date: "2020 - 2021",
    content: {
      about: [
        "The Deciem project was one of my favorite projects to work on.",
        "The team was composed by a small but very efficient team, and the creativity involved in both the designs and functionality created the perfect balance between challenging and fun.",
        "There were 4 separate stores under the same umbrella: Deciem, Niod, the Ordinary, and Hylamide.",
        "Each one of them had different designs and specifications.",
        "I was part of the team since the beginning of the projects, and we created the stores from scratch on SFCC. That means all the components, functionalities, data, and configuration were made by us.",
      ],
      responsibilities: [
        "Content-assets creation",
        "Content slots and Custom objects management",
        "Local inventory management (debugging)",
        "Complex components creation",
        "Changes on ISML templates",
        "Post-deploy support",
        "Technical investigation and risk analysis",
        "General good practices (Clean Code, GPDR, ADA, etc)",
        "Investigation and Debugging of third-party services",
        "Review, discussion, and correction of usability and accessibility on components",
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
          name: "Javascript",
        },
        {
          icon: IconJson,
          name: "Restful APIs",
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
    date: "2019 - 2020",
    content: {
      about: [
        "The Champions Petfoods project was my first SFCC project.",
        "The team was composed of a small but very efficient team (the same team present on the Champion Petfoods Projects).",
        "It was a great learning experience.",
        "There were 3 separate stores under the same umbrella: Champion Petfoods, Orijen Petfoods, and Acana Petfoods.",
        "Each one of them had different designs and specifications.",
        "I was part of the team since the beginning of the projects, and we created the stores from scratch on SFCC.",
        "That means all the components, functionalities, data, and configuration were made by us.",
      ],
      responsibilities: [
        "Content-assets creation",
        "Content entry",
        "Content slots and Custom objects management",
        "Complex components creation",
        "Changes on ISML templates",
        "General good practices (Clean Code, GPDR, ADA, etc.)",
        "Review, discussion, and correction of usability and accessibility on components",
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
          name: "Javascript",
        },
        {
          icon: IconJson,
          name: "Restful APIs",
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
    date: "2019",
    content: {
      about: [
        "This was one of the weirdest projects I've worked on. The team was really small, we weren't using GIT, and ramping up was pretty much a lonely walk.",
        "It was a challenge - not only because I didn't understand a single word of what was in production, but the code was incredibly old and really messy.",
        "This project had many front-end issues, mostly on CSS (that was a GIGANTIC 30k+ LINES FILE).",
        "In addition to that, the fonts they wanted weren't compatible with the Vietnamese alphabet.",
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
          name: "Javascript",
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
    date: "2019",
    content: {
      about: [
        "Almost the same situation as the Raid project.",
        "The code on this project was wild. It felt like at least at least a hundred engineers started refactoring it, and stopped after losing their minds.",
        "Debugging and fixing the Arabic version of the website didn't really make things better (at least I learned a new alphabet!)",
        "Did you know that, besides writing from right to left, the icons should also be positioned on the other side of the screen?",
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
          name: "Javascript",
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
    date: "2019",
    content: {
      about: [
        "Even though I spent little time on this project (a few months only), it was a fun one to work on.",
        "Advisian was going through a redesign, so the changes were focused on the front-end.",
      ],
      responsibilities: [
        "Redesign the website",
        "Component development and documentation",
        "General good practices (Clean Code, GPDR, ADA, etc.)",
        "Review, discussion, and correction of usability and accessibility on components",
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
          name: "Javascript",
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
    date: "2018 - 2019",
    content: {
      about: [
        "The most challenging project I've ever worked on (so far).",
        "Something went up with the planning and designing part of this project. Long story short - development started completely delayed, and it was up to the development team to deliver on an acceptable deadline.",
        "Constant changes were asked by the client, and some of their third-party services had to be learned while developing.",
        "A lot of screen sharing happened while live-coding (on devTools) for non-tech people, to see if they were happy about the looks of a component, or the functionality of a menu.",
        "Their search service would return a black-boxed markup, and all the styling had to be done using pre-defined classes and markups. And their final design was completely different from what we got out-of-the-box. Functionality included (!)",
        "12-hour shifts were common at the end of the project. Fortunately, we were able to successfully deliver it.",
        "Up to this day, I have nightmares about this project.",
      ],
      responsibilities: [
        "Constantly under pressure, as the deadline wasn't properly set and the scope would suffer drastic changes every week",
        "Component development and documentation",
        "Live coding with clients",
        "Discussions directly with the clients, to explain technical limitations (as support for IE6 in 2018) and try to limit the scope changes",
        "Implementing third-party services",
        "General good practices (Clean Code, GPDR, ADA, etc)",
        "Review, discussion, and correction of usability and accessibility on components",
        "Not really agile environment",
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
          name: "Javascript",
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
    date: "2018",
    content: {
      about: [
        "Legacy code. Touched by numerous agencies, and never refactored.",
        "Full of front-end bugs, nothing seemed to render as it should - and old techniques would be used side by side with new ones.",
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
          name: "Javascript",
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
    date: "2018",
    content: {
      about: [
        "That was the first project I was part of since the start of development until the deployment.",
        "It was a small team of developers, and most of the components were written by me.",
        "At some point, due to my lack of experience at the time, I had to rewrite some of the containers and components integration because we were having some mismatching paddings and margins.",
        "As it was a big CMS, authors should be able to use any component wherever they wanted. This project was an incredible learning experience.",
      ],
      responsibilities: [
        "Pixel-perfect design development",
        "Component development and documentation",
        "General good practices (Clean Code, GPDR, ADA, etc.)",
        "Review, discussion, and correction of usability and accessibility on components",
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
          name: "Javascript",
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
    date: "2018",
    content: {
      about: [
        "An EpiServer project. This one was an internal Customer Portal.",
        "It was a small team of developers.",
      ],
      responsibilities: [
        "Pixel-perfect design development",
        "Component development and documentation",
        "General good practices (Clean Code, GPDR, ADA, etc.)",
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
          name: "Javascript",
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
    date: "2017",
    content: {
      about: [
        "My first project using Sitecore.",
        "I didn't stay long on this project, as the company reallocated devs and I was allocated to another one.",
      ],
      responsibilities: [
        "Part of the initial sprints",
        "Component development and documentation",
        "General good practices (Clean Code, GPDR, ADA, etc.)",
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
          name: "Javascript",
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
    date: "2017",
    content: {
      about: [
        "My first international project.",
        "It was more of a learning experience.",
        "The company needed someone to do some late change requests and I was allocated as an evaluation, to see if I was ready to face some more complex tasks.",
        "I believe it went well, considering since then I was always part of international projects.",
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
          name: "Javascript",
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
    date: "2017",
    content: {
      about: [
        "In this project, Bayer needed a redesign in their internal system.",
        "I was mentored during almost the entire project, as I was learning documentation and UI guidelines.",
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
          name: "Javascript",
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
    date: "2016",
    content: {
      about: [
        "It was a digital marketing campaign. I'd develop and dispatch e-mail marketing, and handle some other things.",
        "The cool part of it was the freedom I had to choose the technologies I'd use on those deliverables.",
      ],
      responsibilities: [
        "Developing and deploying landing pages",
        "Developing and dispatching e-mail marketing campaigns",
        "Integration between landing pages and e-mail databases",
        "Handling segmentation, reports, analytics, data configuration and automation on Salesforce Marketing Cloud",
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
          name: "Javascript",
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
    date: "2016",
    content: {
      about: [
        "It was a digital marketing campaign. I'd develop and dispatch e-mail marketing, and handle some other things.",
        "The cool part of it was the freedom I had to choose the technologies I'd use on those deliverables.",
      ],
      responsibilities: [
        "Developing and deploying landing pages",
        "Developing and dispatching e-mail marketing campaigns",
        "Integration between landing pages and e-mail databases",
        "Handling segmentation, reports, analytics, data configuration and automation on Salesforce Marketing Cloud",
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
          name: "Javascript",
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
    date: "2016",
    content: {
      about: [
        "It was the biggest client in the company at the time. We'd handle not only the marketing campaigns but also the website, internal tools, landing pages, and much more.",
        "We were basically responsible for the entire digital side of Samsclub Brazil.",
        "As it had some late requests (as e-mails with segmented promotions), I developed some internal tools to make things easier for the team.",
        "Initially they were made to myself, but they ended up being useful for the entire digital marketing department.",
        "Some of them were: ",
        "The Super Mail Maker 3000: Drag and drop pieces of the email for faster development and changes;",
        "Digital Papyro: A on-the-fly information gatherer with keywords to find specific information on the clubs;",
        "Automation scripts: Used for numerous boring tasks, such as images renaming, resizing, and cutting, manipulation of emails in big CSV files, and more;",
      ],
      responsibilities: [
        "Developing and deploying landing pages",
        "Maintenance and updates on the main website",
        "Developing and dispatching e-mail marketing campaigns",
        "Integration between landing pages and e-mail databases",
        "Handling segmentation, reports, analytics, data configuration and automation on Salesforce Marketing Cloud",
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
          name: "Javascript",
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
