<script setup lang="ts">
import SectionHeading from '@/components/ui/SectionHeading.vue'
import RevealOnScroll from '@/components/ui/RevealOnScroll.vue'
import { profile } from '@/content/profile'

const aboutSubtitle =
  ''
</script>

<template>
  <section id="about" aria-label="Tentang saya" class="relative border-y border-slate-200/70 bg-white/65 py-20 dark:border-slate-800 dark:bg-[#121129]/60">
    <div class="mx-auto max-w-6xl space-y-12 px-5 lg:px-8">
      <RevealOnScroll>
        <SectionHeading :eyebrow="profile.about.eyebrow" :title="profile.about.title" :subtitle="aboutSubtitle" />
      </RevealOnScroll>
      <RevealOnScroll :delay-ms="80">
        <div class="grid gap-10 lg:grid-cols-[1.05fr_auto] lg:gap-14">
          <div class="space-y-6 text-lg leading-relaxed text-slate-600 dark:text-slate-400">
            <p v-for="(para, idx) in profile.about.paragraphs" :key="idx" class="text-pretty">
              {{ para }}
            </p>
          </div>
          <div class="rounded-3xl border border-violet-200/70 bg-gradient-to-br from-white to-violet-50 p-8 text-sm text-violet-800 shadow-inner shadow-white/70 dark:border-violet-500/30 dark:from-[#1b183f] dark:to-[#101232] dark:text-violet-100 dark:shadow-none">
            <p class="text-xs font-semibold uppercase tracking-[0.25em] text-violet-500 dark:text-violet-300">
              Catatan cepat
            </p>
            <ul class="mt-4 space-y-3 leading-relaxed text-slate-700 dark:text-slate-300">
              <li>Preferensi stack: Vue 3 + Composition API dan Tailwind utilities.</li>
              <li>Care tentang struktur konten modular di `src/content/*` untuk memudahkan update.</li>
              <li>Focus pada pola loading ringan serta animasi non-blocking.</li>
            </ul>
          </div>
        </div>
      </RevealOnScroll>
    </div>
  </section>
</template>
