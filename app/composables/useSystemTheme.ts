import { ref, onMounted, onUnmounted } from 'vue'

export function useSystemTheme() {
  const isDark = ref(false)
  let mediaQuery: any = null

  const handler = (e: any) => { isDark.value = e.matches }

  onMounted(() => {
    mediaQuery = window.matchMedia('(prefers-color-scheme: dark)')
    isDark.value = mediaQuery.matches
    mediaQuery.addEventListener('change', handler)
  })

  onUnmounted(() => {
    mediaQuery?.removeEventListener('change', handler)
  })

  return {
    isDark
  }
}
