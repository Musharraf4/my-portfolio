import emoji from "react-easy-emoji";
import {
  EducationType,
  ExperienceType,
  FeedbackType,
  ProjectType,
  SkillsSectionType,
  SkillBarsType,
  SEODataType,
  SocialLinksType,
  GreetingsType,
} from "./types/sections";

export const greetings: GreetingsType = {
  name: "Musharraf Riaz",
  title: "Hi, I'm Musharraf",
  description:
    "I am a dedicated Full Stack Web Developer with over 4 years of experience in building robust and scalable applications using React.js, Next.js, Express.js and Nest.js. My passion for technology drives me to continually learn and integrate the latest frameworks and tools into my projects. Known for my strong work ethic, self-motivation, and adaptability, I thrive in collaborative environments and am committed to delivering high-quality solutions. I'm always eager to expand my skill set and contribute effectively to team success.",
  resumeLink: "https://drive.google.com/file/d/1ST9_3ClKCEDK_TIVCa3H2OC0Asa-HKm4/view?usp=drive_link",
};

export const openSource = {
  githubUserName: "Musharraf4",
};

export const contact = {};

export const socialLinks: SocialLinksType = {
  email: "mailto:musharraf122121@gmail.com",
  linkedin: "https://www.linkedin.com/in/musharraf-riaz/",
  github: "https://github.com/Musharraf4",
  phone: "tel:+923230058879",
  // instagram: "https://www.instagram.com/__hanzla100",
  // facebook: 'https://www.facebook.com/1hanzla100',
  // twitter: 'https://twitter.com/1hanzla100',
};

export const skillsSection: SkillsSectionType = {
  title: "My Skills",
  subTitle: "Experienced in working across multiple technologies, with a solid background in building diverse products and projects.",
  data: [
    {
      title: "",
      lottieAnimationFile: "/lottie/skills/fullstack.json", // Path of Lottie Animation JSON File
      skills: [
        emoji("⚡ Building responsive Single-Page-Apps (SPA) & PWA in React.js"),
        emoji("⚡ Building responsive static websites using Next.js"),
        emoji("⚡ Building RESTful APIs in Django & Django REST Framework"),
      ],
      softwareSkills: [{
        heading: 'Languages and Frameworks',
        skills: [
          {
            skillName: "Typescript",
            iconifyTag: "devicon:typescript",
          },
          {
            skillName: "JavaScript",
            iconifyTag: "logos:javascript",
          },
          {
            skillName: "React.js",
            iconifyTag: "vscode-icons:file-type-reactjs",
          },
          {
            skillName: "Next.js",
            iconifyTag: "vscode-icons:file-type-light-next",
          },
          {
            skillName: "Node.js",
            iconifyTag: "logos:docker-icon",
          },
          {
            skillName: "Nest.js",
            iconifyTag: "logos:docker-icon",
          },
          {
            skillName: "Express.js",
            iconifyTag: "logos:docker-icon",
          },
          {
            skillName: "HTML5",
            iconifyTag: "devicon:html5",
          },
        ]
      },
      {
        heading: 'Styling and UI Libraries',
        skills: [
          {
            skillName: "CSS",
            iconifyTag: "skill-icons:css",
          },
          {
            skillName: "SCSS",
            iconifyTag: "vscode-icons:file-type-scss",
          },
          {
            skillName: "Material UI",
            iconifyTag: "akar-icons:github-fill",
          },
          {
            skillName: "TailwindCSS",
            iconifyTag: "akar-icons:github-fill",
          },
          {
            skillName: "Bootstrap",
            iconifyTag: "akar-icons:github-fill",
          },
          {
            skillName: "ShadCN",
            iconifyTag: "akar-icons:github-fill",
          },
          {
            skillName: "Ant Design",
            iconifyTag: "akar-icons:github-fill",
          },
          {
            skillName: "Styled Components",
            iconifyTag: "akar-icons:github-fill",
          },
        ]
      },

      {
        heading: 'State Management',
        skills: [
          {
            skillName: "Context API",
            iconifyTag: "skill-icons:redux",
          },
          {
            skillName: "Redux",
            iconifyTag: "skill-icons:redux",
          },
          {
            skillName: "Zustand",
            iconifyTag: "akar-icons:github-fill",
          },
          {
            skillName: "Mobx",
            iconifyTag: "akar-icons:github-fill",
          },
        ]
      },
      {
        heading: 'API Integration',
        skills: [
          {
            skillName: "Restful API",
            iconifyTag: "akar-icons:github-fill",
          },
          {
            skillName: "GraphQL",
            iconifyTag: "logos:docker-icon",
          },
          {
            skillName: "Axios",
            iconifyTag: "logos:docker-icon",
          },
          {
            skillName: "React Query",
            iconifyTag: "logos:docker-icon",
          },
          {
            skillName: "Postman",
            iconifyTag: "logos:docker-icon",
          },
          {
            skillName: "Swagger",
            iconifyTag: "logos:docker-icon",
          },
        ]
      },

      {
        heading: 'Databases',
        skills: [

          {
            skillName: "Firebase",
            iconifyTag: "akar-icons:github-fill",
          },
          {
            skillName: "MySQL",
            iconifyTag: "akar-icons:github-fill",
          },
          {
            skillName: "PostgresSQL",
            iconifyTag: "akar-icons:github-fill",
          },
          {
            skillName: "MongoDB",
            iconifyTag: "akar-icons:github-fill",
          },

        ]
      },
      {
        heading: 'Deployments',
        skills: [

          {
            skillName: "Vercel",
            iconifyTag: "logos:docker-icon",
          },
          {
            skillName: "Heroku",
            iconifyTag: "logos:docker-icon",
          },
          {
            skillName: "Netlify",
            iconifyTag: "logos:docker-icon",
          },
          {
            skillName: "Amazon S3",
            iconifyTag: "logos:docker-icon",
          },
        ]
      },
      {
        heading: 'Tools',
        skills: [
          {
            skillName: "BitBucket",
            iconifyTag: "logos:docker-icon",
          },
          {
            skillName: "Git",
            iconifyTag: "logos:docker-icon",
          },
          {
            skillName: "Jira",
            iconifyTag: "logos:docker-icon",
          },
          {
            skillName: "GitHub",
            iconifyTag: "logos:docker-icon",
          },

          {
            skillName: "NPM",
            iconifyTag: "logos:docker-icon",
          },

          {
            skillName: "Webpack/TurboPack",
            iconifyTag: "logos:docker-icon",
          },
          {
            skillName: "Linux",
            iconifyTag: "logos:docker-icon",
          },
          {
            skillName: "Docker",
            iconifyTag: "logos:docker-icon",
          },
          {
            skillName: "Google Analytics",
            iconifyTag: "logos:docker-icon",
          },
          {
            skillName: "Stripe Integration",
            iconifyTag: "logos:docker-icon",
          },
        ]
      },
      ],
    },
  ],
};

