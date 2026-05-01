/**
 * Profil singkat — hero & about (ganti dengan informasi asli Anda).
 */
export const profile = {
  hero: {
    role: 'Frontend Web Developer',
    tagline: 'Website modern yang cepat, interaktif, User Friendly, dan menyenangkan dipakai.',
    primaryCta: { label: 'Hubungi saya', href: '#contact' },
    secondaryCta: {
      label: 'Unduh CV',
      href: '/resume.pdf',
      download: true,
    },
    imageAlt: 'Foto profil',
    avatarUrl: '/Profil-Gua.jpg',
  },
  about: {
    eyebrow: 'Tentang saya',
    title: 'Passion untuk antarmuka web yang bersih',
    paragraphs: [
      'Saya adalah seorang Web Developer dengan fokus pada Frontend Development yang memiliki ketertarikan besar dalam membangun tampilan antarmuka yang modern, responsif, dan nyaman digunakan. Saya menikmati proses merancang serta mengembangkan UI/UX yang tidak hanya menarik secara visual, tetapi juga memberikan pengalaman pengguna yang optimal',
    ],
  },
} as const
