<script setup lang="ts">
import { computed, onBeforeUnmount, onMounted, ref, shallowRef } from 'vue'

const props = withDefaults(
  defineProps<{
    direction?: 'up' | 'down' | 'none'
    delayMs?: number
  }>(),
  { direction: 'up', delayMs: 0 },
)

const emit = defineEmits<{
  intersect: []
}>()

const elRef = shallowRef<HTMLElement | null>(null)
const visible = ref(false)
let observer: IntersectionObserver | null = null

onMounted(() => {
  const node = elRef.value
  if (!node || typeof IntersectionObserver === 'undefined') {
    visible.value = true
    return
  }

  observer = new IntersectionObserver(
    entries => {
      entries.forEach(entry => {
        if (!entry.isIntersecting) return
        window.setTimeout(() => {
          visible.value = true
          emit('intersect')
          observer?.disconnect()
          observer = null
        }, props.delayMs)
      })
    },
    { threshold: 0.12, rootMargin: '0px 0px -5% 0px' },
  )
  observer.observe(node)
})

onBeforeUnmount(() => {
  observer?.disconnect()
  observer = null
})

const dirClass = computed(() => {
  if (props.direction === 'none') return 'translate-y-0'
  if (props.direction === 'down') return visible.value ? 'translate-y-0' : '-translate-y-8'
  return visible.value ? 'translate-y-0' : 'translate-y-8'
})

const motionStyle = computed(() => ({
  opacity: visible.value ? 1 : 0,
  transitionDelay: `${props.delayMs}ms`,
  transitionProperty: 'opacity, transform',
  transitionTimingFunction: 'cubic-bezier(0.22, 1, 0.36, 1)',
  transitionDuration: '720ms',
}))
</script>

<template>
  <div
    ref="elRef"
    class="transform-gpu will-change-transform motion-reduce:opacity-100 motion-reduce:!translate-y-0"
    :style="motionStyle"
    :class="['transition-opacity', dirClass]"
  >
    <slot />
  </div>
</template>