export const SkillBars: SkillBarsType[] = [
  {
    Stack: "Frontend/Design", //Insert stack or technology you have experience in
    progressPercentage: "85", //Insert relative proficiency in percentage
  },
  {
    Stack: "Backend",
    progressPercentage: "90",
  },
  {
    Stack: "Programming",
    progressPercentage: "95",
  },
];

export const educationInfo: EducationType[] = [
  {
    schoolName: "University of Punjab (PUCIT)",
    subHeader: "Bachelor of Science in Computer Science",
    duration: "2017 - 2021",
    desc: `Relevant course work:`,
    grade: "2.5 CGPA",
    descBullets: ['Data structures and algorithms', 'OOP', 'OOAD', 'Databases', ' Web engineering', 'Software engineering', 'Operating system', 'System programming', 'Compiler construction', 'Artificial intelligence'], // Array of Strings
  },
];

export const experience: ExperienceType[] = [
  {
    role: "Full Stack Developer",
    company: "Kodesinc",
    companyLogo: "/img/icons/common/kodesinc.png",
    date: "Jan 2025 - Present",
    desc: "",
    descBullets: [
      `Led the development of an Election Dashboard using Next.js and Material UI, integrating real-time 
statistics and posts from airtable and Google Analytics events, resulting in 32% improved 
decision-making and campaign strategies.`,
      `Developed a React.js-based Business Advisory system with GraphQL API, and Stripe 
integration, delivering analytics and strategy solutions that boosted client retention by 24% 
and optimized revenue generation.`,
      `Developed an AI-based Trip Advisory System utilizing OpenAI Assistant API with Next.js, 
designed to provide personalized trip suggestions, projected to increase user engagement and 
boost platform usage by 20%.`
    ],
  },
  {
    role: "Full Stack Developer",
    company: "Kwanso",
    companyLogo: "/img/icons/common/kwanso.jpg",
    date: "Sep 2023 - Present",
    desc: "",
    descBullets: [
      `Led the development of an Election Dashboard using Next.js and Material UI, integrating real-time 
statistics and posts from airtable and Google Analytics events, resulting in 32% improved 
decision-making and campaign strategies.`,
      `Developed a React.js-based Business Advisory system with GraphQL API, and Stripe 
integration, delivering analytics and strategy solutions that boosted client retention by 24% 
and optimized revenue generation.`,
      `Developed an AI-based Trip Advisory System utilizing OpenAI Assistant API with Next.js, 
designed to provide personalized trip suggestions, projected to increase user engagement and 
boost platform usage by 20%.`
    ],
  },
  {
    role: "Mid React.js Developer",
    company: "Consultancy Outfit",
    companyLogo: "/img/icons/common/consultancy-outfit.png",
    date: "Nov 2021 - Sept 2023",
    desc: "",
    descBullets: [
      `Collaborated on a SAAS product that created a robust platform for key stakeholders in the
fostering process,significantly improving the business's ability to manage and support its users
effectively.`,
      `Provided impactful support on various products for optimization or delivering them in time.`
    ],
  },
  {
    role: "React.js Developer",
    company: "SA Hamid Pvt. Ltd",
    companyLogo: "/img/icons/common/sa-hamid.png",
    date: "Apr 2021 - Nov 2021",
    desc: "",
    descBullets: [
      `Developed an interactive React.js dashboard for real-time updates on electrical devices (RLP), 
enhancing operational efficiency by 35% and enabling better decision-making through data 
visualization.`,
      `Implemented a dashboard with React.js for a specific business that shows live trends through a 
graphical interface,enabling real-time data visualization and informed decision-making, which helped 
them plan and optimize their strategies more effectively.`,
      `Worked on different dashboards made with React.js by optimizing them and fixing critical bugs.`
    ]
  },
];

