<script setup lang="ts">
import { onMounted } from 'vue'
import AppFooter from '@/components/layout/AppFooter.vue'
import AppNavbar from '@/components/layout/AppNavbar.vue'
import AboutSection from '@/components/sections/AboutSection.vue'
import ContactSection from '@/components/sections/ContactSection.vue'
import ExperienceSection from '@/components/sections/ExperienceSection.vue'
import HeroSection from '@/components/sections/HeroSection.vue'
import ProjectsSection from '@/components/sections/ProjectsSection.vue'
import SkillsSection from '@/components/sections/SkillsSection.vue'
import { applyDocumentSeo } from '@/composables/useSeo'
import { site } from '@/content/site'

onMounted(() => applyDocumentSeo({ title: site.meta.title, description: site.meta.description }))
</script>

<template>
  <div class="min-h-svh bg-slate-50 text-slate-900 dark:bg-[var(--color-surface-dark)] dark:text-white">
    <AppNavbar />
    <main id="main" class="font-sans">
      <HeroSection />
      <AboutSection />
      <SkillsSection />
      <ProjectsSection />
      <ExperienceSection />
      <ContactSection />
    </main>
    <AppFooter />
  </div>
</template>
