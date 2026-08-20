export const defaultLocale = 'el' as const;
export const supportedLocales = ['el'] as const;
export type Locale = (typeof supportedLocales)[number];

export const localeLabels: Record<Locale, string> = {
  el: 'Ελληνικά',
};
