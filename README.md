# 🎵 GZMusic Client

<div align="center">
  <img src="./build/icon.png" alt="GZMusic Logo" width="120" height="120">
  <h3>一个现代化的音乐桌面应用</h3>
  <p>基于 Electron + Vue3 + TypeScript 构建的跨平台音乐播放器</p>
</div>

---

## ✨ 主要功能特性

### 🎵 音乐播放
- 🎶 支持多种音频格式播放
- 📱 现代化的播放界面设计
- 🎚️ 音量控制和播放进度调节
- 🔄 播放模式切换（顺序、随机、单曲循环）
- ⏯️ 完整的播放控制（播放/暂停、上一曲/下一曲）

### 🎨 界面与交互
- 🌙 明暗主题切换
- 💫 流畅的动画效果（基于 animate.css）
- 📱 响应式设计，适配不同屏幕尺寸
- 🎯 直观的用户界面（基于 Arco Design）
- 🖱️ 丰富的交互体验

### 🚀 技术特性
- ⚡ 基于 Vite 的快速构建
- 🔧 TypeScript 类型安全
- 🌐 跨平台支持（Windows、macOS、Linux）
- 📦 模块化架构设计
- 🔄 热重载开发体验

---

## 🛠️ 技术栈

### 主要框架
- **[Electron](https://www.electronjs.org/)** - 跨平台桌面应用开发框架
- **[Vue 3](https://vuejs.org/)** - 渐进式 JavaScript 框架
- **[TypeScript](https://www.typescriptlang.org/)** - JavaScript 的超集，添加了类型系统
- **[Vite](https://vitejs.dev/)** - 下一代前端构建工具
- **[Electron Vite](https://electron-vite.org/)** - Electron 应用的构建工具

### UI 组件库
- **[Arco Design Vue](https://arco.design/vue/)** - 企业级设计语言和 Vue 组件库
- **[Animate.css](https://animate.style/)** - CSS 动画库
- **[Sass](https://sass-lang.com/)** - CSS 预处理器

### 其他依赖
- **[Vue Router](https://router.vuejs.org/)** - Vue.js 官方路由管理器
- **[Axios](https://axios-http.com/)** - HTTP 客户端
- **[Howler.js](https://howlerjs.com/)** - 音频播放库
- **[Mitt](https://github.com/developit/mitt)** - 事件总线

---

## 📦 安装和使用说明

### 环境要求
- **Node.js** >= 16.0.0
- **npm** >= 8.0.0

### 推荐 IDE 配置
- [VSCode](https://code.visualstudio.com/) + [ESLint](https://marketplace.visualstudio.com/items?itemName=dbaeumer.vscode-eslint) + [Prettier](https://marketplace.visualstudio.com/items?itemName=esbenp.prettier-vscode) + [Volar](https://marketplace.visualstudio.com/items?itemName=Vue.volar)

### 快速开始

#### 1. 克隆项目
```bash
git clone <repository-url>
cd GZMusic-client
```

#### 2. 安装依赖
```bash
npm install
```

#### 3. 开发模式
```bash
npm run dev
```

#### 4. 构建应用
```bash
# Windows 平台
npm run build:win

# macOS 平台
npm run build:mac

# Linux 平台
npm run build:linux

# 通用构建
npm run build
```

### 其他脚本
```bash
# 代码格式化
npm run format

# 代码检查
npm run lint

# 类型检查
npm run typecheck

# 预览构建结果
npm start
```

---

## 📁 项目结构

```
GZMusic-client/
├── build/                 # 构建资源
├── out/                   # 构建输出
├── resources/             # 应用资源
├── src/
│   ├── main/             # 主进程代码
│   │   ├── api/          # 主进程 API
│   │   └── index.ts      # 主进程入口
│   ├── preload/          # 预加载脚本
│   │   ├── index.d.ts    # 类型定义
│   │   └── index.ts      # 预加载入口
│   └── renderer/         # 渲染进程代码
│       └── src/
│           ├── assets/   # 静态资源
│           ├── components/ # 公共组件
│           ├── layout/   # 布局组件
│           ├── views/    # 页面组件
│           └── router/   # 路由配置
├── package.json
└── README.md
```

---

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
