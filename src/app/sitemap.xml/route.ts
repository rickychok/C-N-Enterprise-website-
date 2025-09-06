import { NextResponse } from 'next/server';

const siteUrl = 'https://cnenterprise.vercel.app';

const staticPages = [
  '',
  '/about',
  '/services',
  '/services/alternator-repair',
  '/services/starter-repair',
  '/services/wiring-diagnostics',
  '/services/charging-system',
  '/contact',
  '/reviews',
];

function generateSitemap() {
  const currentDate = new Date().toISOString();
  
  const urlEntries = staticPages.map((page) => {
    const url = `${siteUrl}${page}`;
    const priority = page === '' ? '1.0' : page.startsWith('/services/') ? '0.8' : '0.7';
    const changefreq = page === '' ? 'weekly' : 'monthly';
    
    return `
    <url>
      <loc>${url}</loc>
      <lastmod>${currentDate}</lastmod>
      <changefreq>${changefreq}</changefreq>
      <priority>${priority}</priority>
    </url>`;
  }).join('');

  return `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
  ${urlEntries}
</urlset>`;
}

export function GET() {
  const sitemap = generateSitemap();
  
  return new NextResponse(sitemap, {
    headers: {
      'Content-Type': 'application/xml',
      'Cache-Control': 'public, max-age=86400, s-maxage=86400',
    },
  });
}