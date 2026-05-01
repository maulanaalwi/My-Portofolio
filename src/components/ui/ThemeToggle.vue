<script setup lang="ts">
import { MoonStar, Sun } from 'lucide-vue-next'
import { useDarkMode } from '@/composables/useDarkMode'

const { isDark, toggle } = useDarkMode()
</script>

<template>
  <button
    type="button"
    aria-label="Ganti tema"
    class="inline-flex h-10 w-10 items-center justify-center rounded-xl border border-slate-300/70 bg-white/70 text-slate-700 backdrop-blur transition hover:border-violet-400 hover:text-violet-600 dark:border-slate-700 dark:bg-slate-900/60 dark:text-violet-200 dark:hover:border-violet-300"
    @click="toggle"
  >
    <Sun v-if="isDark" class="h-5 w-5" stroke-width="1.6" />
    <MoonStar v-else class="h-5 w-5" stroke-width="1.6" />
  </button>
</template>
