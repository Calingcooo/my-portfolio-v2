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
        id: "digital-ecosystem-technologies-inc",
        title: "digital ecosystem technologies inc.",
        role: "Jr. Full-stack Web Developer",
        period: "Aug 2023 - Present",
        responsibilities: [
            "Developed, maintained, and shipped production code for client websites primarily using HTML, CSS, Sass, JavaScript, and jQuery",
            "Collaborated with designers to implement pixel-perfect UIs",
            "Optimized application performance and accessibility"
        ],
    },
    {
        id: "skin-manila-inc",
        title: "skin manila inc.",
        role: "I.T Specialist",
        period: "Dec 2022 - July 2023",
        responsibilities: [
            "Created reusable component library",
            "Implemented design system across all products",
            "Conducted user testing sessions"
        ]
    }
];