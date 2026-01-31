// import aradhyaLogo from "../../assets/Images/Company/aradhyatechLogo.jfif";
// import growquestLogo from "../../assets/Images/Company/growQuestLogo.jfif";

import devexLogo from "../../assets/Images/Company/devex_logo.png"
import AlphanumericLogo from "../../assets/Images/Company/alphanumeric-logo.webp"

import InfotrixsLogo from "../../assets/Images/Company/InfotrixsImg.jfif"
import reactImg from "../../assets/Images/stack/react.svg";
import nodeImg from "../../assets/Images/stack/NodeJs.svg";
import expressImg from "../../assets/Images/stack/Express.png";
import mongoImg from "../../assets/Images/stack/MongoDB.svg";
import jsImg from "../../assets/Images/stack/Javascript.svg";
import tailwindImg from "../../assets/Images/stack/Tailwind.png";
import htmlImg from "../../assets/Images/stack/HTML.png";
import cssImg from "../../assets/Images/stack/CSS.png";
import githubImg from "../../assets/Images/stack/icons8-github-144.png";
import gitImg from "../../assets/Images/stack/Git.svg";
import nextJsImg from "../../assets/Images/stack/icons8-nextjs-144.png";
import reduxImg from "../../assets/Images/stack/Redux.svg";
import saasImg from "../../assets/Images/stack/Saas.svg";
import materailUIImg from "../../assets/Images/stack/MaterialUI.svg";
import bootstrapImg from "../../assets/Images/stack/Bootstrap.svg";
import bashImg from "../../assets/Images/stack/Bash.svg";

const experiences = [
  {
    year: "Feb 2023 - August 2023",
    title: "Frontend Developer Intern",
    company: "Infotrixs",
    location: "Mohali, India",
    logo: InfotrixsLogo,
    description:
      "Built dynamic SaaS dashboards, implemented secure logins, and integrated OCR-based document reading in vendor tax-related applications.",
    story:
      "This is where the fire lit up 🔥 — my internship at Growquest kickstarted it all. I built SaaS dashboards, implemented secure login systems, and integrated OCR logic to extract data from scanned vendor tax docs 📄🔍. The thrill of turning raw ideas into beautiful UI was next-level. From debugging late at night to deploying working apps — this was my foundation 🧱⚙️.",
    techStackImgs: [
      reactImg,
      jsImg,
      tailwindImg,
      htmlImg,
      cssImg,
      gitImg,
      githubImg,
      reduxImg,
      saasImg,
      materailUIImg,
      bootstrapImg,
      bashImg,
      
    ],
  },
  
  {
    year: "Aug 2023 - Feb 2024",
    title: "Frontend Developer Intern",
    company: "Alphanumeric Ideas",
    location: "Kharar, India",
    logo: AlphanumericLogo,
    description:
      "Built dynamic SaaS dashboards, implemented secure logins, and integrated OCR-based document reading in vendor tax-related applications.",
    story:
      "This is where the fire lit up 🔥 — my internship at Alphanumeric Ideas kickstarted it all. I built SaaS dashboards, implemented secure login systems, and integrated APIs from third parties to be used on frontend with proper authenication using OAuth and API Keys 📄🔍. The thrill of turning raw ideas into beautiful UI was next-level. From debugging late at night to deploying working apps — this was my foundation 🧱⚙️.",
    techStackImgs: [
      reactImg,
      jsImg,
      tailwindImg,
      htmlImg,
      cssImg,
      gitImg,
      githubImg,
      nextJsImg,
      reduxImg,
      saasImg,
      materailUIImg,
      bootstrapImg,
      bashImg,
      
    ],
  },
  {
    year: "Feb 2024 - Current",
    title: "Full Stack Developer",
    company: "Devex Hub Pvt Ltd",
    location: "Mohali, India",
    logo: devexLogo,
    description:
      "I have worked on projects including CRM platforms, admin and employee panels, business management dashboards,  and custom web applications, along with API integrations and tool-based platforms.",
    story:
      "At Devex Hub Pvt Ltd 💼, I was deep into the MERN stack jungle 🌴. I built multiple CRM systems — school portals, employee management apps, and dynamic landing pages 🚀. This is where I really sharpened my frontend & backend skills with React and Node. No Java here — just pure JavaScript and firepower from Mongo to Express! 🔥👨‍💻",
    techStackImgs: [
      reactImg,
      nodeImg,
      expressImg,
      mongoImg,
      jsImg,
      tailwindImg,
      htmlImg,
      cssImg,
      gitImg,
      githubImg,
      reduxImg,
      saasImg,
      materailUIImg,
      bootstrapImg,
      bashImg,
      
    ],
  },
];

const reverseExperienceData = [
  {
    ...experiences[2],
    story:
      "Worked as a Full Stack Developer building end-to-end web applications using the MERN stack. Developed CRM solutions including school, employee, and admin management systems, along with responsive landing pages and EDI file management interfaces. Handled both frontend and backend development, API integrations, and deployment while collaborating with teams to deliver scalable, production-ready solutions.⚙️📈",
  },
  {
    ...experiences[1],
    story:
      "Before diving into the world of full stack, I was wielding the full power of the React JS at Alphanumeric Ideas ⚒️. I crafted CRMs for schools and employees and polished responsive designs. This phase helped me solidify my frontend skills and taught me how to build production-ready dashboards with JS firepower 🔥. It laid a solid ground before stepping into more structured enterprise systems.",
  },
  {
    ...experiences[0],
    story:
      "And it all began here — at Infotrixs 🧠. My first taste of frontend development came in the form of SaaS dashboards. I still remember the thrill of deploying my first secure login system. Debugging those early bugs, pushing commits at midnight 🌙 — this was the spark that set everything in motion. From here, my tech journey truly started 🔧🚀.",
  },
];

export { experiences, reverseExperienceData };
