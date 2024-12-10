# Love Match App 项目设计文档

## 项目概述
这是一个基于 React + Vite 的现代前端应用项目模板。

## 目录结构
```
love-match-app/
├── src/                    # 源代码目录
│   ├── assets/            # 静态资源
│   ├── App.jsx           # 主应用组件
│   ├── main.jsx          # 应用入口
│   ├── App.css           # 应用级样式
│   └── index.css         # 全局样式
├── public/                # 公共资源目录
├── node_modules/         # 依赖包
├── index.html            # HTML 模板
├── package.json          # 项目配置
├── vite.config.js        # Vite 配置
├── eslint.config.js      # ESLint 配置
└── .gitignore           # Git 忽略配置
```

## 技术栈

### 核心框架
- React 18.3.1
- React DOM 18.3.1
- Vite 6.0.1

### 开发工具
- ESLint 9.15.0
- @vitejs/plugin-react 4.3.4
- TypeScript 支持 (@types/react, @types/react-dom)

## 技术要点

### 构建与开发
- 基于 Vite 实现快速的开发构建
- 支持 HMR (热模块替换)
- 开发服务器配置 (`npm run dev`)
- 生产构建流程 (`npm run build`)

### 代码规范
- ESLint 配置包含:
  - React 推荐规则
  - React Hooks 规则
  - JSX 运行时规则
- 支持现代 JavaScript 特性 (ECMAScript 2020)

### 样式方案
- 支持 CSS Modules
- 响应式设计支持
- 深色/浅色主题切换
- CSS 动画效果

### 性能优化
- React Strict Mode 启用
- 资源预加载优化
- 构建产物优化

## 开发指南

### 可用脚本
- `npm run dev`: 启动开发服务器
- `npm run build`: 构建生产版本
- `npm run lint`: 运行代码检查
- `npm run preview`: 预览生产构建

### 项目配置
- Vite 配置位于 `vite.config.js`
- ESLint 配置位于 `eslint.config.js`
- 项目依赖配置位于 `package.json`

## 后续规划
1. 完善组件结构
2. 添加状态管理方案
3. 集成测试框架
4. 优化构建配置
5. 补充项目文档 