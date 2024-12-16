# Vue Basic Template

这是一个使用 Vue 3 搭建的基础管理后台模板，结合了现代前端开发技术和多个实用插件，旨在为开发人员提供优雅、简洁的开发体验。

## 技术栈

- **Vue 3**: 采用 Vue 3 作为核心框架，利用其组合式 API 提供更强大、更灵活的开发方式。
- **Vite**: 使用 Vite 作为构建工具，提供快速的开发服务器和轻量级的打包工具。
- **TypeScript**: 采用 TypeScript 提升代码的可读性和安全性。
- **Pinia**: 作为状态管理工具，与 Vue 3 的组合式 API 紧密集成。

## 项目结构

```
vue-basic-template/
├── src/
│   ├── components/    # 组件
│   ├── store/         # Pinia 状态管理
│   ├── router/        # 路由配置
│   └── views/         # 页面视图
└── ...
```

## 启动项目

在命令行中运行以下命令：

```bash
# 安装依赖
npm install

# 启动开发服务器
npm run dev

# 构建项目
npm run build

# 预览构建结果
npm run preview

# 运行代码格式检查
npm run lint
```

## 主要依赖

### 核心依赖

- **Vue 3**: [GitHub](https://github.com/vuejs/core) | [官网](https://vuejs.org/)
- **Vue Router**: 用于路由管理。 [GitHub](https://github.com/vuejs/router) | [官网](https://router.vuejs.org/)
- **Pinia**: 轻量级的状态管理库。 [GitHub](https://github.com/vuejs/pinia) | [官网](https://pinia.vuejs.org/)
- **Element Plus**: 提供一系列 UI 组件。 [GitHub](https://github.com/element-plus/element-plus) | [官网](https://element-plus.org/)
- **Axios**: 处理 HTTP 请求。 [GitHub](https://github.com/axios/axios) | [官网](https://axios-http.com/)

### 开发依赖

- **Vite**: 现代构建工具。[GitHub](https://github.com/vitejs/vite) | [官网](https://vitejs.dev/)
- **TypeScript**: 静态类型检查工具。[官网](https://www.typescriptlang.org/)
- **ESLint**: 代码检查和格式化工具。[GitHub](https://github.com/eslint/eslint) | [官网](https://eslint.org/)

### 插件和工具

- **@vitejs/plugin-vue**: Vite 的 Vue 插件。
- **Sass**: CSS 预处理器，支持更复杂的样式编写。 [官网](https://sass-lang.com/)
- **@element-plus/icons-vue**: 提供 Element Plus 的图标支持。
- **@vueuse/core**: 常用的 Vue 实用功能集合。[GitHub](https://github.com/vueuse/vueuse) | [官网](https://vueuse.org/)
- **unplugin-vue-components**: 自动按需引入组件。[GitHub](https://github.com/antfu/unplugin-vue-components)
- **unplugin-auto-import**: 自动引入 API。[GitHub](https://github.com/antfu/unplugin-auto-import)
- **@antfu/eslint-config**: 风格指南和规则集合。[GitHub](https://github.com/antfu/eslint-config)

## 项目特点

- 使用现代化的工具和技术，确保代码质量和可维护性。
- 支持自动化引入和按需加载，提升开发效率。
- UI 组件库和状态管理结合，提供丰富且灵活的开发体验。

希望这个模板能为您的项目提供一个良好的起点！如果有任何问题或者建议，欢迎提出。
