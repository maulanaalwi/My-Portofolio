<script setup lang="ts">
import SectionHeading from '@/components/ui/SectionHeading.vue'
import RevealOnScroll from '@/components/ui/RevealOnScroll.vue'
import { experienceSection, experiences } from '@/content/experience'
</script>

<template>
  <section id="experience" aria-label="Pengalaman" class="relative py-20">
    <div class="mx-auto max-w-6xl px-5 lg:px-8">
      <RevealOnScroll class="mb-14">
        <SectionHeading :eyebrow="experienceSection.eyebrow" :title="experienceSection.title" :subtitle="experienceSection.subtitle" />
      </RevealOnScroll>
      <RevealOnScroll :delay-ms="80">
        <ol class="relative space-y-10 border-l border-dashed border-slate-300/80 pl-8 dark:border-slate-700">
          <li v-for="(item, idx) in experiences" :key="item.company + item.period" class="relative">
            <span
              class="absolute -left-[9px] top-5 h-5 w-5 -translate-x-1/2 rounded-full border-[3px] border-white bg-violet-500 shadow-[0_12px_32px_-8px_rgb(147_139_246_/_0.55)] dark:border-slate-900 dark:bg-violet-400 dark:shadow-indigo-900/60"
              :aria-hidden="true"
            />
            <article
              class="rounded-[1.85rem] border border-slate-200/80 bg-white/80 p-6 shadow-sm transition hover:border-violet-300/65 dark:border-slate-800 dark:bg-[var(--color-surface-darker)] dark:hover:border-violet-500/40 lg:p-8"
              :aria-label="'Pengalaman ' + (idx + 1)"
            >
              <header class="flex flex-col gap-2 sm:flex-row sm:items-baseline sm:justify-between">
                <div class="flex flex-wrap items-center gap-3">
                  <h3 class="text-xl font-semibold text-slate-900 dark:text-white">{{ item.company }}</h3>
                  <span class="rounded-full bg-violet-500/15 px-3 py-1 text-[11px] font-semibold uppercase tracking-[0.15em] text-violet-600 dark:bg-violet-500/25 dark:text-violet-100">
                    {{ item.role }}
                  </span>
                </div>
                <time class="text-sm font-medium text-violet-500 dark:text-violet-300">{{ item.period }}</time>
              </header>
              <ul class="mt-5 space-y-2 text-base text-slate-600 dark:text-slate-400">
                <li v-for="bullet in item.summary" :key="bullet" class="leading-relaxed text-pretty">{{ bullet }}</li>
              </ul>
            </article>
          </li>
        </ol>
      </RevealOnScroll>
    </div>
  </section>
</template>
