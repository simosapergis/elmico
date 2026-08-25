/**
 * Adds Astro's deployment base path to an internal, root-relative URL.
 *
 * GitHub Pages serves this preview beneath /elmico/, while the production
 * site will continue to be served from the domain root.
 */
export const withBase = (path: string) => {
  const base = import.meta.env.BASE_URL;

  return path === '/' ? base : `${base}${path.slice(1)}`;
};
