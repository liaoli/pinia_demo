import { defineStore } from 'pinia'
import { ref } from 'vue'
import axios from 'axios'
export const useChannelStore = defineStore('channel', () => {
    const channels = ref([])
    const fetchChannels = async () => {
        const { data: { data } } = await axios.get('http://geek.itheima.net/v1_0/channels')
        channels.value = data.channels
    }

    return {
        channels,
        fetchChannels
    }
})