export const projects: ProjectType[] = [
  {
    name: "US Election Dashboard 2024",
    desc: "A dashboard that empowers voters to identify and avoid viral misinformation threatening democracy by cataloging examples related to the presidential election, utilizing AI for regular updates and thematic organization.",
    link: "https://misinfodashboard.newslit.org/",
    demo: "https://vimeo.com/1097286746"
  },
  {
    name: "Zaragoza Restaurant",
    desc: "A modern restaurant website built with React and TypeScript, offering a variety of delicious Italian fast foods such as pizzas, pastas, and paninis. The site is fully responsive and designed with Material UI, ensuring a seamless experience across all devices. Customers can easily browse the menu, explore mouthwatering dishes, and place orders online with an intuitive, visually appealing interface.",
    demo: "https://vimeo.com/1097287909",
  },
  {
    name: "Checkology",
    desc: "A resource for educators to teach news literacy, equipping students with tools to identify credible information and differentiate between fact and falsehood.",
    link: "https://get.checkology.org/",
  },
  {
    name: "Financial Four Square",
    desc: "The all-in-one collaboration solution for financial and insurance advisors that provides strategicenvironment to plan any business to calculate their loss and profits and get expert opinions.",
    link: "https://financialfoursquare.com/",
    demo: "https://vimeo.com/1097287858",
  },
  {
    name: "RealRepp",
    desc: "App that streamlines job search automation by connecting users with expert recruiters and identifying relevant opportunities through proprietary search algorithms.",
    link: "https://www.realrepp.com/",
  },
  {
    name: "Miles AI",
    desc: "App that offers customized, AI-powered trip suggestions, utilizing OpenAI Assistant to enhance user travel experiences.",
    demo: "https://vimeo.com/1097287831",
  },
  {
    name: "Identity Gram",
    desc: "AI-powered identity verification solution for identity fraud prevention, Know Your Customer compliance, and fast conversions of valuable customers with Identity Gram. Entrust identity verification to us and our identity experts, and focus on what you do best.",
    link: "https://identitygram.co.uk/",
  },
  {
    name: "Share my Dine",
    desc: "Platform that connects passionate food hosts with adventurous guests, facilitating memorable dining experiences.",
  },
  {
    name: "Foster App",
    desc: "An App that addresses the challenges in managing the fostering process by connecting key stakeholders and streamlining communication.",
    link: "https://www.fosterapp.co.uk/",
  },

  {
    name: "Currency Gram",
    desc: "All in one payment management system with easy, secure, and fast payment processing, along with Stripe payment system",
  },
  {
    name: "Mortgage Basket",
    desc: "Offer customers excellent fee free mortgage advice. Helps you secure the best mortgage deal whether you're a first time buyer, remortgaging your home, buying to let or moving up the property ladder. Guides throughout the mortgage process – no hidden costs or surprises, just straightforward, honest, mortgage advice",
    link: "https://mortgagebasket.co.uk/",
  },
  {
    name: "Recipe World",
    desc: "A MERN Food Recipe App allows users to explore a wide range of recipes, add their own creations, and save favorites for easy access. Built with MongoDB, Express, React, and Node.js, it provides a seamless experience for discovering and managing recipes. Users can view details, upload images, and interact with a growing collection of culinary ideas.",
  },
  {
    name: "Naubahar",
    desc: "Naubahar Bottling Company Pvt Ltd. leading the charge in the production and distribution of PepsiCo's top-quality products for many years. With a wide variety of products and unparalleled customer service, we've built a network of trusted retailers that spans far and wide. We also welcome opportunities to partner with like-minded individuals and businesses who share our commitment to quality and customer satisfaction to bring the joy of PepsiCo's top-quality beverages to even more customers across the region. As leading in all other avenues, now we're proud to offer convenient Home delivery and e-commerce options for our customers as well. When it comes to PepsiCo products, Naubahar Bottling Company Private Limited. is the name you can trust.",
    link: "https://nbcpepsi.com/",
  },
  {
    name: "Volka Foods",
    desc: "Volka Food International (Pvt.) Ltd. is a modern and state-of-the-art company manufacturing quality confectionery, bakery, and pasta products for the past 12 years. The company aims to produce hygienic products of international standards to win millions of hearts.",
    link: "https://volkafood.com/",
  },
  {
    name: "Fresh n Freeze",
    desc: "Leading frozen food processing business that delights its customers with healthy and environmentally friendly agricultural products contributing towards the upliftment of the country",
    link: "https://freshnfreeze.com/",
  },
  {
    name: "Roshan Packages",
    desc: "A pioneer and forerunner in recognizing the potential in Pakistan’s fruit crops.  Roshan Packages Limited specialises in world-class Co-extruded films, Flexible Packaging, and Corrugated Packaging materials and solutions, all in tune with current industry trends.",
    link: "https://roshanpackages.com.pk/",
  },
];

