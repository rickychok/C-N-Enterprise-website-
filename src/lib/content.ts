import fs from 'fs/promises';
import path from 'path';

export interface SiteConfig {
  name: string;
  tagline: string;
  description: string;
  phone: string;
  whatsapp: string;
  email: string;
  address: {
    street: string;
    city: string;
    state: string;
    zip: string;
    country: string;
  };
  hours: Record<string, string>;
  services: string[];
  brandColor: string;
  mapEmbedUrl: string;
  socialLinks: {
    facebook?: string;
    instagram?: string;
  };
}

export interface Review {
  id: string;
  name: string;
  rating: number;
  comment: string;
  service: string;
  date: string;
}

const contentDir = path.join(process.cwd(), 'src/content');

export async function getSiteConfig(): Promise<SiteConfig> {
  const filePath = path.join(contentDir, 'site.json');
  const content = await fs.readFile(filePath, 'utf-8');
  return JSON.parse(content);
}

export async function getReviews(): Promise<Review[]> {
  try {
    const filePath = path.join(contentDir, 'reviews.json');
    const content = await fs.readFile(filePath, 'utf-8');
    return JSON.parse(content);
  } catch {
    return [];
  }
}