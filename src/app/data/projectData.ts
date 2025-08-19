import { StaticImageData } from "next/image";
import lawFirm from "../../../public/assets/project_images/law_firm_2.png"
import rairaiken from "../../../public/assets/project_images/rairaiken-ordering.jpg"
import portfolio from "../../../public/assets/project_images/my_portfolio.png"

export type ProjectItem = {
    id: string;
    title: string;
    description: string;
    imgSrc: StaticImageData;
    srcCode: string;
    link: string;
    category: string;
    tools: Array<string>
};

export const projectData: ProjectItem[] = [
    {
        id: "abril-law-firm",
        title: "abril law firm",
        description: "A professional landing page for a law practitioner, designed to establish online presence and credibility. Includes a contact form for sending email inquiries directly from the site.",        category: "featured",
        imgSrc: lawFirm,
        srcCode: "",
        link: "https://law-abril-portfolio-eight.vercel.app",
        tools: ["Next JS", "Tailwind CSS", "Hostinger VPS"],
    },
    {
        id: "rairaiken-ordering",
        title: "rairaiken ordering system",
        description: "A modular Android-based ordering system with real-time POS integration, built for fine dining operations. The suite includes rairaiken-order (client-side), rairaiken-kitchen and rairaiken-bar (backend processing), and rairaiken-order-monitoring (live tracking). Enables seamless end-to-end order flow from table to kitchen, bar, and billing.",
        category: "featured",
        imgSrc: rairaiken,
        srcCode: "",
        link: "",
        tools: ["React Native", "Expo", "CSS", "Node JS", "Express JS", "Socket IO", "Postgre SQL", "Mongo DB", "Redis Server", "Linux Ubuntu"]
    },
    {
        id: "my-portfolio",
        title: "web portfolio",
        description: "A personal web portfolio showcasing my projects, skills, and professional experience. Built with a modern tech stack, it highlights featured work, technical expertise, and offers easy access for potential collaborators or employers to get in touch.",        category: "featured",
        imgSrc: portfolio,
        srcCode: "https://github.com/Calingcooo/my-portfolio-v2",
        link: "https://my-portfolio-v2-jade.vercel.app",
        tools: ["Next JS", "Tailwind CSS", "Vercel"]
    }
];