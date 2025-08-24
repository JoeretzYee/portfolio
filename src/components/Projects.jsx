import { motion } from "framer-motion";
import React, { useState } from "react";
import amazon from "../images/amazon.jpg";
import billing_system from "../images/billing_system.png";
import discord from "../images/discord.webp";
import es_cargo from "../images/es_cargo.png";
import hulu from "../images/hulu.jpg";
import last_sw3 from "../images/lasto_sw3_system.png";
import lgu_website from "../images/lgu_website.png";
import whatsapp from "../images/whatsapp.jpg";
import lending_system from "../images/lending_system.jpg";
import derby_matching from "../images/derby_matching_system.jpg";
import tracking_system from '../images/tracking_system.png'

// projects data
const projectsData = [
  {
    image: lgu_website,
    title: "Official Website Local Government of Nabunturan",
    description: " Just Visit nabunturan.gov.ph",
    clientName: "",
    fbOrPageName: "",
    technologies: ["HTML", "Sass", "React", "Firebase", "CPanel"],
  },
  {
    image: tracking_system,
    title:"Local Government Unit of Nabunturan Document Tracking System",
    description: "The system allows users to create, forward, and monitor documents across multiple departments, ensuring transparency and accountability. It includes features such as document history logs, real-time status updates",
    clientName:"",
    fbOrPageName:'',
    technologies:["React","Vite","TailwindCss","Firebase"]
  },
  {
    image: lending_system,
    title: "Lending System",
    description:
      "Automated Calculation Grand total,Remaining Balance and Interest base on term(# of months)",
    clientName: "Client Name: Xenxer Sambrano",
    fbOrPageName: "Fb: Xenxer Sambrano",
    technologies: ["HTML", "Vite", "React", "Firebase", "Bootstrap"],
  },
  {
    image: derby_matching,
    title: "Derby Matching System",
    description:
      "Automated matching system on chicken entries base on their weight",
    clientName: "Client Name: NorlieJane, Galing",
    fbOrPageName: "Fb: NorlieJane, Galing",
    technologies: ["HTML", "Vite", "React", "Firebase", "django", "Bootstrap"],
  },
  {
    image: es_cargo,
    title: "ES Tablante Inventory System",
    description:
      "Functions: Managing In and Out Stocks,Delivery,Generate Report(Weekly and Daily)",
    clientName: "Client Name: Elmer S. Tablante",
    fbOrPageName: "FB Name/Page: ES Tablante Cargo Services",
    technologies: ["HTML", "React", "Bootstrap", "Firebase Firstore"],
  },
  {
    image: billing_system,
    title: "ES Tablante Billing System",
    description:
      "Functions: Add Billing, Calculate Profit for each client if he's profitable or not",
    clientName: "Client Name: Elmer S. Tablante",
    fbOrPageName: "FB Name/Page: ES Tablante Cargo Services",
    technologies: ["HTML", "React", "Bootstrap", "Firebase Firestore"],
  },
  {
    image: last_sw3,
    title: "Lasto/Swertres Management System",
    description:
      "Functions: Admin User,Admin can create normal user and delete user,Add Bets,Auto Profit calculation  of all bets,Generate Report,",
    clientName: "Client Name: NorlieJane Galing",
    fbOrPageName: "FB Name/Page: Norliejane Galing",
    technologies: ["HTML", "React", "Bootstrap", "Firebase Firestore"],
  },
  {
    image: hulu,
    title: "Hulu Clone",
    description: "Hulu Clone using TMDB API to get all the movies",
    clientName: "Personal Project",
    fbOrPageName: "",
    technologies: ["HTML", "React", "CSS,Flexbox", "axios", "Firebase"],
    button: true,
    linkButton: "https://hulu-clone-3df70.web.app/",
  },
  {
    image: whatsapp,
    title: "Whatsapp Clone",
    description: "Function: Login by gmail,Add new Chat,Chat Realtime",
    clientName: "Personal Project",
    fbOrPageName: "",
    technologies: [
      "HTML",
      "React",
      "CSS,Flexbox",
      "Firebase to use Realtime Database",
    ],
    button: true,
    linkButton: "https://whatsapp-clone-4377c.web.app/",
  },
  {
    image: amazon,
    title: "Amazon Clone",
    description: "Function: Signin & Signup User, Login by Gmail,Add to Basket",
    clientName: "Personal Project",
    fbOrPageName: "",
    technologies: ["HTML", "React", "CSS,Flexbox", "Firebase Firestore"],
    button: true,
    linkButton: "https://clone-266de.web.app/",
  },
  {
    image: discord,
    title: "Discord Clone",
    description: "Function: Just the main UI of discord",
    clientName: "Personal Project",
    fbOrPageName: "",
    technologies: ["HTML", "React", "CSS,Flexbox", "Firebase"],
    button: true,
    linkButton: "https://discord--clone-f6144.web.app/",
  },
];

