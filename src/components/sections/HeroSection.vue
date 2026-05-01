<script setup lang="ts">
import { ArrowRight, DownloadCloud } from 'lucide-vue-next'
import { computed, ref, watch } from 'vue'
import AppButton from '@/components/ui/AppButton.vue'
import RevealOnScroll from '@/components/ui/RevealOnScroll.vue'
import { profile } from '@/content/profile'
import { site } from '@/content/site'

const hero = profile.hero

const initials = computed(() =>
  site.fullName
    .split(/\s+/)
    .filter(Boolean)
    .map(part => part[0])
    .join('')
    .slice(0, 3)
    .toUpperCase(),
)

const avatarSrc = computed(() => hero.avatarUrl.trim())
const avatarLoadFailed = ref(false)
const showAvatarImage = computed(() => avatarSrc.value.length > 0 && !avatarLoadFailed.value)

watch(avatarSrc, () => {
  avatarLoadFailed.value = false
})

const onAvatarError = () => {
  avatarLoadFailed.value = true
}
</script>

<template>
  <section id="home" aria-label="Profil utama" class="relative overflow-hidden">
    <div
      class="pointer-events-none absolute -left-[12%] top-[-20%] h-96 w-96 rounded-full bg-violet-400/35 blur-[120px] dark:bg-indigo-500/25"
    />
    <div
      class="pointer-events-none absolute right-[-6%] top-[42%] h-72 w-72 rounded-full bg-cyan-400/35 blur-[110px] dark:bg-teal-500/20"
    />

    <div class="relative mx-auto flex max-w-6xl flex-col gap-14 px-5 pb-24 pt-16 lg:flex-row lg:items-center lg:gap-20 lg:px-8 lg:pb-28 lg:pt-20">
      <RevealOnScroll class="flex-1 space-y-8">
        <div class="space-y-4">
          <p class="inline-flex items-center gap-2 text-sm font-semibold uppercase tracking-[0.25em] text-violet-500 dark:text-violet-300">
            Halo, saya
          </p>
          <div class="space-y-5">
            <h1 class="text-balance text-4xl font-semibold tracking-tight text-slate-900 sm:text-[2.85rem] lg:text-[3.75rem] dark:text-white">
              {{ site.fullName }}
              <span
                class="block bg-gradient-to-r from-violet-500 via-purple-400 to-blue-400 bg-clip-text text-transparent"
              >
                {{ hero.role }}
              </span>
            </h1>
            <p class="max-w-xl text-lg text-slate-600 md:text-xl dark:text-slate-300">
              {{ hero.tagline }}
            </p>
          </div>
        </div>
        <div class="flex flex-wrap gap-4">
          <AppButton variant="primary" :href="hero.primaryCta.href">
            {{ hero.primaryCta.label }}
            <ArrowRight class="h-4 w-4" stroke-width="2" aria-hidden="true" />
          </AppButton>
          <AppButton
            variant="outline"
            :href="hero.secondaryCta.href"
            target="_blank"
            rel="noreferrer noopener"
            :download="hero.secondaryCta.download ?? false"
          >
            <DownloadCloud class="h-4 w-4" stroke-width="2" aria-hidden="true" />
            {{ hero.secondaryCta.label }}
          </AppButton>
        </div>
        <ul class="grid gap-3 text-sm text-slate-500 sm:grid-cols-3 dark:text-slate-400">
          <li class="rounded-xl border border-slate-200/80 bg-white/80 px-4 py-3 dark:border-slate-800 dark:bg-slate-900/50">
            <span class="block text-xs uppercase tracking-[0.2em] text-violet-500">Fokus</span>
            Front end Dev
          </li>
          <li class="rounded-xl border border-slate-200/80 bg-white/80 px-4 py-3 dark:border-slate-800 dark:bg-slate-900/50">
            <span class="block text-xs uppercase tracking-[0.2em] text-violet-500">Komponen</span>
            UI/UX User Friendly
          </li>
          <li class="rounded-xl border border-slate-200/80 bg-white/80 px-4 py-3 dark:border-slate-800 dark:bg-slate-900/50">
            <span class="block text-xs uppercase tracking-[0.2em] text-violet-500">Motivasi</span>
            Kualitas mikro‑UX
          </li>
        </ul>
      </RevealOnScroll>

      <RevealOnScroll direction="down" class="relative flex justify-center lg:flex-1" :delay-ms="120">
        <div
          class="relative isolate flex h-[340px] w-[min(430px,100%)] items-center justify-center rounded-[2rem] bg-gradient-to-br from-white via-white to-violet-100 p-px shadow-xl shadow-indigo-200/55 ring-1 ring-slate-200/75 dark:from-[#111122] dark:via-[var(--color-surface-dark)] dark:to-indigo-900/65 dark:shadow-indigo-950/65 dark:ring-slate-800"
        >
          <div class="relative h-full w-full overflow-hidden rounded-[1.875rem] bg-slate-50 dark:bg-[#101025]">
            <img
              v-if="showAvatarImage"
              :src="avatarSrc"
              :alt="hero.imageAlt"
              class="h-full w-full object-cover object-top"
              decoding="async"
              fetchpriority="high"
              width="640"
              height="800"
              @error="onAvatarError"
            />
            <div
              v-else
              class="relative flex h-full w-full flex-col items-center justify-center gap-6 bg-gradient-to-br from-violet-100/80 via-white to-transparent p-8 text-center dark:from-[#1f1b4b]/80 dark:via-transparent dark:to-transparent"
              role="img"
              aria-label="Avatar placeholder dengan inisial"
            >
              <div
                class="flex h-40 w-40 items-center justify-center rounded-full bg-gradient-to-br from-violet-500 to-indigo-500 text-[2rem] font-bold text-white shadow-lg shadow-indigo-500/55"
              >
                {{ initials }}
              </div>
            </div>
          </div>
        </div>
      </RevealOnScroll>
    </div>
  </section>
</template>
