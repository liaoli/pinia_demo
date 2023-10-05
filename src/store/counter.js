import { defineStore } from 'pinia'
import { ref, computed } from 'vue'

export const useCounterStore = defineStore('counter', () => {
    const count = ref(100)

    const addCount = () => {
        count.value++
    }
    const minusCount = () => {
        count.value--
    }
    const doubleCount = computed(() => {
        return count.value * 2
    })

    const msg = ref('hello pinia')

    return {
        count,
        addCount,
        minusCount,
        doubleCount,
        msg
    }
}, {
    persist: {
        enabled: true,
        key: 'pinia_storage_key',
        paths: ['msg']
    }

})