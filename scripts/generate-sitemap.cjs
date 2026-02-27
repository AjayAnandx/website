/**
 * generate-sitemap.cjs
 * ---------------------
 * Run:  node scripts/generate-sitemap.cjs
 * Or add to package.json:  "sitemap": "node scripts/generate-sitemap.cjs"
 *
 * Add new routes to the `routes` array and re-run to regenerate public/sitemap.xml
 */

const fs = require('fs');
const path = require('path');

// ─── CONFIG ──────────────────────────────────────────────────────────────────
const BASE_URL = 'https://yourdomain.com'; // ← update with your production domain
const OUTPUT_PATH = path.join(__dirname, '..', 'public', 'sitemap.xml');
const TODAY = new Date().toISOString().split('T')[0];

// ─── ROUTES ──────────────────────────────────────────────────────────────────
const routes = [
    { path: '/', changefreq: 'weekly', priority: '1.0' },
    { path: '/book-call', changefreq: 'weekly', priority: '0.9' },
    { path: '/about', changefreq: 'monthly', priority: '0.8' },
    { path: '/services', changefreq: 'monthly', priority: '0.8' },
    { path: '/ai-consulting', changefreq: 'monthly', priority: '0.8' },
    { path: '/ai-automation', changefreq: 'monthly', priority: '0.8' },
    { path: '/software-development', changefreq: 'monthly', priority: '0.8' },
    { path: '/website-development', changefreq: 'monthly', priority: '0.8' },
    { path: '/course-platform', changefreq: 'monthly', priority: '0.7' },
    { path: '/case-study', changefreq: 'monthly', priority: '0.7' },
    { path: '/careers', changefreq: 'weekly', priority: '0.7' },
    { path: '/contact', changefreq: 'monthly', priority: '0.6' },
];

// ─── GENERATE ────────────────────────────────────────────────────────────────
const urlEntries = routes
    .map(
        ({ path: route, changefreq, priority }) => `  <url>
    <loc>${BASE_URL}${route}</loc>
    <lastmod>${TODAY}</lastmod>
    <changefreq>${changefreq}</changefreq>
    <priority>${priority}</priority>
  </url>`
    )
    .join('\n\n');

const xml = `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">

${urlEntries}

</urlset>
`;

fs.writeFileSync(OUTPUT_PATH, xml, 'utf-8');
console.log(`✅ Sitemap generated at: ${OUTPUT_PATH}`);
console.log(`   ${routes.length} URLs written.`);
