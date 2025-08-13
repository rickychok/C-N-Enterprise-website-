import { NextResponse } from 'next/server';

const siteUrl = 'https://cnenterprise.com';

function generateRobotsTxt() {
  return `User-agent: *
Allow: /

# Sitemap
Sitemap: ${siteUrl}/sitemap.xml

# Crawl-delay for polite crawling
Crawl-delay: 1

# Block admin and private areas (none currently)
# Disallow: /admin/
# Disallow: /private/
`;
}

export function GET() {
  const robots = generateRobotsTxt();
  
  return new NextResponse(robots, {
    headers: {
      'Content-Type': 'text/plain',
      'Cache-Control': 'public, max-age=86400, s-maxage=86400',
    },
  });
}