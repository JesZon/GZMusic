<template>
    <div class="InputSearch">
        <a-input :style="{ width: '320px' }" class="input-lebar" placeholder="搜索音乐" allow-clear>
            <template #prefix>
                <icon-search />
            </template>
        </a-input>
    </div>
</template>

<script lang="ts" setup name="InputSearch">
// 搜索框
import { IconSearch } from '@arco-design/web-vue/es/icon'
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
</style>