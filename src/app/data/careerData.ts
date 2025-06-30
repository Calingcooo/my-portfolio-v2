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
        title: "Arhika Technologies Inc.",
        role: "Jr. Full-Stack Developer",
        period: "Sept 2024 - Present",
        responsibilities: [
            "Developed high-quality, production-grade code for client projects (Rai Rai Ken, ATOP Ph, ABC Tech Inc.), ensuring reliability and scalability.",
            "Partnered with senior engineers to research, design, and architect technical solutions aligned with business goals.",
            "Translated design concepts into functional products by collaborating closely with designers, PMs, and stakeholders.",
            "Contributed to engineering team growth through knowledge-sharing, code reviews, and mentoring junior developers.",
        ],
    },
    {
        id: "digital-ecosystem-technologies-inc",
        title: "Digital Ecosystem Technologies Inc.",
        role: "Jr. Full-Stack Developer",
        period: "Aug 2023 - Sept 2024",
        responsibilities: [
            "Built and maintained client applications using React, TypeScript, Tailwind CSS, Node.js, Express, and PostgreSQL/MySQL.",
            "Collaborated with frontend engineers to develop a reusable component library, improving code consistency.",
            "Researched and architected technical solutions to meet business requirements, from planning to deployment.",
            "Optimized web applications for performance and accessibility, enhancing user experience.",
        ],
    },
    {
        id: "skin-manila-inc",
        title: "Skin Manila Inc.",
        role: "IT Specialist",
        period: "Dec 2022 - July 2023",
        responsibilities: [
            "Worked with department heads to research, develop, and architect IT solutions for business needs.",
            "Implemented a standardized design system across company products to unify UI/UX.",
            "Conducted user testing sessions to gather feedback and validate product improvements.",
        ],
    },
];