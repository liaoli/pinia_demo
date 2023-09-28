<script setup>
import { useCounterStore } from './store/counter';
const counterStore = useCounterStore();
</script>

<template>
  <div>
    <h1>{{ counterStore.count }}</h1>
    <h2>{{ counterStore.doubleCount }}</h2>
    <button @click="counterStore.addCount">+</button>
    <button @click="counterStore.minusCount">-</button>
  </div>
</template>

<style scoped>
</style>
