<template>
    <div :class="containerClass">
        <div 
            v-for="(item, index) in items" 
            :key="index"
            :class="['feature-item', { active: item.active }]"
            @click="handleItemClick(item, index)"
        >
            <div class="feature-icon">
                <svg viewBox="0 0 24 24" fill="currentColor">
                    <path :d="item.iconPath" />
                    <path v-if="item.iconPath2" :d="item.iconPath2" />
                </svg>
            </div>
            <span class="feature-text">{{ item.text }}</span>
        </div>
    </div>
</template>

<script lang="ts" setup name="FeatureList">
import { computed } from 'vue'

// 定义功能项的类型
interface FeatureItem {
    text: string
    iconPath: string
    iconPath2?: string // 可选的第二个路径，用于复合图标
    active?: boolean
    [key: string]: any // 允许额外的自定义属性
}

// 定义props
interface Props {
    items: FeatureItem[]
    type?: 'system' | 'music' // 组件类型，影响样式
    containerClass?: string // 自定义容器类名
}

const props = withDefaults(defineProps<Props>(), {
    type: 'music',
    containerClass: ''
})

// 定义事件
const emit = defineEmits<{
    itemClick: [item: FeatureItem, index: number]
}>()

// 计算容器类名
const containerClass = computed(() => {
    const baseClass = 'feature-list'
    const typeClass = props.type === 'system' ? 'sys-feature-list' : 'music-feature-list'
    return [baseClass, typeClass, props.containerClass].filter(Boolean).join(' ')
})

// 处理项目点击
const handleItemClick = (item: FeatureItem, index: number) => {
    emit('itemClick', item, index)
}
</script>

<style lang="scss" scoped>
.feature-list {
    display: flex;
    flex-direction: column;
    padding: 0;
    margin: 8px;
}

.feature-item {
    display: flex;
    align-items: center;
    padding: 12px 16px;
    cursor: pointer;
    transition: all 0.2s ease;
    border-radius: var(--gz-element-round-radian1);
    color: #999;
    margin: 2px 0;

    // 音乐功能列表的hover样式
    .music-feature-list & {
        &:hover {
            background-color: #3a3a3a;
            color: #fff;
        }
    }

    // 系统功能列表的hover和active样式
    .sys-feature-list & {
        &:hover {
            background-color: #2a2a2a;
            color: #fff;
        }

        &.active {
            background-color: #2d5a3d;
            color: #fff;

            .feature-icon {
                color: #fff;
            }
        }
    }
}

.feature-icon {
    width: 20px;
    height: 20px;
    margin-right: 12px;
    display: flex;
    align-items: center;
    justify-content: center;
    color: #999;

    svg {
        width: 100%;
        height: 100%;
    }
}

.feature-text {
    font-size: 14px;
    font-weight: 400;
    line-height: 1;
}
</style>
