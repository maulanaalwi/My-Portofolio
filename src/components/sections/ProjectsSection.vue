<script setup lang="ts">
import { ExternalLink, Github } from 'lucide-vue-next'
import AppCard from '@/components/ui/AppCard.vue'
import SectionHeading from '@/components/ui/SectionHeading.vue'
import RevealOnScroll from '@/components/ui/RevealOnScroll.vue'
import { projects, projectsSection } from '@/content/projects'
</script>

<template>
  <section id="projects" aria-label="Proyek" class="relative border-y border-slate-200/70 bg-white/50 py-20 dark:border-slate-800 dark:bg-[#111126]/65">
    <div class="mx-auto max-w-6xl space-y-12 px-5 lg:px-8">
      <RevealOnScroll class="flex flex-wrap items-start justify-between gap-8 lg:items-end">
        <SectionHeading class="flex-1" align="center" :eyebrow="projectsSection.eyebrow" :title="projectsSection.title" :subtitle="projectsSection.subtitle" />
      </RevealOnScroll>
      <div class="grid gap-8 lg:grid-cols-2">
        <RevealOnScroll v-for="(project, index) in projects" :key="project.title" :delay-ms="index * 120">
          <AppCard elevated class="group flex flex-col gap-5 !p-0">
            <figure class="overflow-hidden rounded-2xl">

              <figcaption class="sr-only">
                Tangkapan layar proyek {{ project.title }}
              </figcaption>
            </figure>
            <div class="space-y-3 px-6 pb-2">
              <div class="flex flex-wrap gap-2 text-xs uppercase tracking-[0.16em] text-violet-500 dark:text-violet-300">
                <span v-for="tag in project.stack" :key="tag">{{ tag }}</span>
              </div>
              <div class="space-y-3">
                <h3 class="text-2xl font-semibold text-slate-900 dark:text-white">{{ project.title }}</h3>
                <p class="text-sm leading-relaxed text-slate-600 dark:text-slate-400">
                  {{ project.description }}
                </p>
              </div>
            </div>
            <div class="flex flex-wrap items-center gap-3 px-6 pb-6 pt-3">
              <a
                :href="project.demoUrl"
                class="inline-flex items-center gap-2 rounded-xl border border-slate-200 px-4 py-2 text-sm font-semibold text-slate-800 transition hover:border-violet-400 hover:text-violet-600 dark:border-slate-700 dark:text-white dark:hover:border-violet-400"
              >
                Lihat demo
                <ExternalLink class="h-4 w-4" stroke-width="1.65" aria-hidden="true" />
              </a>
              <a
                :href="project.repoUrl"
                target="_blank"
                rel="noreferrer noopener"
                class="inline-flex items-center gap-2 rounded-xl border border-transparent px-3 py-2 text-sm font-medium text-slate-600 hover:text-slate-900 dark:text-slate-400 dark:hover:text-white"
              >
                Repo
                <Github class="h-4 w-4" stroke-width="1.65" aria-hidden="true" />
              </a>
            </div>
          </AppCard>
        </RevealOnScroll>
      </div>
    </div>
  </section>
</template>
