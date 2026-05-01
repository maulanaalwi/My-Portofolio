<script setup lang="ts">
import { computed, useAttrs } from 'vue'

defineOptions({ inheritAttrs: false })

interface Props {
  variant?: 'primary' | 'outline' | 'ghost'
  href?: string
  type?: HTMLButtonElement['type']
  target?: string
  rel?: string
  download?: boolean | string
}

const props = withDefaults(defineProps<Props>(), {
  variant: 'primary',
  type: 'button',
})

const attrs = useAttrs()

const passthrough = computed(() => {
  const raw = attrs as Record<string, unknown>
  const { class: _c, ...rest } = raw
  return rest
})

const variantClass: Record<NonNullable<Props['variant']>, string> = {
  primary:
    'bg-violet-600 text-white hover:bg-violet-500 shadow-sm shadow-violet-500/25 focus-visible:ring-violet-500',
  outline:
    'border border-slate-300 bg-white/80 text-slate-900 hover:border-violet-400 hover:text-violet-700 dark:border-slate-700 dark:bg-slate-900/40 dark:text-slate-100 dark:hover:border-violet-500',
  ghost:
    'text-slate-700 hover:bg-slate-200/80 dark:text-slate-200 dark:hover:bg-slate-800/80',
}

const baseClass =
  'inline-flex items-center justify-center gap-2 rounded-xl px-5 py-2.5 text-sm font-semibold transition-all duration-200 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 focus-visible:ring-offset-slate-50 dark:focus-visible:ring-offset-slate-950'

const mergedClass = computed(() => [baseClass, variantClass[props.variant], attrs.class])
</script>

<template>
  <a
    v-if="href"
    v-bind="passthrough"
    :href="href"
    :target="target"
    :rel="rel"
    :download="download"
    :class="mergedClass"
  >
    <slot />
  </a>
  <button v-else v-bind="passthrough" :type="type" :class="mergedClass">
    <slot />
  </button>
</template>
