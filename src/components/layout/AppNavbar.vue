<script setup lang="ts">
import { Menu, X } from 'lucide-vue-next'
import { ref, watch } from 'vue'
import { useRoute } from 'vue-router'
import AppButton from '@/components/ui/AppButton.vue'
import ThemeToggle from '@/components/ui/ThemeToggle.vue'
import { navigationItems } from '@/content/navigation'
import { site } from '@/content/site'

const open = ref(false)
const route = useRoute()

watch(
  () => route.fullPath,
  () => {
    open.value = false
  },
)

function closeMenu() {
  open.value = false
}
</script>

<template>
  <header
    class="sticky top-0 z-50 border-b border-slate-200/70 bg-white/85 backdrop-blur-xl dark:border-slate-900/70 dark:bg-[rgba(21,21,37,0.85)]"
  >
    <div class="mx-auto flex h-16 max-w-6xl items-center justify-between px-5 sm:h-[4.25rem] lg:px-8">
      <a
        href="#home"
        class="text-lg font-semibold tracking-wide text-slate-900 transition hover:text-violet-600 dark:text-white dark:hover:text-violet-200"
      >
        {{ site.navBrand }}
      </a>

      <nav class="hidden items-center gap-1 text-sm font-medium text-slate-600 md:flex dark:text-slate-300">
        <a
          v-for="item in navigationItems"
          :key="item.id"
          :href="item.href"
          class="rounded-lg px-3 py-2 transition hover:bg-slate-100 hover:text-slate-900 dark:hover:bg-slate-800/80 dark:hover:text-white"
        >
          {{ item.label }}
        </a>
      </nav>

      <div class="flex items-center gap-2">
        <ThemeToggle />
        <AppButton href="#contact" class="hidden sm:inline-flex" variant="primary">
          Hire me
        </AppButton>
        <button
          type="button"
          class="inline-flex h-10 w-10 items-center justify-center rounded-xl border border-slate-300/70 text-slate-700 md:hidden dark:border-slate-700 dark:text-slate-200"
          aria-label="Toggle menu"
          @click="open = !open"
        >
          <Menu v-if="!open" class="h-5 w-5" />
          <X v-else class="h-5 w-5" />
        </button>
      </div>
    </div>

    <Transition
      enter-active-class="transition duration-200 ease-out"
      enter-from-class="opacity-0 -translate-y-2"
      enter-to-class="opacity-100 translate-y-0"
      leave-active-class="transition duration-150 ease-in"
      leave-from-class="opacity-100 translate-y-0"
      leave-to-class="opacity-0 -translate-y-2"
    >
      <div
        v-if="open"
        class="border-t border-slate-200/80 bg-white/95 px-5 py-4 shadow-lg shadow-slate-900/5 md:hidden dark:border-slate-800 dark:bg-slate-950/95"
      >
        <nav class="flex flex-col gap-1 text-sm font-medium text-slate-700 dark:text-slate-200">
          <a
            v-for="item in navigationItems"
            :key="item.id"
            :href="item.href"
            class="rounded-xl px-3 py-2 transition hover:bg-slate-100 dark:hover:bg-slate-800"
            @click="closeMenu"
          >
            {{ item.label }}
          </a>
          <AppButton href="#contact" class="mt-2 w-full" variant="primary" @click="closeMenu">
            Hire me
          </AppButton>
        </nav>
      </div>
    </Transition>
  </header>
</template>
