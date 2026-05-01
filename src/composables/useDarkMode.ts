import { ref, watch } from 'vue'

const STORAGE_KEY = 'portfolio-theme'

function prefersDarkScheme() {
  if (typeof window === 'undefined') return true
  return window.matchMedia('(prefers-color-scheme: dark)').matches
}

function resolveInitialDark() {
  if (typeof window === 'undefined') return true
  const saved = window.localStorage.getItem(STORAGE_KEY)
  if (saved === 'light' || saved === 'dark') return saved === 'dark'
  return prefersDarkScheme()
}

const isDark = ref(resolveInitialDark())

function apply(dark: boolean) {
  if (typeof document === 'undefined') return
  document.documentElement.classList.toggle('dark', dark)
}

watch(
  isDark,
  val => {
    apply(val)
    if (typeof window !== 'undefined') {
      window.localStorage.setItem(STORAGE_KEY, val ? 'dark' : 'light')
    }
  },
  { immediate: true },
)

export function useDarkMode() {
  function toggle() {
    isDark.value = !isDark.value
  }

  return { isDark, toggle }
}
