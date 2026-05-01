<script setup lang="ts">
import { onMounted, ref } from 'vue'

const appReady = ref(false)

onMounted(() => {
  window.requestAnimationFrame(() => {
    appReady.value = true
  })
})
</script>

<template>
  <div id="portfolio-root">
    <router-view />

    <transition
      leave-active-class="transition duration-[450ms] ease-out"
      leave-from-class="opacity-100"
      leave-to-class="pointer-events-none opacity-0 blur-[6px]"
    >
      <div
        v-if="!appReady"
        aria-live="polite"
        aria-busy="true"
        class="fixed inset-0 z-[100] flex flex-col items-center justify-center gap-4 bg-[#0b081a] px-8 text-white"
      >
        <div class="h-14 w-14 animate-pulse rounded-2xl border border-violet-400/55 bg-gradient-to-br from-violet-500/60 to-transparent shadow-[0_0_60px_rgba(148,139,246,0.45)] dark:from-white/70 dark:to-violet-200/55" />
        <div class="text-center space-y-1">
          <p class="text-sm font-semibold tracking-[0.45em] text-violet-200">LOADING</p>
          <p class="text-xs text-white/65">Portfolio shell warm-up...</p>
        </div>
      </div>
    </transition>
  </div>
</template>
