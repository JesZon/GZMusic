import { defineStore } from 'pinia'
import { ref } from 'vue';

export const usePageStatus = defineStore('PageStatus', () => {

    // 页面播放组件的 收/放 状态
    const RetrievingReleasing = ref(true);

    function setRR(){
        RetrievingReleasing.value = !RetrievingReleasing.value;
    }

    return {
        RetrievingReleasing,
        setRR,
        persist: true
    }
})