//framer motion
const ScrollReveal = ({ children }) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 100 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.8 }}
    >
      {children}
    </motion.div>
  );
};

const ProjectCard = ({ project }) => {
  // state
  const [projectCardModalOpen, setProjectCardModalOpen] = useState(false);

  // functions
  const handleProjectCardModalOpen = () => {
    setProjectCardModalOpen(!projectCardModalOpen);
  };

  return (
    <ScrollReveal>
      <div className="flex flex-col items-center gap-8 md:flex-row md:gap-24">
        <img
          onClick={handleProjectCardModalOpen}
          src={project.image}
          alt=""
          className="w-full cursor-pointer rounded-2xl transition-all duration-300 hover:scale-105 md:w-[300px]"
        />
        <div className="flex flex-col gap-5">
          <div className="flex flex-col gap-3">
            <div className="text-xl font-semibold">{project.title}</div>
            <div style={{ whiteSpace: "pre-line" }} className="text-gray-400">
              {project.description}
            </div>
            <div style={{ whiteSpace: "pre-line" }} className="text-gray-400">
              {project.clientName && project.clientName}
            </div>
            <div style={{ whiteSpace: "pre-line" }} className="text-gray-400">
              {project.fbOrPageName && project.fbOrPageName}
            </div>
            <div style={{ whiteSpace: "pre-line" }} className="text-gray-400">
              {project.button && (
                <a
                  href={project.linkButton}
                  target="_blank"
                  className="text-nowrap rounded-lg border border-indigo-600 bg-black px-3 py-1 text-sm font-bold text-white shadow-md shadow-indigo-700 transition-all duration-300 hover:-translate-y-1 hover:shadow-lg hover:shadow-indigo-600"
                >
                  View
                </a>
              )}
            </div>
          </div>
          <div className="flex flex-wrap gap-5">
            {project.technologies.map((tech, index) => (
              <span key={index} className="rounded-lg bg-black p-3">
                {tech}
              </span>
            ))}
          </div>
        </div>
      </div>
      {/* Modal for Zoomed Image */}
      {projectCardModalOpen && (
        <div
          className="fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-80"
          onClick={handleProjectCardModalOpen}
        >
          <img
            src={project.image}
            alt=""
            className="max-h-[90%] max-w-[90%] rounded-xl"
          />
        </div>
      )}
    </ScrollReveal>
  );
};

function Projects() {
  return (
    <div
      id="projects"
      className="flex min-h-screen w-full flex-col items-center justify-center gap-16 p-4 md:px-14 md:py-24"
    >
      <ScrollReveal>
        <h1 className="text-4xl font-light text-white md:text-6xl">Projects</h1>
      </ScrollReveal>

      <div className="flex w-full max-w-[1000px] flex-col gap-16 text-white">
        {projectsData.map((project, index) => (
          <ProjectCard key={index} project={project} />
        ))}
      </div>
    </div>
  );
}

export default Projects;
