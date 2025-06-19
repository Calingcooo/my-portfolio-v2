export type ProjectItem = {
    id: string;
    title: string;
    description: string;
    category: string
    tools: Array<string>
};

export const projectData: ProjectItem[] = [
    {
        id: "abril-law-firm",
        title: "abril law firm",
        description: "A web app for visualizing personalized Spotify data. View your top artists, top tracks, recently played tracks, and detailed audio information about each track. Create and save new playlists of recommended tracks based on your existing playlists and more.",
        category: "featured",
        tools: ["Next JS", "Tailwind CSS", "Hostinger VPS"]
    },
];