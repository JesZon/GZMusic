# FeatureList 可复用组件

这是一个整合了系统功能列表和音乐功能列表的可复用Vue组件，支持通过props传入数据并提供点击事件回调。

## 功能特性

- 🔄 **可复用设计**: 通过props接收数据，适用于不同场景
- 🎨 **样式差异化**: 支持系统功能和音乐功能两种样式主题
- 🖱️ **交互支持**: 提供点击事件回调
- 🎯 **活跃状态**: 支持显示当前活跃项
- 🔧 **灵活配置**: 支持自定义容器类名

## Props 接口

### items (必需)
- **类型**: `FeatureItem[]`
- **描述**: 功能项数据数组

#### FeatureItem 接口
```typescript
interface FeatureItem {
    text: string          // 显示文本
    iconPath: string      // SVG图标路径
    iconPath2?: string    // 可选的第二个SVG路径（用于复合图标）
    active?: boolean      // 是否为活跃状态
    [key: string]: any    // 允许额外的自定义属性
}
```

### type (可选)
- **类型**: `'system' | 'music'`
- **默认值**: `'music'`
- **描述**: 组件类型，影响hover和active样式
  - `system`: 系统功能样式（支持active状态，hover背景色#2a2a2a）
  - `music`: 音乐功能样式（hover背景色#3a3a3a）

### containerClass (可选)
- **类型**: `string`
- **默认值**: `''`
- **描述**: 自定义容器类名

## 事件

### itemClick
- **参数**: `(item: FeatureItem, index: number)`
- **描述**: 当功能项被点击时触发

## 使用示例

### 基础用法

```vue
<template>
    <FeatureList 
        :items="features" 
        type="system" 
        @item-click="handleClick"
    />
</template>

<script setup>
import FeatureList from '@/views/FeatureList/index.vue'

const features = [
    {
        text: '首页',
        iconPath: 'M10 20v-6h4v6h5v-8h3L12 3 2 12h3v8z',
        active: true
    },
    {
        text: '搜索',
        iconPath: 'M15.5 14h-.79l-.28-.27C15.41 12.59 16 11.11 16 9.5 16 5.91 13.09 3 9.5 3S3 5.91 3 9.5 5.91 16 9.5 16c1.61 0 3.09-.59 4.23-1.57l.27.28v.79l5 4.99L20.49 19l-4.99-5zm-6 0C7.01 14 5 11.99 5 9.5S7.01 5 9.5 5 14 7.01 14 9.5 11.99 14 9.5 14z'
    }
]

const handleClick = (item, index) => {
    console.log('点击了:', item.text, '索引:', index)
}
</script>
```

### 系统功能列表示例

```javascript
const systemFeatures = [
    {
        text: '首页',
        iconPath: 'M10 20v-6h4v6h5v-8h3L12 3 2 12h3v8z',
        active: true
    },
    {
        text: '搜索',
        iconPath: 'M15.5 14h-.79l-.28-.27C15.41 12.59 16 11.11 16 9.5 16 5.91 13.09 3 9.5 3S3 5.91 3 9.5 5.91 16 9.5 16c1.61 0 3.09-.59 4.23-1.57l.27.28v.79l5 4.99L20.49 19l-4.99-5zm-6 0C7.01 14 5 11.99 5 9.5S7.01 5 9.5 5 14 7.01 14 9.5 11.99 14 9.5 14z'
    },
    {
        text: '音乐上传',
        iconPath: 'M14,2H6A2,2 0 0,0 4,4V20A2,2 0 0,0 6,22H18A2,2 0 0,0 20,20V8L14,2M18,20H6V4H13V9H18V20Z',
        iconPath2: 'M12,11L16,15H13V19H11V15H8L12,11Z'
    }
]
```

### 音乐功能列表示例

```javascript
const musicFeatures = [
    {
        text: '喜欢',
        iconPath: 'M12,21.35L10.55,20.03C5.4,15.36 2,12.27 2,8.5 2,5.41 4.42,3 7.5,3C9.24,3 10.91,3.81 12,5.08C13.09,3.81 14.76,3 16.5,3C19.58,3 22,5.41 22,8.5C22,12.27 18.6,15.36 13.45,20.03L12,21.35Z'
    },
    {
        text: '本地下载',
        iconPath: 'M5,20H19V18H5M19,9H15V3H9V9H5L12,16L19,9Z'
    },
    {
        text: '最近播放',
        iconPath: 'M12,2A10,10 0 0,0 2,12A10,10 0 0,0 12,22A10,10 0 0,0 22,12A10,10 0 0,0 12,2M16.2,16.2L11,13V7H12.5V12.2L17,14.9L16.2,16.2Z'
    }
]
```

## 样式差异

### 系统功能样式 (type="system")
- Hover背景色: `#2a2a2a`
- 支持active状态，背景色: `#2d5a3d`
- Active状态下图标颜色变为白色

### 音乐功能样式 (type="music")
- Hover背景色: `#3a3a3a`
- 不支持active状态显示

## 迁移指南

### 从 MusicFeatureList 迁移
```vue
<!-- 原来的用法 -->
<MusicFeatureList />

<!-- 新的用法 -->
<FeatureList :items="musicFeatures" type="music" @item-click="handleClick" />
```

### 从 SysFeatureList 迁移
```vue
<!-- 原来的用法 -->
<SysFeatureList />

<!-- 新的用法 -->
<FeatureList :items="systemFeatures" type="system" @item-click="handleClick" />
```

## 注意事项

1. **图标路径**: 确保SVG路径字符串正确，支持单个或多个path元素
2. **活跃状态**: 只有在`type="system"`时active状态才会生效
3. **事件处理**: 记得监听`item-click`事件来处理用户交互
4. **样式自定义**: 可以通过`containerClass`prop添加自定义样式类