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
    const double = computed(() => {
        return count.value * 2
    })

    const msg =ref('hello pinia')

    return {
        count,
        addCount,
        minusCount,
        double,
        msg
    }
})