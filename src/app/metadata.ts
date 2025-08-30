import { Metadata } from 'next';
import siteData from '@/data/site-data';

export const metadata: Metadata = {
    title: siteData.project.name,
    description: siteData.project.title,
};
