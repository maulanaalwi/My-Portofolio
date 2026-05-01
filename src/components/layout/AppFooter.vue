<script setup lang="ts">
import { Github, Linkedin, Mail } from 'lucide-vue-next'
import { site, footerSocial } from '@/content/site'

const icons = {
  github: Github,
  linkedin: Linkedin,
  mail: Mail,
} as const

const currentYear = new Date().getFullYear()
const year = Math.max(site.copyrightYear, currentYear)
</script>

<template>
  <footer class="border-t border-slate-200/80 bg-white/60 py-10 dark:border-slate-800 dark:bg-[var(--color-surface-darker)]">
    <div
      class="mx-auto flex max-w-6xl flex-col gap-6 px-5 text-sm text-slate-600 lg:flex-row lg:items-center lg:justify-between lg:px-8 dark:text-slate-400"
    >
      <p class="text-balance">
        © {{ year }} {{ site.fullName }} · Built with Vue 3 & Tailwind CSS
      </p>
      <div class="flex flex-wrap items-center gap-3">
        <a
          v-for="link in footerSocial"
          :key="link.label"
          :href="link.href"
          :target="link.href.startsWith('http') ? '_blank' : undefined"
          :rel="link.href.startsWith('http') ? 'noreferrer noopener' : undefined"
          class="inline-flex items-center gap-2 rounded-xl border border-transparent px-3 py-2 text-slate-700 transition hover:border-violet-300 hover:text-violet-600 dark:text-slate-200 dark:hover:border-violet-500/60 dark:hover:text-violet-100"
        >
          <component :is="icons[link.iconKey]" class="h-4 w-4" stroke-width="1.6" />
          <span>{{ link.label }}</span>
        </a>
      </div>
    </div>
  </footer>
</template>
