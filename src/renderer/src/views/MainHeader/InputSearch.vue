<template>
    <div class="InputSearch">
        <a-input v-model:model-value="musicSearchStore.currentKeyword" :style="{ width: '320px' }" class="input-lebar" placeholder="搜索音乐"
            allow-clear @keyup.enter="handleSearch">
            <template #prefix>
                <icon-search class="input-prefix-icon" @click="handleSearch" />
            </template>
        </a-input>
    </div>
</template>

<script lang="ts" setup name="InputSearch">
// 搜索框
import { IconSearch } from '@arco-design/web-vue/es/icon'

// 引入状态管理库
import { useMusicSearchStore } from '@renderer/store/modules/musicSearch'

// 全局通讯
import emitter from "@renderer/utils/emitter";

// 搜索状态库
const musicSearchStore = useMusicSearchStore()

const handleSearch = () => {
    musicSearchStore.currentKeyword = musicSearchStore.currentKeyword.trim()

    if (musicSearchStore.currentKeyword !== '' && musicSearchStore.currentKeyword !== musicSearchStore.lastSearch) {
        musicSearchStore.lastSearch = musicSearchStore.currentKeyword
        // 发送请求进行搜索
        // 跳转页面
        emitter.emit("navigateTo", {
            toType: {
                status: "name",
                content: "MusicSearch"
            },
            arguments: {
                status: "query",
                content: {
                    search: musicSearchStore.currentKeyword
                }
            }
        })
    }
}

</script>

<style lang="scss" scoped>
.InputSearch {
    -webkit-app-region: no-drag;
    margin-left: 20px;
    display: flex;
    justify-content: center;
    align-items: center;
}

.input-lebar {
    height: 30px;
    border-radius: var(--gz-element-round-radian2);
}

.input-prefix-icon {
    cursor: pointer;
    user-select: none;
}
</style>