# 🎵 GZMusic Client

<div align="center">
  <img src="./src/renderer/src/assets/images/logo.png" alt="GZMusic Logo" width="120" height="120">
  <h3>一个现代化的音乐桌面应用</h3>
  <p>基于 Electron + Vue3 + TypeScript 构建的跨平台音乐播放器</p>
</div>

---

## ✨ 主要功能特性

### 🎵 音乐播放核心功能
- 🎶 基于 Howler.js 的高质量音频播放引擎
- 📱 精美的播放界面设计，支持专辑封面展示
- 🎚️ 实时播放进度条，支持拖拽跳转
- 🔊 音量控制和播放状态管理
- ⏯️ 完整的播放控制（播放/暂停、上一曲/下一曲）
- 🎵 播放列表管理功能

### 🏠 主页面功能模块
- 🎼 **音乐分类**：流行、摇滚、爵士、古典、电子音乐分类浏览
- 📅 **今日推荐**：个性化音乐推荐
- 📊 **排行榜**：热门歌曲排行展示
- 👤 **为您打造**：个性化歌单推荐
- 🎤 **艺术家列表**：艺术家信息展示
- ❤️ **我喜欢的音乐**：个人收藏管理

### 🔐 用户系统
- 👤 用户注册和登录功能
- 🔒 安全的用户认证机制
- 👥 用户信息管理

### 🎨 界面与交互体验
- 💫 流畅的动画效果（基于 Animate.css 4.1.1）
- 📱 响应式设计，适配不同屏幕尺寸
- 🎯 基于 Arco Design 的现代化 UI 组件
- 🖱️ 丰富的交互体验和悬停效果
- 🎨 自定义字体支持（智萌行字体）
- 🖼️ 精美的背景和视觉效果

### 🚀 技术特性
- ⚡ 基于 Electron Vite 的快速构建和热重载
- 🔧 完整的 TypeScript 类型安全
- 🌐 跨平台支持（Windows、macOS、Linux）
- 📦 模块化组件架构设计
- 🔄 Vue 3 Composition API
- 📡 事件总线通信机制（Mitt）

---

## 🛠️ 技术栈

