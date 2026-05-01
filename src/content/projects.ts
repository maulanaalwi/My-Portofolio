export interface ProjectItem {
  title: string
  description: string
  stack: readonly string[]
  imageUrl: string
  demoUrl: string
  repoUrl: string
}

export const projectsSection = {
  eyebrow: 'Portfolio',
  title: 'Proyek pilihan',
  subtitle: 'Kumpulan proyek web yang pernah saya rancang dan kembangkan.',
} as const

export const projects: readonly ProjectItem[] = [
  {
    title: 'Sistem Rekap Lab Universitas',
    description:
      'Sistem Aplikasi yang mempermudah dosen/pengajar melakukan rekap secara otomatis.',
    stack: ['Laravel 11', 'SQLlite', 'Tailwind CSS', 'Blade'],
    imageUrl: '/placeholders/dashboard.svg',
    demoUrl: '#',
    repoUrl: 'https://github.com',
  },
  {
    title: 'Landing Page Sekolah',
    description:
      'Landing Page Untuk Sekolah SMK yang responsive.',
    stack: ['Vue js 3', 'Tailwindcss', 'Pinia'],
    imageUrl: '/placeholders/store.svg',
    demoUrl: 'https://school-landingpage-alwi.netlify.app/',
    repoUrl: 'https://github.com',
  },
  {
    title: 'Platform Codingo',
    description:
      'Sebuah Platform/Website Untuk belajar dan mengetahui roadmap belajar coding.',
    stack: ['React', 'Tailwindcss', 'schdUi'],
    imageUrl: '/placeholders/store.svg',
    demoUrl: 'https://codingo-id.netlify.app/',
    repoUrl: 'https://github.com',
  },
  {
    title: 'Template Undangan Digital -1', 
    description:
      'Halaman kampanye dengan LCP cepat dan animasi halus menggunakan IntersectionObserver.',
    stack: ['Vite', 'Vue', 'Tailwind CSS'],
    imageUrl: '/placeholders/campaign.svg',
    demoUrl: 'https://maulana-template-1.netlify.app/',
    repoUrl: 'https://github.com',
  },
  {
    title: 'Platform Undangan Digital',
    description:
      'Token warna/tipografi, dokumentasi pola, dan contoh pola state komponen.',
    stack: ['Figma Tokens', 'Tailwind Plugins', 'React', 'Laravel'],
    imageUrl: '/placeholders/system.svg',
    demoUrl: 'https://nikahklik-landingpage.netlify.app/',
    repoUrl: 'https://github.com',
  },
  {
    title: 'Template Undangan Digital -2',
    description:
      'Sistem Aplikasi yang mempermudah dosen/pengajar melakukan rekap secara otomatis.',
    stack: ['Vite', 'Vue', 'Tailwind CSS'],
    imageUrl: '/placeholders/dashboard.svg',
    demoUrl: 'https://maulana-template-2.netlify.app/',
    repoUrl: 'https://github.com',
  },
  {
    title: 'Template Undangan Digital -3',
    description:
      'Library UI konsisten untuk katalog produk dengan micro-interaksi dan pola cart.',
    stack: ['Vite', 'Vue', 'Tailwind CSS'],
    imageUrl: '/placeholders/store.svg',
    demoUrl: 'https://maulana-template-3.netlify.app/',
    repoUrl: 'https://github.com',
  },
  {
    title: 'Platform Belajaro', 
    description:
      'Halaman kampanye dengan LCP cepat dan animasi halus menggunakan IntersectionObserver.',
    stack: ['React', 'Laravel 11', 'Tailwind CSS', 'MYSql'],
    imageUrl: '/placeholders/campaign.svg',
    demoUrl: 'https://belajaro.id/',
    repoUrl: 'https://github.com',
  },

] as const
