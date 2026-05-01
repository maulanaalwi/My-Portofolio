/**
 * Konten umum situs — SEO dasar & footer (sesuaikan dengan data Anda).
 */
export const site = {
  name: 'Portfolio',
  fullName: 'Maulana Alwi Al-Khatami',
  titleSuffix: 'Frontend Web Developer',
  copyrightYear: 2026,
  meta: {
    title: 'Maulana Alwi | Frontend Web Developer',
    description:
      'Frontend Web Developer yang fokus pada Front End Developer, desain sistem,UI/UX Website yang user friendly, dan pengalaman pengguna yang cepat serta dapat diakses.',
    keywords: ['Frontend', 'Vue.js', 'Web Developer', 'Portfolio', 'Tailwind CSS'],
    canonicalUrl: 'https://yourdomain.com',
    ogImage: '/og-default.svg',
    locale: 'id_ID',
  },
  navBrand: 'Maulana Alwi',
} as const

export const footerSocial = [
  {
    label: 'GitHub',
    href: 'https://github.com/yourusername',
    iconKey: 'github' as const,
  },
  {
    label: 'LinkedIn',
    href: 'https://linkedin.com/in/yourprofile',
    iconKey: 'linkedin' as const,
  },
  {
    label: 'Email',
    href: 'mailto:you@example.com',
    iconKey: 'mail' as const,
  },
] as const
