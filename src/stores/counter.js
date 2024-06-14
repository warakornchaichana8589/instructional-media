import { ref, computed } from 'vue'
import { defineStore } from 'pinia'

export const useCounterStore = defineStore('counter', () => {
  const count = ref(0)
  const statePage = ref('')
  const statePageEnd = ref('')
  const doubleCount = computed(() => count.value * 2)
  function increment() {
    count.value++
  }
  function setState() {
    statePage.value = 'ok'
  }
  function resetState() {
    statePage.value = ''
  }
  function setStateEnd() {
    statePageEnd.value = 'ok'
  }
  function resetStateEnd() {
    statePageEnd.value = ''
  }
  return { count, doubleCount, increment, setState, resetState, setStateEnd, resetStateEnd, statePage, statePageEnd }
})
