export type SkillIconKey =
  | 'layers'
  | 'palette'
  | 'code'
  | 'tailwind'
  | 'vue'
  | 'component'
  | 'blocks'
  | 'paint'

export interface SkillItem {
  name: string
  description: string
  level: number
  iconKey: SkillIconKey
}

export const skillsSection = {
  eyebrow: 'Keahlian',
  title: 'Tech stack & peralatan',
  subtitle: 'Kombinasi yang sering saya gunakan untuk membangun produk web.',
} as const

export const skills: readonly SkillItem[] = [
  {
    name: 'HTML & Semantik',
    description: 'Markup yang mudah dirawat dan ramah SEO.',
    level: 95,
    iconKey: 'layers',
  },
  {
    name: 'CSS & Layout',
    description: 'Grid, flexbox, animasi, dan desain responsif.',
    level: 92,
    iconKey: 'palette',
  },
  {
    name: 'JavaScript / TypeScript',
    description: 'Logika UI, state, dan integrasi API.',
    level: 90,
    iconKey: 'code',
  },
  {
    name: 'Tailwind CSS',
    description: 'Utility-first styling yang konsisten dan cepat.',
    level: 94,
    iconKey: 'tailwind',
  },
  {
    name: 'Vue.js',
    description: 'Komponen composition API & ekosistem modern.',
    level: 93,
    iconKey: 'vue',
  },
  {
    name: 'React',
    description: 'Komponen terarah data & ekosistem tooling.',
    level: 85,
    iconKey: 'component',
  },
  {
    name: 'Figma',
    description: 'Kolaborasi desain & handoff ke kode.',
    level: 78,
    iconKey: 'paint',
  },
  {
    name: 'Aksesibilitas & Performa',
    description: 'Core Web Vitals, ARIA, dan pola loading yang ringan.',
    level: 88,
    iconKey: 'blocks',
  },
] as const
