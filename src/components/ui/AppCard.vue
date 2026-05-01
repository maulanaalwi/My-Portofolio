<script setup lang="ts">
interface Props {
  elevated?: boolean
}

withDefaults(defineProps<Props>(), { elevated: false })
</script>

<template>
  <article
    :class="[
      'rounded-2xl border border-slate-200/70 bg-white/85 p-6 shadow-[0_20px_50px_-32px_rgb(13_12_52_/_35%)] transition duration-300 dark:border-slate-800 dark:bg-[var(--color-surface-darker)] dark:shadow-[0_35px_80px_-50px_rgb(67_74_239_/_46%)]',
      elevated &&
        'hover:-translate-y-1 hover:border-violet-500/35 hover:shadow-[0_32px_60px_-40px_rgb(79_70_229_/_40%)]',
    ]"
  >
    <slot />
  </article>
</template>