### 核心框架
- **[Electron](https://www.electronjs.org/)** `^37.2.3` - 跨平台桌面应用开发框架
- **[Vue 3](https://vuejs.org/)** `^3.5.17` - 渐进式 JavaScript 框架
- **[TypeScript](https://www.typescriptlang.org/)** `^5.8.3` - JavaScript 的超集，添加了类型系统
- **[Electron Vite](https://electron-vite.org/)** `^4.0.0` - Electron 应用的构建工具
- **[Vite](https://vitejs.dev/)** `^7.0.5` - 下一代前端构建工具

### UI 组件与样式
- **[Arco Design Vue](https://arco.design/vue/)** `^2.57.0` - 企业级设计语言和 Vue 组件库
- **[Animate.css](https://animate.style/)** `^4.1.1` - CSS 动画库
- **[Sass](https://sass-lang.com/)** `^1.91.0` - CSS 预处理器
- **[vite-plugin-vue-setup-extend](https://github.com/vbenjs/vite-plugin-vue-setup-extend)** `^0.4.0` - Vue setup 语法扩展

### 功能依赖
- **[Vue Router](https://router.vuejs.org/)** `^4.5.1` - Vue.js 官方路由管理器
- **[Axios](https://axios-http.com/)** `^1.11.0` - HTTP 客户端
- **[Howler.js](https://howlerjs.com/)** `^2.2.4` - 专业音频播放库
- **[Mitt](https://github.com/developit/mitt)** `^3.0.1` - 轻量级事件总线
- **[Electron Updater](https://www.electron.build/auto-update)** `^6.3.9` - 应用自动更新

---

## 📦 安装和使用说明

### 环境要求
- **Node.js** >= 16.0.0
- **npm** >= 8.0.0

### 推荐 IDE 配置
- [VSCode](https://code.visualstudio.com/) + [ESLint](https://marketplace.visualstudio.com/items?itemName=dbaeumer.vscode-eslint) + [Prettier](https://marketplace.visualstudio.com/items?itemName=esbenp.prettier-vscode) + [Volar](https://marketplace.visualstudio.com/items?itemName=Vue.volar)

### 快速开始

#### 1. 环境准备
确保你的开发环境满足以下要求：
- **Node.js** >= 16.0.0
- **npm** >= 8.0.0
- **Git** 版本控制工具

#### 2. 克隆项目
```bash
git clone <repository-url>
cd GZMusic-client
```

#### 3. 安装依赖
```bash
# 安装项目依赖
npm install

# 安装 Electron 应用依赖
npm run postinstall
```

#### 4. 开发模式
```bash
# 启动开发服务器（支持热重载）
npm run dev
```
开发服务器启动后，Electron 应用会自动打开，你可以实时预览修改效果。

#### 5. 构建应用
```bash
# 类型检查 + 构建
npm run build

# Windows 平台打包
npm run build:win

# macOS 平台打包
npm run build:mac

# Linux 平台打包
npm run build:linux

# 构建但不打包（用于调试）
npm run build:unpack
```

### 开发工具脚本
```bash
# 代码格式化（Prettier）
npm run format

# 代码检查（ESLint）
npm run lint

# TypeScript 类型检查
npm run typecheck

# 单独检查主进程类型
npm run typecheck:node

# 单独检查渲染进程类型
npm run typecheck:web

# 预览构建结果
npm start
```

---

## 📁 项目结构

```
GZMusic-client/
├── build/                    # 构建资源
├── out/                      # 构建输出目录
├── resources/                # 应用资源文件
├── src/
│   ├── main/                # 主进程代码
│   │   ├── api/             # 主进程 API 接口
│   │   └── index.ts         # 主进程入口文件
│   ├── preload/             # 预加载脚本
│   │   ├── index.d.ts       # 预加载类型定义
│   │   └── index.ts         # 预加载脚本入口
│   └── renderer/            # 渲染进程代码
│       ├── index.html       # 渲染进程 HTML 模板
│       └── src/
│           ├── assets/      # 静态资源
│           │   ├── fonts/   # 字体文件
│           │   ├── images/  # 图片资源
│           │   └── testMusic/ # 测试音乐文件
│           ├── components/  # 公共组件
│           │   ├── Background/ # 背景组件
│           │   └── PlayMusic/  # 音乐播放组件
│           ├── layout/      # 布局组件
│           │   ├── MainPageLayout/   # 主页布局
│           │   ├── PlayLayout/       # 播放页布局
│           │   └── SignUpLayout/     # 登录注册布局
│           ├── views/       # 页面组件
│           │   ├── ContentPage/      # 内容页面
│           │   │   ├── ArtistList/   # 艺术家列表
│           │   │   ├── CreatedYou/   # 为您打造
│           │   │   ├── MusicClassify/ # 音乐分类
│           │   │   ├── SongChart/    # 歌曲排行
│           │   │   └── TodayRecommendation/ # 今日推荐
│           │   ├── LoginRegister/    # 登录注册
│           │   ├── MainFooter/       # 主页底部
│           │   ├── MainHeader/       # 主页头部
│           │   ├── PlayCentent/      # 播放内容
│           │   └── WindowControl/    # 窗口控制
│           ├── router/      # 路由配置
│           ├── store/       # 状态管理
│           ├── utils/       # 工具函数
│           └── api/         # API 接口（待开发）
├── electron.vite.config.ts  # Electron Vite 配置
├── package.json             # 项目配置文件
└── README.md               # 项目说明文档
```

---

## 🔧 开发指南

### 项目架构说明

#### Electron 三进程架构
- **主进程 (Main Process)**: 负责应用生命周期管理、窗口创建等
- **渲染进程 (Renderer Process)**: 负责 UI 界面渲染，基于 Vue 3
- **预加载脚本 (Preload Script)**: 安全地暴露 Node.js API 给渲染进程

#### 渲染进程组件分类
- **Layout 组件**: 页面布局组件，定义主要页面结构
- **Components 组件**: 可复用的公共组件
- **Views 组件**: 具体的页面功能组件

#### 开发规范
- 使用 Vue 3 Composition API 和 `<script setup>` 语法
- 遵循 TypeScript 严格类型检查
- 使用 Arco Design 组件库保持 UI 一致性
- 音频操作统一使用 Howler.js 库
- 组件间通信使用 Mitt 事件总线

### 常见开发任务

#### 添加新页面
1. 在 `src/renderer/src/views/` 下创建页面组件
2. 在 `src/renderer/src/router/index.ts` 中添加路由配置
3. 如需要，在对应的 Layout 组件中添加导航

#### 添加新的音乐功能
1. 使用 Howler.js API 进行音频操作
2. 通过 Mitt 事件总线进行组件间通信
3. 在 MainFooter 组件中集成播放控制逻辑

#### 样式开发
- 使用 Sass 预处理器
- 遵循 BEM 命名规范
- 利用 Animate.css 添加动画效果
- 确保响应式设计适配不同屏幕尺寸

## 🤝 贡献指南

我们欢迎所有形式的贡献！如果你想为项目做出贡献，请遵循以下步骤：

### 提交 Issue
- 🐛 **Bug 报告**：详细描述问题和复现步骤
- 💡 **功能建议**：说明新功能的用途和实现思路
- 📝 **文档改进**：指出文档中的错误或不清楚的地方

### 提交 Pull Request
1. Fork 本仓库
2. 创建你的特性分支 (`git checkout -b feature/AmazingFeature`)
3. 提交你的修改 (`git commit -m 'Add some AmazingFeature'`)
4. 推送到分支 (`git push origin feature/AmazingFeature`)
5. 打开一个 Pull Request

### 开发规范
- 遵循项目的代码风格（ESLint + Prettier）
- 编写清晰的提交信息
- 为新功能添加相应的测试
- 更新相关文档
- 确保 TypeScript 类型检查通过

---

## 📄 许可证信息

本项目采用 [MIT License](LICENSE) 许可证。

```
MIT License

Copyright (c) 2024 GZMusic

Permission is hereby granted, free of charge, to any person obtaining a copy
of this software and associated documentation files (the "Software"), to deal
in the Software without restriction, including without limitation the rights
to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
copies of the Software, and to permit persons to whom the Software is
furnished to do so, subject to the following conditions:

The above copyright notice and this permission notice shall be included in all
copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
IMplied, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
SOFTWARE.
```

---

## 📞 联系方式

- 📧 **邮箱**：[3133963107@qq.com](mailto:3133963107@qq.com)
- 🐛 **问题反馈**：[GitHub Issues](https://github.com/your-username/GZMusic-client/issues)
- 💬 **讨论交流**：[GitHub Discussions](https://github.com/your-username/GZMusic-client/discussions)

---

## 🙏 致谢

感谢所有为这个项目做出贡献的开发者们！

特别感谢以下开源项目：
- [Electron](https://www.electronjs.org/)
- [Vue.js](https://vuejs.org/)
- [Arco Design](https://arco.design/)
- [Vite](https://vitejs.dev/)

---

## ⭐ Star History

如果这个项目对你有帮助，请给我们一个 ⭐ Star！

---

<div align="center">
  <p>Made with ❤️ by GZMusic Team</p>
  <p>© 2024 GZMusic. All rights reserved.</p>
</div>
