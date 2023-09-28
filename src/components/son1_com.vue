<script setup>
import { useCounterStore } from '@/store/counter';
const counterStore = useCounterStore();
</script>
<template>
    <div>
        <h2>son1-{{ counterStore.count }} - {{ counterStore.doubleCount }} - {{ counterStore.msg }}</h2>
    </div>
</template>