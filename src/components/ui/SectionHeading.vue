<script setup lang="ts">
interface Props {
  eyebrow?: string
  title: string
  subtitle?: string
  align?: 'left' | 'center'
}

withDefaults(defineProps<Props>(), { align: 'left' })
</script>

<template>
  <div
    class="flex max-w-3xl flex-col gap-4"
    :class="align === 'center' ? 'mx-auto text-center items-center' : ''"
  >
    <span
      v-if="eyebrow"
      class="text-xs uppercase tracking-[0.32em] text-violet-500 dark:text-violet-300"
    >
      {{ eyebrow }}
    </span>
    <h2
      class="text-3xl font-semibold text-slate-900 sm:text-[2rem] lg:text-[2.4rem] dark:text-white"
    >
      {{ title }}
    </h2>
    <p v-if="subtitle" class="text-base text-slate-600 dark:text-slate-400">
      {{ subtitle }}
    </p>
    <slot name="cta" />
  </div>
</template>
