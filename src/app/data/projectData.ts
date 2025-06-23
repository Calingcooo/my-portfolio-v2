import { StaticImageData } from "next/image";
import lawFirm from "../../../public/assets/project_images/law_firm_2.png"
import rairaiken from "../../../public/assets/project_images/rairaiken-ordering.jpg"

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
        description: "A web app for visualizing personalized Spotify data. View your top artists, top tracks, recently played tracks, and detailed audio information about each track. Create and save new playlists of recommended tracks based on your existing playlists and more.",
        category: "featured",
        imgSrc: lawFirm,
        srcCode: "",
        link: "",
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
    }
];