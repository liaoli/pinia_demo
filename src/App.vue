<script setup>
import { useCounterStore } from './store/counter';
import Son1Com from '@/components/son1_com.vue';
import { useChannelStore } from '@/store/channel';
// import { storeToRefs } from 'pinia';
const counterStore = useCounterStore();
const channelStore = useChannelStore();
// const { channels } =  storeToRefs(channelStore);
const { fetchChannels } = channelStore;
</script>

<template>
  <div>
    <h1>{{ counterStore.count }}</h1>
    <h2>{{ counterStore.doubleCount }}</h2>
    <button @click="counterStore.addCount">+</button>
    <button @click="counterStore.minusCount">-</button>
    <Son1Com></Son1Com>

    <button @click="fetchChannels">获取频道数据</button>
    <ul>
      <li v-for="channel in channelStore.channels" :key="channel.id">{{ channel.name }}</li>
    </ul>
  </div>
</template>

<style scoped>
</style>
