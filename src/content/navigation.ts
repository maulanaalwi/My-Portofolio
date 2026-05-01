export type NavId = 'home' | 'about' | 'skills' | 'projects' | 'experience' | 'contact'

export interface NavItem {
  id: NavId
  label: string
  href: string
}

export const navigationItems: readonly NavItem[] = [
  { id: 'home', label: 'Home', href: '#home' },
  { id: 'about', label: 'About', href: '#about' },
  { id: 'skills', label: 'Skills', href: '#skills' },
  { id: 'projects', label: 'Projects', href: '#projects' },
  { id: 'experience', label: 'Experience', href: '#experience' },
  { id: 'contact', label: 'Contact', href: '#contact' },
] as const
