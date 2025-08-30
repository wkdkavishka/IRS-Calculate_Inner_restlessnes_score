import { IconType } from 'react-icons';
import { FaFacebook, FaGithub, FaLinkedin, FaWhatsapp } from 'react-icons/fa';

export interface Skill {
    name: string;
    description: string;
    icon: IconType;
}

export interface CardCompIntf {
    id: string;
    title: string;
    description: string;
    tags: string[];
    link: string;
    image: string[];
    github?: string;
}

export interface SocialLink {
    name: string;
    url: string;
    icon: IconType;
}

export interface TeamMemberCarouselCompIntf {
    id: string;
    name: string;
    role: string;
    company: string;
    image: string;
    testimonial: string;
    social: {
        linkedin: string;
        twitter: string;
        github: string;
    };
}

// personel
export interface ProjectData {
    name: string;
    title: string;
    location: string;
    email: string;
    profileImage: string;
    about: string[];
    resumeUrl: string;
}

// socialData
export interface SocialData {
    name: string;
    url: string;
    icon: IconType;
}

export interface SiteData {
    project: ProjectData;
    personal: ProjectData;
    socialLinks: SocialData[];
}

// Create the site data with proper typing
const siteData: SiteData = {
    project: {
        name: 'W.K.D.Kavishka',
        title: 'Software Engineer | DevOps Engineer',
        location: 'Colombo, Sri Lanka',
        email: 'w.k.d.kavishka@gmail.com',
        profileImage: '/images/profile.webp',
        about: [
            'Take your business to the next level',
            'Taking on challenging projects and delivering exceptional software solutions.',
            'Focused on delivering high-quality, scalable applications that meet business needs.',
            'Building lasting client relationships through exceptional service and innovative solutions.',
            'Dedicated to excellence in every project and committed to client satisfaction.',
        ],
        resumeUrl: '/resume.pdf',
    },
    personal: {
        name: 'W.K.D.Kavishka',
        title: 'Software Engineer | DevOps Engineer',
        location: 'Colombo, Sri Lanka',
        email: 'w.k.d.kavishka@gmail.com',
        profileImage: '/images/profile.webp',
        about: [
            'Experienced Software Engineer with a passion for creating efficient and scalable applications.',
            'Skilled in full-stack development and cloud infrastructure.',
            'Committed to continuous learning and staying up-to-date with the latest technologies.'
        ],
        resumeUrl: '/resume.pdf',
    },

    socialLinks: [
        {
            name: 'GitHub',
            url: 'https://github.com/wkdkavishka',
            icon: FaGithub,
        },
        {
            name: 'LinkedIn',
            url: 'https://linkedin.com/in/wkdkavishka',
            icon: FaLinkedin,
        },
        {
            name: 'Facebook',
            url: 'https://facebook.com/W.K.D.Kavishka',
            icon: FaFacebook,
        },
        {
            name: 'WhatsApp',
            url: 'https://wa.me/94757676968',
            icon: FaWhatsapp,
        },
    ],
};

export default siteData;
