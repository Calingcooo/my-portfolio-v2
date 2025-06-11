import { IconType } from "react-icons";
import { FiGithub, FiInstagram, FiTwitter, FiLinkedin, FiCodepen } from "react-icons/fi";

export type SocialData = {
    id: string;
    name: string;
    url?: string;
    icon: IconType
}

export const socialLinks: SocialData[] = [
    {
        id: "github",
        name: "github",
        url: "https://github.com/Calingcooo",
        icon: FiGithub
    },
    {
        id: "instagram",
        name: "instagram",
        url: "#",
        icon: FiInstagram
    },
    {
        id: "twitter",
        name: "twitter",
        url: "#",
        icon: FiTwitter
    },
    {
        id: "linkedin",
        name: "linkedin",
        url: "#",
        icon: FiLinkedin
    },
    {
        id: "codepen",
        name: "codepen",
        url: "#",
        icon: FiCodepen
    },
];