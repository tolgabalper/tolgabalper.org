import type { APIRoute } from "astro";

const robotsTxt = `
User-agent: Googlebot
Allow: 
User-agent: googlebot-mobile
Allow: 
User-agent: ia_archiver
Disallow: 
User-agent: *
Disallow: /
Crawl-delay: 5

Sitemap: ${new URL("sitemap-index.xml", import.meta.env.SITE).href}
`.trim();

export const GET: APIRoute = () => {
  return new Response(robotsTxt, {
    headers: {
      "Content-Type": "text/plain; charset=utf-8",
    },
  });
};
