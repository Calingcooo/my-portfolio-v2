export type CareerItem = {
    id: string;
    title: string;
    role: string;
    period: string;
    responsibilities: string[];
    achievements?: string[];
};

export const careerData: CareerItem[] = [
    {
        id: "arhika-technologies-inc",
        title: "arhika",
        role: "Jr. Full-stack Web Developer",
        period: "Sept 2024 - Present",
        responsibilities: [
            "Deliver high-quality, robust production code for a diverse array of projects for clients including Harvard Business School, Everytown for Gun Safety, Pratt Institute, Koala Health, Vanderbilt University, The 19th News, and more",
            "Work alongside creative directors to lead the research, development, and architecture of technical solutions to fulfill business requirements",
            "Collaborate with designers, project managers, and other engineers to transform creative concepts into production realities for clients and stakeholders",
            "Provide leadership within engineering department through close collaboration, knowledge shares, and mentorship"
        ],
    },
    {
        id: "digital-ecosystem-technologies-inc",
        title: "digital ecosystems",
        role: "Jr. Full-stack Web Developer",
        period: "Aug 2023 - Sept 2024",
        responsibilities: [
            "Developed, maintained, and shipped production code for client websites primarily using HTML, CSS, Sass, JavaScript, and jQuery",
            "Collaborated with designers to implement pixel-perfect UIs",
            "Optimized application performance and accessibility"
        ],
    },
    {
        id: "skin-manila-inc",
        title: "skin manila",
        role: "I.T Specialist",
        period: "Dec 2022 - July 2023",
        responsibilities: [
            "Created reusable component library",
            "Implemented design system across all products",
            "Conducted user testing sessions"
        ]
    },
    {
        id: "skin-manila-inc23",
        title: "skin manila",
        role: "I.T Specialist",
        period: "Dec 2022 - July 2023",
        responsibilities: [
            "Created reusable component library",
            "Implemented design system across all products",
            "Conducted user testing sessions"
        ]
    }
];