export const feedbacks: FeedbackType[] = [
  {
    name: "Syed Jamal",
    role: "CEO at S.A Hamid Pvt Ltd",
    feedback:
      "You were a wonderful addition to our team, alhamdulillah. I'm quite impressed with your abilities and professional practices. You approach problems from a unique perspective and always ask the right question. Finding a good teammate like Musharraf is extremely difficult. He has contributed to the growth of our organization and continues to do so. May Allah bless you with everything you desire.",
  },
  {
    name: "Wajahat Malek",
    role: "Client",
    feedback:
      "Musharraf has a deep understanding of web development technologies and is adept at using them to build scalable, robust, and secure web applications. He has worked on various projects, ranging from small-scale to large-scale, and has shown his ability to work collaboratively with others while maintaining a high level of productivity and quality. Musharraf is a pleasure to work with, and I have no doubt that he will be an asset to any team or organization. I highly recommend Musharraf for any Full Stack, React.js or Node.js projects and I wish him all the best in his future endeavors.",
  },
  {
    name: "Ilyas Zaffar",
    role: "Teammate",
    feedback:
      "Very skilled at what he does and has an in depth knowledge of Django and he's always ready to handle any challenges thrown at him. He's been a valuable member of my team and i look forward to working with him in the years to come",
  },
  {
    name: "Zain Ali",
    role: "TeamMate",
    feedback: "Musharraf is a hardworking developer with a strong command of Full Stack technologies, consistently delivering high-quality, scalable solutions. His dedication and collaborative approach make him a valuable asset to any team",
  },
];

// See object prototype on /types/section.ts page
export const seoData: SEODataType = {
  title: "Musharraf Riaz",
  description: greetings.description,
  author: "Musharraf Riaz",
  image: "https://avatars.githubusercontent.com/u/80637323?v=4",
  url: "https://musharraf-riaz.vercel.app/",
  keywords: [
    "Musharraf",
    "Musharraf Riaz",
    "@Musharraf4",
    "musharraf122121",
    "Portfolio",
    "Musharraf Portfolio ",
    "Musharraf riaz Portfolio",
  ],
};
