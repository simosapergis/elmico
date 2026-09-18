import { existsSync, readdirSync, readFileSync, statSync } from 'node:fs';
import { join, relative } from 'node:path';

const root = new URL('../dist/', import.meta.url).pathname;
const failures = [];
const warnings = [];

if (!existsSync(root)) {
  console.error('FAIL: Δεν υπάρχει φάκελος dist. Εκτελέστε πρώτα npm run build.');
  process.exit(1);
}

const walk = (directory) => readdirSync(directory).flatMap((name) => {
  const path = join(directory, name);
  return statSync(path).isDirectory() ? walk(path) : [path];
});

const files = walk(root);
const htmlFiles = files.filter((file) => file.endsWith('.html'));
const titles = new Map();
const descriptions = new Map();

const match = (html, expression) => html.match(expression)?.[1]?.trim();
const routeFor = (file) => {
  const rel = relative(root, file);
  return rel === 'index.html' ? '/' : `/${rel.replace(/index\.html$/, '')}`;
};

for (const file of htmlFiles) {
  const html = readFileSync(file, 'utf8');
  const route = routeFor(file);
  const title = match(html, /<title>(.*?)<\/title>/s);
  const description = match(html, /<meta name="description" content="([^"]+)"/);
  const canonical = match(html, /<link rel="canonical" href="([^"]+)"/);
  const h1Count = (html.match(/<h1(?:\s|>)/g) || []).length;

  if (!title) failures.push(`${route}: λείπει title`);
  if (!description) failures.push(`${route}: λείπει meta description`);
  if (!canonical?.startsWith('https://elmico.gr/')) failures.push(`${route}: μη έγκυρο canonical`);
  if (!html.includes('<html lang="el">')) failures.push(`${route}: λείπει lang="el"`);
  if (h1Count !== 1) failures.push(`${route}: βρέθηκαν ${h1Count} H1`);

  for (const property of ['og:title', 'og:description', 'og:url', 'og:type', 'og:image', 'og:site_name']) {
    if (!html.includes(`property="${property}"`)) failures.push(`${route}: λείπει ${property}`);
  }

  for (const json of html.matchAll(/<script type="application\/ld\+json">([\s\S]*?)<\/script>/g)) {
    try { JSON.parse(json[1]); } catch { failures.push(`${route}: μη έγκυρο JSON-LD`); }
  }

  for (const img of html.matchAll(/<img\s[^>]*>/g)) {
    if (!/\salt="[^"]*"/.test(img[0])) failures.push(`${route}: εικόνα χωρίς alt`);
    const src = match(img[0], /\ssrc="([^"]+)"/);
    if (src?.startsWith('/') && !existsSync(join(root, src))) failures.push(`${route}: λείπει εικόνα ${src}`);
  }

  for (const href of html.matchAll(/\shref="([^"]+)"/g)) {
    const value = href[1];
    if (!value.startsWith('/') || value.startsWith('//')) continue;
    const path = value.split('#')[0].split('?')[0];
    if (!path) continue;
    const destination = path.endsWith('/') ? join(root, path, 'index.html') : join(root, path);
    if (!existsSync(destination)) failures.push(`${route}: σπασμένος εσωτερικός σύνδεσμος ${value}`);
  }

  if (title) {
    if (titles.has(title) && route !== '/404/') failures.push(`${route}: διπλό title με ${titles.get(title)}`);
    titles.set(title, route);
  }
  if (description) {
    if (descriptions.has(description) && route !== '/404/') failures.push(`${route}: διπλό description με ${descriptions.get(description)}`);
    descriptions.set(description, route);
  }
}

if (!existsSync(join(root, 'sitemap.xml'))) failures.push('Λείπει sitemap.xml');
if (!existsSync(join(root, 'robots.txt'))) failures.push('Λείπει robots.txt');
if (htmlFiles.length !== 8) warnings.push(`Αναμένονταν 8 HTML σελίδες, βρέθηκαν ${htmlFiles.length}`);

if (failures.length) {
  console.error('FAIL');
  failures.forEach((failure) => console.error(`- ${failure}`));
  process.exit(1);
}

console.log('PASS');
console.log(`- ${htmlFiles.length} HTML σελίδες`);
console.log('- Μοναδικά title και meta descriptions');
console.log('- Canonicals, Open Graph, H1, lang και JSON-LD');
console.log('- Εσωτερικοί σύνδεσμοι και τοπικές εικόνες');
console.log('- sitemap.xml και robots.txt');
warnings.forEach((warning) => console.warn(`- ${warning}`));
