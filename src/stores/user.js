import { ref, computed } from 'vue'
import { defineStore } from 'pinia'

export const useUserStore = defineStore('user', () => {

    const IsLogin = ref(false);
    const userInfo = ref([]);

    return { IsLogin, userInfo }
})
