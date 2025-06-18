export type ProjectItem = {
    id: string;
    title: string;
    description: string;
    category: string
    tools: Array<string>
};

export const projectData: ProjectItem[] = [
    {
        id: "project-1",
        title: "test project 1",
        description: "A web app for visualizing personalized Spotify data. View your top artists, top tracks, recently played tracks, and detailed audio information about each track. Create and save new playlists of recommended tracks based on your existing playlists and more.",
        category: "featured",
        tools: ["NodeJS", "VSCode"]
    },
    {
        id: "project-2",
        title: "test project 2",
        description: "A web app for visualizing personalized Spotify data.",
        category: "featured",
        tools: ["ReactJS", "VSCode"]
    },
    {
        id: "project-3",
        title: "test project 3",
        description: "A web app for visualizing personalized Spotify data. View your top artists, top tracks, recently played tracks, and detailed audio information about each track.",
        category: "featured",
        tools: ["ReactJS", "VSCode"]
    },
];