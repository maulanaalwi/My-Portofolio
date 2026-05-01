<script setup lang="ts">
import type { Component } from 'vue'
import {
  Braces,
  Component as ComponentIcon,
  LayoutGrid,
  Layers,
  Paintbrush,
  Palette,
  Sparkles,
  Wind,
} from 'lucide-vue-next'
import AppCard from '@/components/ui/AppCard.vue'
import SectionHeading from '@/components/ui/SectionHeading.vue'
import RevealOnScroll from '@/components/ui/RevealOnScroll.vue'
import type { SkillIconKey } from '@/content/skills'
import { skills, skillsSection } from '@/content/skills'

const iconMap: Record<SkillIconKey, Component> = {
  layers: Layers,
  palette: Palette,
  code: Braces,
  tailwind: Wind,
  vue: Sparkles,
  component: ComponentIcon,
  blocks: LayoutGrid,
  paint: Paintbrush,
}

function clampLevel(value: number) {
  return Math.min(Math.max(value, 0), 100)
}
</script>

<template>
  <section id="skills" aria-label="Keahlian" class="relative py-20">
    <div class="pointer-events-none absolute inset-x-0 top-[-5%] h-px bg-gradient-to-r from-transparent via-violet-200 to-transparent opacity-75 dark:via-indigo-500/40" />
    <div class="mx-auto max-w-6xl space-y-12 px-5 lg:px-8">
      <RevealOnScroll class="flex flex-wrap items-start justify-between gap-8 lg:items-center">
        <SectionHeading class="flex-1" :eyebrow="skillsSection.eyebrow" :title="skillsSection.title" :subtitle="skillsSection.subtitle" />
      </RevealOnScroll>
      <div class="grid gap-6 sm:grid-cols-2 xl:grid-cols-4">
        <RevealOnScroll v-for="(skill, index) in skills" :key="skill.name" :delay-ms="index * 55">
          <AppCard elevated class="flex h-full flex-col gap-4">
            <div class="flex items-start justify-between gap-3">
              <div class="rounded-2xl bg-violet-500/15 p-3 text-violet-600 dark:bg-violet-500/25 dark:text-violet-200">
                <component :is="iconMap[skill.iconKey]" class="h-7 w-7" stroke-width="1.5" aria-hidden="true" />
              </div>
              <span class="text-xs font-semibold uppercase tracking-[0.2em] text-slate-400 dark:text-slate-500">{{ skill.level }}%</span>
            </div>
            <div>
              <h3 class="text-lg font-semibold text-slate-900 dark:text-white">
                {{ skill.name }}
              </h3>
              <p class="mt-2 text-sm text-slate-600 dark:text-slate-400">
                {{ skill.description }}
              </p>
            </div>
            <div class="mt-auto">
              <div class="flex items-center gap-3 text-[10px] font-semibold uppercase tracking-[0.15em] text-slate-500 dark:text-slate-400">
                <span>Keahlian</span>
              </div>
              <div class="relative mt-2 h-2 w-full overflow-hidden rounded-full bg-slate-100 dark:bg-slate-800">
                <div
                  class="h-full rounded-full bg-gradient-to-r from-violet-500 to-indigo-400 transition-[width] duration-700"
                  :style="{ width: `${clampLevel(skill.level)}%` }"
                />
              </div>
            </div>
          </AppCard>
        </RevealOnScroll>
      </div>
    </div>
  </section>
</template>
